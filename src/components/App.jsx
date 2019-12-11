import React from "react";
import Description from "./Description.jsx";
const axios = require("axios");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: null
    };
    this.selectProduct = this.selectProduct.bind(this);
  }

  selectProduct(event) {
    axios
      .get(
        `http://node-express-env.pd2fd7phmh.us-east-2.elasticbeanstalk.com/api/${event.target.value}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .catch(console.log)
      .then(data =>
        this.setState({
          currentProduct: data.data[0]
        })
      );
  }
  // selectProduct(event) {
  //   console.log(
  //     `FILE: App.jsx selectProduct() | event.target.value: \n`,
  //     event.target.value
  //   );
  //   // console.log(event.target);
  //   //http://localhost:3000/70
  //   //  http://node-express-env.bcgwijp6ik.us-east-2.elasticbeanstalk.com/70
  //   axios
  //     .post(
  //       "http://node-express-env.bcgwijp6ik.us-east-2.elasticbeanstalk.com/products",
  //       { productID: 70 }
  //     )
  //     .then(data => {
  //       console.log(`FILE: api.js () | data: \n`, data);
  //       this.setState({ currentProduct: data.data[0] });
  //     })
  //     .catch(error => {
  //       console.log(`FILE: api.js () | ERROR: \n`, error);
  //     });
  //   // axios
  //   //   .get({
  //   //     headers: {
  //   //       "Access-Control-Allow-Origin": "*"
  //   //     },
  //   //     // url: `http://node-express-env.bcgwijp6ik.us-east-2.elasticbeanstalk.com/${event.target.value}`
  //   //     // url: `localhost:3000/${event.target.value}`
  //   //     url: `localhost:3000/70`
  //   //   })
  //   //     .then(data => {
  //   //         console.log(`FILE: App.jsx () | data: \n`, data);
  //   //         // this.setState({
  //   //         //     currentProduct: data.data[0]
  //   //         // })
  //   //     })
  //   //     .catch(error => {
  //   //     	console.log(`FILE: App.jsx () | ERROR: \n`, error);
  //   //     })
  //   //}

  // selectProduct(event) {
  //   axios({
  //     method: "GET",
  //     url: `/${event.target.value}`
  //   }).then(data =>
  //     this.setState({
  //       currentProduct: data.data[0]
  //     })
  //   );
  // }

  render() {
    console.log("test");
    return !this.state.currentProduct ? (
      <button onClick={this.selectProduct} value="70">
        Click for products
      </button>
    ) : (
      <Description currentProduct={this.state.currentProduct} />
    );
  }
}

export default App;
