import { render } from 'enzyme'
import React, { Component } from 'react'


class DelayedButton extends Component {


    handleClick = event => {
        event.persist();
        window.setTimeout(() => {
          this.props.onDelayedClick(event);
        }, this.props.delay);
      };

render() {
    return(
        <div>
            <button onClick={this.handleClick}>Button</button>
        </div>
    )
}

}


export default DelayedButton