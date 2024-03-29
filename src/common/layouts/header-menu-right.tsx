'use client';
import { Badge, ActionIcon, RingBellSolidIcon } from 'shafa-bo';
import NotificationDropdown from '@/common/layouts/notification-dropdown';
import ProfileMenu from '@/common/layouts/profile-menu';
import ThemeSwitcherHandler from '@/common/components/theme/switch-theme';

export default function HeaderMenuRight() {
  return (
    <div className='ms-auto grid shrink-0 grid-cols-3 items-center gap-2 text-gray-700 xs:gap-3 xl:gap-3'>
      <NotificationDropdown>
        <ActionIcon
          aria-label='Notification'
          variant='text'
          className='relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9'
        >
          <RingBellSolidIcon className='h-[18px] w-auto ' />
          <Badge renderAsDot color='warning' enableOutlineRing className='absolute right-2.5 top-2.5 -translate-y-1/3 translate-x-1/2'>3</Badge>
        </ActionIcon>
      </NotificationDropdown>
      <ThemeSwitcherHandler />
      <ProfileMenu />
    </div>
  );
}
