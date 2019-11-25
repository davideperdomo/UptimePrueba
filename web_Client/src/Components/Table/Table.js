import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as consts from '../../consts';
import {Row, Col, Button, Card, CardTitle,Table} from 'react-materialize';

export default class DataTable extends Component {
  state = {
    data: [],
    times: 0
  }

  componentDidMount() {  
    //Update data every minute except first time
    if(this.state.times==0){
      this.get()
    }
    this.interval=setInterval( () => {
      this.get()
      }, 59000);
  }
/*
  componentWillUnmount() {
    clearInterval(this.interval);
  }*/

  get(){   
    //GET HTTP method
    axios.get(consts.SERVER_URL+'/get')
      .then(response => {
        console.log(response.data)
        const data = response.data
        this.setState( (prevState) => ({
          times: prevState.times + 1,
          data: data
        }));
    })
      .catch(error => {
        // handle error
        console.log(error);
      })    
  }

  castDate(timestamp){

    var date= new Date(timestamp)
    return date.toString()
  }

 render() {
    //render HTML table
    return (
    <div>
      <Row>
        <Col l={2} m={1} className='grid-example'></Col>
        <Col l={8} m={10} s={12} className='grid-example'>
          <Card className=''>
            <h4><b>Data</b></h4>
            <Table>
              <thead>
                <tr>
                  <th data-field="date">Timestamp</th>
                  <th data-field="random">Number</th>
                </tr>
              </thead>
              <tbody>
               {this.state.data.map(data => 
                 <tr>
                  <td>{this.castDate(data.timestamp.$date)}</td>
                  <td>{data.random}</td>
                </tr>
               )}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      <div style={{'margin-bottom':'200px'}}>          
      </div>
    </div>
    )
  }
}
