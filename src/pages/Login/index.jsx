import React, { Component } from 'react'
import firebase from "../../components/Firebase/firebase.js";
//import Principal from '../Principal/index.js';
import './style.css';
import Fundo from "../../assets/FundoFloresta.png";
import {Link, useHistory, withRouter } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mensagem: "",
            idAtual: "",
            email: "",
            senha: ""
        }

        this.logar = this.logar.bind(this);
    }

    setEmail(e) {
        this.setState({ email: e.target.value });
    }

    setSenha(e) {
        this.setState({ senha: e.target.value });
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("Logado");
                this.props.history.push("/Principal");
                
            }
            else {

            }
        });

    }

    async sair() {
        await firebase.auth().signOut();
    }

    logar() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then((auth)=> {
            console.log("Logou!!!!");
            this.props.history.push("/Principal");
        })
        .catch((error)=>{
          console.log("Erro:" + error);
        })
        
        
    }
    render() {
        return (
            
            <React.Fragment>
                <div className="fundo">
                <div className="trecos">
                <h1>Login</h1>
                
                <input type="email" className="input" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} />
                <br />
                <input type="password" className="input" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} />
                <br />
                <button className="btn-logar" onClick={this.logar} >Logar</button>
                <Link to="/Cadastro"><button className="btn-sair">Cadastrar</button></Link>
                </div>
                </div>
                
            </React.Fragment>
            
        )

    }

}

export default Login
