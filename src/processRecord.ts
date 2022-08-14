import { Order } from './interfaces/Order';

export const processSingleRecord = (line: Order): string => {
  const stateCode = formatState(line.customer.shipping_address.state);

  return stateCode;
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
