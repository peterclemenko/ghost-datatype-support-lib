import { myPackage, ArdriveExport } from '../src';

describe('index', () => {
  describe('myPackage', () => {
    it('should return a string containing the message', () => {
      const message = 'Hello';

      const result = myPackage(message);

      expect(result).toMatch(message);
    });
  });

  describe('ArdriveExport', () => {
    it('parses example CSV rows', () => {
      const csv = `File Id,File Name,Parent Folder ID,Parent Folder Name,Data Transaction ID,Metadata Transaction ID,File Size,Date Created,Last Modified,Direct Download Link,Status
39a551f7-ec03-4b02-afb4-71f32eb22cf8,New Text Document (2).txt,2c319f72-2aa7-49d3-a8a3-047d09bc59a2,export-test,7yb4bnn8keLA7-0LWW02yyoJ61Krkuttx39FEp74E9o,qxF0611nmzxgoYmb8ex4wEzlEKIk_N5UVRRc4bRKqKY,10,2026-04-28 08:50:42.000,2026-04-28 08:50:15.000,https://ardrive.net/7yb4bnn8keLA7-0LWW02yyoJ61Krkuttx39FEp74E9o,pending`;

      const rows = ArdriveExport.parseCSV(csv);

      expect(rows.length).toBe(1);
      const r = rows[0];
      expect(r.fileId).toContain('39a551f7');
      expect(r.fileName).toContain('New Text Document');
      expect(r.fileSize).toBe(10);
      expect(r.directDownloadLink).toContain('ardrive.net');
      expect(r.status).toBe('pending');
    });
  });
});
