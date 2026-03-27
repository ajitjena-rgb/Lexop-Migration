// Adapted from Radiant repo:
// workflow-manager/src/radiant/ui/src/lib/button/button.tsx
import { Button as ChakraButton, ButtonProps as ChakraButtonProps, forwardRef } from '@chakra-ui/react';

export type ButtonVariant = 'primary' | 'secondary' | 'minimal' | 'danger' | 'link' | 'pagination';

export type ButtonProps = Omit<ChakraButtonProps, 'variant' | 'size'> & {
  label?: string;
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactElement;
  iconPos?: 'left' | 'right';
};

export const Button = forwardRef<ButtonProps, 'button'>(
  ({ label, variant = 'primary', size = 'md', icon, iconPos = 'left', children, ...rest }, ref) => (
    <ChakraButton
      variant={variant}
      size={size}
      ref={ref}
      leftIcon={icon && iconPos === 'left' ? icon : undefined}
      rightIcon={icon && iconPos === 'right' ? icon : undefined}
      {...rest}
    >
      {children ?? label}
    </ChakraButton>
  )
);

export default Button;
