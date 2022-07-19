import sortBy from 'lodash/sortBy'

// components
import {
  Button,
  Box,
  Menu,
  MenuButton,
  MenuOptionGroup,
  MenuItemOption,
  MenuList,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { ProductGridItem as ProductGridItemType } from 'types/product'

// types
import type { Dispatch, SetStateAction } from 'react'

// ---------------------------------------------------------------

type sortOpts = 'name' | 'price' | 'rating' | 'none'

const SORT_BY = {
  none: (arr: ProductGridItemType[]) => arr,
  name: (arr: ProductGridItemType[]) => sortBy(arr, 'name'),
  price: (arr: ProductGridItemType[]) => sortBy(arr, 'currentPrice'),
  rating: (arr: ProductGridItemType[]) => sortBy(arr, 'rating').reverse(),
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
            <MenuItemOption value='REVIEW' onClick={() => setSort('rating')}>
              Avg. rating
            </MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  )
}

export type { sortOpts }
export { SORT_BY, SortMenu }
