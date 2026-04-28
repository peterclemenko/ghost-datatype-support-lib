import fs from 'fs';

/**
 * Row record for an Ardrive export CSV line.
 */
export type ArdriveExportRow = {
  /** File Id (UUID or identifier) */
  fileId: string;
  /** Original file name */
  fileName: string;
  /** Parent folder id */
  parentFolderId: string;
  /** Parent folder name */
  parentFolderName: string;
  /** Data transaction id */
  dataTransactionId: string;
  /** Metadata transaction id */
  metadataTransactionId: string;
  /** File size in bytes when available, otherwise null */
  fileSize: number | null;
  /** Date created as ISO string when parseable, otherwise null */
  dateCreated: string | null;
  /** Last modified as ISO string when parseable, otherwise null */
  lastModified: string | null;
  /** Direct download link */
  directDownloadLink: string;
  /** Status string from the CSV */
  status: string;
};

/**
 * Minimal robust CSV parser for the ardrive-export schema.
 * Handles quoted fields and escaped quotes ("").
 */
export class ArdriveExport {
  /** Expected header columns for the CSV (informational) */
  static HEADER = [
    'File Id',
    'File Name',
    'Parent Folder ID',
    'Parent Folder Name',
    'Data Transaction ID',
    'Metadata Transaction ID',
    'File Size',
    'Date Created',
    'Last Modified',
    'Direct Download Link',
    'Status',
  ];

  /**
   * Parse CSV text into rows that conform to `ArdriveExportRow`.
   * - Tolerant of missing columns (pads with empty strings)
   * - Preserves fields with embedded newlines inside quotes
   * @param csvText Raw CSV text
   */
  static parseCSV(csvText: string): ArdriveExportRow[] {
    const lines: string[] = splitLines(csvText);
    if (lines.length === 0) return [];

    // Remove any leading/trailing empty lines
    const rows = lines.map(l => l.trim()).filter(l => l.length > 0);
    if (rows.length === 0) return [];

    // First row is header — accept it but don't require exact matching
    const header = parseCsvLine(rows[0]);

    const results: ArdriveExportRow[] = [];
    for (let i = 1; i < rows.length; i++) {
      const fields = parseCsvLine(rows[i]);
      if (fields.length === 0) continue;

      // Allow variable-length rows: pad missing with empty string
      const padded = fields.concat(
        Array(Math.max(0, ArdriveExport.HEADER.length - fields.length)).fill('')
      );

      const row: ArdriveExportRow = {
        fileId: padded[0] || '',
        fileName: padded[1] || '',
        parentFolderId: padded[2] || '',
        parentFolderName: padded[3] || '',
        dataTransactionId: padded[4] || '',
        metadataTransactionId: padded[5] || '',
        fileSize: parseNumberOrNull(padded[6]),
        dateCreated: parseDateOrNull(padded[7]),
        lastModified: parseDateOrNull(padded[8]),
        directDownloadLink: padded[9] || '',
        status: padded[10] || '',
      };

      results.push(row);
    }

    return results;
  }

  /**
   * Read CSV from disk and parse into rows.
   * @param path File system path to CSV
   * @param encoding File encoding (defaults to 'utf8')
   */
  static async fromFile(
    path: string,
    encoding = 'utf8'
  ): Promise<ArdriveExportRow[]> {
    const txt = await fs.promises.readFile(path, { encoding });
    return ArdriveExport.parseCSV(String(txt));
  }
}

/**
 * Split raw CSV text into logical lines while preserving newlines inside quoted fields.
 * @internal
 */
function splitLines(text: string): string[] {
  // Preserve quoted newlines by splitting on CRLF/CR/LF then rejoining lines if quotes unbalanced.
  const raw = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const parts = raw.split('\n');
  const out: string[] = [];
  let buffer = '';
  let inQuotes = false;
  for (let i = 0; i < parts.length; i++) {
    const line = parts[i];
    if (buffer.length) buffer += '\n' + line;
    else buffer = line;

    // Count quotes to detect balanced state (ignoring escaped "")
    const quotes = (buffer.match(/"/g) || []).length;
    // If odd number of quotes, we are inside a quoted field
    inQuotes = quotes % 2 === 1;
    if (!inQuotes) {
      out.push(buffer);
      buffer = '';
    }
  }
  if (buffer.length) out.push(buffer);
  return out;
}

/**
 * Parse a CSV line into fields. Handles quoted fields and escaped quotes.
 * @internal
 */
function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
        // Escaped quote
        field += '"';
        i++; // skip next
        continue;
      }
      inQuotes = !inQuotes;
      continue;
    }
    if (ch === ',' && !inQuotes) {
      fields.push(field);
      field = '';
      continue;
    }
    field += ch;
  }
  fields.push(field);
  return fields.map(f => f.trim());
}

/** @internal */
function parseNumberOrNull(s: string): number | null {
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

/** @internal */
function parseDateOrNull(s: string): string | null {
  const t = Date.parse(s);
  return Number.isFinite(t) ? new Date(t).toISOString() : null;
}
