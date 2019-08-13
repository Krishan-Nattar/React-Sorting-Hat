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
          id="ravenclaw-1"
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
          id="ravenclaw-2"
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
              Welcome To Ravenclaw
            </Header>
            <p style={{ fontSize: "1.33em" }}>
            Founded by Rowena Ravenclaw, Ravenclaws possess the traits of cleverness, wisdom, wit, intellectual ability and creativity. According to Slytherin prefect Gemma Farley, Ravenclaws are so competitive when it comes to academic success that they are known to back stab each other, and likely other students, in order to get top marks. Many well-known inventors and innovators have come from Ravenclaw.
            </p>

            <h3>Notable alumni include:</h3>
            <p style={{ fontSize: "1.33em" }}>
            Rowena Ravenclaw: Founder of Ravenclaw House. She was known as a beautiful and intelligent witch, and her chocolate frog card calls her "the most brilliant witch of her time." Rowena valued learning, so she chose students who demonstrated cleverness and wisdom.
            </p>
            <p style={{ fontSize: "1.33em" }}>
            Filius Flitwick: Head of Ravenclaw House. He is the Charms professor at Hogwarts and the most knowledgeable Charms master alive today. According to the original Pottermore welcome letter, when Ravenclaws are extremely upset he makes little cupcakes do a dance to cheer them up.
            </p>
            <p style={{ fontSize: "1.33em" }}>
            The Grey Lady also known as Helena Ravenclaw: House ghost. She rarely speaks to anyone outside Ravenclaw, but is a great resource for Ravenclaws who are lost or have lost something.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image size="large" src="/images/ravenclaw.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment id="ravenclaw-footer" inverted vertical style={{ padding: "5em 0em" }} />
  </ResponsiveContainer>
);
export default HomepageLayout;
