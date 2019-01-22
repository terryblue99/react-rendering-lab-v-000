import React from 'react';

class Circle extends React.Component {

  // does not re-render when the same color is passed in twice
  shouldComponentUpdate(nextProps) {
    return (this.props.color !== nextProps.color);
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
