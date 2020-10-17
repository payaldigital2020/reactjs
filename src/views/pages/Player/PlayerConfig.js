
import React, { Component } from "react";
import { Search } from "react-feather";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Row, Table } from "reactstrap";
import * as Icon from "react-feather"
// import { makeStyles } from '@material-ui/core/styles';
// import css from "./Tabledata.css";


export default class PlayerConfig extends Component {
 

  constructor() {
    super();
    this.state = {
      messageBox: false
    };

    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(e) {
    
    console.log('clicked');   
   this.setState({
     messageBox: !this.state.messageBox
   });

   this.props.chnegBtnState(!this.state.messageBox);

  }

  render() {
    return (
      
    <Card>
    <CardHeader>
            <Col md="5" >
              <Button>
                <Link
                  to={{
                    pathname : '/add-Pslayer'
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
                  placeholder="Serch"
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
   
      <Table className="table table-striped table-bordered">
                  <thead className="display-block">
                    <tr>
                      <th>#</th>
                      <th>
                        <input 
                          type="checkbox"
                          checked="checkbox"
                          
                         className="select-on-check-all checkbox"
                         name="selection[]"
       
                        />

                      </th>
                      <th>
                        <a href="" data-sort="dp_id">
                          Dp ID
                        </a>
                      </th>
                      <th>
                        <a href="" data-sort="name">
                          Name
                        </a>
                      </th>
                      <th>
                        <a href="" data-sort="mobile">
                          Mobile
                        </a>
                      </th>
                      <th>
                        <a href="" data-sort="app">
                          App
                        </a>
                      </th>
                      <th>
                        <a href="" ddata-sort="state">
                          State
                        </a>
                      </th>
                      <th>
                        <a href="" data-sort="created">
                          Created
                        </a>
                      </th>
                      <th>
                        <a href="" data-sort="city">
                          City
                        </a>
                      </th>
                      <th>
                        <a href="">Version</a>
                      </th>
                      <th>
                        <a href="" data-sort="account_status">
                          AC Status
                        </a>
                      </th>
                      <th>
                        <a href="" data-sort="note">
                          Note
                        </a>
                      </th>
                      <th>
                        <a href="" data-sort="emp_name">
                          Employee Name
                        </a>
                      </th>
                      <th>
                        <a href="" data-sort="favourite">
                          favourite
                        </a>
                      </th>
                    </tr>
                    
                  </thead>

        <tbody className="display-block">
                    <tr data-key="19171">
                      <td>1</td>
                      <td>
                        <input
                          type="checkbox"
                          name="selection[]"
                          className="checkbox"
                          value="19171"
                        />
                      </td>
                      <td>DP_ID-19399</td>
                      <td>*****</td>
                      <td>*********</td>
                      <td>*********</td>
                      <td>Karnataka</td>
                      <td>2020-08-18</td>
                      <td>Uttara Kannada /Karwar</td>
                      <td>2</td>
                      <td>Active</td>
                      <td>
                        <b>No</b>
                      </td>
                      <td>No</td>
                      <td>
                        <a href="">
                          <img
                            src="http://satta5.com/images/Off.png"
                            width="40"
                            height="40"
                            alt=""
                          />
                        </a>
                      </td>
                    </tr>
                    
                  </tbody>
    
    
                </Table>
      </CardBody>
    </Card>
  
    );
  }
}
