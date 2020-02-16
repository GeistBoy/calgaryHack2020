import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data1 = [
  createData("00:00", 280),
  createData("01:00", 150),
  createData("02:00", 80),
  createData("03:00", 40),
  createData("04:00", 10),
  createData("05:00", 0),
  createData("06:00", 0),
  createData("07:00", 20),
  createData("08:00", 80),
  createData("09:00", 120),
  createData("10:00", 200),
  createData("11:00", 290),
  createData("12:00", 350),
  createData("13:00", 450),
  createData("14:00", 600),
  createData("15:00", 700),
  createData("16:00", 1000),
  createData("17:00", 950),
  createData("18:00", 900),
  createData("19:00", 1200),
  createData("20:00", 1000),
  createData("21:00", 750),
  createData("22:00", 580),
  createData("23:00", 400)
];

const data2 = [
  createData("00:00", 0),
  createData("01:00", 0),
  createData("02:00", 0),
  createData("03:00", 0),
  createData("04:00", 0),
  createData("05:00", 0),
  createData("06:00", 30),
  createData("07:00", 40),
  createData("08:00", 70),
  createData("09:00", 75),
  createData("10:00", 90),
  createData("11:00", 80),
  createData("12:00", 70),
  createData("13:00", 55),
  createData("14:00", 80),
  createData("15:00", 120),
  createData("16:00", 140),
  createData("17:00", 120),
  createData("18:00", 120),
  createData("19:00", 160),
  createData("20:00", 160),
  createData("21:00", 160),
  createData("22:00", 140),
  createData("23:00", 20)
];


const data = [
  createData("1st year(semester1)", 3.8),
  createData("1st year(semester2)", 3.2),
  createData("2nd year(semester1)", 2.3),
  createData("2nd year(semester2)", 2.4),
  createData("3rd year(semester1)", 2.8),
  createData("3rd year(semester2)", 3.3),
  createData("4th year(semester1)", undefined),
  createData("4th year(semester2)", undefined),
];

function Db() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>University life</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 26
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              People
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}


 function Red() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Red Gym</Title>
      <ResponsiveContainer>
        <LineChart
          data={data1}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 26
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              People
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

function Exercise() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>GYM</Title>
      <ResponsiveContainer>
        <LineChart
          data={data2}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 26
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              People
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

function Living() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>DC</Title>
      <ResponsiveContainer>
        <LineChart
          data={data2}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 26
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              People
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export default Db;
export {Red, Living, Exercise};

//import {Park, Study, Living, Exercise} from "./Component/Chart";
