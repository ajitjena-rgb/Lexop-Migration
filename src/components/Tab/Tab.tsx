// Adapted from Radiant repo:
// workflow-manager/src/radiant/ui/src/lib/tab/tab.tsx
import { ReactElement, useEffect, useState } from 'react';
import {
  Tabs,
  TabsProps as ChakraTabsProps,
  TabList,
  TabPanels,
  Tab as ChakraTab,
  TabPanel,
  forwardRef,
} from '@chakra-ui/react';

export type TabDataType = {
  label: string;
  view?: ReactElement;
};

export type TabProps = Omit<ChakraTabsProps, 'variant' | 'children'> & {
  variant?: 'line' | 'omnihub';
  data?: TabDataType[];
  selectedTabIndex?: number;
  onChangeTabIndex?: (index: number) => void;
};

export const Tab = forwardRef<TabProps, 'div'>(
  ({ data = [], variant = 'line', selectedTabIndex, onChangeTabIndex, ...props }, ref) => {
    const [tabIndex, setTabIndex] = useState(selectedTabIndex ?? 0);

    useEffect(() => {
      if (typeof selectedTabIndex === 'number' && selectedTabIndex !== tabIndex) {
        setTabIndex(selectedTabIndex);
      }
    }, [selectedTabIndex, tabIndex]);

    return (
      <Tabs
        ref={ref}
        {...props}
        variant={variant}
        index={selectedTabIndex ?? tabIndex}
        onChange={(i) => { onChangeTabIndex?.(i); setTabIndex(i); }}
      >
        <TabList gap={variant === 'line' ? '8px' : '0px'}>
          {data.map((tab, i) => (
            <ChakraTab key={i} pl={variant === 'line' ? '0px' : undefined} pr={variant === 'line' ? '0px' : undefined}>
              {tab.label}
            </ChakraTab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab) => (
            <TabPanel key={tab.label}>{tab.view}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }
);

export default Tab;
