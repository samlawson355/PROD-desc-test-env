import React from "react";

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="numberOfRatingsS">
        <a>
          {this.props.currentProduct.productNumOfRatings.toLocaleString()}{" "}
          ratings
        </a>
      </div>
    );
  }
}

export default Ratings;
