import { CSVLine } from './interfaces/CSV';
import { Order, OrderItem } from './interfaces/Order';

export const processSingleRecord = (line: Order): CSVLine => {
  const order_id = line.order_id;
  const order_datetime = formatDateTime(line.order_date);
  const total_order_value = 0;
  const average_unit_price = 0;
  const distinct_unit_count = countDistinctUnits(line.items);
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
 * Count the number of distinct units in an items array. These distinct items are assumed
 * to be based on the number of separate units within the items array, with all items
 * grouped together correctly, no duplicates
 * @param items Array of items to count
 * @returns Number of distinct units in order
 */
export const countDistinctUnits = (items: OrderItem[]): number => {
  return items.length;
};

/**
 * Convert a date from a string value in any timezone into an ISO 8601 formatted string in UTC timezone
 * @param date String value of date to format
 * @returns ISO 8601 formatted date in UTC time
 */
export const formatDateTime = (date: string): string => {
  try {
    const rawDate = new Date(date);
    const formattedDate = rawDate.toISOString();
    return formattedDate;
  } catch {
    console.log('Not a valid date string, returning empty');
    return '';
  }
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
