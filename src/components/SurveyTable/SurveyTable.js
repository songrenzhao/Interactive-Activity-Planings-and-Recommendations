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
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

// function createData(Questions, Answer1, Answer2, Answer3, Answer4) {
//   return {
//     Questions, Answer1, Answer2, Answer3, Answer4,
//   };
// }

// const rows = [
//   createData('Locations', 'Apple', 'Samsung', 'GameStop', 'Mcdonalds'),
//   createData('Food', 'Popeyes', 'Burger King', 'Pizza', 'Wendys'),
//   createData('Sport', 'Basketball', 'FootBall', 'Skateboard', 'Swimming'),
//   createData('Art&craft', 'Drawing', 'Clay Modeling', 'Painting', 'Beading'),
//   createData('Health&Fitness', 'Exercising', 'Health Cooking Class', 'Meditation', 'Yoga'),
//   createData('Performing_Art', 'Dancing'),
// ];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
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

const viewSurveys = gql`
  query surveys($name: String, $date: String!) {
      surveys(name: $name, date: $date) {
        results {
          question
          answer
        }
      }
  }
`;

export const SurveyTable = () => {
  const classes = useStyles();
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const name = params.get('query');
  const createdAt = params.get('createdAt');
  const { loading, error, data } = useQuery(viewSurveys, {
    variables: {
      name,
      date: new Date(parseInt(createdAt, 10) - 1),
    },
  });

  if (loading) { return <div>Loading…</div>; }
  if (error) { return <div>Error</div>; }
  const [surveys] = data.surveys;
  const { results } = surveys;
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
                <StyledTableCell align="left">Answer5</StyledTableCell>
                <StyledTableCell align="left">Answer6</StyledTableCell>
                <StyledTableCell align="left">Answer7</StyledTableCell>
                <StyledTableCell align="left">Answer8</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((result) => (
                <StyledTableRow key={results.question}>
                  <StyledTableCell component="th" scope="row">
                    {result.question}
                  </StyledTableCell>
                  {result.answer.map((answer) => (
                    <StyledTableCell align="left">{answer}</StyledTableCell>
                  ))}
                  {/* <StyledTableCell align="left">{row.Answer2}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer3}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer4}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer5}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer6}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer7}</StyledTableCell>
                  <StyledTableCell align="left">{row.Answer8}</StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </main>
  );
};
