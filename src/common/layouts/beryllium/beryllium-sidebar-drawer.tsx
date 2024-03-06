//@TODO: menu in smaller devices, it must replace to original menu
'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Title, Badge, Collapse, cn, SimpleBar } from 'shafa-bo';
import { PiCaretDownBold } from 'react-icons/pi';
import { berylliumSidebarMenuItems } from '@/common/layouts/beryllium/beryllium-sidebar-menu-items';
import { ItemType, berylliumMenuItems } from '@/common/layouts/beryllium/beryllium-fixed-menu-items';
import Logo from '@/common/components/logo';
import getStatusBadge from '@/common/components/get-status-badge';

export default function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <aside
      className={cn(
        'fixed bottom-0 start-0 z-50 h-full w-[270px] border-e-2 border-gray-100 bg-white dark:bg-gray-100/50 2xl:w-72',
        className
      )}
    >
      <div className='sticky top-0 z-40 bg-gray-0/10 px-6 pb-5 pt-5 dark:bg-gray-100/5 2xl:px-8 2xl:pt-6'>
        <Link href={'/'} aria-label='Site Logo'>
          <Logo className='max-w-[155px]' />
        </Link>
      </div>

      <SimpleBar className='h-[calc(100%-80px)]'>
        <div className='mt-4 pb-3 3xl:mt-6'>
          {berylliumMenuItems.map((item, index) => {
            const isActive = pathname === (item?.href as string);
            const pathnameExistInDropdowns: any = item?.menuItems?.filter(
              (dropdownItem) => dropdownItem.href === pathname
            );
            const isDropdownOpen = Boolean(pathnameExistInDropdowns?.length);
            const Icon = item.icon;

            return (
              <Fragment key={item.name + '-' + index}>
                {item?.href ? (
                  <>
                    {item?.menuItems ? (
                      <Collapse
                        defaultOpen={isDropdownOpen}
                        header={({ open, toggle }) => (
                          <div
                            onClick={toggle}
                            className={cn(
                              'group relative mx-3 flex cursor-pointer items-center justify-between rounded-full px-3 py-2 font-medium lg:my-1 2xl:mx-5 2xl:my-2',
                              isDropdownOpen
                                ? 'before:top-2/5 before:rounded-full-md text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-full before:bg-primary 2xl:before:-start-5'
                                : 'text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-700/90 dark:hover:text-gray-700'
                            )}
                          >
                            <span className='flex items-center'>
                              {item?.icon && (
                                <span
                                  className={cn(
                                    'me-2 inline-flex h-5 w-5 items-center justify-center rounded-full [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                    isDropdownOpen ? 'text-primary' : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700'
                                  )}
                                >
                                  <Icon />
                                </span>
                              )}
                              {item.name}
                            </span>

                            <PiCaretDownBold
                              strokeWidth={3}
                              className={cn(
                                'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                                open && 'rotate-0 rtl:rotate-0'
                              )}
                            />
                          </div>
                        )}
                      >
                        {item?.menuItems?.map((dropdownItem, index) => {
                          const isChildActive = pathname === (dropdownItem?.href as string);

                          const pathnameExistInSub: any = dropdownItem?.subMenuItems?.filter(
                            (dropdownItem) => dropdownItem.href === pathname
                          );
                          const isSubDropdownOpen = Boolean(pathnameExistInSub?.length);
                          const isSubActive = dropdownItem.subMenuItems?.some(
                            (i) => i?.href === pathname
                          );

                          const IIcon = dropdownItem.icon;

                          return (
                            <Link
                              href={dropdownItem?.href ?? '/'}
                              key={dropdownItem?.name + index}
                              className={cn(
                                `mx-3.5 mb-0.5 flex ${dropdownItem.subMenuItems ? "flex-col" : "flex-row"} items-start justify-between rounded-full px-3.5 py-2 font-medium capitalize last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5',
                               ${isChildActive ? 'text-primary' : 'text-gray-500 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900'}`
                              )}
                            >
                              <div className='flex items-center truncate'>
                                <span
                                  className={cn(
                                    'me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200',
                                    isChildActive ? 'bg-primary ring-[1px] ring-primary' : 'opacity-40'
                                  )}
                                />{' '}
                                <span className='truncate'>{dropdownItem?.name}</span>
                              </div>
                              {dropdownItem?.badge?.length
                                ? getStatusBadge(dropdownItem?.badge)
                                : null}
                              {dropdownItem?.subMenuItems ? (
                                <Collapse
                                  defaultOpen={isSubDropdownOpen}
                                  className='testing [&_>_div]:mx-4 [&_>_div]:my-2 [&_>_div]:px-4 [&_>_div]:py-2 [&_>_div]:lg:my-0 [&_>_div]:2xl:mx-0 [&_>_div]:2xl:my-0'
                                  panelClassName='[&_>_a]:px-0 xl:!mt-2 2xl!:mt-2 3xl:!mt-2 [&_>_a]:mx-0 [&_>_a]:py-0 [&_>_a]:ps-4 [&_>_a]:my-0 space-y-5'
                                  header={({ open, toggle }) => (
                                    <div
                                      onClick={toggle}
                                      className={cn(
                                        'group relative flex cursor-pointer items-center justify-between rounded-full px-4 py-2 font-medium duration-200',
                                        isSubActive || isSubDropdownOpen
                                          ? 'bg-gray-100 text-primary dark:bg-gray-100 dark:text-primary-lighter'
                                          : 'hover:bg-gray-100 hover:text-gray-900'
                                      )}
                                    >
                                      <span className={'flex items-center gap-3 '}>
                                        <IIcon className='h-5 w-5' />
                                        {dropdownItem.name}
                                      </span>
                                      <PiCaretDownBold
                                        strokeWidth={3}
                                        className={cn(
                                          'h-3.5 w-3.5 -rotate-90 text-gray-500 transition-transform duration-200 rtl:rotate-90',
                                          open && 'rotate-0 rtl:rotate-0',
                                          (isSubActive || isSubDropdownOpen) &&
                                            'text-primary dark:text-primary-lighter'
                                        )}
                                      />
                                    </div>
                                  )}
                                >
                                  {dropdownItem?.subMenuItems?.map((subMenuItem, index) => {
                                    const isChildActive =
                                      pathname === (subMenuItem?.href as string);

                                    return (
                                      <Link
                                        href={subMenuItem?.href}
                                        key={subMenuItem?.name + index}
                                        className={cn(
                                          'mx-3.5 mb-0.5 flex items-center justify-between rounded-md px-3.5 py-2 font-medium capitalize duration-200 last-of-type:mb-1 lg:last-of-type:mb-2 2xl:mx-5',
                                          isChildActive
                                            ? 'text-primary'
                                            : 'text-gray-500 hover:text-primary'
                                        )}
                                      >
                                        <div className='flex items-center truncate'>
                                          <span
                                            className={cn(
                                              'bg-white',
                                              'me-[18px] ms-1 inline-flex h-1 w-1 rounded-full bg-current transition-all duration-200',
                                              isChildActive
                                                ? 'bg-primary text-primary ring-[1px] ring-primary'
                                                : 'opacity-40'
                                            )}
                                          />
                                          <span className='truncate'>{subMenuItem?.name}</span>
                                        </div>
                                        {subMenuItem?.badge?.length
                                          ? getStatusBadge(subMenuItem?.badge)
                                          : null}
                                      </Link>
                                    );
                                  })}
                                </Collapse>
                              ) : null}
                            </Link>
                          );
                        })}
                      </Collapse>
                    ) : (
                      <Link
                        href={item?.href}
                        className={cn(
                          'group relative mx-3 my-0.5 flex items-center justify-between rounded-full px-3 py-2 font-medium capitalize lg:my-1 2xl:mx-5 2xl:my-2',
                          isActive
                            ? 'before:top-2/5 text-primary before:absolute before:-start-3 before:block before:h-4/5 before:w-1 before:rounded-ee-full before:rounded-se-full before:bg-primary 2xl:before:-start-5'
                            : 'text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-700/90'
                        )}
                      >
                        <div className='flex items-center truncate'>
                          {item?.icon && (
                            <span
                              className={cn(
                                'me-2 inline-flex h-5 w-5 items-center justify-center rounded-full [&>svg]:h-[20px] [&>svg]:w-[20px]',
                                isActive ? 'text-primary' : 'text-gray-800 dark:text-gray-500 dark:group-hover:text-gray-700'
                              )}
                            >
                              <Icon />
                            </span>
                          )}
                          <span className='truncate'>{item.name}</span>
                        </div>
                      </Link>
                    )}
                  </>
                ) : (
                  <Title
                    as='h6'
                    className={cn(
                      'mb-2 truncate px-6 text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-500 2xl:px-8',
                      index !== 0 && 'mt-6 3xl:mt-7'
                    )}
                  >
                    {item.name}
                  </Title>
                )}
              </Fragment>
            );
          })}
        </div>
      </SimpleBar>
    </aside>
  );
}
