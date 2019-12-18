import React, { Component } from 'react'

export default class GifSearch extends Component {
    
    state = {
        userInput: ""
    }


    handleInputeChange = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        })
    }

    handleSubmit= (event ) => {
        event.preventDefault()
        this.props.fetchImages(this.state.userInput)
    }
    
    
    
    render() {
        return (
            <div>
               <form onSubmit={event => this.handleSubmit(event)}>
                   <input
                    id='userInput'
                    name='userInput'
                    type='text'
                    value={this.state.userInput}
                    onChange={event => this.handleInputeChange(event)}/>
                    <button type='submit'>Filter Dem Gifs</button>
               </form>

            </div>
        )
    }
}
