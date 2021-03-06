import React, { Component } from 'react';
import {init} from 'ityped';

class Welcome extends Component {
  componentDidMount() {
    init(this.refs.typed, {
      strings:['Jay Chang :)', 'Software Engineer', 'Full Stack Developer', 'Web and Mobile', 'Scroll for more...'],
      startDelay: 300,
      backDelay: 1200,
      loop: true
    });
  }

  render() {
    const styles = 
      {
        'height': '100vh',
        'display':'flex',
        'align-items': 'center',
        'justify-content': 'center',
      }

    return (
      <section className='Welcome' style={styles}>
        <div><span className='typed' ref='typed' /></div>
      </section>
    );
  }
}

export default Welcome;
