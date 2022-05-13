import React, { Component } from 'react'
import Menu from '../../components/Menu';

class Configuracoes extends Component{

    //nem mexer nessa página. Vamos deixar por último.

    state = {
        info: ""
    }

    render(){

        const { info } = this.state
        return(
            <React.Fragment>
                <Menu />
                <nav>
                    <li>Config1</li>
                    <li>Config2</li>
                    <li>Config3</li>
                    <li>Config4</li>
                    <li>Config5</li>
                    <li>Config6</li>
                    <li>Config7</li>
                    <li>Config8</li>
                </nav>
            </React.Fragment>
        )
    }
}

export default Configuracoes;