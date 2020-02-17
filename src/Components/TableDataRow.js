import React, { Component } from 'react';

export default class TableDataRow extends Component {
    permissionShow = () =>{
        if(this.props.userPermission == 1){
            return "Admin";
        }else if(this.props.userPermission == 2){
            return "Moderator";
        }else{
            return "Normal";
        }
    }
    editClick = () => {
      this.props.editFunctionClick();
      this.props.changeEditUserStatus();
    }
    deleteButtonClick = (idUser)=>{
      this.props.deleteButtonClick(idUser);
    }
  render() {
    return (
        <tr>
        <td >{this.props.stt+1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.userTel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua" onClick = {()=> this.editClick()}><i className="fa fa-edit">Sua</i></div>
            <div className="btn btn-danger xoa" onClick = {(idUser)=> this.deleteButtonClick(this.props.userID)}><i className="fa fa-ban">Xoa</i></div>
          </div>
        </td>
      </tr>
    );
  }
}
