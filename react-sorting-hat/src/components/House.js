import React from 'react';

class House extends React.Component {
    state = { 
        // welcome: "Enter!",

     }
     

    render() { 
        console.log(this.props.points);
        return ( <div>House Selection</div> );
    }
}
 
export default House;