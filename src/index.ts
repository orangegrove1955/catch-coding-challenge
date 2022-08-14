import { processSingleRecord } from './processRecord';
import { basicOrder } from './test/__mocks__/mockOrders';

const main = async () => {
  const record = processSingleRecord(basicOrder);
  console.log(record);
};

main();
