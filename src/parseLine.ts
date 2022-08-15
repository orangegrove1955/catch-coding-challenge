import { Order } from './interfaces/Order';
import { Parser } from 'json2csv';
import { processSingleRecord } from './processRecord';
import { CSVLine } from './interfaces/CSV';

/**
 * Parses a single line from jsonlines file, and sends data for processing
 * and transformation to CSV format
 * @param jsonLine JSON object to parse from jsonlines file
 * @returns Extracted data formatted to CSV
 */
export const parseLine = (jsonLine: string): string => {
  try {
    if (jsonLine.length > 0) {
      const order: Order = JSON.parse(jsonLine);
      const response = processSingleRecord(order);
      return generateCSVOutput(response);
    }
    return;
  } catch (err) {
    console.error(err);
    return;
  }
};

/**
 * Generates CSV formatted output string to add to file from CSVLine typed input
 * @param csvLineInput CSVLine input to process into CSV formatted string
 * @returns CSV formatted string
 */
export const generateCSVOutput = (csvLineInput: CSVLine): string => {
  const parser = new Parser({ header: false });
  const csv = parser.parse(csvLineInput);
  return `${csv}\n`;
};
