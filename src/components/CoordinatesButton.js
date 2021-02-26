import { render } from 'enzyme'
import React, { Component } from 'react'


class CoordinatesButton extends Component {
    
    handleClick = event => {
    
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Cords</button>
            </div>
        )   
    }

}




export default CoordinatesButton