package com.tekup.miniprojet_soa.web.controllers;

import com.tekup.miniprojet_soa.web.models.CadreAdmin;
import com.tekup.miniprojet_soa.web.repositories.CadreAdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CadreAdminController {
    @Autowired
    CadreAdminRepository cadreAdminRepository;

    @GetMapping("/cadres")
    @ResponseBody
    public List<CadreAdmin> getAllCadreAdmin() {
        return cadreAdminRepository.findAll();
    }

    @GetMapping("/cadre/{id}")
    public ResponseEntity<CadreAdmin> getCadreById(@PathVariable Long id) {
        Optional<CadreAdmin> cadreAdmin = cadreAdminRepository.findById(id);
        if (cadreAdmin.isPresent()) {
            return ResponseEntity.ok(cadreAdmin.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PostMapping("/ajoutcadre")
    public ResponseEntity<CadreAdmin> createCadreAdmin(@RequestBody CadreAdmin cadreAdmin) {
        CadreAdmin createdCadre = cadreAdminRepository.save(cadreAdmin);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCadre);
    }

    @PutMapping("/updatecadreadmin/{id}")
    public ResponseEntity<CadreAdmin> updateCadre(@PathVariable Long id, @RequestBody CadreAdmin cadreAdmin) {
        Optional<CadreAdmin> existingCadre = cadreAdminRepository.findById(id);
        if (existingCadre.isPresent()) {
            CadreAdmin cadre = existingCadre.get();
            if (cadreAdmin.getNom() != null) {
                cadre.setNom(cadreAdmin.getNom());
            }
            if (cadreAdmin.getPrenom() != null) {
                cadre.setPrenom(cadreAdmin.getPrenom());
            }
            if (cadreAdmin.getCin() != null) {
                cadre.setCin(cadreAdmin.getCin());
            }
            if
            (cadreAdmin.getDate_naiss() != null) {
                cadre.setDate_naiss(cadreAdmin.getDate_naiss());
            }
            if (cadreAdmin.getAdresse() != null) {
                cadre.setAdresse(cadreAdmin.getAdresse());
            }
            if (cadreAdmin.getTel() != null) {
                cadre.setTel(cadreAdmin.getTel());
            }
            if (cadreAdmin.getNb_absence() != cadre.getNb_absence()) {
                ;
                cadre.setNb_absence(cadreAdmin.getNb_absence());
            }
            if (cadreAdmin.getOccupation() != null) {
                cadre.setOccupation(cadreAdmin.getOccupation());
            }
            cadreAdminRepository.save(cadre);
            return ResponseEntity.ok(cadre);
        } else {
            return (ResponseEntity<CadreAdmin>) ResponseEntity.status(HttpStatus.NOT_FOUND);
        }
    }

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @DeleteMapping("/deletecadre/{id}")
    public ResponseEntity<String> deleteCadre(@PathVariable Long id) {
        if (cadreAdminRepository.existsById(id)) {
            cadreAdminRepository.deleteById(id);
            jdbcTemplate.execute("ALTER TABLE cadre_admin AUTO_INCREMENT=1");
            return ResponseEntity.ok("Cadre with ID" + id + " has been deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
