import React,{Component} from "react";


class PhoneForm extends Component{
    state={
        name:"",
        phone:"",
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })//[event.target.name] 은 input의 name값이 들어간다
    }
    handleSubmit=(event)=>{
        event.preventDefault(); //page가 리로딩(reloading)되는것을 방지
        this.props.onCreate(this.state);
        this.setState({
            name:"",
            phone:"",
        })//input의 입력내용을 제출하고 나서 초기화 시킴
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