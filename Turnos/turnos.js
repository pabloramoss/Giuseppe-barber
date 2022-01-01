'use strict';

const cbox = document.querySelectorAll(".hover");
let turno = false;


 for (let i = 0; i < cbox.length; i++) {
     cbox[i].addEventListener("click", function() {
      //  document.querySelectorAll('.hover').classList.remove('reservado');
       cbox[i].innerHTML = '<button class="cancel">X</button>';
       cbox[i].classList.add('reservado');
       cbox[i].classList.remove('hover');
       turno = true;
       console.log('turno select');
     });
 }

 document.querySelector('#reservar').addEventListener('click', function (){
   if (turno) {
    document.querySelector('#reservar').textContent = 'RESERVADO';
    console.log('Se reservó un turno');
   }
  
});

// Función para eliminar el boton X
/*
for (let i = 0; i < cbox.length; i++) {
  cbox[i].addEventListener("click", function() {
    turno = false;
    let myobj = document.querySelector('.cancel');
    myobj.remove();

  });
}
*/

