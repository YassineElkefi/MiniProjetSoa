package com.tekup.miniprojet_soa.web.controllers;

import com.tekup.miniprojet_soa.web.models.Etudiant;
import com.tekup.miniprojet_soa.web.repositories.EtudiantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EtudiantController {

    @Autowired
    EtudiantRepository etudiantRepository;

    @GetMapping("/etudiants")
    @ResponseBody
    public List<Etudiant> getAlletudiants() {
        return etudiantRepository.findAll();
    }

    @GetMapping("/etudiant/{id}")
    public ResponseEntity<Etudiant> getEtudiantById(@PathVariable Long id) {
        Optional<Etudiant> etudiant = etudiantRepository.findById(id);
        if(etudiant.isPresent()) {
            return ResponseEntity.ok(etudiant.get());
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/ajoutetudiant")
    public ResponseEntity<Etudiant> createEtudiant(@RequestBody Etudiant etd){
        Etudiant createdEtudiant = etudiantRepository.save(etd);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEtudiant);
    }

    @PutMapping("/updateetudiant/{id}")
    public  ResponseEntity<Etudiant> updateEtudiant(@PathVariable Long id, @RequestBody Etudiant etd) {
        Optional<Etudiant> existingetd = etudiantRepository.findById(id);

        if (existingetd.isPresent()) {
            Etudiant etudiant = existingetd.get();
            if (etd.getNom() != null) {
                etudiant.setNom(etd.getNom());
            }
            if (etd.getPrenom() != null) {
                etudiant.setPrenom(etd.getPrenom());
            }
            if (etd.getCin() != null) {
                etudiant.setCin(etd.getCin());
            }
            if
            (etd.getDate_naiss() != null) {
                etudiant.setDate_naiss(etd.getDate_naiss());
            }
            if (etd.getAdresse() != null) {
                etudiant.setAdresse(etd.getAdresse());
            }
            if (etd.getTel() != null) {
                etudiant.setTel(etd.getTel());
            }
            if (etd.getClasse() != null) {
                etudiant.setClasse(etd.getClasse());
            }
            if (etd.getNb_absence() != etudiant.getNb_absence()) {;
                etudiant.setNb_absence(etd.getNb_absence());
            }
            if
            (etd.isEstReussi() != etudiant.isEstReussi()){
                etudiant.setEstReussi(etd.isEstReussi());
            }
            etudiantRepository.save(etudiant);
            return ResponseEntity.ok(etudiant);
        }else{
            return (ResponseEntity<Etudiant>) ResponseEntity.status(HttpStatus.NOT_FOUND);
        }
    }

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @DeleteMapping("/deleteetudiant/{id}")
    public ResponseEntity<String> deleteEtudiant(@PathVariable Long id) {
        if (etudiantRepository.existsById(id)) {
            etudiantRepository.deleteById(id);
            jdbcTemplate.execute("ALTER TABLE etudiant AUTO_INCREMENT=1");
            return ResponseEntity.ok("Etudiant with ID " + id + " has been deleted.");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
