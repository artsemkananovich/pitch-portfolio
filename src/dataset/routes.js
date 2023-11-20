import React from 'react';
import Home from 'pages/Home';
import Work from 'pages/Work';
import Project from 'pages/Work/Project';

export const PrimaryRoutes = [
  {
    path: '/',
    title: 'Home',
    element: <Home />,
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
