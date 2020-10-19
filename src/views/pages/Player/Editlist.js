import React, {Component} from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import Editconfig from "./Editconfig"
// import Viewconfig from "./Viewconfig"
// import { Component } from "react"

export default class Editlist extends Component {
    render() {
        return (
            <React.Fragment>
            {/* <Breadcrumbs
              // breadCrumbTitle="Thumb View"
              // breadCrumbParent="Data List"
              // breadCrumbActive="Thumb View"
            /> */}
            <Row>
              <Col sm="12">
                <Editconfig /> 
              </Col>
            </Row>
          </React.Fragment>
        )
    }
}


