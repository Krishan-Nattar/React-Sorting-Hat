import React from "react";
import Questions from "./Questions";
import { Route, Link } from "react-router-dom";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

class WelcomePage extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  handleStart = () => {
    console.log("we begin");
    this.props.history.push("/questions");
  };
  render() {
    return (
      <div className="welcome-page">
        <Header icon className="welcome-header">
          <img src="./images/sortinghat.svg" id="hat" />
          <h1>Your Journey Awaits</h1>
        </Header>
        <Modal
          trigger={<Button onClick={this.handleOpen}>Begin</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size="small"
        >
          <Header icon="chat" content="Welcome to Hogwarts!" />
          <Modal.Content>
            <h3>You are about to embark on a marvelous journey.</h3>
            <h3>
              The sorting hat will ask you several questions to determine your
              path...{" "}
            </h3>
            <h3>Are you ready to begin?</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={this.handleClose} inverted>
              <Icon name="cancel" /> No
            </Button>
            <Button color="green" onClick={this.handleStart} inverted>
              <Icon name="lightning" /> Yes
            </Button>
          </Modal.Actions>
        </Modal>
        <br />
        <br />

        <Route exact path="/questions" component={Questions} />
      </div>
    );
  }
}

export default WelcomePage;
