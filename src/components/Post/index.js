import React from 'react'
import Postagens from '../../pages/Postagens';


function Post(props){
    console.log("teste function")
    console.log(props.postagens)

    let posts = [props.postagens]

    posts.map(p => {
        return(
            <React.Fragment>
                <h1>{p}</h1>
            </React.Fragment>
        )
    })

    return(
        <h1>Retorno</h1>
    )

}
export default Post