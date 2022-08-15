import { CSVLine } from './interfaces/CSV';
import { Order, OrderItem } from './interfaces/Order';

/**
 * Process a single Order record to prepare data for input into CSV
 *
 * Takes in full order details from jsonlines file, and processes
 * information to extract only fields required for CSV
 * @param order Order to process
 * @returns Collection of fields to put into CSV
 */
export const processSingleRecord = (order: Order): CSVLine => {
  if (!order.items) return;

  const { total_order_value, total_units_count } =
    calculateTotalValueAndUnits(order);
  if (total_order_value === 0) return;

  const order_id = order.order_id;
  const order_datetime = formatDateTime(order.order_date);
  const distinct_unit_count = countDistinctUnits(order.items);
  const average_unit_price = calculateAverageUnitPrice(
    total_order_value,
    total_units_count
  );
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
 * Calculates the average unit price in dollars for all
 * items in an order
 * @param totalPrice Total price of all units, in dollars
 * @param totalUnits Total amount of units
 * @returns Average unit price in dollars
 */
export const calculateAverageUnitPrice = (
  totalPrice: number,
  totalUnits: number
): number => {
  if (totalUnits === 0) return 0; // prevent divide by 0 errors

  return roundValue(totalPrice / totalUnits);
};

/**
 * Calculate the total value and unit count of an order.
 *
 * The total value is the sum of all units based on the quantity and unit
 * price of each distinct unit, minus any discounts for the order. It
 * does not include shipping prices.
 *
 * The total unit count is the sum of all distinct units throughout the order
 * @param order Order to calculate total for
 * @returns total_order_value: Order's total value in dollars
 * @returns total_units_count: Order's total unit count
 */
export const calculateTotalValueAndUnits = (
  order: Order
): { total_order_value: number; total_units_count: number } => {
  const { rawTotal, total_units_count } = order.items.reduce(
    ({ rawTotal, total_units_count }, item) => {
      return {
        rawTotal: rawTotal + item.quantity * item.unit_price,
        total_units_count: total_units_count + item.quantity
      };
    },
    { rawTotal: 0, total_units_count: 0 }
  );

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

  return { total_order_value: totalValue, total_units_count };
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
