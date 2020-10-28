import React, { Component } from 'react'
import { ButtonToggle, Card, CardBody, FormGroup, Input, Label, Pagination, PaginationItem, PaginationLink, Progress, Table } from 'reactstrap'

export default class ListViewConfig extends Component {
  render() {
    return (
        <>
 <div class="row">
   <div class="col-sm-12">
      <div class="data-list list-view">
         <header class="sc-iemXMA bEChXo">
            <div class="data-list-header d-flex justify-content-between flex-wrap">
               <div class="actions-left d-flex flex-wrap">
                  <div class="data-list-dropdown mr-1 dropdown">
                     <button type="button" aria-haspopup="true" aria-expanded="false" class="p-1 btn btn-primary">
                        <span class="align-middle mr-1">Actions</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                           <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                     </button>
                     <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><a tabindex="0" role="menuitem" class="dropdown-item">Delete</a><a tabindex="0" role="menuitem" class="dropdown-item">Archive</a><a tabindex="0" role="menuitem" class="dropdown-item">Print</a><a tabindex="0" role="menuitem" class="dropdown-item">Export</a></div>
                  </div>
                  <button type="button" class="add-new-btn btn btn-outline-primary">
                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                     </svg>
                     <span class="align-middle">Add New</span>
                  </button>
               </div>
               <div class="actions-right d-flex flex-wrap mt-sm-0 mt-2">
                  <div class="data-list-rows-dropdown mr-1 d-md-block d-none dropdown">
                     <button type="button" aria-haspopup="true" aria-expanded="false" class="sort-dropdown btn btn-">
                        <span class="align-middle mx-50">1 - 4 of 99</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                           <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                     </button>
                     <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right"><a tabindex="0" role="menuitem" class="dropdown-item">4</a><a tabindex="0" role="menuitem" class="dropdown-item">10</a><a tabindex="0" role="menuitem" class="dropdown-item">15</a><a tabindex="0" role="menuitem" class="dropdown-item">20</a></div>
                  </div>
                  <div class="filter-section"><input type="text" class="form-control order rounded-pill"/></div>
               </div>
            </div>
         </header>  
          <Card className="mt-5">
           <Table>
           <thead>
           <tr>
           <th><FormGroup check>
           <Label check>
          <Input type="checkbox" />{' '}
    </Label>
      </FormGroup></th>
          <th>NAME</th>
          <th>CATEGORY</th>
          <th>POPULARITY</th>
          <th>ORDER STATUS</th>
          <th>PRICE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
    <tbody>
        <tr>
        <td>    <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
   </Label>
      </FormGroup></td>
          <td>Apple Watch Series 4 GPS</td>
          <td>Computers</td>
          <td>
          <Progress value="100" />
         </td>
          <td><ButtonToggle color="warning" className="border rounded-pill">on hold</ButtonToggle>{' '}</td>
          <td>$69.99</td>
          <td></td>
        </tr>
      </tbody>
   </Table>
</Card>
<Pagination aria-label="Page navigation example" className="d-flex justify-content-end">
    
      <PaginationItem disabled>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
 
    </Pagination>
 <div class="data-list-overlay"></div>
      </div>
   
   </div>
</div>

</>
    )
  }
}


