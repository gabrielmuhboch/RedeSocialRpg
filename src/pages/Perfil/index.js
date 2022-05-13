import React, { Component } from 'react'
import { Link } from "react-router-dom";
import firebase from "../../components/Firebase/firebase.js";

import './style.css'
import fotoPerfil from '../../assets/fotoPerfil.jpg';



class Perfil extends Component {

    //apenas aparência, preciso que você puxe as informações para serem colocadas aqui

    constructor(props) {
        super(props);

        this.state = {
            nome: "",
            email: "",
            level: "",
            xp: "",
            personagens: [],
            puxado: false
        }

        this.puxarDados = this.puxarDados.bind(this);
        this.setPuxado = this.setPuxado.bind(this)


    }

    componentDidMount() {
        if (!this.puxado) {
            this.puxarDados()
            this.setPuxado(true)

        }
    }

    puxarDados() {

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
                    idUsuario: key, nome: valor.nome, email: valor.email,
                    level: valor.level, xp: valor.xp, personagens: [valor.personagens]
                });
            });

            let count = 0;
            while (usuario.length > count) {
                if (usuario[count].email == userEmail) {
                    this.state.nome = usuario[count].nome;
                    this.state.email = usuario[count].email;
                    this.state.level = usuario[count].level;
                    this.state.xp = usuario[count].xp;
                    this.state.personagens = usuario[count].personagens;
                    console.log(this.state);

                };
                count++;
            }
        });
    }







    verificarPersonagem(p) {
        if (p == "") {
            console.log("false")
            return false
        }
        console.log("true")
        return true
    }


    setPuxado(p) {
        this.setState({ puxado: p })
    }


    render() {
        return (
            <div>
            {/*<div className="fundoPerfil"> */}
            <div className="trecosPerfil">

                <table className="table-voltar">
                    <tr>
                        <td>
                            <img className="imgPerfil" src={fotoPerfil} />
                        </td>
                        <td>
                            <h3 className="poster-potagens">Gabriel Muhlstedt</h3>
                        </td>
                    </tr>

                    <tr>
                        <th className="poster-potagens">
                            Idade:
                        </th>
                        <td className="poster-potagens">
                            19 anos
                        </td>
                    </tr>


                    <tr>
                        <th className="poster-potagens">
                            E-mail:
                        </th>
                        <td className="poster-potagens">
                            gabriel@gmail.com
                        </td>
                    </tr>

                    <tr>
                        <th className="poster-potagens">
                            Xp:
                        </th>
                        <td className="poster-potagens">
                            45
                        </td>
                    </tr>
                    <tr>
                        <th className="poster-potagens">
                            Level:
                        </th>
                        <td className="poster-potagens">
                            5
                        </td>
                    </tr>
            
                </table>
            

                <Link to="/Principal"><button className="btn-postar-voltar">Voltar</button></Link>







                {/* <h5> {this.state.nome} </h5>
                <h5> {this.state.email} </h5>
                <h5> {this.state.xp} </h5>
                <h5> {this.state.level} </h5> 
                 {   
                    this.state.personagens.map((personagem, index)=>{
                        return(
                            <React.Fragment key={index}>
                                {this.verificarPersonagem(personagem) && (
                                    <React.Fragment>
                                        {
                                            personagem.map((per, ind) => {
                                                return(
                                                    <React.Fragment>
                                                        <h5>{per.nome}</h5>
                                                        <h5>{per.idade}</h5>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </React.Fragment>
                                )}
                            </React.Fragment>
                        )
                    })
                } */}

            </div>
            </div>
        )
    }
}

export default Perfil