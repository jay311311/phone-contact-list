import React,{Component} from "react";


class PhoneForm extends Component{
    state={
        name:" ",
        phon:" "
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render(){
        return(
            <form>
                <input name="name" placeholder = "이름" onChange={this.handleChange} value={this.state.name}/>
                <input name="phone" placeholder = "번호" onChange={this.handleChange} value={this.state.phone}/>
                <div>
                    {this.state.name}  ``{this.state.phone}
                </div>
            </form>
        )
    }
}
export default PhoneForm;