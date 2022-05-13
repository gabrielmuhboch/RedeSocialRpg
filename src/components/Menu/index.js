import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './style.css'
import firebase from "../../components/Firebase/firebase.js";


class Menu extends Component {

    state = {
        opcao: ""
    }

    async sair(){
        console.log("sair")
        await firebase.auth().signOut();
    }

    render(){
        const opcao = this.state

        return(
            <React.Fragment className={"menuArea"}>
                <nav className={"menu"}>
                    <Link to="/Perfil"><button className="btn-postar">Meu Perfil</button></Link>
                    <Link to="/Grupos"><button className="btn-postar">Grupos</button></Link>
                    <Link to="/Postar"><button className="btn-postar">Postar</button></Link>
                    <button className="btn-sair" onClick={this.sair} >Sair</button>
                </nav>
            </React.Fragment>
        )
    }

}

export default Menu;