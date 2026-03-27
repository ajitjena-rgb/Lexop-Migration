import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  HStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  IconButton,
  Tooltip,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import {
  BsUpload,
  BsPlusLg,
  BsCalendar3,
  BsInfoCircle,
  BsDownload,
} from 'react-icons/bs';

// Radiant UI components
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import TableBadge from '../../components/TableBadge/TableBadge';
import SearchInput from '../../components/SearchInput/SearchInput';
import Dropdown from '../../components/Dropdown/Dropdown';
import Pagination from '../../components/Pagination/Pagination';
import { ThemeColors } from '../../theme/colors';

const C = ThemeColors;

type Campaign = {
  id: string;
  name: string;
  recipients: number;
  createdBy: string;
  startDate: string;
  status: 'ACTIVE' | 'DRAFT' | 'INACTIVE';
};

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'test2',
    recipients: 20,
    createdBy: 'Eltropy Admin User',
    startDate: '09/03/2025',
    status: 'ACTIVE',
  },
  {
    id: '2',
    name: 'ticket testing',
    recipients: 30,
    createdBy: 'Eltropy Admin User',
    startDate: '09/03/2025',
    status: 'ACTIVE',
  },
];

const statusVariant = (status: Campaign['status']) => {
  if (status === 'ACTIVE') return 'blue';
  if (status === 'DRAFT') return 'neutral';
  return 'red';
};

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Draft', value: 'draft' },
  { label: 'Inactive', value: 'inactive' },
];

const CampaignTable = ({ campaigns }: { campaigns: Campaign[] }) => (
  <Box>
    {/* Filters row */}
    <Flex gap={3} mb={6} alignItems="center">
      <Box flex={1} maxW="400px">
        <SearchInput placeholder="search by campaign name" />
      </Box>
      <Box ml="auto">
        <Flex gap={3} alignItems="center">
          <Dropdown options={filterOptions} width="100px" />
          <InputGroup w="200px">
            <InputLeftElement pointerEvents="none" color={C.primary.grey[2]} h="full">
              <BsCalendar3 size={14} />
            </InputLeftElement>
            <Input
              placeholder="Choose date range"
              readOnly
              bg={C.grayscale.white}
              border={`1px solid ${C.primary.grey.dividers}`}
              borderRadius="16px"
              fontSize="14px"
              height="42px"
              pl={9}
              _placeholder={{ color: C.primary.grey[2] }}
              _focus={{ boxShadow: 'none', borderColor: C.additional.green.hover }}
              cursor="pointer"
            />
          </InputGroup>
        </Flex>
      </Box>
    </Flex>

    {/* Table */}
    <Box overflowX="auto">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr borderBottom={`1px solid ${C.primary.grey.dividers}`}>
            {['Name', 'Recipients', 'Created By', 'Start Date', 'Status', 'Stats', 'Reports'].map((col) => (
              <Th
                key={col}
                fontSize="13px"
                fontWeight="400"
                color={C.primary.grey[2]}
                textTransform="none"
                letterSpacing="normal"
                pb={3}
                pr={col === 'Reports' ? 0 : 6}
              >
                {col}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {campaigns.map((c) => (
            <Tr
              key={c.id}
              borderBottom={`1px solid ${C.primary.grey.dividers}`}
              _hover={{ bg: C.grayscale.greyLight2 }}
            >
              <Td py={4} pr={6} fontSize="14px" color={C.primary.black}>{c.name}</Td>
              <Td py={4} pr={6} fontSize="14px" color={C.primary.black}>{c.recipients}</Td>
              <Td py={4} pr={6} fontSize="14px" color={C.primary.black}>{c.createdBy}</Td>
              <Td py={4} pr={6} fontSize="14px" color={C.primary.black}>{c.startDate}</Td>
              <Td py={4} pr={6}>
                <TableBadge label={c.status} variant={statusVariant(c.status)} />
              </Td>
              <Td py={4} pr={6}>
                <Tooltip label="View stats" hasArrow placement="top">
                  <IconButton
                    aria-label="Stats"
                    icon={<BsInfoCircle size={16} />}
                    variant="ghost"
                    size="sm"
                    color={C.primary.grey[2]}
                    _hover={{ color: C.primary.black }}
                  />
                </Tooltip>
              </Td>
              <Td py={4} pr={0}>
                <HStack spacing={1}>
                  <Button variant="minimal" size="sm" label="Generate" fontSize="14px" fontWeight="400" />
                  <Tooltip label="Download report" hasArrow placement="top">
                    <IconButton
                      aria-label="Download"
                      icon={<BsDownload size={14} />}
                      variant="ghost"
                      size="sm"
                      color={C.primary.grey[2]}
                      _hover={{ color: C.primary.black }}
                    />
                  </Tooltip>
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>

    {/* Pagination */}
    <Box mt={4} pt={2} borderTop={`1px solid ${C.primary.grey.dividers}`}>
      <Pagination totalItems={mockCampaigns.length} />
    </Box>
  </Box>
);

export const EmailCampaign = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabs = [
    {
      label: 'Campaign',
      view: <CampaignTable campaigns={mockCampaigns} />,
    },
    {
      label: 'Sequences',
      view: (
        <Flex h="200px" alignItems="center" justifyContent="center">
          <Text color={C.primary.grey[2]} fontSize="14px">No sequences yet</Text>
        </Flex>
      ),
    },
    {
      label: 'Template',
      view: (
        <Flex h="200px" alignItems="center" justifyContent="center">
          <Text color={C.primary.grey[2]} fontSize="14px">No templates yet</Text>
        </Flex>
      ),
    },
  ];

  return (
    <Box bg={C.grayscale.white} minH="100vh" p={6}>
      {/* Page header */}
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        <Text fontSize="24px" fontWeight="700" color={C.primary.black}>
          Email
        </Text>
        <HStack spacing={3}>
          <Button
            variant="secondary"
            label="Export"
            icon={<BsUpload size={16} />}
            iconPos="left"
          />
          <Button
            variant="primary"
            label="New Campaign"
            icon={<BsPlusLg size={16} />}
            iconPos="left"
          />
        </HStack>
      </Flex>

      <Divider borderColor={C.primary.grey.dividers} mb={0} />

      {/* Tabs */}
      <Tab
        data={tabs}
        selectedTabIndex={tabIndex}
        onChangeTabIndex={setTabIndex}
        variant="line"
      />
    </Box>
  );
};

export default EmailCampaign;
