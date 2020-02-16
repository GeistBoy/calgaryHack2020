package com.questrush.project.web;

import com.questrush.project.domain.Events;
import com.questrush.project.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {

    @Autowired
    private EventService eventService;

    @PostMapping("/init")
    public ResponseEntity<String> initialize(){
        eventService.initialize();
        return new ResponseEntity<String>("OK", HttpStatus.CREATED);
    }

//    @GetMapping("/mostRecent")
//    public Iterable<Events> listRecent(){
//        return eventService.listTotalRecent();
//    }

    @GetMapping("/building/{buildingId}")
    public Iterable<Events> findByBuildingId(@PathVariable long buildingId){
        return eventService.findByBuilding(buildingId);
    }
}
