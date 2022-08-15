import { generateCSVOutput, parseLine } from '../parseLine';
import { mockCSVLine } from './__mocks__/mockCSVLine';
import { mockJSONline } from './__mocks__/mockJSONLine';

describe('parseLine', () => {
  it('should correctly produce a CSV line output for a valid JSON object', () => {
    expect(parseLine(mockJSONline)).toBe(
      '1001,"2019-03-08T12:13:29.000Z",359.78,59.96,2,6,"VIC"\n'
    );
  });

  it('should silently fail if jsonline length is 0', () => {
    expect(() => parseLine('')).not.toThrowError();
    expect(parseLine('')).toBe(undefined);
  });
});

describe('generateCSVOutput', () => {
  it('should correctly generate output for a valid CSVLine input', () => {
    expect(generateCSVOutput(mockCSVLine)).toBe(
      '1001,"2019-03-08T12:13:29.000Z",359.78,59.96,2,6,"VIC"\n'
    );
  });
});
