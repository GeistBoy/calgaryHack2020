import React, { Component } from "react";
import Item from "./Project/Item";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmptyBuilding } from "../actions/buildingActions";
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"

class Dashboard extends Component {

  componentDidMount() {
    this.props.getEmptyBuilding();
  }

  render() {
    const { buildings } = this.props.building;

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">
                Most Recent Empty Buildings
              </h1>
              <hr />
              <Container maxWidth="lg" >
                <Grid container spacing={1}>
                  {buildings.map(building => (
                    <Item key={building.id} building={building} />
                  ))}
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  building: PropTypes.object.isRequired,
  getEmptyBuilding: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  building: state.building
});

export default connect(mapStateToProps, { getEmptyBuilding })(Dashboard);
