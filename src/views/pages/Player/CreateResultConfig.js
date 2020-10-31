import React, { Component } from 'react'
import { Button, Card, Form, FormGroup, FormText, Input, Label } from 'reactstrap'

export default class CreateResultConfig extends Component {
    render() {
        return (
            <>
            <h1 className="m-1">Create Result Announcer</h1>
<Card className="w-50">
    
            <Form className="m-2">
            <FormGroup>
              <Label for="name" className="text-danger"><b>Name *</b></Label>
              <Input type="name" name="name" id="name"/>
              <small class="form-text text-danger">We'll never share your email with anyone else.</small>
            </FormGroup>
            <FormGroup>
              <Label for="Number" className="text-danger"><b>Mobile*</b></Label>
              <Input type="Number" name="emNumberail" id="Number"/>
              <small class="form-text text-danger">Mobile cannot be blank.</small>
            </FormGroup>
            <FormGroup>
              <Label for="user name" className="text-danger"><b>User Name* </b></Label>
              <Input type="text" name="username" id="username"/>
              <small class="form-text text-danger">User Name cannot be blank.</small>
            </FormGroup>
            <FormGroup>
            <Label for="select"><b>Bazar</b></Label>
        <Input type="select" name="select" id="Select" placeholder="Select bazar....">   
        <option>Select bazar....</option>
  <option>select all</option>
          <option>KUBER BALAJI</option>
         <option>TIME SYNDICATE</option> 
         <option>BALAJI DAY</option>
         <option>MORNING SYNDICATE</option> 
        </Input>
      </FormGroup>
      <FormGroup>
            <Label for="select"><b> Starline Bazar</b></Label>
        <Input type="select" name="select" id="Select" placeholder="Select bazar....">   
        <option>Select bazar....</option>
  <option>select all</option>
          <option>KALYAN STAR LINE</option>
         <option>MILAN STARLINE</option> 
         <option>DUBAI STARLINE</option>
        </Input>
      </FormGroup>
      <FormGroup>
            <Label for="select"><b> King Bazar</b></Label>
        <Input type="select" name="select" id="Select">   
        
        <option>Select King bazar....</option>
  <option>select all</option>
          <option>BALAJI</option>
         <option>JANTAE</option> 
         <option>METRO</option>
         <option>GALI GOLD</option> 
        </Input>
      </FormGroup>
            <FormGroup>
              <Label for="Password" className="text-danger"><b>Password *</b></Label>
              <Input type="password" name="password" id="Password" />
              <small class="form-text text-danger">password cannot be blank</small>
            </FormGroup>
            <FormGroup>
              <Label for="Password"><b>Conform Password</b></Label>
              <Input type="password" name="password" id="Password"/>
            </FormGroup>
            <Button color="success" className="m-1">Save</Button>
          </Form>
         </Card> 
</>
        )
    }
}
