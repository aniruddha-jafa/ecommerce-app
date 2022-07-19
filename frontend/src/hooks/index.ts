import useSWR from 'swr'

import type { ProductGridItem } from 'types/product'

const PRODUCTS_URL = '/api/products'

const _fetcher = (url: string) => fetch(url).then((res) => res.json())

/** fetch products list */
function useGetProducts() {
  const { data: products, error } = useSWR<ProductGridItem[]>(
    PRODUCTS_URL,
    _fetcher
  )
  return { products, error }
}

export { useGetProducts }
