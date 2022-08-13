import { Order } from '../../interfaces/Order';

export const basicOrder: Order = {
  order_id: 1001,
  order_date: 'Fri, 08 Mar 2019 12:13:29 +0000',
  customer: {
    customer_id: 7970214,
    first_name: 'Edwardo',
    last_name: 'Rowe',
    email: 'edwardo.rowe@example.org',
    phone: '(08) 7167 1968',
    shipping_address: {
      street: 'FLAT 2 896 NEPEAN HWY',
      postcode: '3931',
      suburb: 'MORNINGTON',
      state: 'VICTORIA'
    }
  },
  items: [
    {
      quantity: 4,
      unit_price: 39.95,
      product: {
        product_id: 3793908,
        title: 'Cellsafe Radi Chip Universal',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0018/18663/5c986e257eb06332953424.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0018/18663/5c986e257eb06332953424_w200.jpg',
        category: [
          'ELECTRONICS',
          'PHONES',
          'MOBILE PHONE ACCESSORIES',
          'MOBILE PHONE CASE'
        ],
        url: 'https://www.catch.com.au/product/cellsafe-radi-chip-universal-3793908',
        upc: '680569511577',
        gtin14: null,
        created_at: '2019-03-12 17:44:17',
        brand: {
          id: 4757,
          name: 'Cellsafe'
        }
      }
    },
    {
      quantity: 2,
      unit_price: 99.99,
      product: {
        product_id: 3879592,
        title: "Pulsar Men's 41mm Day Stainless Steel Watch - Gold",
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0019/19430/5cb846fcd383e747048710.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0019/19430/5cb846fcd383e747048710_w200.jpg',
        category: [
          'FASHION ACCESSORIES',
          'WATCHES',
          'WATCHES - MENS',
          'STEEL BAND WATCH'
        ],
        url: 'https://www.catch.com.au/product/pulsar-mens-41mm-day-stainless-steel-watch-gold-3879592',
        upc: '4894138037443',
        gtin14: null,
        created_at: '2019-03-28 15:01:12',
        brand: {
          id: 3024,
          name: 'Pulsar'
        }
      }
    }
  ],
  discounts: [],
  shipping_price: 6.99
};

