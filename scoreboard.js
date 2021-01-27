'use strict';

const e = React.createElement;

class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        homeScore: 0,
        awayScore: 0
    };
        
    this.changeHomeScore = this.changeHomeScore.bind(this);
    this.changeAwayScore = this.changeAwayScore.bind(this);

  }

  changeHomeScore(points) {
    this.setState({homeScore: this.state.homeScore + points});
  }
 
   changeAwayScore(points) {
    this.setState({awayScore: this.state.awayScore + points});
  }
    
  render() {
    
    return (
      <div>
        <HomeBoard score={this.state.homeScore} />
        <AwayBoard score={this.state.awayScore} />
        <HomeButtons onClick={this.changeHomeScore} />
        <AwayButtons onClick={this.changeAwayScore} />
      </div>
    );
  }
}

const domContainer = document.querySelector('#scoreboard_container');
ReactDOM.render(e(Scoreboard), domContainer);
