import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/form">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Survey" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/participant">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Participants" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/schedule">
      <ListItemIcon>
        <ScheduleIcon />
      </ListItemIcon>
      <ListItemText primary="Schedule" />
    </ListItem>
    <ListItem button component={Link} to="/dashboard/planning">
      <ListItemIcon>
        <ViewWeekIcon />
      </ListItemIcon>
      <ListItemText primary="Planning" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <></>
);
