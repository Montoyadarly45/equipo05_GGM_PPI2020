import React, {Component} from 'react';

class Registro extends React.Component{
  render(){
    return(
      <React.Fragment>
      <head>
          <title>Registro</title>
      </head>
      <body id="container-page-registration">
          <section id="form-registration">
       
          <div class="login-box">
            <h1>Registra una nueva Registra una nueva cuenta</h1>
            <form class="form-horizontal FormCatElec" action="process/regclien.php" role="form" method="post" data-form="save">
                                 <div class="form-group">
                                    <div class="input-group">
                                      <input class="form-control all-elements-tooltip" type="text" placeholder="Ingrese su numero de documento" required name="clien-nit" data-toggle="tooltip" data-placement="top" title="Ingrese su número de documento. Solamente números" maxlength="30">
                                    </div>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <input class="form-control all-elements-tooltip" type="text" placeholder="Ingrese su nombre de usuario" required name="clien-name" data-toggle="tooltip" data-placement="top" title="Ingrese su nombre de usuario" maxlength="15">
                                    </div>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <input class="form-control all-elements-tooltip" type="text" placeholder="Ingrese sus nombres" required name="clien-fullname" data-toggle="tooltip" data-placement="top" title="Ingrese sus nombres solamente letras" pattern="[a-zA-Z ]{1,50}" maxlength="50">
                                    </div>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <input class="form-control all-elements-tooltip" type="text" placeholder="Ingrese sus apellidos" required name="clien-lastname" data-toggle="tooltip" data-placement="top" title="Ingrese sus apellido solamente letras" pattern="[a-zA-Z ]{1,50}" maxlength="50">
                                    </div>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <input class="form-control all-elements-tooltip" type="password" placeholder="Introdusca una contraseña" required name="clien-pass" data-toggle="tooltip" data-placement="top" title="Defina una contraseña para iniciar sesión">
                                    </div>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <input class="form-control all-elements-tooltip" type="text" placeholder="Ingrese su dirección" required name="clien-dir" data-toggle="tooltip" data-placement="top" title="Ingrese la direción en la reside actualmente" maxlength="100">
                                    </div>
                                  </div>
                                  <br>
                                  <div class="form-group">
                                    <div class="input-group">
                                      <input class="form-control all-elements-tooltip" type="text" placeholder="Ingrese su número telefónico" required name="clien-phone" maxlength="11" pattern="[0-9]{8,11}" data-toggle="tooltip" data-placement="top" title="Ingrese su número telefónico. Mínimo 8 digitos máximo 11">
                                    </div>
                                  </div>
                                  <br>
                                  <div class="form-group ">
                                    <div class="input-group">                                <input class="form-control all-elements-tooltip" type="text" placeholder="Ingrese su Email" required name="clien-email" data-toggle="tooltip" data-placement="top" title="Ingrese la dirección de su Email" maxlength="50">
                                    </div>
                                  </div>
                                  <br>
                                  <p><button type="submit" class="bnt">&nbsp;Registrarse</button></p>

                                  <div class="ResForm" style="width: 100%; color: #fff; text-align: center; margin: 0;"></div>
                              </form>


          </div>
        </body>
          </section>

      </React.Fragment>
    )
  }
}
export default Registro;
