import {
  calculateTotalValue,
  countDistinctUnits,
  countTotalUnits,
  formatDateTime,
  formatState,
  processSingleRecord,
  roundValue
} from '../processRecord';
import {
  basicOrder,
  orderDistinctUnits,
  orderNoItems,
  orderWithDollarDiscount,
  orderWithPercentageDiscount,
  orderMultipleDiscountTypes
} from './__mocks__/mockOrders';

describe('Process records', () => {
  it('should exclude 0 total order value records from summary', () => {
    expect(true).toBe(false);
  });

  it('should process order_id', () => {
    const record = processSingleRecord(basicOrder);
    expect(record).toHaveProperty('order_id');
    expect(record.order_id).toBe(1001);
  });

  describe('should process order_datetime', () => {
    describe('formatDateTime', () => {
      it('should format date to ISO 8601 correctly', () => {
        expect(formatDateTime('Fri, 08 Mar 2019 12:13:29 +0000')).toBe(
          '2019-03-08T12:13:29.000Z'
        );
      });

      it('should return empty string when input is not valid time value', () => {
        expect(() => formatDateTime('')).not.toThrowError();
        expect(formatDateTime('')).toBe('');
      });
    });
  });

  describe('should process total_order_value', () => {
    describe('calculateTotalValue', () => {
      it('should return 0 for an order with no items', () => {
        expect(calculateTotalValue(orderNoItems)).toBe(0);
      });

      it('should correctly calculate total value for an order without discounts', () => {
        expect(calculateTotalValue(basicOrder)).toBe(359.78);
        expect(calculateTotalValue(orderDistinctUnits)).toBe(2330.86);
      });

      it('should correctly calculate total value for an order with only dollar amount discounts', () => {
        expect(calculateTotalValue(orderWithDollarDiscount)).toBe(271.94);
      });

      it('should correctly calculate total value for an order with only percentage discounts', () => {
        expect(calculateTotalValue(orderWithPercentageDiscount)).toBe(8910.44);
      });

      it('should correctly calculate total value for an order with multiple discount types', () => {
        expect(calculateTotalValue(orderMultipleDiscountTypes)).toBe(339.19);
      });
    });
  });

  it('should process average_unit_price', () => {
    expect(true).toBe(false);
  });

  describe('should process distinct_unit_count', () => {
    describe('countDistinctUnits', () => {
      it('should return the correct count for an order items array', () => {
        expect(countDistinctUnits(basicOrder.items)).toBe(2);
        expect(countDistinctUnits(orderMultipleDiscountTypes.items)).toBe(2);
        expect(countDistinctUnits(orderDistinctUnits.items)).toBe(10);
      });

      it('should return 0 for an empty array', () => {
        expect(countDistinctUnits([])).toBe(0);
      });
    });
  });

  describe('should process total_units_count', () => {
    describe('countTotalUnits', () => {
      it('should return the correct count for an order items array', () => {
        expect(countTotalUnits(basicOrder.items)).toBe(6);
        expect(countTotalUnits(orderMultipleDiscountTypes.items)).toBe(7);
        expect(countTotalUnits(orderDistinctUnits.items)).toBe(28);
      });

      it('should return 0 for an empty array', () => {
        expect(countTotalUnits([])).toBe(0);
      });
    });
  });

  describe('should process customer_state', () => {
    describe('formatState', () => {
      it('should return ACT for Australian Capitol Territory cases', () => {
        expect(formatState('Australian Capitol Territory')).toBe('ACT');
        expect(formatState('AUSTRALIAN CAPITOL TERRITORY')).toBe('ACT');
        expect(formatState('australian capitol territory')).toBe('ACT');
        expect(formatState('AUSTRALIAN CAPitol territory')).toBe('ACT');
      });

      it('should return NSW for New South Wales cases', () => {
        expect(formatState('New South Wales')).toBe('NSW');
        expect(formatState('NEW SOUTH WALES')).toBe('NSW');
        expect(formatState('new south wales')).toBe('NSW');
        expect(formatState('NEW SOUth wales')).toBe('NSW');
      });

      it('should return NT for Northern Territory cases', () => {
        expect(formatState('Northern Territory')).toBe('NT');
        expect(formatState('NORTHERN TERRITORY')).toBe('NT');
        expect(formatState('northern territory')).toBe('NT');
        expect(formatState('NORTHERN territory')).toBe('NT');
      });

      it('should return QLD for Queensland cases', () => {
        expect(formatState('Queensland')).toBe('QLD');
        expect(formatState('QUEENSLAND')).toBe('QLD');
        expect(formatState('queensland')).toBe('QLD');
        expect(formatState('QUEENsland')).toBe('QLD');
      });

      it('should return SA for South Australia cases', () => {
        expect(formatState('South Australia')).toBe('SA');
        expect(formatState('SOUTH AUSTRALIA')).toBe('SA');
        expect(formatState('south australia')).toBe('SA');
        expect(formatState('SOUTH Australia')).toBe('SA');
      });

      it('should return TAS for Tasmania cases', () => {
        expect(formatState('Tasmania')).toBe('TAS');
        expect(formatState('TASMANIA')).toBe('TAS');
        expect(formatState('tasmania')).toBe('TAS');
        expect(formatState('TasManiA')).toBe('TAS');
      });

      it('should return VIC for Victoria cases', () => {
        expect(formatState('Victoria')).toBe('VIC');
        expect(formatState('VICTORIA')).toBe('VIC');
        expect(formatState('VICtoria')).toBe('VIC');
        expect(formatState('VIctoriA')).toBe('VIC');
        expect(formatState('victoria')).toBe('VIC');
      });

      it('should return WA for Western Australia cases', () => {
        expect(formatState('Western Australia')).toBe('WA');
        expect(formatState('western australia')).toBe('WA');
        expect(formatState('WESTERN Australia')).toBe('WA');
        expect(formatState('WESTERN AUSTRALIA')).toBe('WA');
        expect(formatState('WestERN AUstralia')).toBe('WA');
      });

      it('should return an empty string for unrecognised input', () => {
        expect(formatState('unknown state')).toBe('');
      });
    });
  });

  describe('should process an entire record successfully', () => {
    describe('processSingleRecord', () => {
      it('should include all required fields for CSV lines correctly', () => {
        const record = processSingleRecord(basicOrder);

        expect(record).toHaveProperty('order_id');
        expect(record.order_id).toBe(1001);

        expect(record).toHaveProperty('order_datetime');
        expect(record.order_datetime).toBe('2019-03-08T12:13:29.000Z');

        expect(record).toHaveProperty('total_order_value');
        expect(record.total_order_value).toBe(0);

        expect(record).toHaveProperty('average_unit_price');
        expect(record.average_unit_price).toBe(0);

        expect(record).toHaveProperty('distinct_unit_count');
        expect(record.distinct_unit_count).toBe(2);

        expect(record).toHaveProperty('total_units_count');
        expect(record.total_units_count).toBe(6);

        expect(record).toHaveProperty('customer_state');
        expect(record.customer_state).toBe('VIC');
      });
    });
  });

  describe('should include money values with only 2 decimal places', () => {
    describe('roundValue', () => {
      it('should correctly round a positive number to a maximum of 2 decimal places', () => {
        expect(roundValue(1.005)).toBe(1.01);
      });

      it('should correctly round a negative number to a maximum of 2 decimal places', () => {
        expect(roundValue(-2.01004)).toBe(-2.01);
      });
    });
  });
});
