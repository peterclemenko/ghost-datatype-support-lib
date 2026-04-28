import { expect } from 'chai';
import { ArdriveExport } from '../src/filetypes/ardrive-export';
import fs from 'fs';
import path from 'path';

describe('ArdriveExport', () => {
  it('parses example CSV file', () => {
    const csvPath = path.join(__dirname, 'testfiles', 'ardrive-export.csv');
    const csv = fs.readFileSync(csvPath, 'utf8');

    const rows = ArdriveExport.parseCSV(csv);

    expect(rows).to.have.lengthOf(2);

    const r1 = rows[0];
    expect(r1.fileId).to.contain('39a551f7');
    expect(r1.fileName).to.contain('New Text Document');
    expect(r1.fileSize).to.equal(10);
    expect(r1.directDownloadLink).to.contain('ardrive.net');
    expect(r1.status).to.equal('pending');

    const r2 = rows[1];
    expect(r2.fileId).to.contain('4ca1c067');
    expect(r2.fileSize).to.equal(9);
    expect(r2.status).to.equal('pending');
  });
});
