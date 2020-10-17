import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import css from "./Tabledata.css";
export default class Tabledata extends Component {

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
      <>
        <Container-fluid>
          <Row>
            <Col md={3}></Col>
            <Col md={9}>
              <div className="customerView">
                <div className="summery">
                  Showing
                  <strong> 1-50 </strong>
                  of
                  <strong> 18,594 </strong>
                  items
                </div>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>
                        <input onClick={this.handleClick}
                          type="checkbox"
                          checked={this.state.messageBox}
                          
                          
                          className="select-on-check-all checkbox"
                          name="selection_all"
                          
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
                    <tr id="filters" class="filters">
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[dp_id]"
                          value=""
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[name]"
                          value=""
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[mobile]"
                          value=""
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[app]"
                          value=""
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[state]"
                          value=""
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[created]"
                          value=""
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[city]"
                          value=""
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <select
                          className="form-control"
                          name="CustomerSearch[account_status]"
                        >
                          <option value=""></option>
                          <option value="Inactive">Inactive</option>
                          <option value="Active" selected="">
                            Active
                          </option>
                        </select>
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[emp_name]"
                          value=""
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="CustomerSearch[favourite]"
                          value=""
                        />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
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
                    <tr data-key="19148">
                      <td>2</td>
                      <td>
                        <input
                          type="checkbox"
                          name="selection[]"
                          className="checkbox"
                          value="19148"
                        />
                      </td>
                      <td>DP_ID-19376</td>
                      <td>*****</td>
                      <td>*********</td>
                      <td>*********</td>
                      <td>Maharashtra</td>
                      <td>2020-08-17</td>
                      <td>Washim</td>
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
                </table>
              </div>
            </Col>
          </Row>
        </Container-fluid>
      </>
    );
  }
}
