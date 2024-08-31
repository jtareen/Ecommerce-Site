
const dummyProduct = {
    "id": "unique-product-id-123",
    "name": "Product Name",
    "description": "Detailed description of the product, including features and specifications.",
    "price": 99.99,
    "discount": {
      "amount": 10.00,
      "type": "percentage", // or "fixed"
      "validUntil": "2024-09-30T23:59:59Z" // Optional expiry date for discount
    },
    "category": "Category Name",
    "brand": "Brand Name",
    "stock": {
      "quantity": 50,
      "availability": "in stock" // or "out of stock", "preorder"
    },
    "images": [
      {
        "url": "https://example.com/image1.jpg",
        "altText": "Image description",
        "isPrimary": true // To indicate the primary display image
      },
      {
        "url": "https://example.com/image2.jpg",
        "altText": "Image description",
        "isPrimary": false
      }
    ],
    "ratings": {
      "average": 4.5,
      "reviews": [
        {
          "userId": "user123",
          "rating": 5,
          "comment": "Excellent product!",
          "date": "2024-08-31T12:34:56Z"
        },
        {
          "userId": "user456",
          "rating": 4,
          "comment": "Very good, but could be improved.",
          "date": "2024-08-30T09:21:45Z"
        }
      ],
      "totalReviews": 200
    },
    "sku": "PROD123456", // Stock Keeping Unit
    "weight": 1.5, // Weight in kilograms or any other unit
    "dimensions": {
      "length": 10.0, // Length in centimeters or any other unit
      "width": 5.0,
      "height": 2.0
    },
    "tags": ["tag1", "tag2", "tag3"], // Tags for search and categorization
    "shipping": {
      "dimensions": {
        "length": 12.0,
        "width": 7.0,
        "height": 3.0
      },
      "weight": 1.7,
      "origin": "Warehouse Location",
      "shippingClass": "Standard" // Or "Express", "Overnight", etc.
    },
    "createdAt": "2024-08-01T10:00:00Z",
    "updatedAt": "2024-08-29T14:23:00Z",
    "seller": {
      "sellerId": "seller123",
      "sellerName": "Seller Name",
      "sellerRating": 4.8
    },
    "variants": [
      {
        "variantId": "variant1",
        "name": "Color",
        "value": "Red"
      },
      {
        "variantId": "variant2",
        "name": "Size",
        "value": "Medium"
      }
    ],
    "relatedProducts": ["product-id-124", "product-id-125"], // IDs of related products
    "status": "active" // or "inactive", "discontinued"
  }
