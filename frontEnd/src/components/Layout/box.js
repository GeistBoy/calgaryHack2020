import React, { Component } from 'react'
import Typography from "@material-ui/core/Typography";

export default class suqareItem extends Component {
    render() {
        return (
          <React.Fragment>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              title
            </Typography>
            <Typography component="p" variant="h7">
              Current Status:
            </Typography>
            <Typography component="p" variant="h5">
              CLOSED
            </Typography>
            <Typography component="p" variant="h7">
              Current Number of People:
            </Typography>
            <Typography component="p" variant="h6">
              0
            </Typography>
            <Typography component="p" variant="h6" color="#F44336">
              Flow Rate: None {/*Should be light green here! */}
            </Typography>

            <Typography>
              <img src="./grey.png" style={{ height: 30, width: 30 }} />
            </Typography>

            <Typography
              color="textSecondary"
              className="depositContext"
            ></Typography>
          </React.Fragment>
        );
    }
}
