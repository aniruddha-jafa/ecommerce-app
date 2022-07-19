import { useState, useEffect } from 'react'
import sortBy from 'lodash/sortBy'

// components
import {
  Button,
  Box,
  Container,
  SimpleGrid,
  Menu,
  MenuButton,
  MenuOptionGroup,
  MenuItemOption,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import ProductGridItem from 'components/ProductGridItem'
import { ChevronDownIcon } from '@chakra-ui/icons'

// data
import { useGetProducts } from 'hooks/product'

import type { ProductGridItem as ProductGridItemType } from 'types/product'
import type { Dispatch, SetStateAction } from 'react'
// ----------------------------------------------------------------

type sortOpts = 'name' | 'price' | 'review' | 'none'

const SORT_BY = {
  none: (arr: ProductGridItemType[]) => arr,
  name: (arr: ProductGridItemType[]) => sortBy(arr, 'name'),
  price: (arr: ProductGridItemType[]) => sortBy(arr, 'currentPrice'),
  review: (arr: ProductGridItemType[]) => sortBy(arr, 'reviews'),
}

type sortMenuProps = {
  setSort: Dispatch<SetStateAction<sortOpts>>
}

const SortMenu = ({ setSort }: sortMenuProps) => {
  return (
    <Box display='flex' justifyContent='end'>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Sort by
        </MenuButton>
        <MenuList>
          <MenuOptionGroup defaultValue='' type='radio'>
            <MenuItemOption value='NAME' onClick={() => setSort('name')}>
              Name
            </MenuItemOption>
            <MenuItemOption value='PRICE' onClick={() => setSort('price')}>
              Price: Low to High
            </MenuItemOption>
            <MenuItemOption value='REVIEW' onClick={() => setSort('review')}>
              Avg. review
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}

function Main() {
  const { products = [], error } = useGetProducts()

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
          {sortedProducts &&
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
            )}
        </SimpleGrid>
      </Container>
    </>
  )
}

export default Main
