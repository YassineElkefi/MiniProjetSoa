package com.tekup.miniprojet_soa.web.repositories;

import com.tekup.miniprojet_soa.web.models.Etudiant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
}