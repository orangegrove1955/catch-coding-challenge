import {
  calculateAverageUnitPrice,
  calculateTotalValueAndUnits,
  countDistinctUnits,
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
  orderMultipleDiscountTypes,
  orderZeroValue
} from './__mocks__/mockOrders';

describe('Process records', () => {
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
    describe('calculateTotalValueAndUnits', () => {
      it('should return 0 for an order with no items', () => {
        const { total_order_value } = calculateTotalValueAndUnits(orderNoItems);
        expect(total_order_value).toBe(0);
      });

      it('should correctly calculate total value for an order without discounts', () => {
        const { total_order_value: basicOrderTotalValue } =
          calculateTotalValueAndUnits(basicOrder);
        expect(basicOrderTotalValue).toBe(359.78);

        const { total_order_value: orderDistinctUnitsTotalValue } =
          calculateTotalValueAndUnits(orderDistinctUnits);
        expect(orderDistinctUnitsTotalValue).toBe(2330.86);
      });

      it('should correctly calculate total value for an order with only dollar amount discounts', () => {
        const { total_order_value } = calculateTotalValueAndUnits(
          orderWithDollarDiscount
        );
        expect(total_order_value).toBe(271.94);
      });

      it('should correctly calculate total value for an order with only percentage discounts', () => {
        const { total_order_value } = calculateTotalValueAndUnits(
          orderWithPercentageDiscount
        );
        expect(total_order_value).toBe(8910.44);
      });

      it('should correctly calculate total value for an order with multiple discount types', () => {
        const { total_order_value } = calculateTotalValueAndUnits(
          orderMultipleDiscountTypes
        );
        expect(total_order_value).toBe(339.19);
      });
    });
  });

  describe('should process average_unit_price', () => {
    describe('calculateAverageUnitPrice', () => {
      it('should return 0 if totalUnits is 0', () => {
        expect(calculateAverageUnitPrice(1, 0)).toBe(0);
      });

      it('should correctly calculate average price to max 2 decimal places for non decimal values', () => {
        expect(calculateAverageUnitPrice(10, 2)).toBe(5);
        expect(calculateAverageUnitPrice(40, 3)).toBe(13.33);
        expect(calculateAverageUnitPrice(99, 7)).toBe(14.14);
      });

      it('should correctly calculate average price to max 2 decimal places for decimal values', () => {
        expect(calculateAverageUnitPrice(19.99, 2)).toBe(9.99);
        expect(calculateAverageUnitPrice(237.85, 7)).toBe(33.98);
        expect(calculateAverageUnitPrice(44.11, 5)).toBe(8.82);
      });
    });
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
        const { total_units_count: basicOrderUnitCount } =
          calculateTotalValueAndUnits(basicOrder);
        expect(basicOrderUnitCount).toBe(6);

        const { total_units_count: orderMultipleDiscountTypesUnitCount } =
          calculateTotalValueAndUnits(orderMultipleDiscountTypes);
        expect(orderMultipleDiscountTypesUnitCount).toBe(7);

        const { total_units_count: orderDistinctUnitsUnitCount } =
          calculateTotalValueAndUnits(orderDistinctUnits);
        expect(orderDistinctUnitsUnitCount).toBe(28);
      });

      it('should return 0 for an empty array', () => {
        const { total_units_count } = calculateTotalValueAndUnits(orderNoItems);
        expect(total_units_count).toBe(0);
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
      describe('should exclude 0 total order value records from summary', () => {
        it('for an order with no items', () => {
          const record = processSingleRecord(orderNoItems);
          expect(record).toBe(undefined);
        });

        it('for an order with total order value of 0', () => {
          const record = processSingleRecord(orderZeroValue);
          expect(record).toBe(undefined);
        });
      });

      it('should include all required fields for CSV lines correctly', () => {
        const record = processSingleRecord(basicOrder);

        expect(record).toHaveProperty('order_id');
        expect(record.order_id).toBe(1001);

        expect(record).toHaveProperty('order_datetime');
        expect(record.order_datetime).toBe('2019-03-08T12:13:29.000Z');

        expect(record).toHaveProperty('total_order_value');
        expect(record.total_order_value).toBe(359.78);

        expect(record).toHaveProperty('average_unit_price');
        expect(record.average_unit_price).toBe(59.96);

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
