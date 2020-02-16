package com.questrush.project.services;

import com.questrush.project.domain.Events;
import com.questrush.project.repositories.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.Random;

@Service
public class EventService {

    int totalIDs = 4;

    @Autowired
    private EventRepo eventRepo;

    public void initialize(){
        Random random = new Random();
        ArrayList<Events> list = new ArrayList<>();
        for(int i=0; i<random.nextInt(10); i++){
            Events events = new Events();
            events.setBuildingId(random.nextInt(totalIDs));
            events.setDescription("Description " + i);
            events.setEventName("Event " + "i at building No." + events.getBuildingId());
            events.setStartDate(new Date());
            events.setEndDate(new Date());
            list.add(events);
        }
        eventRepo.saveAll(list);
    }

    public void create(){

    }

//    public Iterable<Events> listTotalRecent(){
//        return eventRepo.findAllOrOrderByEndDate();
//    }

    public Iterable<Events> findByBuilding(long buildingId){
        return eventRepo.findAllByBuildingId(buildingId);
    }
}
