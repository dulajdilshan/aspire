import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  table: {
    minWidth: 80,
  },
});

function createData(day, hours, minutes) {
  return { day, hours, minutes };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const rows = [
  createData('Monday', 8, 0),
  createData('Tuesday', 8, 45),
  createData('Wednesday', 9, 30),
  createData('Thursday', 7, 55),
  createData('Friday', 7, 34)
];

export default function HistoryCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <CardContent>
    {/* <Typography className={classes.title} align="left" color="textSecondary" gutterBottom> */}
     <div><h3 align="left">Last Days (Summary)</h3></div> 
    {/* </Typography> */}
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Day of the week</TableCell>
            <TableCell align="right">Working Hours&nbsp;</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.day}
              </TableCell>
              <TableCell align="right">{row.hours} hrs {row.minutes} mins</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>
    </Card>
  );
}
