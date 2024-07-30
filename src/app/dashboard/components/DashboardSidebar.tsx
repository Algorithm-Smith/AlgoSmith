'use client'

import React, { useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import type { FC } from 'react';

export const DashboardSidebar: FC = function () {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className='mb-2 p-2 text-white bg-blue-600 rounded'
      >
        Toggle Sidebar
      </button>
      <Sidebar
        aria-label='Sidebar with multi-level dropdown example'
        collapsed={isCollapsed}
        id='sidebar'
        className={twMerge(
          'fixed inset-y-0 left-0 z-20 mt-16 flex h-full shrink-0 flex-col border-r border-gray-200 duration-75 dark:border-gray-700 lg:flex',
          isCollapsed && 'hidden w-16'
        )}
      >
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href='#' icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiViewBoards}>
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href='#' icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
