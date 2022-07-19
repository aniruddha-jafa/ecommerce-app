import products from 'mock-data/products'

import type { NextApiRequest, NextApiResponse } from 'next'

// ----------------------------------------------------------------

async function productsHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products)
}

export default productsHandler
