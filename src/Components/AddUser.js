import React, { Component } from 'react';

export default class AddUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
        //dong goi thanh mot mang
        var item = {};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
    }
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         trangThaiChinhSua: false
    //     }
    // }
    // hienThiNut = () => {
    //     if(this.state.trangThaiChinhSua ===true){
    //         return <div className="btn btn-block btn-outline-secondary" onClick = {() => this.thayDoiTrangThai()}>Dong lai</div>;
    //     }else{
    //         return <div className="btn btn-block btn-outline-info" onClick = {() => this.thayDoiTrangThai()}>Click de them moi</div>;
    //     }
    // }
    // thayDoiTrangThai = () =>{
    //     this.setState({
    //         trangThaiChinhSua: !this.state.trangThaiChinhSua
    //     });
    // }
    // hienThiForm = () =>{
    //     if(this.state.trangThaiChinhSua ===true){
    //         return (
    //             <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
    //             <div className="card-header">Them moi nguoi dung</div>
    //             <div className="card-body text-primary">
    //                 <div className="form-group">
    //                 <label>Ten nguoi dung</label>
    //                 <input type="text" className="form-control" aria-describedby="helpId" placeholder="Ten nguoi dung" />
    //                 </div>
    //                 <div className="form-group">
    //                 <label>So dien thoai</label>
    //                 <input type="text" className="form-control" aria-describedby="helpId" placeholder="So dien thoai" />
    //                 </div>
    //                 <div className="form-group">
    //                 <label>Quyen</label>
    //                 <select className="custom-select" required>
    //                     <option value>Chon quyen</option>
    //                     <option value={1}>Admin</option>
    //                     <option value={2}>Moderator</option>
    //                     <option value={3}>Normal</option>
    //                 </select>
    //                 </div>
    //                 <div className="form-group">
    //                 <div className="btn btn-block btn-primary">Them</div>
    //                 </div>
    //             </div>
    //         </div>
    //         );
    //     }
    // }
    kiemTraTrangThai = ()=>{
        if(this.props.hienThiForm === true){
            return (
                <div className = "col-12">
                    <form>
                    <div className="card border-primary mb-3 mt-2" style={{maxWidth: '18rem'}}>
                    <div className="card-header">Them moi nguoi dung</div>
                    <div className="card-body text-primary">
                        <div className="form-group">
                        <label>Ten nguoi dung</label>
                        <input type="text" name = "name" className="form-control" aria-describedby="helpId" placeholder="Ten nguoi dung" onChange = {(event)=>{this.isChange(event)}}/>
                        </div>
                        <div className="form-group">
                        <label>So dien thoai</label>
                        <input type="text" name = "tel" className="form-control" aria-describedby="helpId" placeholder="So dien thoai" onChange = {(event)=>{this.isChange(event)}}/>
                        </div>
                        <div className="form-group">
                        <label>Quyen</label>
                        <select className="custom-select" name = "permission" onChange = {(event)=>{this.isChange(event)}} required>
                            <option value>Chon quyen</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Normal</option>
                        </select>
                        </div>
                        <div className="form-group">
                        <input type="reset" className="btn btn-block btn-primary" onClick = {(name, tel, permission) =>this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Them"/>
                        </div>
                    </div>
                </div>
                </form>
            </div>
            )
        }
    }
  render() { 
    return (
        <div>
            {/* {this.hienThiNut()}
            {this.hienThiForm()} */}
            {this.kiemTraTrangThai()}
        </div>
    );
  }
}