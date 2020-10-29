import React, { Component } from 'react'
import { Button, Card, Form, FormGroup, FormText, Input, Label } from 'reactstrap'


export default class AddRoleConfig extends Component {
    render() {
        return (
<Card className="w-50">
            <Form className="m-2">
            <FormGroup>
              <Label for="name"><b>First Name</b></Label>
              <Input type="name" name="name" id="name" placeholder="First Name" />
            </FormGroup>
            <FormGroup>
              <Label for="Email"><b>Email</b></Label>
              <Input type="email" name="email" id="Email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="user name"><b>User Name</b></Label>
              <Input type="text" name="username" id="username" placeholder="User Name" />
            </FormGroup>
            <FormGroup>
              <Label for="Password"><b>Password</b></Label>
              <Input type="password" name="password" id="Password" placeholder="password" />
            </FormGroup>
            <FormGroup>
            <Label for="Password"><b>select Role type</b></Label>
        <Input type="select" name="select" id="Select">
        <option>select Role</option>
          <option>admin</option>
         <option>partner</option>
        </Input>
      </FormGroup>
            <Button color="primary" className="m-1">Submit</Button>
          </Form>
         </Card> 
        )
    }
}
