import React, { Component } from 'react'
import "./detailPage.css";
import Container from "@material-ui/core/Container"

export default class detailPage extends Component {
    render() {
        return (
          <React.Fragment>
            <Container maxWdith="lg">
              <h1 className="display-4 text-center">
                Detail Page
              </h1>
              <div class="scheduleContainer MuiGrid-root">
                <div class="time start-800">8:00</div>
                <div class="time start-830">8:30</div>
                <div class="time start-900">9:00</div>
                <div class="time start-930">9:30</div>
                <div class="time start-1000">10:00</div>
                <div class="time start-1030">10:30</div>
                <div class="time start-1100">11:00</div>
                <div class="time start-1130">11:30</div>
                <div class="time start-1200">12:00</div>
                <div class="time start-1230">12:30</div>
                <div class="time start-1300">13:00</div>
                <div class="time start-1330">13:30</div>
                <div class="time start-1400">14:00</div>
                <div class="time start-1430">14:30</div>
                <div class="time start-1500">15:00</div>
                <div class="time start-1530">15:30</div>
                <div class="time start-1600">16:00</div>
                <div class="time start-1630">16:30</div>
                <div class="time start-1700">17:00</div>
                <div class="time start-1730">17:30</div>
                <div class="time start-1800">18:00</div>
                <div class="time start-1830">18:30</div>
                <div class="time start-1900">19:00</div>
                <div class="time start-1930">19:30</div>
                <div class="time start-2000">20:00</div>
                <div class="time start-2030">20:30</div>
                <div class="time start-2100">21:00</div>
                <div class="time start-2130">21:30</div>
                <div class="event stage-saturn start-800 end-930 length-4">
                  Arrival and registration <span>Registration Area</span>
                </div>
                <div class="event stage-earth start-1000 end-1000 length-4">
                  Knes 260<span>take 3 lines</span>
                </div>
                <div class="event stage-earth start-1030 end-1030 length-4">
                  Knes 201<span> take 3 lines</span>
                </div>
                <div class="event stage-earth start-1100 end-1100 length-4">
                  Knes 381<span>Jack Simpson Gym</span>
                </div>
                <div class="event stage-earth start-1130 end-1130 length-4">
                  Dinos practice <span>Gold Gym</span>
                </div>
                <div class="event stage-mercury start-1200 end-1600 length-1">
                  Volleyball practice<span>Red Gym</span>
                </div>
                <div class="event stage-saturn start-1200 end-1300 length-1">
                  High School matches<span>Gold Gym</span>
                </div>
                <div class="event stage-earth start-1630 end-1630 length-4">
                  Knes 463<span>Take 3 lines</span>
                </div>
                <div class="event stage-saturn start-1730 end-1730 length-4">
                  Knes 503<span>Take Red Gym</span>
                </div>
                <div class="event stage-earth start-1800 end-1900 length-1">
                  Dinos practice<span>Take Goldgym</span>
                </div>
                <div class="event stage-jupiter start-1800 end-1900 length-2">
                  Ice hockey<span>Take Oval</span>
                </div>
                <div class="event stage-venus start-1930 end-2130 length-2">
                  Volleyball practice <span>Jack Simpson Gym</span>
                </div>
              </div>
            </Container>
          </React.Fragment>
        );
    }
}
