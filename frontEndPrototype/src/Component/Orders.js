import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, time_period, event, status) {
  return { id, time_period, event, status };
}

const rows = [
  createData(
    0,
    "16 Feb, 2020",
    "Hackathon",
    "ICT102, On Campus",
  ),
  createData(
    1,
    "17 Feb, 2020",
    "Family Day Canada",
    "Public Holidays",
  ),
  createData(
    2,
    "25 Feb, 2020",
    "Managing Risk in Projects",
    "Univeristy of Calgary, Calgary",
  ),
  createData(
    3,
    "29 Feb, 2020",
    "Student Leadership Conference",
    "Univeristy of Calgary, Calgary",
  ),
  createData(
    4,
    "10 Apr, 2020",
    "Good Friday",
    "Public Holiday",
  ),
  createData(
    5,
    "13 Apr, 2020",
    "Easter Monday",
    "Public Hoilday",
  ),
  createData(
    6,
    "18 May, 2020",
    "Victoria Day",
    "Public Hoilday",
  ),
  createData(
    7,
    "1 Jul, 2020",
    "Canada Day",
    "Public Hoilday",
  ),
  createData(
    8,
    "12 Oct, 2020",
    "Thanksgiving",
    "Public Hoilday",
  )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Upcoming event</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time period</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.time_period}</TableCell>
              <TableCell>{row.event}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
      </div>
    </React.Fragment>
  );
}
