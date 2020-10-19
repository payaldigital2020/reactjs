import React, {Component}from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Media,
  Row,
  Col,
  Button,
  Table
} from "reactstrap"
import { Edit, Trash, Lock, Check } from "react-feather"
import { Link } from "react-router-dom"
// import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import userImg from "../../../assets/img/portrait/small/avatar-s-18.jpg"
import "../../../assets/scss/pages/users.scss"
export default class Viewconfig extends Component {
    render() {
        return (
            <React.Fragment>
            <Row>
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row className="mx-0" col="12">
                      <Col className="pl-0" sm="12">
                        <Media className="d-sm-flex d-block">
                          <Media className="mt-md-1 mt-0" left>
                            <Media
                              className="rounded mr-2"
                              object
                              src={userImg}
                              alt="Generic placeholder image"
                              height="112"
                              width="112"
                            />
                          </Media>
                          <Media body>
                            <Row>
                              <Col sm="9" md="6" lg="5">
                                <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      Username
                                    </div>
                                    <div>crystal</div>
                                  </div>
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      Name
                                    </div>
                                    <div>Crystal Hamilton</div>
                                  </div>
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      Email
                                    </div>
                                    <div className="text-truncate">
                                      <span>crystalhamilton@gmail.com</span>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                              <Col md="12" lg="5">
                                <div className="users-page-view-table">
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      Status
                                    </div>
                                    <div>active</div>
                                  </div>
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      Role
                                    </div>
                                    <div>admin</div>
                                  </div>
                                  <div className="d-flex user-info">
                                    <div className="user-info-title font-weight-bold">
                                      Company
                                    </div>
                                    <div>
                                      <span>North Star Aviation Pvt Ltd</span>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </Media>
                        </Media>
                      </Col>
                      <Col className="mt-1 pl-0" sm="12">
                        <Button.Ripple className="mr-1" color="primary" outline>
                          <Link to="/app/user/edit">
                            <Edit size={15} />
                            <span className="align-middle ml-50">Edit</span>
                          </Link>
                        </Button.Ripple>
                        <Button.Ripple color="danger" outline>
                          <Trash size={15} />
                          <span className="align-middle ml-50">Delete</span>
                        </Button.Ripple>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col sm="12" md="6">
                <Card>
                  <CardHeader>
                    <CardTitle>Information</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <div className="users-page-view-table">
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Birth Date
                        </div>
                        <div> 28 January 1998</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Mobile
                        </div>
                        <div>+65958951757</div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Website
                        </div>
                        <div className="text-truncate">
                          <span>https://rowboat.com/insititious/Crystal</span>
                        </div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Languages
                        </div>
                        <div className="text-truncate">
                          <span>English, French</span>
                        </div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Gender
                        </div>
                        <div className="text-truncate">
                          <span>Female</span>
                        </div>
                      </div>
                      <div className="d-flex user-info">
                        <div className="user-info-title font-weight-bold">
                          Contact
                        </div>
                        <div className="text-truncate">
                          <span>email, message, phone</span>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
           
       
            </Row>
          </React.Fragment>
        )
    }
}



