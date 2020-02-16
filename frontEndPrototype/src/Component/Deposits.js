import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

function BusinessLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Business Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        CLOSED
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6" id="number">
        0
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Low {/*Should be light green here! */}
      </Typography>

      <Typography>
        <img src="./grey.png" style={{ height: 25, width: 25 }} />
      </Typography>

      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}

function HealthSciencesLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title onClick={
        window.onload = function() {
          for (let x = 1; x < 99; x++) {
            setTimeout(() => {
              let people1 = this.parseInt(document.querySelector("#number1").textContent);
              if (people1 > 0) {
                document.querySelector("#number1").textContent = this.Math.random() > 0.5 ? people1+1: people1-1;
              }

              let people2 = this.parseInt(document.querySelector("#number6").textContent);
              if (people2 > 0) {
                document.querySelector("#number6").textContent = this.Math.random() > 0.5 ? people2+2: people2-1;
              }

              let people3 = this.parseInt(document.querySelector("#number3").textContent);
              if (people3 > 0) {
                document.querySelector("#number3").textContent = this.Math.random() > 0.5 ? people3+3: people3-1;
              }
            }, 5000*x);
          }
        }
      }>Health Sciences Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6" id="number1">
        52
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Middle {/*Should be green here! */}
      </Typography>
        <Typography>
        <img
          src="./orange.jpg"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}

function DoucetteLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Doucette Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6" id="number2">
        20
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Middle {/*Should be green here! */}
      </Typography>
      <Typography>
        <img
          src="./green.png"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}

function GallagherLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Gallagher Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6" id="number3">
        20
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Middle {/*Should be green here! */}
      </Typography>
      <Typography>
        <img
          src="./orange.jpg"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}

function BennettJonesLawLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Bennett Jones Law Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6">
        14
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Low {/*Should be green here! */}
      </Typography>
      <Typography>
        <img
          src="./green.png"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}

function TaylorFamilyDigitalLibrary() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title onClick={
        window.onmousemove
      }>Taylor Family Digital Library</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6" id="number6">
        125
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: High {/*Should be red here! */}
      </Typography>
      <Typography>
        <img
          src="./red.png"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}

function DiningCenter() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title onClick={
        window.onload = function() {
          for (let x = 1; x < 99; x++) {
            setTimeout(() => {
              let people1 = this.parseInt(document.querySelector("#number5").textContent);
              if (people1 > 0) {
                document.querySelector("#number5").textContent = this.Math.random() > 0.5 ? people1+2: people1-1;
              }
            }, 10000*x);
          }
        }
      }>Dining Centre</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h6" id="number5">
        40
      </Typography>
      <Typography component="p" variant="h6" color="#F44336">
        Flow Rate: Middle {/*Should be red here! */}
      </Typography>
      <Typography>
        <img
          src="./orange.jpg"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}

function MachallParkade() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title onClick={
        window.onload = function() {
          for (let x = 1; x < 99; x++) {
            setTimeout(() => {
              let people1 = this.parseInt(document.querySelector("#number10").textContent);
              if (people1 > 0) {
                document.querySelector("#number10").textContent = this.Math.random() > 0.5 ? people1+2: people1-1;
              }

              people1 = this.parseInt(document.querySelector("#number11").textContent);
              if (people1 > 0) {
                document.querySelector("#number11").textContent = this.Math.random() > 0.5 ? people1+2: people1-1;
              }

              people1 = this.parseInt(document.querySelector("#number22").textContent);
              if (people1 > 0) {
                document.querySelector("#number22").textContent = this.Math.random() > 0.5 ? people1+2: people1-1;
              }
            }, 10000*x);
          }
        }
      }>MacEven Hall Parkade</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Carslots :
      </Typography>
      <Typography component="p" variant="h4" id="number10">
        173
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <Typography>
        <img
          src="./green.png"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function ArtParkade() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Art Parkade</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Carslots :
      </Typography>
      <Typography component="p" variant="h4" id="number11">
        112
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <Typography>
        <img
          src="./green.png"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function Lot11() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Lot 11</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Carslots :
      </Typography>
      <Typography component="p" variant="h4" id="number22">
        59
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <Typography>
        <img
          src="./orange.jpg"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function Lot10() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Lot 10</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Carslots :
      </Typography>
      <Typography component="p" variant="h4">
        67
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <Typography>
        <img
          src="./orange.jpg"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function SwimmingPool() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Swimming Pool</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Current Number of People:
      </Typography>
      <Typography component="p" variant="h4">
        37
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <Typography>
        <img
          src="./orange.jpg"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <div>
        <Link color="primary" href="/swimming_pool">
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function BasketballGym() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Basketball Gym</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Basketball Courts :
      </Typography>
      <Typography component="p" variant="h4">
        2
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function RedGym() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Red Gym</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Basketball Courts :
      </Typography>
      <Typography component="p" variant="h4">
        3
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <Typography>
        <img
          src="./green.png"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <div>
        <Link color="primary" href="/red_gym">
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function GoldGym() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Gold Gym</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Basketball Courts :
      </Typography>
      <Typography component="p" variant="h4">
        0
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <Typography>
        <img
          src="./red.png"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <div>
        <Link color="primary" href="/gold_gym">
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

function JackSimpsonGym() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Jack Simpson Gym</Title>
      <Typography component="p" variant="h7">
        Current Status:
      </Typography>
      <Typography component="p" variant="h5">
        OPEN
      </Typography>
      <Typography component="p" variant="h7">
        Available Basketball Courts :
      </Typography>
      <Typography component="p" variant="h4" id="number">
        4
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
      <Typography>
        <img
          src="./orange.jpg"
          style={{ height: 25, width: 25 }}
        />
      </Typography>
      <div>
        <Link color="primary" href="/jack_simpson_gym">
          Check details
        </Link>
      </div>
    </React.Fragment>
  );
}

export default BusinessLibrary;
export {BennettJonesLawLibrary ,Lot11, JackSimpsonGym, RedGym, GoldGym, DoucetteLibrary, GallagherLibrary, BusinessLibrary, HealthSciencesLibrary, TaylorFamilyDigitalLibrary, DiningCenter, ArtParkade, MachallParkade, Lot10, SwimmingPool, BasketballGym};

// import {BennettJonesLawLibrary ,Lot11, JackSimpsonGym, RedGym, GoldGym, DoucetteLibrary, GallagherLibrary, BusinessLibrary, HealthSciencesLibrary, TaylorFamilyDigitalLibrary, DiningCenter, ArtParkade, MachallParkade, Lot10, SwimmingPool, BasketballGym} from "./Deposits";