
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Row, Col, FormGroup, Input , Table } from "reactstrap";
import { Edit, Trash, Eye, Search } from "react-feather"

export default class ResultAnnouncerConfig extends Component {
     
  constructor() {
    super();
    this.state = {
      search : '',
      data : [],
      messageBox: false
    }
  }

    render() {
        const { data } = this.state
        return (
            <Card>
        <CardBody>
          {
            data.length === 0 ? 
            <Row>
              <Col sm="12" className="text-center">
                No Data Found
              </Col>
            </Row> :
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Dp ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>User Name</th>
                <th>Created</th>
                <th>Bazar</th>
                <th>Starline Bazar</th>
                <th>King Bazar</th>
                <th></th>
                
              </tr>
            </thead>
            <tbody>
              {
                data.map( ( item, index ) => {
                  return(
                    <tr key={ item._id }>
                      <td>{ parseInt(index) + 1 }</td>
                      <td>{ item.DpID }</td>
                      <td>{ item.Name }</td>
                      <td>{ item.Mobile }</td>
                      <td>{ item.UserName }</td>
                      <td>{ item.Created }</td>
                      <td>{ item.Bazar }</td>
                      <td>{ item.StarlineBazar }</td>
                      <td>{ item.KingBazar }</td>
                      <td>
                      </td>
                      <td>
                        <Link
                          title="View Player"
                          className="cursor-pointer mr-1"
                          to={{
                            pathname: "/profile-view",
                            state: {
                              playerData : item ?? []
                            }
                          }}
                        >
                          <Eye
                            className="cursor-pointer"
                            size={20}
                          /><br></br>
                        </Link>
                        <Link
                          title="Edit Player"
                          className="cursor-pointer mr-1"
                          to={{
                            pathname: "/profile-edit",
                            state: {
                              playerData : item
                            }
                          }}
                        >
                          <Edit
                            title="Edit Player"
                            className="cursor-pointer text-success"
                            size={20}
                          /><br></br>
                        </Link>
                        <Trash
                          title="Delete layer"
                          className="cursor-pointer text-danger"
                          size={20}
                        />
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          }
        </CardBody>
      </Card> 
        )
    }
}
