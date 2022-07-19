import { LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { ProductGridItem } from 'types/product'

/**
 * @todo
 * - [ ] show cart icon on hover
 */
function Main({ name, currentPrice, imagePath, id }: ProductGridItem) {
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
        {/* <LinkOverlay href={link}> */}
        {currentPrice}
        {/* </LinkOverlay> */}
      </Text>
    </VStack>
  )
}

export default Main
