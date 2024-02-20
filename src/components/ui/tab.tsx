'use client';

import { useState } from 'react';
import { Tab as RizzTab } from 'rizzui';
import cn from '@/utils/class-names';

interface TabProps {
  tabsList: Array<TabDetailProps>;
  className?: string;
}

interface TabDetailProps {
  name: string;
  content: string | JSX.Element;
}

export const Tab = ({ className, tabsList }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabsList[0]);
  return (
    <RizzTab.Group>
      <RizzTab.List className='flex justify-center items-center mt-4'>
        {tabsList.map((item) => (
          <RizzTab
            key={item.name}
            onClick={() => setActiveTab(item)}
            className={cn(
              `${
                activeTab.name === item.name ? 'border-2 border-primary' : 'bg-gray-200'
              } ml-8 outline-none p-4 rounded-lg w-[16rem]`,
              className
            )}
          >
            {item.name}
          </RizzTab>
        ))}
      </RizzTab.List>
      <RizzTab.Panels>
        {tabsList.map((item) => (
          <RizzTab.Panel
            key={item.name}
            className={activeTab.name === item.name ? 'block' : 'hidden'}
          >
            {item.content}
          </RizzTab.Panel>
        ))}
      </RizzTab.Panels>
    </RizzTab.Group>
  );
};

Tab.displayName = 'Tab';
