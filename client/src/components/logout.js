import React from 'react';

class Logout extends React.Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("usertoken");
      
    }

    render() {
        return (
        <div>
            {this.props.history.push(`/login`)}
            <p>You Have been logout</p>
            
        </div>
        )
    }
}
export default Logout;