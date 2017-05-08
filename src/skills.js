import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './scrollReveal.js';

class Skills extends Component {
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true, useDelay: 'onload'});
  }

  render() {
  	const styles =
  	  {
        'height': '200px',
        'display':'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'font-size': '3em',
  	  }

    const padding =
      {
        'margin-bottom': '40px',
      }

    return (
      <section className='Skills'>
        <div ref='main'>
          <div style={styles}>Skills</div>
          <Grid>
            <Row>
              <Description title='Full Stack' body='Javascript, React, AngularJS, MongoDB, Node.js, you name it. I have experience creating frontend applications in addition to building backend servers. Infact, this very website you are reading is made using React.' />
              <Description title='Mobile' body='I have built iOS applications with both Swift and Objective-C in addition to hybrid applications using React Native. Furthermore, I have done user analytics using Fabric and Mixpanel to reduces the number of crashes and improve user retentions.' />
              <Description title='Development' body='Git, Docker, Zeplin, InVision: I have a wide range of experience with tools that are crutial to the development of a successful product. I put a strong emphasize on proper coding such as scalability and Agile methodologies.' />
            </Row>
          </Grid>
          <div style={padding}/>
        </div>
      </section>
    )
  }
}

class Description extends Component {
  render() {
  	const styles =
  	  {
  	  	'text-align': 'center'
  	  }
      
    return (
      <Col sm={4}>
        <h2 style={styles} className='linedHeader'>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </Col>
    )
  }
}

export default Skills;