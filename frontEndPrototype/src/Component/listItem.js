import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import FastFood from "@material-ui/icons/Fastfood";
import Sport_BasketBall from "@material-ui/icons/SportsBasketball";
import Local_Parking from "@material-ui/icons/LocalParking";
import {Redirect} from "react-router-dom"

const toDashboard = () => {
  window.location.href = "./dashboard";
};

const toStudy = () => {
  window.location.href = "./study";
};

const toLiving = () => {
  window.location.href = "./living";
};

const toExercise = () => {
  window.location.href = "./exercising";
};

const toParking = () => {
  window.location.href = "./parking";
};

export const mainListItems = (
         <div>
           <ListItem button onClick={() => toDashboard()}>
             <ListItemIcon>
               <DashboardIcon />
             </ListItemIcon>
             <ListItemText primary="Dashboard" />
           </ListItem>
           <ListItem button onClick={() => toStudy()}>
             <ListItemIcon>
               <PeopleIcon />
             </ListItemIcon>
             <ListItemText primary="Study" />
           </ListItem>
           <ListItem button onClick={() => toLiving()}>
             <ListItemIcon>
               <FastFood />
             </ListItemIcon>
             <ListItemText primary="Living" />
           </ListItem>
           <ListItem button onClick={() => toExercise()}>
             <ListItemIcon>
               <Sport_BasketBall />
             </ListItemIcon>
             <ListItemText primary="Exercise" />
           </ListItem>
           <ListItem button onClick={() => toParking()}>
             <ListItemIcon>
               <Local_Parking />
             </ListItemIcon>
             <ListItemText primary="Parking" />
           </ListItem>
         </div>
       );

