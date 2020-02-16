import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import detailPage from "./detailPage";

class Item extends Component {
  render() {
    const { building } = this.props;

    let type = "";
    if (building.buildingType == 0) {
      type = "Study";
    } else if (building.buildingType == 1) {
      type = "Living";
    } else if (building.buildingType == 2) {
      type = "Exercise";
    } else if (building.buildingType == 3) {
      type = "Parking";
    }

    let color = null;
    let load = building.load * 100;

    if (load === 0) {
      color = <img src="./grey.png" style={{ height: 25, width: 25 }} />;
    } else if (load > 0 && load <= 40) {
      color = <img src="./green.png" style={{ height: 25, width: 25 }} />;
    } else if (load > 40 && load <= 70) {
      color = <img src="./orange.jpg" style={{ height: 25, width: 25 }} />;
    } else if (load > 70) {
      color = <img src="./red.png" style={{ height: 25, width: 25 }} />;
    }

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{building.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{type}</Card.Subtitle>
          <Card.Text>
            Capacity: {building.capacity} <br></br>
            Current: {parseInt(building.capacity * building.load)} <br></br>
            Load: {Number((building.load * 100).toFixed(1))} % <br></br>
            Update at: {building.update_at} <br></br>
            {color}
          </Card.Text>
          <Card.Link href="/detailPage">Details</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Item;
