import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import PlayerSattaConfig from "./Player/PlayerSattaConfig"

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
         <PlayerSattaConfig />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Games