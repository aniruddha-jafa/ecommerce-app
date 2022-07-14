// -- components
import {
  Container,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'

// -- data
import products from 'mock-data/products'

// ----------------------------------------------------------------

interface ProductItemProps {
  name: string
  price: string
  imagePath: string
  id: string
}

/**
 * @todo
 * - [ ] show cart icon on hover
 */
const ProductItem = ({ name, price, imagePath, id }: ProductItemProps) => {
  const link = `/product/${id}`
  return (
    <VStack>
      <LinkBox>
        <LinkOverlay href={link}>
          <Image src={imagePath} alt={name} width={300} height={320} />
        </LinkOverlay>
      </LinkBox>
      <Text
        fontSize={'lg'}
        fontFamily='Catamaran light'
        textAlign='center'
        fontWeight={600}
        noOfLines={1}
      >
        {name}
      </Text>
      <Text
        fontSize={'sm'}
        fontFamily='Source Sans Pro'
        textAlign='center'
        color='gray.500'
      >
        <LinkOverlay href={link}>{price}</LinkOverlay>
      </Text>
    </VStack>
  )
}

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
            <ProductItem
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
