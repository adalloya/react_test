import React from "react";

function Nav() {
    return (
<div className="navbar-fixed">
    <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo valign-wrapper left"><i className="material-icons valign-wrapper"><img className="logo" alt ="logo" src="/IMAGES/logo3.png"></img></i></a>
            <ul className="right">
                    <li><a href="sass.html"><i className="material-icons ">search</i></a></li>
                    <li><a href="#modal5"className="modal-trigger"><i className="material-icons ">filter_list</i></a></li>
                    <li><a href="#modal4" className="modal-trigger"><i id="viewicon"className="material-icons">view_module</i></a></li>
                    <li> <a id="usericon" className="modal-trigger" href="#modal2"><i className="material-icons">account_circle</i></a></li>
                    <li> <a id="posticon" className="btn-floating btn-large waves-effect waves-light red btn modal-trigger pulse hide" href="#modal1"><i className="material-icons">add</i></a></li>
            </ul>
        </div>
    </nav>
</div>

    );
}

export default Nav;
