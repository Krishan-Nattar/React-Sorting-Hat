import React from 'react';
import Questions from './Questions';
import {Route, Link} from 'react-router-dom';

class WelcomePage extends React.Component {
    state = {  }

    // checkName = () =>{
        
    // }
    render() { 
        return ( 
            <div>
                Welcome to Hogwarts!
                <br /><br />
                <button><Link to="/questions">Enter</Link></button>
                
                <Route exact path="/questions" component={Questions} />
            </div> 
        );
    }
}
 
export default WelcomePage;