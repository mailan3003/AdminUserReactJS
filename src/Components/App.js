import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      hienThiForm: false,
      data: DataUser,
      searchText:"",
      editUserStatus:false,
      userEditObject:{}
    }
  }
  doiTrangThai = () => {
    this.setState({
      hienThiForm:!this.state.hienThiForm
    })
  }
  getTextSearch = (dl)=>{
    this.setState({
      searchText: dl
    });
  }
  getUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuidv1() ;
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem('userData', JSON.stringify(items));
  }
  editUser = (user) => {
    this.setState({
      userEditObject:user
    });
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    })
  }
  getUserEditInfoApp = (info) =>{
    this.state.data.forEach((value, key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }
  deleteUser = (idUser) =>{
    var tempData = this.state.data;
    tempData =  tempData.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    //day vao kho du lieu
    localStorage.setItem('userData', JSON.stringify(tempData));
  }
  componentWillMount = () => {
    //kiem tra xem co localStorage chua
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data: temp
      });
    }
  };
  
  render(){
    // localStorage.setItem('userData', JSON.stringify(DataUser));
    var ketQua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText)!==-1){
        ketQua.push(item);
      }
    })
  return (
    <div>
      <Header></Header>
      <div className="searchForm">
        <div className="container">
            <div className="row">
              <Search getUserEditInfoApp = {(info)=> this.getUserEditInfoApp(info)} userEditObject = {this.state.userEditObject} editChange = {()=>{this.changeEditUserStatus()}} editUserStatus = {this.state.editUserStatus} ketNoi = {() => this.doiTrangThai()} hienThiForm = {this.state.hienThiForm} checkConnectProps = {(dl) => this.getTextSearch(dl)}></Search>
              <TableData deleteUser = {(idUser)=> this.deleteUser(idUser)} changeEditUserStatus={()=>this.changeEditUserStatus()} editFunction = {(user)=> this.editUser(user)} dataUserProps ={ketQua}></TableData>
              <AddUser add = {(name, tel, permission)=>{this.getUserData(name, tel, permission)}} hienThiForm = {this.state.hienThiForm}></AddUser>
            </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
