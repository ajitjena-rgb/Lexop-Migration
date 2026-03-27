// Adapted from Radiant repo:
// workflow-manager/src/radiant/ui/src/lib/pagination/pagination.tsx
import { useState } from 'react';
import { Flex, HStack, Text, Select, Box, IconButton } from '@chakra-ui/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { ThemeColors } from '../../theme/colors';

export type PaginationProps = {
  totalItems: number;
  currentPageNumber?: number;
  limit?: number;
  limitOptions?: number[];
  onChangePageNumber?: (page: number) => void;
  onChangeLimit?: (limit: number) => void;
  showLimitSelector?: boolean;
};

export const Pagination = ({
  totalItems,
  currentPageNumber,
  limit,
  limitOptions = [10, 20, 50, 100],
  onChangePageNumber,
  onChangeLimit,
  showLimitSelector = true,
}: PaginationProps) => {
  const [page, setPage] = useState(currentPageNumber ?? 1);
  const [pageSize, setPageSize] = useState(limit ?? 10);

  const maxPages = Math.ceil(totalItems / Math.max(pageSize, 1));
  const start = pageSize * (page - 1) + 1;
  const end = Math.min(pageSize * page, totalItems);

  const goTo = (p: number) => {
    if (p < 1 || p > maxPages) return;
    setPage(p);
    onChangePageNumber?.(p);
  };

  const handleLimitChange = (n: number) => {
    setPageSize(n);
    setPage(1);
    onChangeLimit?.(n);
    onChangePageNumber?.(1);
  };

  const C = ThemeColors;

  return (
    <Flex w="full" px="56px" direction="row" alignItems="center" justifyContent="space-between" h="30px">
      {showLimitSelector && (
        <HStack spacing={2}>
          <Text fontSize="14px" color={C.primary.grey[2]} whiteSpace="nowrap">Rows per page</Text>
          <Select
            value={pageSize}
            onChange={(e) => handleLimitChange(Number(e.target.value))}
            size="sm"
            width="70px"
            borderRadius="8px"
            fontSize="14px"
            color={C.primary.black}
            border={`1px solid ${C.primary.grey.dividers}`}
            _focus={{ boxShadow: 'none', borderColor: C.additional.green.hover }}
          >
            {limitOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </Select>
        </HStack>
      )}

      <HStack spacing="18px">
        <Text fontSize="14px" color={C.primary.grey[2]}>{start}-{end} of {totalItems}</Text>

        <HStack spacing={1}>
          <IconButton
            aria-label="Previous page"
            icon={<BsChevronLeft />}
            size="sm"
            variant="ghost"
            isDisabled={page <= 1}
            onClick={() => goTo(page - 1)}
            color={page <= 1 ? C.grayscale.greyDisabled : C.primary.grey[2]}
            _hover={{ color: C.primary.black }}
          />

          {Array.from({ length: maxPages }, (_, i) => i + 1).map((p) => (
            <Box
              key={p}
              as="button"
              w="30px"
              h="30px"
              borderRadius="8px"
              fontSize="14px"
              fontWeight={p === page ? '700' : '400'}
              color={p === page ? C.primary.black : C.primary.grey[2]}
              bg={p === page ? C.additional.green.light : 'transparent'}
              _hover={{ color: C.primary.black, fontWeight: '700' }}
              onClick={() => goTo(p)}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {p}
            </Box>
          ))}

          <IconButton
            aria-label="Next page"
            icon={<BsChevronRight />}
            size="sm"
            variant="ghost"
            isDisabled={page >= maxPages}
            onClick={() => goTo(page + 1)}
            color={page >= maxPages ? C.grayscale.greyDisabled : C.primary.grey[2]}
            _hover={{ color: C.primary.black }}
          />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Pagination;
