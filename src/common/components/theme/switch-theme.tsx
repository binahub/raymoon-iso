'use client';

import Image from 'next/image';
import lightMode from '@public/assets/theme/light-sun.svg';
import darkMode from '@public/assets/theme/dark-sun.svg';
import { useTheme } from 'next-themes';

export default function ThemeSwitcherHandler() {
  const { theme, setTheme } = useTheme();

  return (
    <div className='w-9 h-9 cursor-pointer'>
      {theme === 'light' ? (
        <Image
          src={darkMode}
          alt='darkMode'
          className='animate-spin-slow'
          onClick={() => setTheme('dark')}
        />
      ) : (
        <Image
          src={lightMode}
          alt='lightMode'
          className='animate-spin-slow'
          onClick={() => setTheme('light')}
        />
      )}
    </div>
  );
}
