import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    cName: 'nav-text'
  },
  {
    title: 'Company',
    path: '/selectcompany',
    icon: <FaIcons.FaIndustry />,
    cName: 'nav-text'
  },
  {
    title: 'Market',
    path: '/selectmarket',
    cName: 'nav-text'
  },
  {
    title: 'Analysis',
    path: '/analysis',
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/companynews',
    cName: 'nav-text'
  },
  {
    title: 'notes',
    path: '/notes',
    cName: 'nav-text'
  },
  {
    title: 'info',
    path: '/info',
    cName: 'nav-text'
  }
];