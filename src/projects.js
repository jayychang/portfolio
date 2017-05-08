import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './scrollReveal.js';

class Projects extends Component {  
  componentDidMount() {
    sr.reveal(this.refs.main, {reset: true});
    sr.reveal(this.refs.header, {reset:true, viewFactor: 0.4})
  }
  render() {
    const styles = 
      {
      }
      
    return (
      <section className='Projects'>
        <div ref='main'>
          <div className="header" ref='header' style={styles}>Projects</div>
          <Grid fluid>
            <Row>
              <Circle url='https://jayychang.github.io/maidchan/' bg='./assets/discord.jpg' description='Web Application' />
              <Circle url='https://jayychang.github.io/sipStirred/' bg='./assets/sipnstirred.png' description='Web Application' />
              <Circle url='https://jayychang.github.io/tournamentBrackets/' bg='./assets/bracket.png' description='Tournament Bracket Generator' />
              <Circle url='https://github.com/jayychang/CustomLinedTextView' bg='./assets/notes.jpg' description='Objective-C Library' />
              <Circle url='https://github.com/jayychang/HabitReminder' bg='./assets/calender.jpg' description='Mobile Reminder Application' />
              <Circle url='https://github.com/jayychang/FirebaseChat' bg='./assets/chat.png' description='Firebase Chatroom' />
            </Row>
          </Grid>
        </div>
      </section>
    );
  }
}

class Circle extends Component {
  componentDidMount() {
    sr.reveal(this.refs.circle, {reset: true});
  }

  render() {
    return (
      <Col className='noPad' xs={12} sm={6} md={4}>
        <div className='circleWrapper' ref='circle'>
          <a href={this.props.url}>
           <img className='circleBgWrapper' src={require(this.props.bg)}/>
           <div className='circleContentWrapper'>
             <h2>{this.props.description}</h2>
           </div>
          </a>
        </div>
      </Col>
    );
  }
}

export default Projects;