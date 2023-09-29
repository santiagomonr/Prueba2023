import { ApiRequest } from "../../assets/js/request.js";

/** Clase que representa al componente computador */
class Computador {

  constructor() { }

  /** Actualiza el listado de computadores en la tabla */
  static get() {
    ApiRequest.get('Caracteristicas', 'getAll').then(response => {
      // console.log('oky', response)
      /** Referencia del cuerpo de la tabla */
      const tbody = document.querySelector('#list-table tbody');
      tbody.innerHTML = ''; // Limpia la tabla

      response.data.forEach(item => {
        let fila = '<tr>'
        if(Number(item.gce_estado) === 0){fila = '<tr class="row-status-inactive">'}

        tbody.innerHTML += `${fila}
          <td>${item.gce_nombre_equipo}</td>
          <td>${item.gce_board}</td>
          <td>${item.gce_case}</td>
          <td>${item.gce_procesador}</td>
          <td>${item.gce_grafica}</td>
          <td>${item.gce_ram}</td>
          <td>${item.gce_disco_duro}</td>
          <td>${item.gce_teclado}</td>
          <td>${item.gce_mouse}</td>
          <td>${item.gce_pantalla}</td>
          <td>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" role="switch" ${Number(item.gce_estado) === 1 ? 'checked' : ''}
                onchange="Computador.updateStatus(${item.gce_id}, event.target.checked, event)">
            </div>
          </td>
          <td>
           <button onclick="Computador.modal(${item.gce_id})" data-bs-toggle="modal" data-bs-target="#Modal_Edit">Editar</button>
           <button onclick="Computador.delete(${item.gce_id})">Delete</button>
          </td>
        </tr>`; // Añade la fila a la tabla
      });
    })
    .catch(error => console.log('Ha ocurrido un error', error));
  }

  /** Registra un computador en la base de datos */
  static add = (event) => {
    event.preventDefault(); // Cancela el restablecimiento de la página

    /** Formulario de registro */
    const registerForm = event.target;
  
    const parameters = {
      gce_nombre_equipo: registerForm.querySelector('[name="gce_nombre_equipo"]').value,
      gce_board: registerForm.querySelector('[name="gce_board"]').value,
      gce_case: registerForm.querySelector('[name="gce_case"]').value,
      gce_procesador: registerForm.querySelector('[name="gce_procesador"]').value,
      gce_grafica: registerForm.querySelector('[name="gce_grafica"]').value,
      gce_ram: registerForm.querySelector('[name="gce_ram"]').value,
      gce_disco_duro: registerForm.querySelector('[name="gce_disco_duro"]').value,
      gce_teclado: registerForm.querySelector('[name="gce_teclado"]').value,
      gce_mouse: registerForm.querySelector('[name="gce_mouse"]').value,
      gce_pantalla: registerForm.querySelector('[name="gce_pantalla"]').value,
      gce_estado: registerForm.querySelector('[name="gce_estado"]').value,
    };

    ApiRequest.post('Caracteristicas', 'addOne', parameters).then((response) => {
      this.get();
    }).catch(error => console.log('Ha ocurrido un error', error));
  };

  static UpdateInformacion = () => {
  
    /** Formulario de actualizacion */
    const updateForm = document.querySelector('#update_form');
  
    const parameters = {
      gce_id:updateForm.querySelector('[type="hidden"]').value,
      gce_nombre_equipo: updateForm.querySelector('[name="Edit_gce_nombre_equipo"]').value,
      gce_board: updateForm.querySelector('[name="Edit_gce_board"]').value,
      gce_case: updateForm.querySelector('[name="Edit_gce_case"]').value,
      gce_procesador: updateForm.querySelector('[name="Edit_gce_procesador"]').value,
      gce_grafica: updateForm.querySelector('[name="Edit_gce_grafica"]').value,
      gce_ram: updateForm.querySelector('[name="Edit_gce_ram"]').value,
      gce_disco_duro: updateForm.querySelector('[name="Edit_gce_disco_duro"]').value,
      gce_teclado: updateForm.querySelector('[name="Edit_gce_teclado"]').value,
      gce_mouse: updateForm.querySelector('[name="Edit_gce_mouse"]').value,
      gce_pantalla: updateForm.querySelector('[name="Edit_gce_pantalla"]').value,
      gce_estado: updateForm.querySelector('[name="Edit_gce_estado"]').value,
    };

    ApiRequest.post('Caracteristicas', 'updateInformacion', parameters).then((response) => {
      //Codigo para cerra la ventana modal
      let modal = document.querySelector('#Modal_Edit');modal.setAttribute('style','display:none ;');
      modal.classList.remove('show');modal.removeAttribute('role');modal.removeAttribute('aria-modal');
      document.body.setAttribute('class',''); document.body.setAttribute('style','')
      document.body.removeChild(document.querySelector('.modal-backdrop'))
      //Actualizamos la tabla
      this.get();
    }).catch(error => console.log('Ha ocurrido un error', error));
  };

  //Extrae y muestra los datos del computador seleccionado
  static modal(id){
    ApiRequest.get('Caracteristicas','getOne','?gce_id='+id)
    .catch(err => console.log(err))
    .then( response => {
      let valoresModal = document.querySelectorAll('.input_modal')

      valoresModal[0].value = response.data[0].gce_id
      valoresModal[1].value = response.data[0].gce_nombre_equipo
      valoresModal[2].value = response.data[0].gce_board
      valoresModal[3].value = response.data[0].gce_case
      valoresModal[4].value = response.data[0].gce_procesador
      valoresModal[5].value = response.data[0].gce_grafica
      valoresModal[6].value = response.data[0].gce_ram
      valoresModal[7].value = response.data[0].gce_disco_duro
      valoresModal[8].value = response.data[0].gce_teclado
      valoresModal[9].value = response.data[0].gce_mouse
      valoresModal[10].value = response.data[0].gce_pantalla

    })
  } 

  /**
   * Actualiza el estado de un computador
   * @param {number} id Identificador del computador
   * @param {status} boolean Nuevo estado
   */

  //Evento que toma el estatus y el id, y cambia el status
  static updateStatus = (id, status,target) => {
    ApiRequest.get('Caracteristicas','UpdateStatus', '?status='+(status ? '1' : '0')+'&id='+id ).then(response => {

      //Editamos la clase para cambiar el color de fondo
      let fila = target.srcElement.parentElement.parentElement.parentElement
      fila.classList.toggle('row-status-inactive')
    })
    .catch( err => console.log(err))
  }

  //Elimina el computador seleccionado
  static delete(id){
    let respuesta = window.confirm('Estas seguro de eliminar este elemento?')

    if(respuesta){
      ApiRequest.get('Caracteristicas','delete','?element='+id)
      .then(response => {
        Computador.get();
      })
      .catch(err => console.log(err))
    }
  }
}

// Evento que espera a que cargue el contenido HTML 
document.addEventListener('DOMContentLoaded', () => {
  Computador.get(); // Actualiza la tabla de computadores
});


(function () { // Habilita el uso de las clases en el archivo HTML
  this.Computador = Computador;
  this.ApiRequest = ApiRequest;
}).apply(window);
