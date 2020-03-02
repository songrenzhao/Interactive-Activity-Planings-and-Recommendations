import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Questions, Answer1, Answer2, Answer3, Answer4) {
  return {
    Questions, Answer1, Answer2, Answer3, Answer4,
  };
}

const rows = [
  createData('Locations', 'Apple', 'Samsung', 'GameStop', 'Mcdonalds'),
  createData('Food', 'Popeyes', 'Burger King', 'Pizza', 'Wendys'),
  createData('Sport', 'Basketball', 'FootBall', 'Skateboard', 'Swimming'),
  createData('Art&craft', 'Drawing', 'Clay Modeling', 'Painting', 'Beading'),
  createData('Health&Fitness', 'Exercising', 'Health Cooking Class', 'Meditation', 'Yoga'),
  createData('Performing Art', 'Dancing'),
];

export const SurveyTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell>Surveys Questions and Answers</TableCell>
            <TableCell align="left">Answer1</TableCell>
            <TableCell align="left">Answer2</TableCell>
            <TableCell align="left">Answer3</TableCell>
            <TableCell align="left">Answer4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.Answer1}</TableCell>
              <TableCell align="left">{row.Answer2}</TableCell>
              <TableCell align="left">{row.Answer3}</TableCell>
              <TableCell align="left">{row.Answer4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
