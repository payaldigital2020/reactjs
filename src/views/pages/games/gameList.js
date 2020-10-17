import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import GamesList from "./games/gameList"

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
            <GamesList />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Games