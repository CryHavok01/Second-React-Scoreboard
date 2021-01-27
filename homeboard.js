'use strict';

const e = React.createElement;

class HomeBoard extends React.Component {

  render() {
    return (
        <div>
            <p className="home_sign">Home Team</p>
            <div className="home_board">{this.props.score}</div>
        </div>
    );
  }
}
