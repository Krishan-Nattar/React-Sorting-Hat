import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'

class Question extends React.Component {
    state = {  }
    render(props) { 
        return ( 
        <div>
             <Card>
      <Card.Content>
        <Image size='small' src='./images/sortinghat-black.svg' />
        <Card.Description>
        {this.props.question[0]}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={()=>this.props.handleAnswer(1)}>
            {this.props.question[1]}
          </Button>
          <Button basic color='purple' onClick={()=>this.props.handleAnswer(2)}>
            {this.props.question[2]}
          </Button>
        </div>
      </Card.Content>
    </Card>
            
            </div> 
            );
    }
}
 
export default Question;