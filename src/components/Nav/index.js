import React from "react";

function Nav() {
    return (
<div>
<div className="navbar-fixed">
    <nav>
        <div className="nav-wrapper">
         <a href="#!" class="brand-logo"><img className="logo" alt ="logo" src="/IMAGES/logo3.png"></img></a>
         <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                    <li><a href="#modal7" className="modal-trigger"><i className="material-icons">search</i></a></li>
                    <li><a href="#modal5"className="modal-trigger"><i className="material-icons ">filter_list</i></a></li>
                    <li><a href="#modal4" id="misanuncios" className="modal-trigger hide"><i id="viewicon" className="material-icons hide">view_module</i></a></li>
                    <li> <a id="usericon" className="modal-trigger" href="#modal2"><i className="material-icons">account_circle</i></a></li>
                    <li><a id="usernamelog"></a></li>
                    <li> <a id="posticon" className="btn-floating btn-large waves-effect waves-light red btn modal-trigger pulse hide" href="#modal1"><i className="material-icons">add</i></a></li>
            </ul>
        </div>
    </nav>
    </div>

<ul class="sidenav" id="mobile-demo">
                    <li><a id="usernamelogmobile"></a></li>
                    <li><a href="#modal7" className="modal-trigger modal-close"><i className="material-icons">search</i>Buscar</a></li>
                    <li><a href="#modal5"className="modal-trigger"><i className="material-icons ">filter_list</i>Filtros</a></li>
                    <li><a href="#modal4" id="misanunciosmobile" className="modal-trigger hide"><i id="viewiconmobile"className="material-icons">view_module</i>Mis anuncios</a></li>
                    <li> <a id="usericon" className="modal-trigger" href="#modal2"><i className="material-icons">account_circle</i>Mi Cuenta</a></li>
                    <li> <a id="posticon2" className="modal-trigger hide" href="#modal1"><i className="material-icons">add</i>Publicar anuncio</a></li>
                    <li><a href="hola" id="numbermobile" className="waves-effect waves-light btn-large banner">0 Articulos en venta</a></li>
                    <li><a href="hola" id="numbermobile1" className="waves-effect waves-light btn-large watchers banner">0 Personas comprando</a></li>
                    <li><a href="hola" id="numbermobile2" className="waves-effect waves-light btn-large watchers banner">0 Usuarios registrados</a></li>
                    <blockquote>
      <h4>Chat En Vivo</h4>
    </blockquote>
 <div class="collection chat">
   <ul class="collection" id="chat">
<li class= "collection-item avatar">
<img src="https://pbs.twimg.com/profile_images/1385329550/11__3_400x400.jpg" alt="" class= "circle"></img>
<span class="title">Adal Loya</span>
<p>Hola Chat!</p>
</li>
</ul>
<a href="#modal9" class="waves-effect waves-light btn modal-trigger"><i class="material-icons right">send</i>Escribir mensaje</a>
  </div>

  </ul>
 </div>
 
    );
}

export default Nav;
