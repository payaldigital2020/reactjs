import React from "react";
import { Row, Col, Button } from "reactstrap";
import Chip from "../../../components/@vuexy/chips/ChipComponent";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

class ThumbView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: null,
      prevNumber: null,
    };
  }
  componentDidMount() {
    fetch("http://matka6.com:1667/api/game/singleAnk?id=" + this.state.id)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
    console.log();
  }

  render() {
    if (!this.state.data) {
      return (
        <Row>
          <Col sm="12">
            <h2>No Data Found</h2>
          </Col>
        </Row>
      );
    }

    const { data, prevNumber } = this.state;
    function groupBy(collection, property) {
      var i = 0,
        val,
        index,
        values = [],
        result = [];
      for (; i < collection.length; i++) {
        val = collection[i][property];
        index = values.indexOf(val);
        if (index > -1) result[index].push(collection[i]);
        else {
          values.push(val);
          result.push([collection[i]]);
        }
      }
      return result;
    }
    // console.log(obj)

    let randomColor = ["primary", "success", "info"];

    const singleAnk = () => {
      return (
        <div className="px-2 py-3 card">
          <Row className="text-center">
            {data.result[0].gameNumbers.map((item) => (
              <Col sm="3" key={item._id}>
                <Button.Ripple
                  className={
                    "mr-1 mb-1 py-2 bg-gradient-" +
                    randomColor[Math.floor(Math.random() * randomColor.length)]
                  }
                  color={
                    "relief-" +
                    randomColor[Math.floor(Math.random() * randomColor.length)]
                  }
                >
                  {item.number}{" "}
                </Button.Ripple>
              </Col>
            ))}
          </Row>
        </div>
      );
    };
    const singlePana = () => {
      const singlePanaGameNumbers = groupBy(
        data.result[0].gameNumbers,
        "singleNumber"
      );
      //   console.log(JSON.stringify(singlePanaGameNumbers));
      return (
        <div >
          {singlePanaGameNumbers.map((item, index) => (
            <div className="card px-3 py-3">
              <h2 className="text-primary">
                SINGLE ANK{" "}
                <Button.Ripple
                  className={"mr-1 mb-1 bg-gradient-warning"}
                  color={"relief-danger"}
                >
                  {index}{" "}
                </Button.Ripple>
              </h2>
              <h4 className="text-muted text-center">Numbers</h4>
              <hr />

              <Row key={index} className="text-center">
                {singlePanaGameNumbers[index].map((itemNumbers, itemindex) => (
                  <Col sm="3" key={itemindex}>
                    <Button.Ripple
                      className={
                        "mr-1 mb-1 py-2 bg-gradient-" +
                        randomColor[
                          Math.floor(Math.random() * randomColor.length)
                        ]
                      }
                      color={
                        "relief-" +
                        randomColor[
                          Math.floor(Math.random() * randomColor.length)
                        ]
                      }
                    >
                      {itemNumbers.number}{" "}
                    </Button.Ripple>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </div>
      );
    };
    const doublePana = () => {
      return (
        <Row>
          {data.result[0].gameNumbers.map((item) => (
            <Col sm="3" key={item._id}>
              <Button.Ripple
                className={
                  "mr-1 mb-1 py-2 bg-gradient-" +
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                }
                color={
                  "relief-" +
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                }
              >
                {item.number}{" "}
              </Button.Ripple>
            </Col>
          ))}
        </Row>
      );
    };

    const halfSangam = () => {
      return (
        <Row>
          {data.result[0].gameNumbers.map((item) => (
            <Col sm="3" key={item._id}>
              <Button.Ripple
                className={
                  "mr-1 mb-1 py-2 bg-gradient-" +
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                }
                color={
                  "relief-" +
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                }
              >
                {item.number}{" "}
              </Button.Ripple>
            </Col>
          ))}
        </Row>
      );
    };
    const fullSangam = () => {
      return (
        <Row>
          {data.result[0].gameNumbers.map((item) => (
            <Col sm="3" key={item._id}>
              {}
              <Button.Ripple
                className={
                  "mr-1 mb-1 py-2 bg-gradient-" +
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                }
                color={
                  "relief-" +
                  randomColor[Math.floor(Math.random() * randomColor.length)]
                }
              >
                {item.number}{" "}
              </Button.Ripple>
            </Col>
          ))}
        </Row>
      );
    };

    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Games"
          breadCrumbParent="Home"
          breadCrumbActive={data.result[0].name.toUpperCase()}
        />
        <h2 className="text-primary">{data.result[0].name.toUpperCase() +" NUMBERS"}</h2>
        <hr />
        {data.result[0].name === "single ank" && singleAnk()}
        {data.result[0].name === "Jodi" && singleAnk()}
        {data.result[0].name === "single pana" && singlePana()}
        {data.result[0].name === "double pana" && singlePana()}
        {data.result[0].name === "tripple pana" && singleAnk()}
        {data.result[0].name === "half sangam" && halfSangam()}
        {data.result[0].name === "full sangam" && fullSangam()}
      </React.Fragment>
    );
  }
}

export default ThumbView;
