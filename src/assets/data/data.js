import a_001 from '../images/products/a_001.webp'
import a_002 from '../images/products/a_002.webp'
import a_003 from '../images/products/a_003.webp'
import a_004 from '../images/products/a_004.webp'
import a_005 from '../images/products/a_005.webp'
import a_006 from '../images/products/a_006.webp'
import a_007 from '../images/products/a_007.webp'
import a_008 from '../images/products/a_008.webp'
import a_009 from '../images/products/a_009.webp'
import a_010 from '../images/products/a_010.webp'
import a_011 from '../images/products/a_011.webp'
import a_012 from '../images/products/a_012.webp'
import a_013 from '../images/products/a_013.webp'
import a_014 from '../images/products/a_014.webp'
import a_015 from '../images/products/a_015.webp'
import a_016 from '../images/products/a_016.webp'
import a_017 from '../images/products/a_017.webp'
import a_018 from '../images/products/a_018.webp'


export const dummyProducts = [
    {
      id: "product-001",
      name: "Ultrabook Pro 15",
      description: "A high-performance ultrabook with a 15-inch Retina display and 16GB RAM.",
      price: 1299.99,
      discount: null,
      category: "Computer",
      brand: "TechCorp",
      stock: {
        quantity: 30,
        availability: "in stock"
      },
      images: [
        {
          url: a_001,
          altText: "Ultrabook Pro 15",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.7,
        reviews: [],
        totalReviews: 150
      },
      sku: "COMP001",
      weight: 1.8,
      tags: ["ultrabook", "laptop", "techcorp"],
      createdAt: "2024-07-15T10:00:00Z",
      updatedAt: "2024-08-29T14:23:00Z",
      relatedProducts: ["product-002", "product-003"],
      status: "active"
    },
    {
      id: "product-002",
      name: "Gaming Laptop X",
      description: "A powerful gaming laptop with a 17-inch display and RTX 3080 GPU.",
      price: 1999.99,
      discount: null,
      category: "Gaming",
      brand: "GameMaster",
      stock: {
        quantity: 20,
        availability: "in stock"
      },
      images: [
        {
          url: a_002,
          altText: "Gaming Laptop X",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.8,
        reviews: [],
        totalReviews: 120
      },
      sku: "GAM001",
      weight: 2.5,
      tags: ["gaming", "laptop", "gamemaster"],
      createdAt: "2024-07-10T10:00:00Z",
      updatedAt: "2024-08-28T14:23:00Z",
      relatedProducts: ["product-001", "product-003"],
      status: "active"
    },
    {
      id: "product-003",
      name: "Smartphone Max 12",
      description: "The latest flagship smartphone with a 6.7-inch OLED display and 128GB storage.",
      price: 999.99,
      discount: null,
      category: "Smartphone",
      brand: "MobileTech",
      stock: {
        quantity: 50,
        availability: "in stock"
      },
      images: [
        {
          url: a_003,
          altText: "Smartphone Max 12",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.6,
        reviews: [],
        totalReviews: 200
      },
      sku: "SMRT001",
      weight: 0.2,
      tags: ["smartphone", "mobiletech"],
      createdAt: "2024-08-01T10:00:00Z",
      updatedAt: "2024-08-29T14:23:00Z",
      relatedProducts: ["product-004", "product-005"],
      status: "active"
    },
    {
      id: "product-004",
      name: "Wireless Noise Cancelling Headphones",
      description: "Premium over-ear headphones with active noise cancelling and 30-hour battery life.",
      price: 299.99,
      discount: 10.0,
      category: "Headphones",
      brand: "SoundWave",
      stock: {
        quantity: 40,
        availability: "in stock"
      },
      images: [
        {
          url: a_004,
          altText: "Noise Cancelling Headphones",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.9,
        reviews: [],
        totalReviews: 300
      },
      sku: "HPHN001",
      weight: 0.5,
      tags: ["headphones", "soundwave"],
      createdAt: "2024-07-20T10:00:00Z",
      updatedAt: "2024-08-28T14:23:00Z",
      relatedProducts: ["product-005", "product-006"],
      status: "active"
    },
    {
      id: "product-005",
      name: "4K Ultra HD Camera",
      description: "A compact 4K camera with a 20MP sensor and 5x optical zoom.",
      price: 499.99,
      discount: 15.00,
      category: "Camera",
      brand: "PhotoPro",
      stock: {
        quantity: 25,
        availability: "in stock"
      },
      images: [
        {
          url: a_005,
          altText: "4K Ultra HD Camera",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.7,
        reviews: [],
        totalReviews: 180
      },
      sku: "CAM001",
      weight: 0.4,
      tags: ["camera", "photopro", "4k"],
      createdAt: "2024-06-15T10:00:00Z",
      updatedAt: "2024-08-27T14:23:00Z",
      relatedProducts: ["product-006", "product-007"],
      status: "active"
    },
    {
      id: "product-006",
      name: "Smartwatch S7",
      description: "Advanced smartwatch with health monitoring and GPS tracking.",
      price: 349.99,
      discount: 30.00,
      category: "Watch",
      brand: "WearableTech",
      stock: {
        quantity: 60,
        availability: "in stock"
      },
      images: [
        {
          url: a_006,
          altText: "Smartwatch S7",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.5,
        reviews: [],
        totalReviews: 250
      },
      sku: "WCH001",
      weight: 0.1,
      tags: ["smartwatch", "wearabletech"],
      createdAt: "2024-08-05T10:00:00Z",
      updatedAt: "2024-08-29T14:23:00Z",
      relatedProducts: ["product-007", "product-008"],
      status: "active"
    },
    {
      id: "product-007",
      name: "Gaming Console Z",
      description: "Next-gen gaming console with 8K support and 1TB storage.",
      price: 499.99,
      discount: null,
      category: "Gaming",
      brand: "GameWorld",
      stock: {
        quantity: 35,
        availability: "in stock"
      },
      images: [
        {
          url: a_007,
          altText: "Gaming Console Z",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.8,
        reviews: [],
        totalReviews: 220
      },
      sku: "GAM002",
      weight: 3.5,
      tags: ["gaming", "console", "gameworld"],
      createdAt: "2024-08-10T10:00:00Z",
      updatedAt: "2024-08-28T14:23:00Z",
      relatedProducts: ["product-008", "product-009"],
      status: "active"
    },
    {
      id: "product-008",
      name: "Wireless Earbuds Pro",
      description: "True wireless earbuds with noise cancellation and 24-hour battery life.",
      price: 149.99,
      discount: 15.00,
      category: "Headphones",
      brand: "SoundWave",
      stock: {
        quantity: 45,
        availability: "in stock"
      },
      images: [
        {
          url: a_008,
          altText: "Wireless Earbuds Pro",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.6,
        reviews: [],
        totalReviews: 320
      },
      sku: "HPHN002",
      weight: 0.05,
      tags: ["earbuds", "wireless", "soundwave"],
      createdAt: "2024-08-03T10:00:00Z",
      updatedAt: "2024-08-27T14:23:00Z",
      relatedProducts: ["product-009", "product-010"],
      status: "active"
    },
    {
      id: "product-009",
      name: "Action Camera 360",
      description: "Waterproof 360-degree action camera with 4K video and 12MP photos.",
      price: 399.99,
      discount: 20.00,
      category: "Camera",
      brand: "AdventureCam",
      stock: {
        quantity: 25,
        availability: "in stock"
      },
      images: [
        {
          url: a_009,
          altText: "Action Camera 360",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.7,
        reviews: [],
        totalReviews: 140
      },
      sku: "CAM002",
      weight: 0.3,
      tags: ["camera", "action", "adventurecam"],
      createdAt: "2024-07-25T10:00:00Z",
      updatedAt: "2024-08-27T14:23:00Z",
      relatedProducts: ["product-010", "product-011"],
      status: "active"
    },
    {
      id: "product-010",
      name: "Smartphone Lite 10",
      description: "Affordable smartphone with a 6.1-inch display and 64GB storage.",
      price: 399.99,
      discount: null,
      category: "Smartphone",
      brand: "MobileTech",
      stock: {
        quantity: 55,
        availability: "in stock"
      },
      images: [
        {
          url: a_010,
          altText: "Smartphone Lite 10",
          isPrimary: true
        }
      ],
      ratings: {
        average: 4.5,
        reviews: [],
        totalReviews: 180
      },
      sku: "SMRT002",
      weight: 0.18,
      tags: ["smartphone", "mobiletech", "lite"],
      createdAt: "2024-08-01T10:00:00Z",
      updatedAt: "2024-08-29T14:23:00Z",
      relatedProducts: ["product-011", "product-012"],
      status: "active"
    },
    {
        id: "product-011",
        name: "Tablet Pro 11",
        description: "11-inch tablet with 256GB storage, 12MP camera, and stylus support.",
        price: 899.99,
        discount: 12.00,
        category: "Tablet",
        brand: "TechTab",
        stock: {
          quantity: 45,
          availability: "in stock"
        },
        images: [
          {
            url: a_011,
            altText: "Tablet Pro 11",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.7,
          reviews: [],
          totalReviews: 170
        },
        sku: "TAB001",
        weight: 0.6,
        tags: ["tablet", "techtab", "pro"],
        createdAt: "2024-08-15T10:00:00Z",
        updatedAt: "2024-08-30T14:23:00Z",
        relatedProducts: ["product-012", "product-013"],
        status: "active"
      },
      {
        id: "product-012",
        name: "Bluetooth Speaker Max",
        description: "Portable Bluetooth speaker with 360-degree sound and 20-hour battery life.",
        price: 149.99,
        discount: 15.00,
        category: "Speaker",
        brand: "AudioMaster",
        stock: {
          quantity: 60,
          availability: "in stock"
        },
        images: [
          {
            url: a_012,
            altText: "Bluetooth Speaker Max",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.8,
          reviews: [],
          totalReviews: 210
        },
        sku: "SPKR001",
        weight: 0.7,
        tags: ["speaker", "bluetooth", "audiomaster"],
        createdAt: "2024-07-18T10:00:00Z",
        updatedAt: "2024-08-29T14:23:00Z",
        relatedProducts: ["product-013", "product-014"],
        status: "active"
      },
      {
        id: "product-013",
        name: "Smart Thermostat Pro",
        description: "Smart thermostat with remote control and energy-saving features.",
        price: 249.99,
        discount: 15.00,
        category: "Home Automation",
        brand: "EcoHome",
        stock: {
          quantity: 35,
          availability: "in stock"
        },
        images: [
          {
            url: a_013,
            altText: "Smart Thermostat Pro",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.6,
          reviews: [],
          totalReviews: 130
        },
        sku: "HOME001",
        weight: 0.4,
        tags: ["thermostat", "smarthome", "ecohome"],
        createdAt: "2024-07-25T10:00:00Z",
        updatedAt: "2024-08-28T14:23:00Z",
        relatedProducts: ["product-014", "product-015"],
        status: "active"
      },
      {
        id: "product-014",
        name: "Electric Kettle FastBoil",
        description: "1.7L electric kettle with fast-boil technology and auto shut-off.",
        price: 49.99,
        discount: null,
        category: "Kitchen",
        brand: "HomeChef",
        stock: {
          quantity: 80,
          availability: "in stock"
        },
        images: [
          {
            url: a_014,
            altText: "Electric Kettle FastBoil",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.5,
          reviews: [],
          totalReviews: 90
        },
        sku: "KITCH001",
        weight: 1.0,
        tags: ["kitchen", "kettle", "homechef"],
        createdAt: "2024-07-12T10:00:00Z",
        updatedAt: "2024-08-28T14:23:00Z",
        relatedProducts: ["product-015", "product-016"],
        status: "active"
      },
      {
        id: "product-015",
        name: "Fitness Tracker Pro",
        description: "Advanced fitness tracker with heart rate monitoring and GPS.",
        price: 199.99,
        discount: 25.00,
        category: "Wearable",
        brand: "FitLife",
        stock: {
          quantity: 70,
          availability: "in stock"
        },
        images: [
          {
            url: a_015,
            altText: "Fitness Tracker Pro",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.7,
          reviews: [],
          totalReviews: 230
        },
        sku: "FIT001",
        weight: 0.1,
        tags: ["fitness", "wearable", "fitlife"],
        createdAt: "2024-08-02T10:00:00Z",
        updatedAt: "2024-08-29T14:23:00Z",
        relatedProducts: ["product-016", "product-017"],
        status: "active"
      },
      {
        id: "product-016",
        name: "Robot Vacuum Cleaner",
        description: "Smart robot vacuum cleaner with Wi-Fi connectivity and auto-charging.",
        price: 399.99,
        discount: 20.00,
        category: "Home Appliance",
        brand: "CleanBot",
        stock: {
          quantity: 30,
          availability: "in stock"
        },
        images: [
          {
            url: a_016,
            altText: "Robot Vacuum Cleaner",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.8,
          reviews: [],
          totalReviews: 150
        },
        sku: "HOME002",
        weight: 3.0,
        tags: ["vacuum", "robot", "cleanbot"],
        createdAt: "2024-07-28T10:00:00Z",
        updatedAt: "2024-08-30T14:23:00Z",
        relatedProducts: ["product-017", "product-018"],
        status: "active"
      },
      {
        id: "product-017",
        name: "4K UHD Smart TV 55",
        description: "55-inch 4K UHD Smart TV with HDR and voice control.",
        price: 799.99,
        discount: null,
        category: "Television",
        brand: "ViewMax",
        stock: {
          quantity: 25,
          availability: "in stock"
        },
        images: [
          {
            url: a_017,
            altText: "4K UHD Smart TV 55",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.9,
          reviews: [],
          totalReviews: 200
        },
        sku: "TV001",
        weight: 12.0,
        tags: ["tv", "smarttv", "viewmax"],
        createdAt: "2024-08-07T10:00:00Z",
        updatedAt: "2024-08-30T14:23:00Z",
        relatedProducts: ["product-018", "product-019"],
        status: "active"
      },
      {
        id: "product-018",
        name: "Gaming Monitor Ultra HD 27\"",
        description: "A 27-inch ultra high-definition gaming monitor with ultra-thin bezels, high refresh rate, and vivid color accuracy. Ideal for immersive gaming experiences with a sleek design and dynamic display performance.",
        price: 399.99,
        discount: 10.00,
        category: "Gaming",
        brand: "HyperVision",
        stock: {
          quantity: 30,
          availability: "in stock" // or "out of stock", "preorder"
        },
        images: [
          {
            url: a_018,
            altText: "Gaming Monitor Ultra HD 27\" with ultra-thin bezels and high-resolution display",
            isPrimary: true
          }
        ],
        ratings: {
          average: 4.8,
          reviews: [
            {
              userId: "user789",
              rating: 5,
              comment: "The best monitor I've ever used for gaming! Crystal clear and smooth.",
              date: "2024-08-15T16:45:30Z"
            },
            {
              userId: "user101",
              rating: 4,
              comment: "Great monitor, but the stand could be more adjustable.",
              date: "2024-08-14T09:00:00Z"
            }
          ],
          totalReviews: 120
        },
        sku: "MONITOR-27-ULTRAHD",
        weight: 6.5, // Weight in kilograms
        tags: ["gaming", "monitor", "4K", "HD"],
        createdAt: "2024-08-01T10:00:00Z",
        updatedAt: "2024-08-29T14:23:00Z",
        relatedProducts: ["gaming-monitor-ultra-hd-24", "gaming-monitor-ultra-hd-32"], // IDs of related products
        status: "active" // or "inactive", "discontinued"
      }
    // Continue with more products up to 50
  ];
  