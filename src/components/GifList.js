
import React, { Component } from 'react'

export default class GifList extends Component {
    
    
    render() {


        return (
            <div>
               <ul>
                 {this.props.data.map( (url, index) => <li key={index}><img src={url}/> </li>)} 
                   
               </ul>
            </div>
        )
    }
}
