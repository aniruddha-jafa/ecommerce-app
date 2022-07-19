// components
import { Container, SimpleGrid } from '@chakra-ui/react'
import ProductGridItem from 'components/ProductGridItem'

// data
import { useGetProducts } from 'hooks'
// ----------------------------------------------------------------

function Main() {
  const { products = [], error } = useGetProducts()

  if (error) {
    console.error(error)
    console.error(error.stack)
    return <p>Error, check console </p>
  }

  return (
    <>
      <Container minW='100%' px={{ base: 2, md: 64 }}>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacingX={12}
          spacingY={16}
          py={24}
          // px={{ base: 2, md: 64 }}
          placeItems='center'
          // border='solid 1px blue'
        >
          {products &&
            products.map(({ name, currentPrice, imagePath, id }) => (
              <ProductGridItem
                key={id}
                name={name}
                currentPrice={currentPrice}
                imagePath={imagePath}
                id={id}
              />
            ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Main
