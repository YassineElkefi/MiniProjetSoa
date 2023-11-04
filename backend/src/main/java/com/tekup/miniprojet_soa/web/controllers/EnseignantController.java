package com.tekup.miniprojet_soa.web.controllers;

import com.tekup.miniprojet_soa.web.models.Enseignant;
import com.tekup.miniprojet_soa.web.models.Etudiant;
import com.tekup.miniprojet_soa.web.repositories.EnseignantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EnseignantController {

    @Autowired
    private EnseignantRepository enseigantRepo;

    @GetMapping("/Enseignant")
    public List<Enseignant> getAllEnseignant(){
        return enseigantRepo.findAll();
    }

    @GetMapping("/EnseignantById/{id}")
    public Enseignant getEnseignantById(@PathVariable long id){
        return enseigantRepo.findById(id).get();
    }

    @GetMapping("/EnseignantByMatiere/{matiere}")
    public ResponseEntity<Enseignant> getEnseignantByMatière(@PathVariable String matiere){
        Optional<Enseignant> enseignantOptional = enseigantRepo.findByMatiere(matiere);
        if (enseignantOptional.isPresent()) {
            return ResponseEntity.ok(enseignantOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/EnseignantByDepartement/{departement}")
    public ResponseEntity<Enseignant> getEnseignantByDepartement(@PathVariable String departement) {
        Optional<Enseignant> enseignantOptional = enseigantRepo.findByDepartement(departement);

        if (enseignantOptional.isPresent()) {
            return ResponseEntity.ok(enseignantOptional.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Enseignant> saveEnseignant(@RequestBody Enseignant enseignant){
        Enseignant createdEnseignat = enseigantRepo.save(enseignant);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdEnseignat);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Enseignant> updateEnseignant(@PathVariable long id, @RequestBody Enseignant enseignant){
        Optional<Enseignant> existingens = enseigantRepo.findById(id);

        if(existingens.isPresent()){
            Enseignant ens =existingens.get();
            if(enseignant.getNom() != null){
                ens.setNom(enseignant.getNom());
            }
            if(enseignant.getPrenom() != null){
                ens.setPrenom(enseignant.getPrenom());
            }
            if(enseignant.getCin() != null){
                ens.setCin(enseignant.getCin());
            }
            if(enseignant.getDate_naiss() != null){
                ens.setDate_naiss(enseignant.getDate_naiss());
            }
            if(enseignant.getAdresse() != null){
                ens.setAdresse(enseignant.getAdresse());
            }
            if(enseignant.getTel() != null){
                ens.setTel(enseignant.getTel());
            }
            if(enseignant.getNb_absence() != existingens.get().getNb_absence()){
                ens.setNb_absence(enseignant.getNb_absence());
            }
            if(enseignant.getMatiere() != null){
                ens.setMatiere(enseignant.getMatiere());
            }
            if(enseignant.getDepartement() != null){
                ens.setDepartement(enseignant.getDepartement());
            }
            enseigantRepo.save(ens);
            return ResponseEntity.ok(ens);
        }else{
            return (ResponseEntity<Enseignant>) ResponseEntity.status(HttpStatus.NOT_FOUND);
        }


    }
    @Autowired
    private JdbcTemplate jdbcTemplate;
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEnseignant(@PathVariable long id){
        Enseignant deletedEnseignant = enseigantRepo.findById(id).get();
        enseigantRepo.delete(deletedEnseignant);
        jdbcTemplate.execute("ALTER TABLE enseignant AUTO_INCREMENT=1;");
        return ResponseEntity.ok("Enseignant with ID " + id + " has been deleted.");
    }
}
