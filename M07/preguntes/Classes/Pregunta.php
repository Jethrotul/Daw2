<?php
abstract class Pregunta {
    private string $pregunta;
    private array $respostesCorrectes;
    private array $respostesUsuari;

    public function __construct($pregunta, $respostesCorrectes, $respostesUsuari) {
        $this->pregunta = $pregunta;
        $this->respostesCorrectes = $respostesCorrectes;
        $this->respostesUsuari = $respostesUsuari;
    }

    public function getPregunta(){
        return $this->pregunta;
    }

    public function getRespostesUsuari(){
        return $this->respostesUsuari;
    }

    public function getRespostesCorrectes(){
        return $this->respostesCorrectes;
    }

    public function setRespostesUsuari($respostes){
        array_push($this->respostesUsuari, $respostes);
    }
}