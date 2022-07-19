const products = [
  {
    id: '44316ae2-ef6f-4c86-b6cf-068e6627c79c',
    name: 'Analog watch plain',
    description:
      'Numquam corporis possimus nostrum. Officiis assumenda cupiditate dolorem quisquam et architecto quae debitis. Officia saepe voluptas vitae odit nisi aut natus et est.',
    categories: ['Watches'],
    sellers: ['_test'],
    rating: 3.5,
    numReviews: 137,
    originalPrice: 1924.0,
    currentPrice: 792.0,
    currency: 'INR',
    imagePath: '/images/mock/1-analog-watch-1.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'ff40d14d-ebc1-4f25-a861-17f52b1b391f',
    name: 'Black keds',
    description: 'Rem omnis omnis fugit error iste. Omnis laborum qui.',
    categories: ['Shoes'],
    sellers: ['_test'],
    rating: 4.1,
    numReviews: 69,
    originalPrice: 1656.0,
    currentPrice: 918.0,
    currency: 'INR',
    imagePath: '/images/mock/3-black-keds.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'ff5be471-c467-4690-8b30-82cb35c48d37',
    name: 'Black handbag',
    description:
      'Doloremque quam excepturi. Consequatur quo laudantium possimus modi dolor nihil. Alias itaque veritatis voluptatem neque dolorem illum itaque. Maxime eos id facere voluptatem enim dicta. Alias cupiditate voluptatibus temporibus quisquam. Est et rerum rem voluptas non molestiae alias saepe ut.',
    categories: ['Handbag'],
    sellers: ['_test'],
    rating: 4.2,
    numReviews: 151,
    originalPrice: 1220.0,
    currentPrice: 664.0,
    currency: 'INR',
    imagePath: '/images/mock/4-black-leather-handbag.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'c19c97db-522a-4d4f-8e95-0c177d375ec3',
    name: 'Blue shirt',
    description:
      'Alias quis eum. Nulla neque cum est voluptatem in reiciendis cum nesciunt voluptatem. Cum totam hic quibusdam labore perferendis error nihil est illo. Saepe adipisci illo et quisquam minima. Enim ut voluptatem repellat sint totam non quia vitae. Exercitationem sed rerum voluptatibus minus nobis itaque.',
    categories: ['Shirts'],
    sellers: ['_test'],
    rating: 0.0,
    numReviews: 192,
    originalPrice: 1833.0,
    currentPrice: 1700.0,
    currency: 'INR',
    imagePath: '/images/mock/6-blue-shirt.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'a6e08d7b-3c4a-4bf9-ab9a-82810ac2728b',
    name: 'Brown boots female',
    description:
      'Fugit sit quia eligendi officiis. Sint alias ex asperiores quia animi sit nam quo.',
    categories: ['Shoes'],
    sellers: ['_test'],
    rating: 2.0,
    numReviews: 146,
    originalPrice: 1976.0,
    currentPrice: 1500.0,
    currency: 'INR',
    imagePath: '/images/mock/7-brown-boots-female.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'f70d57d7-22c8-444a-8d50-e39d9ce24177',
    name: 'Grey Umbrella',
    description:
      'Qui dicta laborum qui esse dignissimos quisquam quos sint. Quos nisi facilis est magni est ducimus odio facilis sequi. Excepturi reiciendis incidunt. Impedit libero ex odit hic molestias deleniti sunt sit. Ipsam repellat aspernatur.',
    categories: ['Umbrella'],
    sellers: ['_test'],
    rating: 3.0,
    numReviews: 189,
    originalPrice: 663.0,
    currentPrice: 269.0,
    currency: 'INR',
    imagePath: '/images/mock/10-grey-umbrella.jpeg',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: '57791b6d-0729-4094-8c39-92194522d3f4',
    name: 'Brown wallet',
    description:
      'Ut ducimus dolores accusantium similique et dolore. Ipsum reiciendis nesciunt reprehenderit rem eos quo. Magnam optio quisquam non incidunt. Inventore quisquam officiis enim at aperiam sint qui. Laboriosam non illum perferendis. Repudiandae accusantium ullam non id sapiente.',
    categories: ['Wallets'],
    sellers: ['_test'],
    rating: 1.0,
    numReviews: 1,
    originalPrice: 1500.0,
    currentPrice: 675.0,
    currency: 'INR',
    imagePath: '/images/mock/9-brown-wallet.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: '7244a03a-fbba-47af-9a9f-c3f6956c79ad',
    name: 'Analog watch',
    description:
      'Explicabo sequi non. Sapiente amet ad. Inventore voluptatum voluptatem culpa illo dignissimos molestiae aspernatur ducimus.',
    categories: ['Watches'],
    sellers: ['_test'],
    rating: 4.1,
    numReviews: 174,
    originalPrice: 2400.0,
    currentPrice: 2000.0,
    currency: 'INR',
    imagePath: '/images/mock/2-analog-watch-2.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'ecab2efd-dc6f-45e0-b351-da1b9cfa1c85',
    name: 'Polka-dots Necktie',
    description:
      'Cumque deleniti quidem tenetur eos sunt in ipsa fuga qui. Ab rerum beatae illo necessitatibus. Iusto quibusdam non nisi ex.',
    categories: ['Neckties'],
    sellers: ['_test'],
    rating: 4.2,
    numReviews: 162,
    originalPrice: 1210.0,
    currentPrice: 884.0,
    currency: 'INR',
    imagePath: '/images/mock/12-polka-dots-necktie.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'cda97f51-cfe5-470d-8f50-eb97f9796ccf',
    name: 'Sunglasses',
    description:
      'Et consequatur omnis est iusto nostrum corporis. Omnis reiciendis explicabo consequatur. Rem in eos dolorum consequuntur pariatur consectetur. Illum cum quia et. Recusandae soluta laborum aliquam minus nesciunt officiis.',
    categories: ['Eyeware'],
    sellers: ['_test'],
    rating: 4.0,
    numReviews: 187,
    originalPrice: 1339.0,
    currentPrice: 599.0,
    currency: 'INR',
    imagePath: '/images/mock/13-sunglasses.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: '8894fa4a-5486-4cd8-bcc2-659aa6081813',
    name: 'Red top',
    description:
      'Quia et odit. Magnam consectetur aut perspiciatis. Ut quia magnam voluptatum possimus et vel. Accusamus et quia consequuntur qui adipisci sint.',
    categories: ['Clothing'],
    sellers: ['_test'],
    rating: 3.7,
    numReviews: 137,
    originalPrice: 1343.0,
    currentPrice: 464.0,
    currency: 'INR',
    imagePath: '/images/mock/14-red-top.jpg',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'cf7f687e-0c7e-4d06-a82c-4703c218f3ce',
    name: 'Yellow socks',
    description:
      'Fugit ea et ea rerum explicabo. Vel mollitia et in facilis. Placeat saepe occaecati ipsum unde nesciunt. Facere minus delectus quia voluptate. Quisquam modi provident delectus velit tempore. Fuga dolor vel temporibus rerum rerum dolor et aspernatur.',
    categories: ['Clothing'],
    sellers: ['_test'],
    rating: 4.6,
    numReviews: 198,
    originalPrice: 989.0,
    currentPrice: 768.0,
    currency: 'INR',
    imagePath: '/images/mock/16-yellow-socks.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: '9fc49366-c208-40c9-89b9-faf040948ac9',
    name: 'Brown boots',
    description:
      'Quis neque quaerat velit alias. Iusto qui sed dolores quam ratione qui incidunt. Facilis ipsa assumenda vel. Numquam iste eos et mollitia. Numquam necessitatibus aperiam sint quia libero temporibus temporibus id. Dolor sit natus nostrum mollitia incidunt maxime quo voluptatem.',
    categories: ['Shoes'],
    sellers: ['_test'],
    rating: 1.0,
    numReviews: 76,
    originalPrice: 1890.0,
    currentPrice: 992.0,
    currency: 'INR',
    imagePath: '/images/mock/8-brown-boots-male.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: '1eb1ee71-c16e-4522-8e57-4c42ba6b7b7d',
    name: 'Black Leather Wallet',
    description: 'Libero vitae nobis. Sint explicabo nihil animi omnis.',
    categories: ['Wallets'],
    sellers: ['_test'],
    rating: 1.0,
    numReviews: 58,
    originalPrice: 1800.0,
    currentPrice: 1209.0,
    currency: 'INR',
    imagePath: '/images/mock/5-black-wallet.webp',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
  {
    id: 'cd7a3a1c-d6b3-41be-82a3-ecf3a43f7b83',
    name: 'Makeup bag',
    description:
      'Doloremque esse accusantium ad delectus maiores est rerum nemo. Est ipsa deleniti voluptas cum expedita. Dolores omnis odio dolorem quibusdam. Est asperiores iusto iste explicabo consectetur temporibus doloremque veritatis et. Nesciunt sit est voluptatibus magni occaecati. Corrupti veritatis officia veniam eveniet quisquam unde sunt et explicabo.',
    categories: ['Accessories'],
    sellers: ['_test'],
    rating: 4.0,
    numReviews: 181,
    originalPrice: 1273.0,
    currentPrice: 445.0,
    currency: '₹',
    imagePath: '/images/mock/11-makeup-bag.jpg',
    created: 'Thu Jul 14 2022',
    updated: 'Thu Jul 14 2022',
  },
]

export type ProductItem = typeof products[0]

export default products
