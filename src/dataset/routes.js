import React from 'react';
import Main from 'pages/Main';
import Work from 'pages/Work';
import Project from 'pages/Work/Project';

export const PrimaryRoutes = [
  {
    path: '/',
    title: 'Main',
    element: <Main />,
    children: null,
  },
  {
    path: '/work',
    title: 'Work',
    element: <Work />,
    children: {
      path: ':projectId',
      title: 'Project',
      element: <Project />,
    },
  },
];
