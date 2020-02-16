package com.questrush.project.repositories;

import com.questrush.project.domain.Building;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuildingRepo extends CrudRepository<Building, Long> {

    Iterable<Building> findByBuildingType(int type);

    Building findByBuildingTypeOrderByLoadAsc(int buildingType);
}
