import React, { Component } from 'react'
import { Button, Card, Container, Jumbotron, Table } from 'reactstrap'
import css from "./FundRequest.css";

export default class FundRequestConfig extends Component {
    render() {
        return (
          <Card>
          <div className="">
                <Jumbotron className="m-0 p-1 bg-danger text-white d-flex justify-content-center rounded-0">
          <h1 className="text-white"><strong>ROZARPAY FUND REQUEST</strong></h1>
      </Jumbotron>

      <div className="mt-4">
      <Button color="primary mr-1 pr-1 pl-1 rounded-0">Wallet History</Button>
      <Button color="primary mr-1 pr-1 pl-1 rounded-0">Customer List</Button>
      <Button color="primary mr-1 pr-1 pl-1 rounded-0">Fund Request</Button>
      <Button color="primary mr-1 pr-1 pl-1 rounded-0">Push Amount</Button>
      <Button color="primary mr-1 pr-1 pl-1 rounded-0">Master</Button>
    
      </div>
      <div className="mt-1">
      <Button color="success mr-1 pr-1 pl-1 rounded-0">Create Fund Request</Button>
      <Button color="primary mr-1 pr-1 pl-1 rounded-0">All Request</Button>
      <Button color="primary mr-1 pr-1 pl-1 rounded-0">Today request</Button>
      </div>
      <Table className="bg-warning text-dark w-75 mt-1">
      <thead>
        <tr className="m-0">
         
          <th className="p-0"><b>Deposite    </b>Pending Amt. :</th>
          <th className="p-0">Request Amt. :</th>
          <th className="p-0"> Reject Amt. :</th>
        </tr>
      </thead>
      <tbody>
        <tr className="m-0">
          <td className="p-0"><b>Withdrow  </b> Pending Amt. :</td>
          <td className="p-0">Request Amt. :</td>
          <td className="p-0">Reject Amt. :</td>
        </tr>
      </tbody>
    </Table>
 <div className="FundRequest">
                <Table bordered bordered-dark>
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>
                        <input
                          type="checkbox"className="select-on-check-all checkbox"name="selection_all"/>
                      </th>
                      <th>
                        <a href=""> Name</a></th>
                      <th>
                        <a href=""> Mobile</a>
                      </th>
                      <th><a href="">App</a>
                      </th>
                      <th><a href="">Created</a>
                      </th>
                      <th><a href="">Approved Date</a>
                      </th>
                      <th><a href="">Amount</a>
                      </th>
                      <th><a href="">Action</a>
                      </th>
                      <th><a href="">Type</a></th>
                      <th><a href="">Request By</a>
                      </th>
                      <th><a href="">Payment Status</a>
                      </th>
                      <th><a href="">Accepted By</a>
                      </th>
                      <th><a href="">Last Balanced</a></th>
                    </tr>
                  
                  <tr id="filters" class="filters">
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>2020-10-30</td>
                      <td> </td>
                      <td>&nbsp;</td>
                      <td></td>
                      <td>&nbsp;</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr><td colspan="14"><b>No Result Found</b></td></tr>
                  
                  </thead>
                  
              </table>
              </Table>
              </div>
</div>
</Card>
        )
    }
}
