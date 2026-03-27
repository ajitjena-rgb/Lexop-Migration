// Adapted from Radiant repo:
// workflow-manager/src/radiant/ui/src/lib/dropdown/dropdown.tsx
import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { ThemeColors } from '../../theme/colors';

export type DropdownOption = { label: string; value: string };

export type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  width?: string | number;
};

export const Dropdown = ({ options, value, placeholder = 'All', onChange, width = 'auto' }: DropdownProps) => {
  const [selected, setSelected] = useState(value ?? options[0]?.value ?? '');
  const selectedLabel = options.find((o) => o.value === selected)?.label ?? placeholder;

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange?.(val);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="unstyled"
        bg={ThemeColors.grayscale.white}
        border={`1px solid ${ThemeColors.primary.grey.dividers}`}
        borderRadius="16px"
        px={4}
        height="42px"
        width={width}
        _hover={{ bg: ThemeColors.grayscale.grey }}
        fontWeight="400"
        fontSize="14px"
        color={ThemeColors.primary.black}
      >
        <HStack spacing={2} justify="space-between">
          <Text>{selectedLabel}</Text>
          <BsChevronDown size={12} color={ThemeColors.primary.grey[2]} />
        </HStack>
      </MenuButton>
      <MenuList
        borderRadius="12px"
        border={`1px solid ${ThemeColors.primary.grey.dividers}`}
        boxShadow="0 4px 12px rgba(0,0,0,0.08)"
        minW="120px"
        zIndex={10}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt.value}
            fontSize="14px"
            color={ThemeColors.primary.black}
            bg={selected === opt.value ? ThemeColors.additional.green.light : 'white'}
            _hover={{ bg: ThemeColors.additional.green.light }}
            onClick={() => handleSelect(opt.value)}
          >
            {opt.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
