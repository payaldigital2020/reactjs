import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import Playlisst from "./Player/Playlisst"

class Games extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Games"
          breadCrumbParent="Home"
          breadCrumbActive="games"
        />
        <Row>
          <Col sm="12">
            <Playlisst />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Games