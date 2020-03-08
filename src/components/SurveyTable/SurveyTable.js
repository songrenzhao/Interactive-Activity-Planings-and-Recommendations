import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

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
  createData('Performing_Art', 'Dancing'),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },

}));

export const SurveyTable = () => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Survey Result
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Questions (By Category)</StyledTableCell>
                <StyledTableCell align="left">Answer1</StyledTableCell>
                <StyledTableCell align="left">Answer2</StyledTableCell>
                <StyledTableCell align="left">Answer3</StyledTableCell>
                <StyledTableCell align="left">Answer4</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Questions}>
                  <StyledTableCell component="th" scope="row">
                    {row.Questions}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.Answer1}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer2}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer3}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer4}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </main>
  );
};
