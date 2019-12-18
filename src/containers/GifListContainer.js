import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from  '../components/GifList'

export default class GifListContainer extends Component {
    state = {
        search: "",
        url: []
    }
    
    render() {
        return (
            <div>
                <GifSearch fetchImages={this.fetchImages}/>
                <GifList data ={this.state.url} />
                
            </div>
        )
    }
  
     fetchImages = (search = "car") => {
         console.log(search)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=pwHX3XUiGRM74LWIlElFeDv1XlBKu4z2&q=${search}&limit=3&offset=0&rating=G&lang=en`)
        .then(response => response.json())
        .then(json => this.storeImages(json))
        }

        storeImages = (json) => {
             this.setState({
               url: json.data.map( (gif) => gif.images.original.url )  
                })
            }
    
    componentDidMount() {
        this.fetchImages()
       }


}

