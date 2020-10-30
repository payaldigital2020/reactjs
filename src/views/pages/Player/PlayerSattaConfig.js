
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, Row, Col, FormGroup, Input , Table } from "reactstrap";
import * as Icon from "react-feather"
// import { playerlist, playerList } from "../../../redux/actions/player/index"
import Chip from "../../../components/@vuexy/chips/ChipComponent"
import { Edit, Trash, Eye, Search } from "react-feather"
import { playersatta } from "../../../redux/actions/playersatta";
const chipColors = {
    "false": "warning",
    "true": "success",
  }
export default class PlayerSattaConfig extends Component {
 
constructor(props)
{
    super(props);
    this.state={
      search : '',
      data : [],
      messageBox: false,
    }
}
componentDidMount(){
    playersatta()
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
       
  
      <CardBody>
      {
             data.length === 0 ? 
             <Row>
               <Col sm="12" className="text-center">
                 No Record Found
               </Col>
             </Row> :
        <Table className="">
          <thead>
            <tr>
              <th>ID</th>
              <th>Total Bet :-</th>
              <th>Amount :-</th>
           
            </tr>
          </thead>
          <tbody>
          {
              data.map( ( item, index ) => {
                return(
                  <tr key={ item._id }>
                    <td>{ parseInt(index) + 1 }</td>
                    <td>{ item.TotalBet }</td>
                    <td>{ item.Amount }</td>
                    <td>
                      <Chip
                        className="cursor-pointer mr-1"
                        color={chipColors[item.status]}
                        text={ item.status ? 'Active' : 'Deactive' }
                      />
                    </td>
                    </tr>
                )
              })}
            </tbody>
        </Table>
  }
      </CardBody>
    </Card>  
    );
  }
}