export const orderUniqueUnits: Order = {
  order_id: 1006,
  order_date: 'Fri, 08 Mar 2019 20:22:51 +0000',
  customer: {
    customer_id: 1294450,
    first_name: 'Luciano',
    last_name: 'Fadel',
    email: 'luciano.fadel@example.org',
    phone: '(02) 5482 0345',
    shipping_address: {
      street: '6 TOOTHILL ST',
      postcode: '2049',
      suburb: 'LEWISHAM',
      state: 'NEW SOUTH WALES'
    }
  },
  items: [
    {
      quantity: 1,
      unit_price: 9.99,
      product: {
        product_id: 3926778,
        title: "AFL Adult's Collingwood Magpies Swimming Goggles - Black/White",
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0019/19830/5cc7e41f79e48186608165.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0019/19830/5cc7e41f79e48186608165_w200.jpg',
        category: [
          'SPORTS AND FITNESS',
          'EQUIPMENT',
          'SWIMMING',
          'SWIMMING GOGGLES'
        ],
        url: 'https://www.catch.com.au/product/afl-adults-collingwood-magpies-swimming-goggles-black-white-3926778',
        upc: '9313513015906',
        gtin14: null,
        created_at: '2019-04-09 15:20:13',
        brand: {
          id: 3690,
          name: 'AFL'
        }
      }
    },
    {
      quantity: 1,
      unit_price: 34.99,
      product: {
        product_id: 3570184,
        title: 'Thule Gauntlet 3.0 For 15-Inch MacBook Pro Sleeve - Potion',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0017/17355/5c5bf99941e45781400498.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0017/17355/5c5bf99941e45781400498_w200.jpg',
        category: [
          'ELECTRONICS',
          'COMPUTERS',
          'COMPUTERS',
          'COMPUTER ACCESSORIES'
        ],
        url: 'https://www.catch.com.au/product/thule-gauntlet-3-0-for-15-inch-macbook-pro-sleeve-potion-3570184',
        upc: '85854236980',
        gtin14: null,
        created_at: '2019-01-24 16:18:44',
        brand: {
          id: 4870,
          name: 'Thule'
        }
      }
    },
    {
      quantity: 1,
      unit_price: 139,
      product: {
        product_id: 3504383,
        title: "ASICS Women's GEL-DS Trainer 23 Shoe - Deep Aqua/Lagoon",
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0016/16733/5c424786c3eac799511863.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0016/16733/5c424786c3eac799511863_w200.jpg',
        category: [
          'SPORTS AND FITNESS',
          'FOOTWEAR - WOMENS',
          'RUNNING',
          'RUNNING SHOES'
        ],
        url: 'https://www.catch.com.au/product/asics-womens-gel-ds-trainer-23-shoe-deep-aqua-lagoon-3504383',
        upc: '4549957610352',
        gtin14: null,
        created_at: '2019-01-14 10:28:19',
        brand: {
          id: 2808,
          name: 'ASICS'
        }
      }
    },
    {
      quantity: 2,
      unit_price: 6.5,
      product: {
        product_id: 3965503,
        title: 'Hercules Multipurpose Microfibre Cloths 10-Pack',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0019/19977/5ccfefbbac8ff713588002.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0019/19977/5ccfefbbac8ff713588002_w200.jpg',
        category: [
          'HOUSEHOLD',
          'GENERAL CLEANING',
          'FURNITURE FABRIC AND METAL',
          'FURNITURE CLEANERS'
        ],
        url: 'https://www.catch.com.au/product/hercules-multipurpose-microfibre-cloths-10-pack-3965503',
        upc: '9322596009146',
        gtin14: null,
        created_at: '2019-04-17 15:19:06',
        brand: {
          id: 2822,
          name: 'Hercules'
        }
      }
    },
    {
      quantity: 1,
      unit_price: 27.99,
      product: {
        product_id: 3466695,
        title: 'Matrex i6 Ergonomic Laptop Smartstand - Black',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0017/17021/5c502a2c95eb4549245257.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0017/17021/5c502a2c95eb4549245257_w200.jpg',
        category: [
          'STATIONERY AND OFFICE',
          'STATIONERY AND OFFICE SUPPLIES',
          'OFFICE EQUIPMENT',
          'ERGONOMICS'
        ],
        url: 'https://www.catch.com.au/product/matrex-i6-ergonomic-laptop-smartstand-black-3466695',
        upc: '9340526001848',
        gtin14: null,
        created_at: '2019-01-03 16:24:30',
        brand: {
          id: 8489,
          name: 'Matrex'
        }
      }
    },
    {
      quantity: 6,
      unit_price: 139,
      product: {
        product_id: 3550983,
        title: 'B&O Beoplay P2 Portable Bluetooth Speaker - Teal',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0016/16925/5c9b3b79ba6ba116297068.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0016/16925/5c9b3b79ba6ba116297068_w200.jpg',
        category: [
          'ELECTRONICS',
          'AUDIO',
          'AUDIO PLAYERS & RECORDERS',
          'AUDIO BLUETOOTH SPEAKERS'
        ],
        url: 'https://www.catch.com.au/product/b-o-beoplay-p2-portable-bluetooth-speaker-teal-3550983',
        upc: '5705260072310',
        gtin14: null,
        created_at: '2019-01-21 11:44:40',
        brand: {
          id: 6712,
          name: 'Bang & Olufsen'
        }
      }
    },
    {
      quantity: 5,
      unit_price: 7.99,
      product: {
        product_id: 3773509,
        title:
          'Adidas 750mL Performance Water Bottle - Legend Marine/Shock Cyan ',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0018/18295/5c883af61b921932784681.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0018/18295/5c883af61b921932784681_w200.jpg',
        category: [
          'SPORTS AND FITNESS',
          'EQUIPMENT',
          'GYM - TRAINING',
          'DRINK BOTTLE'
        ],
        url: 'https://www.catch.com.au/product/adidas-750ml-performance-water-bottle-legend-marine-shock-cyan-3773509',
        upc: '4060515490464',
        gtin14: null,
        created_at: '2019-03-08 10:28:47',
        brand: {
          id: 2837,
          name: 'Adidas'
        }
      }
    },
    {
      quantity: 6,
      unit_price: 197,
      product: {
        product_id: 3711818,
        title: 'Parrot Skycontroller 2 & Cockpitglasses FPV Pack',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0017/17967/5c77c29540447059270745.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0017/17967/5c77c29540447059270745_w200.jpg',
        category: [
          'ELECTRONICS',
          'CAMERA / CAMCORDER',
          'VIDEO CAMERAS',
          'DRONES'
        ],
        url: 'https://www.catch.com.au/product/parrot-skycontroller-2-cockpitglasses-fpv-pack-3711818',
        upc: '3520410041532',
        gtin14: null,
        created_at: '2019-02-18 12:49:37',
        brand: {
          id: 12763,
          name: 'Parrot'
        }
      }
    },
    {
      quantity: 2,
      unit_price: 10,
      product: {
        product_id: 3803082,
        title: 'Huggies Thick Baby Wipes Fragrance Free 200-Pack',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0019/19321/5cb6e0dc05cbc530629008.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0019/19321/5cb6e0dc05cbc530629008_w200.jpg',
        category: [
          'BABY',
          'NAPPIES AND TOILET TRAINING',
          'NAPPY ACCESSORIES',
          'WIPES'
        ],
        url: 'https://www.catch.com.au/product/huggies-thick-baby-wipes-fragrance-free-200-pack-3803082',
        upc: '9310088013061',
        gtin14: null,
        created_at: '2019-03-14 15:21:13',
        brand: {
          id: 3270,
          name: 'Huggies'
        }
      }
    },
    {
      quantity: 3,
      unit_price: 9.98,
      product: {
        product_id: 3830542,
        title: '2 x MOR Vanilla Dreams Hand Cream 50mL',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0018/18718/5c9af918078f6538077894.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0018/18718/5c9af918078f6538077894_w200.jpg',
        category: ['BEAUTY', 'BATH & BODY', 'HAND', 'HAND MOISURISER'],
        url: 'https://www.catch.com.au/product/2-x-mor-vanilla-dreams-hand-cream-50ml-3830542',
        upc: null,
        gtin14: null,
        created_at: '2019-03-21 12:59:42',
        brand: {
          id: 7112,
          name: 'MOR'
        }
      }
    }
  ],
  discounts: [],
  shipping_price: 15.99
};

