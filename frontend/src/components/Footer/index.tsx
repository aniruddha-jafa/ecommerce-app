import NextLink from 'next/link'

import { Box, Link, Text, VStack, HStack } from '@chakra-ui/react'

import type { ReactNode } from 'react'

interface FooterLinkProps {
  href: string
  children: ReactNode
  props?: any[]
}

const FooterLink = ({ href, children, ...props }: FooterLinkProps) => (
  <NextLink href={href} {...props} passHref>
    <Link fontWeight='extrabold'>{children}</Link>
  </NextLink>
)

function Main() {
  return (
    <Box as='footer' fontFamily={'Catamaran'} bg='gray.100' color='gray.700'>
      <VStack justifyContent={'space-evenly'} spacing={4} px={4} py={8}>
        <Box>
          <Text textAlign={{ base: 'center', md: 'unset' }}>
            ACME Industries Ltd. Providing reliable tech since 1992
          </Text>
        </Box>
        <HStack spacing={8} justifyContent='space-evenly'>
          <FooterLink href='#'>About</FooterLink>
          <FooterLink href='#'>Contact</FooterLink>
          <FooterLink href='#'>Jobs</FooterLink>
          <FooterLink href='#'>Press kit</FooterLink>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Main
