package com.questrush.project.web;

import com.questrush.project.domain.Building;
import com.questrush.project.services.BuildingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/building")
@CrossOrigin
public class BuildingController {

    @Autowired
    private BuildingService service;

    @PostMapping("/init")
    public void initialize(){
        service.initialize();
    }

    @GetMapping("/type/{typeId}")
    public Iterable<Building> findByType(@PathVariable int typeId){
        return service.findByType(typeId);
    }

    @GetMapping("/empty")
    public Iterable<Building> mostEmptyNow(){
        return service.mostEmptyNow();
    }
}
