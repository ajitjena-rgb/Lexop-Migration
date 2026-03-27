import { Flex, Text, IconButton, HStack, Avatar, Badge, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { BsBell, BsGearFill, BsChevronDown } from 'react-icons/bs';
import { ThemeColors } from '../../theme/colors';

export const Header = () => (
  <Flex
    as="header"
    w="full"
    h="48px"
    bg={ThemeColors.grayscale.white}
    borderBottom={`1px solid ${ThemeColors.primary.grey.dividers}`}
    alignItems="center"
    justifyContent="space-between"
    px={6}
    position="sticky"
    top={0}
    zIndex={50}
  >
    {/* Breadcrumb */}
    <Text fontSize="14px" fontWeight="400" color={ThemeColors.primary.black}>
      Campaign
    </Text>

    {/* Right actions */}
    <HStack spacing={2}>
      {/* Notification bell */}
      <IconButton
        aria-label="Notifications"
        icon={<BsBell size={18} />}
        variant="ghost"
        size="sm"
        color={ThemeColors.primary.grey[2]}
        _hover={{ color: ThemeColors.primary.black, bg: ThemeColors.grayscale.grey }}
        position="relative"
      />

      {/* Settings */}
      <IconButton
        aria-label="Settings"
        icon={<BsGearFill size={18} />}
        variant="ghost"
        size="sm"
        color={ThemeColors.primary.grey[2]}
        _hover={{ color: ThemeColors.primary.black, bg: ThemeColors.grayscale.grey }}
      />

      {/* Availability status */}
      <Menu>
        <MenuButton
          as={Flex}
          alignItems="center"
          gap={2}
          px={3}
          h="30px"
          borderRadius="16px"
          border={`1px solid ${ThemeColors.primary.grey.dividers}`}
          cursor="pointer"
          _hover={{ bg: ThemeColors.grayscale.grey }}
          fontSize="13px"
          color={ThemeColors.primary.black}
          fontWeight="400"
        >
          <HStack spacing={2}>
            <Badge
              w="8px"
              h="8px"
              borderRadius="full"
              bg="#43D694"
              p={0}
              minW="8px"
            />
            <Text fontSize="13px">Available</Text>
            <BsChevronDown size={10} color={ThemeColors.primary.grey[2]} />
          </HStack>
        </MenuButton>
        <MenuList fontSize="13px" minW="140px">
          <MenuItem>Available</MenuItem>
          <MenuItem>Busy</MenuItem>
          <MenuItem>Away</MenuItem>
        </MenuList>
      </Menu>

      {/* User avatar */}
      <Avatar
        size="sm"
        name="Eltropy Admin"
        src=""
        bg={ThemeColors.primary.green.emerald}
        color="white"
        fontSize="12px"
      />
    </HStack>
  </Flex>
);

export default Header;
