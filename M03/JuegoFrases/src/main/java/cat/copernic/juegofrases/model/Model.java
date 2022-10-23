package cat.copernic.juegofrases.model;

import java.util.ArrayList;

import cat.copernic.juegofrases.model.CargarFrase;

public class Model {
    private CargarFrase cargarFrases;
    private NormalizarFrase normalizarFrase;
    private String fraseNormalizada;
    public ArrayList<String> listaFrases;

    public Model() {
        this.cargarFrases = new CargarFrase();
        this.normalizarFrase = new NormalizarFrase();
    }
    
    public void InitModel() {
        cargarFrasesInit();
        // Normalizamos la frase seleccionada que nos mande el usuario
        normalizar(listaFrases.get(0));

    }
    
    private void cargarFrasesInit() {
        this.listaFrases = this.cargarFrases.getFrases();
    }
    
    private void normalizar(String fraseANormalizar) {
        this.fraseNormalizada = this.normalizarFrase.Normalizar(fraseANormalizar);

        // for (String p : this.listaFrases) {
        //     // Normalizar P
        //     this.frasesNormalizadas.add(p);
        // }
        System.out.println(this.fraseNormalizada);
    }

    

    // public String getNom() {
    //     return nom;
    // }

    // public void setNom(String nom) {
    //     this.nom = nom;
    // }

    // public String getPrimerCognom() {
    //     return primerCognom;
    // }

    // public void setPrimerCognom(String primerCognom) {
    //     this.primerCognom = primerCognom;
    // }

    // public String getSegonCognom() {
    //     return segonCognom;
    // }

    // public void setSegonCognom(String segonCognom) {
    //     this.segonCognom = segonCognom;
    // }

}
