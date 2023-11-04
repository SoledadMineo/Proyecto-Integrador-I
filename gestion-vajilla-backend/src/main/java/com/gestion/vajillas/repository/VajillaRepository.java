package com.gestion.vajillas.repository;

import com.gestion.vajillas.model.Vajilla;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VajillaRepository extends JpaRepository<Vajilla, Long> {

}
