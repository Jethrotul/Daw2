package cat.copernic.juegofrases;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;
import cat.copernic.juegofrases.model.Model;
import cat.copernic.juegofrases.view.View;
import cat.copernic.juegofrases.controller.Controller;

public class App extends Application {

    @Override
    public void start(Stage stage) {
        Model m = new Model();
        View v = new View();
        Controller c = new Controller(m, v);
        // c.initController();
              
        stage.setTitle("MVC");
        stage.setScene(new Scene(v.getRootPane(), 800, 600));
        stage.show();
        
    }

    public static void main(String[] args) {
        launch();
    }

}