import { useState, useEffect } from 'react'

// components
import { Box, Container, Skeleton, SimpleGrid } from '@chakra-ui/react'
import ProductGridItem from 'components/ProductGridItem'
import { SORT_BY, sortOpts, SortMenu } from './SortMenu'

// data
import { useGetProducts } from 'hooks/product'

// ----------------------------------------------------------------

function Main() {
  const { products = [], loading = true, error } = useGetProducts()

  const [sort, setSort] = useState<sortOpts>('none')
  const [sortedProducts, setSortedProducts] = useState(products)

  useEffect(() => {
    const sortFunc = SORT_BY[sort]
    // console.debug('Sort toggled to ' + sort)
    const sortedList = sortFunc(products)
    setSortedProducts(sortedList)
  }, [sort, products])

  if (error) {
    console.error(error)
    console.error(error.stack)
    return <p>Error, check console </p>
  }

  return (
    <>
      <Container minW='100%' px={{ base: 2, md: 64 }} py={8}>
        <SortMenu setSort={setSort} />
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacingX={12}
          spacingY={16}
          py={16}
          placeItems='center'
          // border='solid 1px blue'
        >
          {loading ? (
            <Loading />
          ) : (
            sortedProducts.map(
              ({ name, currentPrice, currency, rating, imagePath, id }) => (
                <ProductGridItem
                  key={id}
                  name={name}
                  currentPrice={currentPrice}
                  rating={rating}
                  currency={currency}
                  imagePath={imagePath}
                  id={id}
                />
              )
            )
          )}
        </SimpleGrid>
      </Container>
    </>
  )
}

const LoadingItem = () => (
  <Skeleton isLoaded={false}>
    <Box h={250} w={250} />
  </Skeleton>
)

/** Loading skeleton for ProductGrid */
const Loading = () => (
  <>
    <LoadingItem />
    <LoadingItem />
    <LoadingItem />
  </>
)

export default Main
