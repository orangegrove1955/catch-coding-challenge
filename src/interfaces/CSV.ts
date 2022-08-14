export interface CSVLine {
  order_id: number;
  order_datetime: string;
  total_order_value: number;
  average_unit_price: number;
  distinct_unit_count: number;
  total_units_count: number;
  customer_state: string;
}
