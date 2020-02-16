package com.questrush.project.repositories;


import com.questrush.project.domain.Events;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepo extends CrudRepository<Events, Long> {

    Events findById(long id);

    Events findByBuildingId(long id);

//    Iterable<Events> findAllOrOrderByEndDate();

    Iterable<Events> findAllByBuildingId(long buildingId);
}
