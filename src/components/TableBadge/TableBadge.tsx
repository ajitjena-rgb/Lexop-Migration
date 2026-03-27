// Adapted from Radiant repo:
// workflow-manager/src/radiant/ui/src/lib/table-badge/table-badge.tsx
// workflow-manager/src/radiant/ui/src/lib/table-badge/table-badge.styles.ts
import { Tag, TagLabel, TagProps } from '@chakra-ui/react';
import { ThemeColors } from '../../theme/colors';

export type TableBadgeVariant = 'neutral' | 'red' | 'green' | 'blue' | 'shortcut';

export type TableBadgeProps = Omit<TagProps, 'variant'> & {
  label: string;
  variant?: TableBadgeVariant;
};

const variantBg: Record<TableBadgeVariant, string> = {
  neutral: ThemeColors.grayscale.greyLight2,
  green: ThemeColors.additional.green.light,
  red: ThemeColors.accent.red_light,
  blue: ThemeColors.accent.blue_light,
  shortcut: ThemeColors.additional.violet.light,
};

export const TableBadge = ({ label, variant = 'neutral', ...rest }: TableBadgeProps) => (
  <Tag
    bg={variantBg[variant]}
    color={ThemeColors.primary.black}
    fontSize="14px"
    lineHeight="24px"
    py="3px"
    px="12px"
    borderRadius="6px"
    fontWeight="400"
    {...rest}
  >
    <TagLabel>{label}</TagLabel>
  </Tag>
);

export default TableBadge;
