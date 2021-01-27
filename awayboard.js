'use strict';

const e = React.createElement;

class AwayBoard extends React.Component {

  render() {
    return (
        <div>
            <p className="away_sign">Visitors</p>
            <div className="away_board">{this.props.score}</div>
        </div>
    );
  }
}
