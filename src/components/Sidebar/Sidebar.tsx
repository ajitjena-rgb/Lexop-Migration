import { Box, Flex, IconButton, Tooltip, VStack } from '@chakra-ui/react';
import {
  BsGrid,
  BsChatDots,
  BsCpuFill,
  BsStar,
  BsPencilSquare,
  BsCalendar3,
  BsRobot,
  BsFolder,
  BsEye,
  BsBarChart,
  BsGraphUp,
  BsPen,
  BsClipboard,
  BsDash,
} from 'react-icons/bs';
import { ThemeColors } from '../../theme/colors';

const navIcons = [
  { icon: BsGrid, label: 'Dashboard' },
  { icon: BsChatDots, label: 'Messages' },
  { icon: BsCpuFill, label: 'AI Tools' },
  { icon: BsStar, label: 'Favourites' },
  { icon: BsPencilSquare, label: 'Campaign', active: true },
  { icon: BsCalendar3, label: 'Scheduler' },
  { icon: BsRobot, label: 'Bot' },
  { icon: BsFolder, label: 'Files' },
  { icon: BsEye, label: 'Monitor' },
  { icon: BsBarChart, label: 'Analytics' },
  { icon: BsGraphUp, label: 'Reports' },
  { icon: BsPen, label: 'Editor' },
  { icon: BsClipboard, label: 'Tasks' },
  { icon: BsDash, label: 'More' },
];

export const Sidebar = () => (
  <Flex
    direction="column"
    w="66px"
    minH="100vh"
    bg={ThemeColors.primary.violet.dark}
    py={3}
    alignItems="center"
    position="fixed"
    left={0}
    top={0}
    bottom={0}
    zIndex={100}
  >
    <VStack spacing={1} flex={1} w="full" alignItems="center">
      {navIcons.map(({ icon: Icon, label, active }) => (
        <Tooltip key={label} label={label} placement="right" hasArrow>
          <IconButton
            aria-label={label}
            icon={<Icon size={18} />}
            variant="ghost"
            w="44px"
            h="44px"
            borderRadius="10px"
            color={
              active
                ? ThemeColors.grayscale.white
                : `${ThemeColors.grayscale.white}80`
            }
            bg={active ? 'rgba(255,255,255,0.12)' : 'transparent'}
            _hover={{ bg: 'rgba(255,255,255,0.12)', color: ThemeColors.grayscale.white }}
          />
        </Tooltip>
      ))}
    </VStack>

    {/* Collapse toggle */}
    <Box
      as="button"
      w="24px"
      h="24px"
      borderRadius="50%"
      bg="rgba(255,255,255,0.15)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color={ThemeColors.grayscale.white}
      fontSize="10px"
      mb={2}
      _hover={{ bg: 'rgba(255,255,255,0.25)' }}
    >
      ›
    </Box>
  </Flex>
);

export default Sidebar;
