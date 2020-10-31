import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Row, Col, FormGroup, Input , Table } from "reactstrap";
import { Edit, Trash, Eye, Search } from "react-feather"


export default class KingBazarsConfig extends Component {
    render() {
        return (
            <>
               <h1>King Bazars</h1>
            <Button color="success" className="d-inline rounded-0 p-1 mb-1">Create King Bazar</Button>
             
            <Card>
            <p className="m-1">Showing <strong>1-14</strong> or <strong>14</strong> items. </p>
        <CardBody>
          {
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Bazar</th>
                <th>Time</th>
                <th>Status</th>
                <th>Created</th>
                <th></th> 
              </tr>
            </thead>
            <tbody>
            <tr>
          <th>1</th>
          <td>7</td>
          <td>Balaji</td>
          <td>05.15 AM</td>
          <td>Active</td>
          <td>2020-04-21 12:45:43</td>
          <td> <Eye className="cursor-pointer" size={20}/>
          <Edit title="Edit Player" className="cursor-pointer" size={20}/><br></br>
          <Trash title="Delete layer"className="cursor-pointer"size={20}/>
          </td>
           </tr>
            </tbody>
          </Table>
          }
        </CardBody>
      </Card>
      </>
        )
    }
}
