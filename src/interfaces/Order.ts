export interface Order {
  order_id: number;
  order_date: string;
  customer: Customer;
  items: OrderItem[];
  discounts: Discount[];
  shipping_price: number;
}

export interface Customer {
  customer_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  shipping_address: {
    street: string;
    postcode: string;
    suburb: string;
    state: string;
  };
}

export interface OrderItem {
  quantity: number;
  unit_price: number;
  product: {
    product_id: number;
    title: string;
    subtitle?: string;
    image: string;
    thumbnail: string;
    category: string[];
    url: string;
    upc: string;
    gtin14?: string;
    created_at: string;
    brand: {
      id: number;
      name: string;
    };
  };
}

export interface Discount {
  type: string;
  value: number;
  priority: number;
}
