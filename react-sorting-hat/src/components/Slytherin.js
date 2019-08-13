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
          id="slytherin-1"
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
          id="slytherin-2"
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
              Welcome To Slytherin
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Founded by Salazar Slytherin, Slytherins are associated with cunning, ambition and a tendency to look after their own.

Slytherin has produced its share of Dark witches and wizards, but members are not afraid to admit it.
            </p>

            <h3>Notable alumni include:</h3>
            <p style={{ fontSize: "1.33em" }}>
            Salazar Slytherin: Founder of Slytherin house. His chocolate frog card describes him as one of the first Parselmouths, an accomplished Legilimens and a notorious champion of pure-blood supremacy.
            </p>
            <p style={{ fontSize: "1.33em" }}>
            Severus Snape: Head of Slytherin House. He is the Hogwarts Potions master. Professor Snape's office is in the dungeons.
            </p>
            <p style={{ fontSize: "1.33em" }}>
            The Bloody Baron: House ghost. He seems mysterious and unfriendly to the other houses, but he is actually very kind to Slytherins and will usually agree to scare people for them if asked nicely. Just don't ask how he got bloodstained, he doesn't like it.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image size="large" src="/images/slytherin.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment id="slytherin-footer" inverted vertical style={{ padding: "5em 0em" }} />
  </ResponsiveContainer>
);
export default HomepageLayout;
