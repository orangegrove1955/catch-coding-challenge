import { formatState } from '../processRecord';

describe('Process records', () => {
  it('should exclude 0 total order value records from summary', () => {
    expect(true).toBe(false);
  });

  it('should process order_id', () => {
    expect(true).toBe(false);
  });

  it('should process order_datetime', () => {
    expect(true).toBe(false);
  });

  it('should process total_order_value', () => {
    expect(true).toBe(false);
  });

  it('should process average_unit_price', () => {
    expect(true).toBe(false);
  });

  it('should process distinct_unit_count', () => {
    expect(true).toBe(false);
  });

  it('should process total_units_count', () => {
    expect(true).toBe(false);
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
});