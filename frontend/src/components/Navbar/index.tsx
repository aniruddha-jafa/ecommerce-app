import NextLink from 'next/link'
import {
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  IconButton,
  Link,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useBreakpointValue,
  useDisclosure,
  VStack,
  Text,
} from '@chakra-ui/react'

import { Icon } from '@iconify/react'

import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'

interface NavLinkProps {
  name: string
  href: string
  isMobile: boolean
}

/**
 * on mobile links should be fullwidth buttons, to help
 * ease user navigation
 */
const NavLink = ({ name, href, isMobile = false }: NavLinkProps) => {
  return (
    <>
      {isMobile ? (
        <>
          <LinkBox
            w='100%'
            py='2'
            borderBottom='solid 1px lightgrey'
            _hover={{ color: 'primary' }}
          >
            <NextLink href={href} passHref>
              <LinkOverlay fontWeight='semibold'>{name}</LinkOverlay>
            </NextLink>
          </LinkBox>
        </>
      ) : (
        <>
          <NextLink href={href}>
            <Link fontWeight='semibold' _hover={{ color: 'primary' }}>
              {name}
            </Link>
          </NextLink>
        </>
      )}
    </>
  )
}

/**
 * @todo extract cart summary info (price, num items etc) to seperate component
 */
const CartSummaryPopover = () => (
  <Popover>
    <PopoverTrigger>
      <IconButton
        aria-label='cart'
        fontWeight='thin'
        icon={<Icon icon='ic:outline-shopping-cart' />}
        isRound
      />
    </PopoverTrigger>
    <PopoverContent minW='16ch' maxW='max-content'>
      <PopoverBody p='4'>
        <Text fontWeight={'bold'}>8 items</Text>
        <Text color='secondary'>Subtotal $99</Text>
        <Button w='100%' colorScheme='blue' mt='6'>
          View Cart
        </Button>
      </PopoverBody>
    </PopoverContent>
  </Popover>
)

interface NavBlockProps {
  isOpen: boolean
  onToggle: () => void
}

/**
 * Links are collapsible on mobile, else a simple row on larger screens
 *
 * CartPopover & search button only visible on larger screens
 */
const NavLinksBlock = ({ isOpen, onToggle }: NavBlockProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            aria-label='menu'
            size='lg'
            variant='outline'
            icon={<HamburgerIcon />}
            onClick={onToggle}
          />
          <Box w='100%'>
            <Collapse in={isOpen} animateOpacity>
              <VStack w='100%'>
                <NavLink href='#' name='Home' isMobile={true} />
                <NavLink href='#' name='Shop' isMobile={true} />
                <NavLink href='#' name='About' isMobile={true} />
                <NavLink href='#' name='Faq' isMobile={true} />
                <NavLink href='#' name='Contact' isMobile={true} />
              </VStack>
            </Collapse>
          </Box>
        </>
      ) : (
        <>
          <Flex
            flex='1 1'
            gap={8}
            justifyContent='center'
            alignItems='center'
            fontWeight={600}
            // border='solid 1px blue'
          >
            <NavLink href='#' name='Home' isMobile={false} />
            <NavLink href='#' name='Shop' isMobile={false} />
            <NavLink href='#' name='About' isMobile={false} />
            <NavLink href='#' name='Faq' isMobile={false} />
            <NavLink href='#' name='Contact' isMobile={false} />
          </Flex>
          <Flex gap='4'>
            <IconButton
              aria-label='search'
              fontWeight='thin'
              icon={<SearchIcon fontWeight='hairline' />}
              isRound
            />
            <CartSummaryPopover />
          </Flex>
        </>
      )}
    </>
  )
}

/**
 * control toggle of NavLinkBlock from parent
 */
export default function Main() {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex
        as='nav'
        py={6}
        px={{ base: 12, md: 36 }}
        flexWrap='wrap'
        justifyContent='space-between'
        fontFamily='Catamaran-light'
      >
        <Heading textTransform='uppercase'>
          Adrian
          <Box display={'inline'} color='primary'>
            .
          </Box>
        </Heading>
        <NavLinksBlock isOpen={isOpen} onToggle={onToggle} />
      </Flex>
    </>
  )
}
