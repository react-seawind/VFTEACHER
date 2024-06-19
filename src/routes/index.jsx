import { lazy } from 'react';

import Profile from '../pages/Profile';
import ECommerce from '../pages/Dashboard/ECommerce';
import SignIn from '../pages/Authentication/SignIn';
import AttendanceListing from '../components/Attendance/Listing';
import AttendancedAdd from '../components/Attendance/Add';
import AttendanceEdit from '../components/Attendance/Edit';
import HomeworkListing from '../components/HomeWork/Listing';
import HomeworkAdd from '../components/HomeWork/Add';
import AttendanceAdd from '../components/Attendance/Add';
import HomeworkEdit from '../components/HomeWork/Edit';
import PTMListing from '../components/PTM/Listing';
import PTMAdd from '../components/PTM/Add';
import PTMEdit from '../components/PTM/Edit';

const coreRoutes = [
  {
    path: '/login',
    title: 'Login',
    component: SignIn,
  },
  {
    path: '/profile', //Profile
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/dashboard', //dashboard
    title: 'dashboard',
    component: ECommerce,
  },

  // =================standard=============
  {
    path: '/attendance/listing',
    component: AttendanceListing,
  },
  {
    path: '/attendance/add',
    component: AttendanceAdd,
  },
  {
    path: '/attendance/edit/:Id',
    component: AttendanceEdit,
  },
  // =================homework=============
  {
    path: '/homework/listing',
    component: HomeworkListing,
  },
  {
    path: '/homework/add',
    component: HomeworkAdd,
  },
  {
    path: '/homework/edit/:Id',
    component: HomeworkEdit,
  },
  // =================PTM=============
  {
    path: '/ptm/listing',
    component: PTMListing,
  },
  {
    path: '/ptm/add',
    component: PTMAdd,
  },
  {
    path: '/ptm/edit/:Id',
    component: PTMEdit,
  },
];

const routes = [...coreRoutes];
export default routes;
