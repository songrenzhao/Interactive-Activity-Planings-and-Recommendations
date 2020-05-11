/* eslint-disable import/no-unresolved */
/* eslint-disable no-undefined */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation, useQuery } from '@apollo/react-hooks';
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

const UPDATESCHEDULE = gql`
  mutation updateSchedule($schedule: [scheduleInput]) {
    updateSchedule(schedule: $schedule) {
        status
    }
}
`;

const VIEWSCHEDULE = gql`
  {
    viewSchedule {
      title
      startDate
      endDate
      id
      notes
    }
}
`;

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

const parseDateToString = (data) => {
  const parsedData = data.map((date) => {
    const {
      __typename, endDate, startDate, ...restDate
    } = date;
    return {
      ...restDate,
      endDate: new Date(parseInt(endDate, 10)),
      startDate: new Date(parseInt(startDate, 10)),
    };
  });
  console.log(parsedData);
  return parsedData;
};

const parseStringToDate = (data) => {
  const parsedData = data.map((date) => {
    const {
      endDate, startDate, id, ...restDate
    } = date;
    return {
      ...restDate,
      id: parseInt(id, 10),
      endDate: Date.parse(endDate).toString(),
      startDate: Date.parse(startDate).toString(),
    };
  });
  console.log(parsedData);
  return parsedData;
};

export const Schedule = () => {
  const [scheduleInfo, setScheduleInfo] = useState({
    data: [],
    currentDate: new Date(),
  });
  const [updateSchedule] = useMutation(UPDATESCHEDULE);
  const { error, loading } = useQuery(VIEWSCHEDULE, {
    onCompleted: (data) => {
      setScheduleInfo({
        currentDate: new Date(),
        data: parseDateToString(data.viewSchedule),
      });
    },
  });

  const commitChanges = async ({ added, changed, deleted }) => {
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
    setScheduleInfo(updatedScheduleInfo);
    console.log(updatedScheduleInfo);
    console.log(parseStringToDate(updatedScheduleInfo.data));
    await updateSchedule({
      variables: {
        schedule: parseStringToDate(updatedScheduleInfo.data),
      },
    });
  };

  const currentDateChange = (currentDate) => {
    const updatedScheduleInfo = scheduleInfo;
    updatedScheduleInfo.currentDate = currentDate;
    setScheduleInfo(updatedScheduleInfo);
    console.log(scheduleInfo.data);
  };
  if (loading) { return <div>Loading…</div>; }
  if (error) { return <div>Error</div>; }
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
