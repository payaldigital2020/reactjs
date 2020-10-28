import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Row, Col, FormGroup, Input , Table } from "reactstrap";
import * as Icon from "react-feather"
import { playerlist, playerList } from "../../../redux/actions/player/index"
import Chip from "../../../components/@vuexy/chips/ChipComponent"
import { Edit, Trash, Eye, Search } from "react-feather"
const chipColors = {
  "false": "warning",
  "true": "success",
}

export default class PlayerConfig extends Component {
 
  constructor() {
    super();
    this.state = {
      search : '',
      data : [],
      messageBox: false
    }
  }

  componentDidMount(){
    playerlist()
    .then( res => {
      if( res.code === 1 ) {
        this.setState( { data : res.result } , () => { console.log( this.state.data ) } ) 
      }
    else{
        console.log(res)
      }
    })
  }

  render() {
    const { data } = this.state
    return (
        <Card>
          <CardHeader>
            <Col md="5" >
              <Button>
                <Link
                  to={{
                    pathname : '/add-player'
                  }}
                >
                  < Icon.PlusCircle size={15} /> &nbsp;&nbsp; Add Player
                </Link>
              </Button>
            </Col>
            <Col md="3" className="text-right" >
              <FormGroup className="form-label-group position-relative has-icon-right pt-2">
                <Input
                  type="text"
                  placeholder="Search"
                  value={this.state.search}
                  onChange={e => this.setState({ search: e.target.value })}
                />
                <div className="form-control-position pt-2">
                  <Search size={15} />
                </div>
              </FormGroup>
            </Col>
         </CardHeader>
      <CardBody>
        {
          data.length === 0 ? 
          <Row>
            <Col sm="12" className="text-center">
              No Record Found
            </Col>
          </Row> :
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>App</th>
              <th>State</th>
              <th>City</th>
              <th>Wallet</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map( ( item, index ) => {
                return(
                  <tr key={ item._id }>
                    <td>{ parseInt(index) + 1 }</td>
                    <td>{ item.firstname }</td>
                    <td>{ item.lastname }</td>
                    <td>{ item.email }</td>
                    <td>{ item.mobilenumber ?? 'Not Added' }</td>
                    <td>{ item.app ?? 'Not Added' }</td>
                    <td>{ item.state ?? 'Not Added' }</td>
                    <td>{ item.city ?? 'Not Added' }</td>
                    <td>{ item.balance ?? 'Not Added' }</td>
                    <td>
                      <Chip
                        className="cursor-pointer mr-1"
                        color={chipColors[item.status]}
                        text={ item.status ? 'Active' : 'Deactive' }
                      />
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
                        />
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
                        />
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
    );
  }
}