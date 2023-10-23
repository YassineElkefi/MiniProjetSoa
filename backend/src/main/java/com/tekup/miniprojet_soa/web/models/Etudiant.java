package com.tekup.miniprojet_soa.web.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String prenom;
    private String date_naiss;
    private String cin;
    private String tel;
    private String adresse;
    private int nb_absence;
    private String classe;
    private boolean estReussi;
}
