import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Registration() {
    return (
<div id="modal3" className="modal login">
    <div className="modal-content">
            <div className="row">
            <blockquote>
      <h4>Regístro</h4>
    </blockquote>
             <form className="col s12">
              
                                        <div className="input-field col s12">
                                          <input id="username" type="text" className="validate" data-length="15" maxLength="15"></input>
                                          <label htmlFor="username">Nombre</label>
                                        </div>
                                        <div className="input-field col s12">
                                          <input id="userphone" type="tel" className="validate" data-length="10" maxLength="10"></input>
                                          <label htmlFor="userphone">WhatsApp 10 Numeros</label>
                                        </div>
                             <div className="input-field col s12">
                                <input id="useremail" type="text" className="validate" data-length="30" maxLength="30"></input>
                                <label htmlFor="useremail">Email</label>
                             </div>
                             <div className="input-field col s12">
                                    <select id="userlocation"className="validate" >
                                      <option value="" defaultValue>Selecciona tu ubicacion</option>
                                      <option value="CDMX">Ciudad de México</option>
                                      <option value="EDOMX">Estado de México</option>
                                      <option value="Toluca">Toluca</option>
                                      <option value="Queretaro">Queretaro</option>
                                      <option value="Otro">Otro</option>
                                    </select>
                                    <label>¿Donde Vives?</label>
                             </div>
                             <div className="input-field col s12">
                                          <input id="userpassword" type="text" className="validate" data-length="10" maxLength="10"></input>
                                          <label htmlFor="userpassword">Contraseña</label>
                            </div>

                                     <p>
                                     <label>
                                    <input id= "aviso" type="checkbox"/>
                                    <span>Acepto Aviso de privacidad y Terminos y Condiciones </span>
                                     </label>
                                    </p>
                             <div className="row">
                                        <div className="input-field col s12">
                                        <a href="hola" id="new-register" className=" close-modal waves-effect waves-light btn-small disable">Registrarte</a>
                                          </div>
                                          </div>
            </form>
            </div>
            </div>
            </div>
           
            
    );
} 

export default Registration;
