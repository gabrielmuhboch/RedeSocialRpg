import { fireEvent } from '@testing-library/dom';
import { Link } from "react-router-dom";
import React, { Component, useEffect } from 'react'
import firebase from "../../components/Firebase/firebase.js";
import './style.css';


class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.cadastrar = this.cadastrar.bind(this);
    }

    state = {
        mensagen: "",
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: ""
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((authenticate) => {
            if (authenticate){
                //IR PARA O PRINCIPAL===========================
            }
            else {
                
            }
        })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    setEmail(e) {
        this.setState({ email: e.target.value })
    }

    setSenha(e) {
        this.setState({ senha: e.target.value })
    }

    setCongirrmarSenha(e) {
        this.setState({ confirmarSenha: e.target.value })
    }

    async cadastrar() {

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha).then(async (usuario) => {
            console.log(usuario.user.uid)
            firebase.database().ref("usuario").push({ nome: this.state.nome, email: this.state.email, amigos: [] })
                .then(() => {
                    console.log("Cadastro Concluido");
                    //IR PARA O LOGIN===========================
                })
                .catch((error) => {
                    console.log("Erro:" + error);
                    if (error.code === "auth/email-already-in-use") {
                        this.state.mensagen = "Email ja esta em uso!"
                    }
                    else if (error.code === "auth/weak-password") {
                        this.state.mensagen = "Senha muito fraca!!"
                    }
                    else {
                        this.state.mensagen = "Dados Inseridos Invalidos"
                    }
                });
        });
    }

    render() {
        const { nome, email, senha, confirmarSenha } = this.state
        return (
            <div className="fundoCadastro">
            <div className="trecosCadastro">
                <h1>Cadastro</h1>
                <input type="text" className="input" placeholder="Nome de usuário" value={nome} onChange={e => this.setNome(e)} />
                <br />
                <input type="email" className="input" placeholder="email" value={email} onChange={e => this.setEmail(e)} />
                <br />
                <input type="password" className="input" placeholder="senha" value={senha} onChange={e => this.setSenha(e)} />
                <br />
                <input type="password" className="input" placeholder="confirmar senha" value={confirmarSenha} onChange={e => this.setCongirrmarSenha(e)} />
                <br />
                <button className="btn-cadastrar" onClick={this.cadastrar} >Cadastrar</button>
                <Link to="/"><button className="btn-postar">Voltar Ao Login</button></Link>
            </div>
            </div>
        )
    }
}

export default Cadastro
