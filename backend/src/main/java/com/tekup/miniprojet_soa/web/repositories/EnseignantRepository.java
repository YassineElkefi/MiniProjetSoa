package com.tekup.miniprojet_soa.web.repositories;

import com.tekup.miniprojet_soa.web.models.Enseignant;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EnseignantRepository extends JpaRepository<Enseignant, Long> {
    Optional<Enseignant> findByMatiere(String matiere);
    Optional<Enseignant> findByDepartement(String departement);
}
