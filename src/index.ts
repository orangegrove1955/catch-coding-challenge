import split from 'split';
import { finished } from 'stream';
import { promisify } from 'util';
import { createWriteStream } from 'fs';
import axios from 'axios';
import { parseLine } from './parseLine';

export const processFile = async (
  fileUrl: string,
  outputLocationPath: string
): Promise<void> => {
  const writer = createWriteStream(outputLocationPath);
  const finishedStream = promisify(finished);

  return axios({
    method: 'get',
    url: fileUrl,
    responseType: 'stream'
  }).then(async (response) => {
    writer.write(
      '"order_id","order_datetime","total_order_value","average_unit_price","distinct_unit_count","total_units_count","customer_state"\n'
    );
    response.data.pipe(split(parseLine)).pipe(writer);
    return await finishedStream(writer);
  });
};

processFile(
  'https://s3-ap-southeast-2.amazonaws.com/catch-code-challenge/challenge-1/orders.jsonl',
  'out.csv'
);
