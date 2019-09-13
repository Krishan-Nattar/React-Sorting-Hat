import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
          id="hufflepuff-1"
            inverted
            textAlign="center"
            style={{ minHeight: 300, padding: "1em 0em" }}
            vertical
          />
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
          id="hufflepuff-2"
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          />

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Welcome To Hufflepuff
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Founded by Helga Hufflepuff, Hufflepuffs are associated with trustworthiness, loyalty and a strong work ethic. Hufflepuff has produced the fewest Dark witches and wizards of any house.
            </p>

            <h3>Notable alumni include:</h3>
            <p style={{ fontSize: "1.33em" }}>
            Helga Hufflepuff: Founder of Hufflepuff House. Her chocolate frog card describes her as a loyal, charming witch with great skill at performing food-related charms.
            </p>
            <p style={{ fontSize: "1.33em" }}>
            Pomona Sprout: Head of Hufflepuff House. She is the Head of Herbology at Hogwarts and brings interesting plants, including ones that dance and talk, to the Hufflepuff common room, possibly the reason why Hufflepuffs are generally good at herbology.
            </p>
            <p style={{ fontSize: "1.33em" }}>
            The Fat Friar: House ghost. He is a plump, friendly man wearing monk robes and is always willing to help Hufflepuffs who are lost or in trouble.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image size="large" src="./images/hufflepuff.png" />

          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment id="hufflepuff-footer" inverted vertical style={{ padding: "5em 0em" }} />
  </ResponsiveContainer>
);
export default HomepageLayout;
