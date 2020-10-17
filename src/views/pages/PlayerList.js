import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import queryString from "query-string"
import PlayerConfig from "./Player/PlayerConfig"

class Games extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Thumb View"
          breadCrumbParent="Data List"
          breadCrumbActive="Thumb View"
        />
        <Row>
          <Col sm="12">
            <PlayerConfig /> 
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Games