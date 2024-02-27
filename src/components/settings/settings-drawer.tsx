'use client';

import { useTheme } from 'next-themes';
import { SimpleBar } from 'shafa-bo';
import { useColorPresetName } from '@/hooks/use-theme-color';
import LayoutSwitcher from '@/components/settings/layout-switcher';
import ColorOptions from '@/components/settings/color-options';
import AppDirection from '@/components/settings/app-direction';
import ThemeSwitcher from '@/components/settings/theme-switcher';

export default function SettingsDrawer() {
  const { theme } = useTheme();
  const { colorPresetName } = useColorPresetName();

  return (
    <>
      <SimpleBar className='h-[calc(100%-138px)]'>
        <div className='px-5 py-6'>
          <ThemeSwitcher />
          <AppDirection />
          <LayoutSwitcher />
          <ColorOptions />
        </div>
      </SimpleBar>
    </>
  );
}
