import React from 'react';
import Questions from './Questions';
import {Route, Link} from 'react-router-dom';

class WelcomePage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Welcome Page
                {/* Add Question Page */}
                <Questions />
            </div> 
        );
    }
}
 
export default WelcomePage;