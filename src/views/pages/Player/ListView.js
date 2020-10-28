import React, {Component} from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ListViewConfig from "./ListViewConfig"
// import { Component } from "react"

export default class Viewlist extends Component {
    render() {
        return (
            <React.Fragment>
            <Breadcrumbs
              breadCrumbTitle="Thumb View"
              breadCrumbParent="Data List"
              breadCrumbActive="Thumb View"
            />
            <Row>
              <Col sm="12">
             <ListViewConfig />
              </Col>
            </Row>
          </React.Fragment>
        )
    }
}


