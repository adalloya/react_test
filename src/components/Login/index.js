import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Registration() {
    return (
<div id="modal2" className="modal login">
    <div className="modal-content">
            <div id="loginmodal" className="row">
             <blockquote>
      <h4>Inicia Sesión</h4>
    </blockquote>
                                      <div className="row">
                                        <div className="input-field col s12">
                                          <input id="emaillogin" type="text" className="validate" data-length="50" maxLength="50"></input>
                                          <label htmlFor="emaillogin">Email</label>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="input-field col s12">
                                          <input id="contraseñalogin" type="text" className="validate" data-length="50" maxLength="50"></input>
                                          <label htmlFor="contraseñalogin">Contraseña</label>
                                          <p id="status"></p>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="input-field col s12">
                                          <button id="loginbutton" className="btn waves-effect waves-light" type="submit" name="action">Log In <i className="material-icons right">send</i>
                                          </button>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <blockquote>
                                                <h6>¿No estas registrado aún? Házlo solo toma 10 segundos</h6>
                                          </blockquote>
                                        <div className="input-field col s12">
                                          <button href="#modal3"className="btn waves-effect waves-light modal-trigger" type="submit" name="action">Registrate <i className="material-icons right">send</i>
                                          </button>
                                          </div>
                                          </div>
            </div>
    </div>
</div>
    );
} 

export default Registration;