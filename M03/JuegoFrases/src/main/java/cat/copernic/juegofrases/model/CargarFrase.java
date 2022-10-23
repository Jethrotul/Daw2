package cat.copernic.juegofrases.model;

import java.util.ArrayList;

public class CargarFrase{
    private ArrayList<String> frases = new ArrayList<String>();

    public CargarFrase (){
        this.frases = leerArchivos();
    }

    private ArrayList<String> leerArchivos () {
        // Tendriamos que leer los archivos y devolver un arraylist
        frases.add("hola que tal estas");
        return frases;
    }

    public ArrayList<String> getFrases() {
        return frases;
    }
    
}
