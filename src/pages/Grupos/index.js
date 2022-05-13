import React, { Component } from 'react'
import firebase from "../../components/Firebase/firebase.js";
import { Link, useHistory, withRouter } from 'react-router-dom';
import Fundo from "../../assets/FundoNeve.png";
import './style.css';


class Grupos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            level: ''
        }
        this.verificaLevel = this.verificaLevel.bind(this);
        this.setPuxado = this.setPuxado.bind(this)
    }

    setPuxado(p) {
        this.setState({ puxado: p })
    }

    componentDidMount() {
        if (!this.puxado) {
            this.verificaLevel()
            this.setPuxado(true)

        }
    }

    verificaLevel() {
        let userId = '';
        let userEmail = '';

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                userId = user.uid;
                userEmail = user.email;
            }
        });

        firebase.database().ref('usuario').on("value", (snapshot) => {
            let usuario = [];


            snapshot.forEach(function (item) {
                var key = item.key;
                var valor = item.val();
                usuario.push({
                    idUsuario: key, email: valor.email, level: valor.level
                });
            });

            let count = 0;
            while (usuario.length > count) {
                if (usuario[count].email == userEmail) {
                    this.state.level = usuario[count].level;
                    console.log(this.state);

                };
                count++;
            }
        });

        // com o level no state, verificar se a pessoa tem o nivel necessarios
        if (this.state.level < "6") {
            alert("Voce precisa ser pelo menos level 6 para participar dessa atividade.");
        }

    }




    render() {

        return (
            <React.Fragment>
                <div className="fundoGrupos">
                <div className="trecosFundo">

                <Link to="/Principal"><button className="btn-grupos-voltar">Voltar</button></Link>

                </div>
                </div>
            </React.Fragment>
        )
    }
}


export default Grupos;