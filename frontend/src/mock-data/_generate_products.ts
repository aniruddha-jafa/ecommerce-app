import { faker } from '@faker-js/faker'
import { writeFileSync } from 'fs'

const numItems = 15

let products = []

for (let i = 0; i < numItems; i++) {
  const product = {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    categories: [faker.commerce.department()],
    sellers: ['_test'],
    rating: faker.commerce.price(0, 5, 1),
    numReviews: faker.commerce.price(0, 200, 0),
    originalPrice: faker.commerce.price(1000, 2000, 2, '₹'),
    currentPrice: faker.commerce.price(100, 1000, 2, '₹'),
    currency: 'INR',
    imagePath: faker.image.fashion(),
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  }
  products.push(product)
}

const data = JSON.stringify(products, null, 4)

writeFileSync('products.json', data)
