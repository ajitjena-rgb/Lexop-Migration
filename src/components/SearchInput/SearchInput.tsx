// Adapted from Radiant repo:
// workflow-manager/src/radiant/ui/src/lib/search-input/search-input.tsx
import { InputGroup, InputLeftElement, Input, InputProps } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { ThemeColors } from '../../theme/colors';

export type SearchInputProps = Omit<InputProps, 'type'> & {
  placeholder?: string;
};

export const SearchInput = ({ placeholder = 'search by campaign name', ...rest }: SearchInputProps) => (
  <InputGroup>
    <InputLeftElement pointerEvents="none" color={ThemeColors.primary.grey[2]} h="full">
      <BsSearch size={14} />
    </InputLeftElement>
    <Input
      type="search"
      placeholder={placeholder}
      bg={ThemeColors.grayscale.greyLight2}
      border="none"
      borderRadius="16px"
      fontSize="14px"
      color={ThemeColors.primary.black}
      height="42px"
      _placeholder={{ color: ThemeColors.primary.grey[2] }}
      _hover={{ bg: ThemeColors.grayscale.greyLight2 }}
      _focus={{
        bg: ThemeColors.grayscale.greyLight2,
        outline: `2px solid ${ThemeColors.additional.green.hover}`,
        boxShadow: 'none',
      }}
      {...rest}
    />
  </InputGroup>
);

export default SearchInput;
