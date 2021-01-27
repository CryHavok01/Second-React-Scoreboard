'use strict';

class AwayButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
      const points = Number(e.target.value)
      this.props.onClick(points);
  }
  
  render() {
      return(
        <div className="away_buttons">
            <button value='1' onClick={this.handleClick}>
            Free Throw
            </button>
            <button value='2' onClick={this.handleClick}>
            Field Goal
            </button>
            <button value='3' onClick={this.handleClick}>
            Three Points
            </button>
        </div>
    )
  }
}
