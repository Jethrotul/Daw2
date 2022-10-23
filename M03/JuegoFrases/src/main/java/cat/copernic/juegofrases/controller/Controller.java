package cat.copernic.juegofrases.controller;

import cat.copernic.juegofrases.model.Model;
import cat.copernic.juegofrases.view.View;

import javafx.event.ActionEvent;
import javafx.event.EventHandler;

public class Controller {

    private Model model;
    private View view;

    public Controller(Model m, View v) {
        model = m;
        view = v;
        initView();
        m.InitModel();
    }

    public void initView() {
        // carregarRegistre();
    }

    // public void initController() {
    //     view.getCarregarButton().setOnAction(new EventHandler<ActionEvent>() {
    //         @Override
    //         public void handle(ActionEvent event) {
    //             carregarRegistre();
    //         }

    //     });

    //     view.getGuardarButton().setOnAction(new EventHandler<ActionEvent>() {
    //         @Override
    //         public void handle(ActionEvent event) {
    //             guardarRegistre();
    //         }
    //     });
    // }

    // private void carregarRegistre() {
    //     // view.getNomTextField().setText(model.getNom());
    //     // view.getPrimerCognomTextField().setText(model.getPrimerCognom());
    //     // view.getSegonCognomTextField().setText(model.getSegonCognom());
    // }

    // private void guardarRegistre() {
    //     // model.setNom(view.getNomTextField().getText());
    //     // model.setPrimerCognom(view.getPrimerCognomTextField().getText());
    //     // model.setSegonCognom(view.getSegonCognomTextField().getText());
    // }
}
