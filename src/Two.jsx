import React from 'react';
import * as Two from 'twojs-ts';

export default class TwoRotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    const two = new Two({
      width: 320,
      height: 320,
    });

    this.two = two;
  }

  componentDidMount() {
    const two = this.two;
    two.appendTo(this.stage);
    const rect = two.makeRectangle(213, 100, 100, 100);
    const circle = two.makeCircle(72, 100, 50);

    circle.fill = '#FF8000';
    circle.stroke = 'orangered'; // Accepts all valid css color
    circle.linewidth = 5;

    rect.fill = 'rgb(0, 200, 255)';
    rect.opacity = 0.75;
    rect.noStroke();

    two.update();
  }

  render(){
    return (
      <div>
        <div ref={c => this.stage = c}></div>
      </div>
    )
  }
}