import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/Addform';
import Findform from './memo/FindForm';
import DelForm from './memo/DelForm';

class app extends Component {
    td = {
        width:"25opx"
    }
    constructor(props){
        
        super(props);
    }
    
    render() {
        return (
           <div>
            <h1>Memo</h1>
            <Addform />
            <hr />
            <table><tbody><tr>
            <td style={this.td}><Findform /></td>
            <td style={this.td}><Delform /></td>
            </tr></tbody></table>
           </div>
 
        )
        
    }
}
    
       
export default connect() (App);


                        