import React,{Component} from "react";


class PhoneForm extends Component{
    state={
        name:"",
        phone:"",
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name:"",
            phone:"",
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name="name" placeholder = "이름" onChange={this.handleChange} value={this.state.name}/>
                <input name="phone" placeholder = "번호" onChange={this.handleChange} value={this.state.phone}/>
                <button type="submit">확인</button>
            </form>
        )
    }
}
export default PhoneForm;