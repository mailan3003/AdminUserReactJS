import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

export default class TableData extends Component {
  mappingDataUser = ()=>(
    this.props.dataUserProps.map((value, key) => (
      <TableDataRow deleteButtonClick = {(idUser)=> this.deleteButtonClick(idUser)} changeEditUserStatus={()=>this.props.changeEditUserStatus()} editFunctionClick = {(user)=>{this.props.editFunction(value)}} userID = {value.id} userName = {value.name} key = {key} stt = {key} userTel = {value.tel} userPermission = {value.permission} userID = {value.id}/>
     ))
  )
  deleteButtonClick = (idUser) => {
    this.props.deleteUser(idUser);
  }
  render() {
    return (
        <div className = "col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Ho ten</th>
              <th>SDT</th>
              <th>Quyen</th>
              <th>Thao tac</th>
            </tr>
          </thead>
          <tbody>
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
    );
  }
}
