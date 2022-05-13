import React, { Component } from 'react'
import firebase from "../Firebase/firebase.js";

class Postar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            conteudo : "",
            usuario: []
        }  

        
        this.criarPost = this.criarPost.bind(this);

   
    }

    setConteudo(e){
        this.setState( { conteudo: e.target.value } )
    }

    criarPost(){
        let userId = '';
        let userEmail = '';

        firebase.database().ref("usuario").on("value", (snapshot) => {
            let usuario = [];
            snapshot.forEach(function(item){
                var key = item.key;
                var valor = item.val();
                usuario.push({ id: key, email: valor.email});
            });
            let state = this.state;
            state.post = usuario;
            this.setState(state);            
            
        });

        console.log(this.state);
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                userId = user.uid;
                userEmail = user.email;
            }
        });



        /*
        firebase.ref('usuario/' + userId + '/postagens').push({conteudo: this.state.conteudo})
        .then( ()=> {
            console.log("Postagem Concluida");
        })
        .catch((erro)=>{
            console.log("mensagem:" + erro);
        })
        */
    }

    render(){
        const { conteudo } = this.state
        return(
            <div>
                <h3>Novo Post</h3>
                <hr />
                <input type="text" placeholder="conteudo" value={conteudo} onChange={e => this.setConteudo(e)}  />
                <hr />
                <button onClick={this.criarPost} >Criar novo Post</button>
            </div>
        )
    }
}

export default Postar