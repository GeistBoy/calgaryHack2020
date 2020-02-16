package com.questrush.project.services;

import com.questrush.project.domain.Building;
import com.questrush.project.repositories.BuildingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class BuildingService {

    // 0 - Study
    // 1 - Living
    // 2 - Exercise
    // 3 - Parking
    int totalTypes = 4;

    @Autowired
    private BuildingRepo buildingRepo;

    public void initialize(){
        // Hard code data part;
        Random rand = new Random();
        Building building1 = new Building();
        building1.setName("TFDL");
        building1.setBuildingType(0);
        building1.setCapacity(50);
        building1.setCurrent(rand.nextInt(50));
        building1.setLoad(rand.nextFloat());

        Building building2 = new Building();
        building2.setName("Machall");
        building2.setBuildingType(1);
        building2.setCapacity(75);
        building2.setCurrent(rand.nextInt(50));
        building2.setLoad(rand.nextFloat());

        Building building3 = new Building();
        building3.setName("Red Gym");
        building3.setBuildingType(2);
        building3.setCapacity(50);
        building3.setCurrent(rand.nextInt(50));
        building3.setLoad(rand.nextFloat());

        Building building4 = new Building();
        building4.setName("Lot 21");
        building4.setBuildingType(3);
        building4.setCapacity(80);
        building4.setCurrent(rand.nextInt(50));
        building4.setLoad(rand.nextFloat());

        buildingRepo.save(building1);
        buildingRepo.save(building2);
        buildingRepo.save(building3);
        buildingRepo.save(building4);
    }

    public void create(){

    }

    public Iterable<Building> findByType(int type){
        return buildingRepo.findByBuildingType(type);
    }

    public Iterable<Building> mostEmptyNow(){
        List<Building> list = new ArrayList<>();
        for(int i=0; i<totalTypes; i++){
            list.add(buildingRepo.findByBuildingTypeOrderByLoadAsc(i));
        }

        Iterable<Building> result = list;

        return result;
    }
}
