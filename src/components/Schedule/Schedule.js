/* eslint-disable import/no-unresolved */
/* eslint-disable no-undefined */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  WeekView,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
  Toolbar,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

export const appointments = [
  {
    title: 'Install New Database',
    startDate: new Date(2018, 5, 27, 9, 45),
    endDate: new Date(2018, 5, 27, 11, 15),
    id: 0,
    location: 'Room 1',
  }, {
    title: 'Approve New Online Marketing Strategy',
    startDate: new Date(2018, 5, 27, 12, 0),
    endDate: new Date(2018, 5, 27, 14, 0),
    id: 1,
    location: 'Room 3',
  }, {
    title: 'Upgrade Personal Computers',
    startDate: new Date(2018, 5, 27, 15, 15),
    endDate: new Date(2018, 5, 27, 16, 30),
    id: 2,
    location: 'Room 3',
  },
];

const Appointment = ({
  children, style, ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      fontSize: 15,
    }}
  >
    {children}
  </Appointments.Appointment>
);

export const Schedule = () => {
  const [scheduleInfo, setScheduleInfo] = useState({
    data: appointments,
    currentDate: '2018-06-27',
  });

  const commitChanges = ({ added, changed, deleted }) => {
    console.log(added, changed, deleted);
    const updatedScheduleInfo = { ...scheduleInfo };
    let { data } = updatedScheduleInfo;
    if (added !== undefined) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed !== undefined) {
      data = data.map((appointment) => {
        const changedAppointment = changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] } : appointment;
        return changedAppointment;
      });
    }
    if (deleted !== undefined) {
      data = data.filter((appointment) => appointment.id !== deleted);
      console.log(data);
    }
    updatedScheduleInfo.data = data;
    console.log(updatedScheduleInfo);
    setScheduleInfo(updatedScheduleInfo);
  };

  const currentDateChange = (currentDate) => {
    const updatedScheduleInfo = scheduleInfo;
    updatedScheduleInfo.currentDate = currentDate;
    setScheduleInfo(updatedScheduleInfo);
    console.log(scheduleInfo.data);
  };

  return (
    <Paper>
      <Scheduler
        data={scheduleInfo.data}
        height={900}
      >
        <ViewState
          defaultCurrentDate={scheduleInfo.currentDate}
          onCurrentDateChange={currentDateChange}
        />
        <DayView
          startDayHour={9}
          endDayHour={17}
        />
        <WeekView
          startDayHour={9}
          endDayHour={17}
          excludedDays={[0, 6]}
        />
        <EditingState
          onCommitChanges={commitChanges}
        />
        <IntegratedEditing />
        <ConfirmationDialog />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <Appointments
          appointmentComponent={Appointment}
        />
        <AppointmentTooltip
          showOpenButton
          showDeleteButton
        />
        <AppointmentForm />
      </Scheduler>
    </Paper>
  );
};
