import React, { Component } from 'react';

const Hero = React.lazy(() => import('../hero'));
const Nosotros = React.lazy(() => import('../sections/nosotros'));
const Stats = React.lazy(() => import('../sections/stats'));

class Homepage extends Component {
  render() {
    return <React.Fragment>
        <Hero/>
        <Nosotros/>
        <Stats/>
    </React.Fragment>
  }
}

export default Homepage;