import { LinkBox, LinkOverlay, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

// ----------------------------------------------------------------

interface props {
  name: string
  price: string
  imagePath: string
  id: string
}

/**
 * @todo
 * - [ ] show cart icon on hover
 */
function Main({ name, price, imagePath, id }: props) {
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
        {price}
        {/* </LinkOverlay> */}
      </Text>
    </VStack>
  )
}

export default Main
