import React, { Component, lazy } from 'react'
import { Link } from "react-router-dom";
import { Simulate } from 'react-dom/test-utils';
import firebase from "../../components/Firebase/firebase.js";

import "./style.css"

class Postar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            userEmail: '',
            conteudo: "",
            usuario: []
        }


        this.criarPost = this.criarPost.bind(this);


    }

    setConteudo(e) {
        this.setState({ conteudo: e.target.value })
    }


    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.state.userId = user.uid;
                this.state.userEmail = user.email;
            }
        });
    }

    criarPost() {



        firebase.database().ref("usuario").on("value", (snapshot) => {
            let usuarioBanco = [];
            snapshot.forEach(function (item) {
                var key = item.key;
                var valor = item.val();
                usuarioBanco.push({ id: key, email: valor.email });
            });
            this.state.usuario = usuarioBanco;

        });

        let count = 0;

        while (this.state.usuario.length > count) {
            if (this.state.usuario[count].email == this.state.userEmail) {
                firebase.database().ref('usuario/' + this.state.usuario[count].id + '/postagens').push({ conteudo: this.state.conteudo })
                    .then(() => {
                        alert("Postagem Concluida");
                        console.log("Postagem Concluida");
                    })
                    .catch((erro) => {
                        console.log("mensagem:" + erro);
                    })
            }

            count++;


        }
    }

    render() {
        const { conteudo } = this.state
        return (
            <div className="post-table">
                <h3 className="postar-titulo">Novo Post</h3>

                <input className="input-postar" type="text" placeholder="Conteudo" value={conteudo} onChange={e => this.setConteudo(e)} />
                <br />
                <button className="btn-postar-post" onClick={this.criarPost} >Criar novo post</button>
                <Link to="/Principal"><button className="btn-postar">Voltar</button></Link>
            </div>
        )
    }
}

export default Postar;