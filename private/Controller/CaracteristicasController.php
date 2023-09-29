<?php

namespace GCE\Controller;

use GCE\Model\Caracteristicas;

class CaracteristicasController
{

    private $model;

    public function __construct()
    {
        $this->model = new Caracteristicas();
    }

    // actualiza el estado
    public function UpdateStatus(){

        $this->model->gce_estado = $_GET['status'];
        $this->model->gce_id = $_GET['id'];
        $response = $this->model->UpdateStatus();

        echo $response;
    }

    /** Trae los registros de computadores */
    public function getAll()
    {
        $response = $this->model->get();
        echo json_encode($response);
    }

    /** Añade un registro a la tabla de características */
    public function addOne()
    {
        $this->model->gce_nombre_equipo = isset($_POST['gce_nombre_equipo']) ? $_POST['gce_nombre_equipo'] : null;
        $this->model->gce_procesador = isset($_POST['gce_procesador']) ? $_POST['gce_procesador'] : null;
        $this->model->gce_disco_duro = isset($_POST['gce_disco_duro']) ? $_POST['gce_disco_duro'] : null;
        $this->model->gce_pantalla = isset($_POST['gce_pantalla']) ? $_POST['gce_pantalla'] : null;
        $this->model->gce_grafica = isset($_POST['gce_grafica']) ? $_POST['gce_grafica'] : null;
        $this->model->gce_teclado = isset($_POST['gce_teclado']) ? $_POST['gce_teclado'] : null;
        $this->model->gce_estado = isset($_POST['gce_estado']) ? $_POST['gce_estado'] : null;
        $this->model->gce_board = isset($_POST['gce_board']) ? $_POST['gce_board'] : null;
        $this->model->gce_mouse = isset($_POST['gce_mouse']) ? $_POST['gce_mouse'] : null;
        $this->model->gce_case = isset($_POST['gce_case']) ? $_POST['gce_case'] : null;
        $this->model->gce_ram = isset($_POST['gce_ram']) ? $_POST['gce_ram'] : null;

        $response = $this->model->save();
        echo json_encode($response);
    }

    /*Extrae los parametros, para actualizar la informacion */ 
    public function updateInformacion()
    {
        $this->model->gce_nombre_equipo = isset($_POST['gce_nombre_equipo']) ? $_POST['gce_nombre_equipo'] : null;
        $this->model->gce_procesador = isset($_POST['gce_procesador']) ? $_POST['gce_procesador'] : null;
        $this->model->gce_disco_duro = isset($_POST['gce_disco_duro']) ? $_POST['gce_disco_duro'] : null;
        $this->model->gce_pantalla = isset($_POST['gce_pantalla']) ? $_POST['gce_pantalla'] : null;
        $this->model->gce_grafica = isset($_POST['gce_grafica']) ? $_POST['gce_grafica'] : null;
        $this->model->gce_teclado = isset($_POST['gce_teclado']) ? $_POST['gce_teclado'] : null;
        $this->model->gce_estado = isset($_POST['gce_estado']) ? $_POST['gce_estado'] : null;
        $this->model->gce_board = isset($_POST['gce_board']) ? $_POST['gce_board'] : null;
        $this->model->gce_mouse = isset($_POST['gce_mouse']) ? $_POST['gce_mouse'] : null;
        $this->model->gce_case = isset($_POST['gce_case']) ? $_POST['gce_case'] : null;
        $this->model->gce_ram = isset($_POST['gce_ram']) ? $_POST['gce_ram'] : null;
        $this->model->gce_id = isset($_POST['gce_id']) ? $_POST['gce_id'] : null;

        $response = $this->model->UpdateAll();
        echo json_encode($response);
    }

    /*Extre el id, para eliminar un equipo*/
    public function delete(){
        $this->model->gce_id = $_GET['element'];
        $response = $this->model->DeleteElement();
        echo json_decode($response);
    }

    /** Trae un computador con base en su id */
    public function getOne()
    {
        $this->model->gce_id = isset($_GET['gce_id']) ? $_GET['gce_id'] : null;
        $response = $this->model->get();
        echo json_encode($response);
    }

}
