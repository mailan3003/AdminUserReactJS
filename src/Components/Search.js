import React, { Component } from 'react';
import EditUser from './EditUser';

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      tempValue: "",
      userObj:{}
    }
  }
  hienThiNut = ()=>{
    if(this.props.hienThiForm===true){
      return <div className="btn btn-block btn-outline-secondary" onClick = {()=>this.props.ketNoi()}>Dong lai</div>;
    }else{
      return <div className="btn btn-block btn-outline-info" onClick = {()=>this.props.ketNoi()}>Click de them moi</div>;
    }
  }
  isChange = (event)=>{
    this.setState ({
      tempValue:event.target.value
    })
    this.props.checkConnectProps(this.state.tempValue);
  }
  isShowEditForm = () => {
    if(this.props.editUserStatus === true){
      return <EditUser getUserEditInfo={(info)=>this.getUserEditInfo(info)} userEditObject={this.props.userEditObject} changeEditUserStatus={()=>this.props.editChange()}/>
    }
  }
  getUserEditInfo = (info) => {
    this.setState({
      userObj: info
    });
    this.props.getUserEditInfoApp(info);
  }
  render() {
    return (
        <div className="col-12">
          <div className="row">
            {this.isShowEditForm()}
          </div>
            <div className="form-group">
                <div className="btn-group">
                <input type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhap tu can tim kiem" style={{width: '500px'}} onChange = {(event) => {this.isChange(event)}}/>
                <div className="btn btn-info" onClick = {(dl)=>{this.props.checkConnectProps(this.state.tempValue)}}>Tim</div>
                </div>
                {this.hienThiNut()}
            </div>
            <hr className="my-2" />
        </div>
    );
  }
}
