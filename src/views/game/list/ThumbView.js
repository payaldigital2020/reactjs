import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import ThumbViewConfig from "./GameListConfig"
import queryString from "query-string"
class ThumbView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Games"
          breadCrumbParent="Home"
          breadCrumbActive="Games List"
       
        />
        <Row>
          <Col sm="12">
            <ThumbViewConfig thumbView={true} parsedFilter={queryString.parse(this.props.location.search)}/>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default ThumbView
