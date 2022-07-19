// -- components
import { Container, SimpleGrid } from '@chakra-ui/react'

// -- data
import products from 'mock-data/products'
import ProductGridItem from 'components/ProductGridItem'

function Main() {
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
          {products.map(({ name, currentPrice, imagePath, id }) => (
            <ProductGridItem
              key={id}
              name={name}
              price={currentPrice}
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