export const orderWithDiscounts: Order = {
  order_id: 1033,
  order_date: 'Sun, 10 Mar 2019 06:30:02 +0000',
  customer: {
    customer_id: 7652056,
    first_name: 'Electa',
    last_name: 'Okuneva',
    email: 'electa.okuneva@example.com',
    phone: '4471.8531',
    shipping_address: {
      street: '39 WILLIAMSON AVENUE',
      postcode: '3041',
      suburb: 'STRATHMORE',
      state: 'VICTORIA'
    }
  },
  items: [
    {
      quantity: 6,
      unit_price: 59.95,
      product: {
        product_id: 3680410,
        title: "JETS Women's E/F Cup Underwire One Piece - Teal",
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0018/18211/5c820ebd01823684832373.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0018/18211/5c820ebd01823684832373_w200.jpg',
        category: [
          'FASHION APPAREL',
          'APPAREL - WOMENS',
          'SWIMWEAR',
          'ONE PIECE'
        ],
        url: 'https://www.catch.com.au/product/jets-womens-e-f-cup-underwire-one-piece-teal-3680410',
        upc: '9326659633583',
        gtin14: null,
        created_at: '2019-02-07 16:54:39',
        brand: {
          id: 197636,
          name: 'Jets'
        }
      }
    },
    {
      quantity: 1,
      unit_price: 14.99,
      product: {
        product_id: 3823397,
        title: 'HIIT: High Intensity Intercourse Training Book',
        subtitle: null,
        image:
          'https://s.catch.com.au/images/product/0019/19294/5cb50f537178e963271063.jpg',
        thumbnail:
          'https://s.catch.com.au/images/product/0019/19294/5cb50f537178e963271063_w200.jpg',
        category: ['ADULT', 'ACCESSORIES', 'BOOKS', 'BOOKS ADULT'],
        url: 'https://www.catch.com.au/product/hiit-high-intensity-intercourse-training-book-3823397',
        upc: '9781529102819',
        gtin14: null,
        created_at: '2019-03-20 12:59:14',
        brand: {
          id: 4085,
          name: 'Penguin'
        }
      }
    }
  ],
  discounts: [
    {
      type: 'DOLLAR',
      value: 6,
      priority: 1
    },
    {
      type: 'PERCENTAGE',
      value: 8,
      priority: 2
    }
  ],
  shipping_price: 10.99
};
