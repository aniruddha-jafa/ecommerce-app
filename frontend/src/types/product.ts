import type { ProductItem } from 'mock-data/products'

// ----------------------------------------------------------------

export type ProductGridItem = Pick<
  ProductItem,
  'name' | 'currentPrice' | 'imagePath' | 'currency' | 'rating' | 'id'
>
