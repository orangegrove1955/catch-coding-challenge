import { CSVLine } from './interfaces/CSV';
import { Order } from './interfaces/Order';

export const processSingleRecord = (line: Order): CSVLine => {
  const order_id = 0;
  const order_datetime = '';
  const total_order_value = 0;
  const average_unit_price = 0;
  const distinct_unit_count = 0;
  const total_units_count = 0;
  const customer_state = formatState(line.customer.shipping_address.state);

  return {
    order_id,
    order_datetime,
    total_order_value,
    average_unit_price,
    distinct_unit_count,
    total_units_count,
    customer_state
  };
};

/**
 * Format full text Australian state names into two / three character state codes
 * @param state Full text Australian state name
 * @returns two / three character state code
 */
export const formatState = (state: string): string => {
  switch (state.toLowerCase()) {
    case 'australian capitol territory':
      return 'ACT';
    case 'new south wales':
      return 'NSW';
    case 'northern territory':
      return 'NT';
    case 'queensland':
      return 'QLD';
    case 'tasmania':
      return 'TAS';
    case 'south australia':
      return 'SA';
    case 'victoria':
      return 'VIC';
    case 'western australia':
      return 'WA';
    default:
      return '';
  }
};
