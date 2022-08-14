import { CSVLine } from './interfaces/CSV';
import { Order, OrderItem } from './interfaces/Order';

export const processSingleRecord = (order: Order): CSVLine => {
  const order_id = order.order_id;
  const order_datetime = formatDateTime(order.order_date);
  const total_order_value = 0;
  const average_unit_price = 0;
  const distinct_unit_count = countDistinctUnits(order.items);
  const total_units_count = countTotalUnits(order.items);
  const customer_state = formatState(order.customer.shipping_address.state);

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
 * Round a value to max of 2 decimal points to be used for money
 * @param value Value to round
 * @returns 2 decimal point rounded version of value
 */
export const roundValue = (value: number): number => {
  return Math.round((value + Number.EPSILON) * 100) / 100;
};

/**
 * Calculate the total value of an order, not including shipping prices.
 * The total value is the sum of all units based on the quantity and unit
 * price of each distinct unit, minus any discounts for the order.
 * @param order Order to calculate total for
 * @returns Order's total value in dollars
 */
export const calculateTotalValue = (order: Order): number => {
  const rawTotal = order.items.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.unit_price;
  }, 0);

  let totalValue = roundValue(rawTotal);

  if (order.discounts) {
    for (const discount of order.discounts) {
      if (discount.type === 'DOLLAR') {
        totalValue -= discount.value;
      } else if (discount.type === 'PERCENTAGE') {
        totalValue = totalValue - totalValue * (discount.value / 100);
      }
      totalValue = roundValue(totalValue);
    }
  }

  return totalValue;
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
 * Count the number of total units in an order based on quantities
 * of each distinct unit in items array
 * @param items Array of items to count
 * @returns Number of total units in order
 */
export const countTotalUnits = (items: OrderItem[]): number => {
  const result = items.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  return result;
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
