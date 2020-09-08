import React, {Component, Fragment} from "react"

class PhoneInfo  extends Component{
    
state={
    editing:false,
    name:"",
    phone:""
}

shouldComponentUpdate(nextProps, nextState){
    if(this.state !== nextState){
        return true;
    }
    return this.props.info !==nextProps.info;
    //불변성 위치를 위한 최적화
}

handleChange = (event) =>{
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleToggleEdit = () =>{
//true->false onUpdate
//false->true state에 info 값들을 넣어주기
const {info,onUpdate} = this.props;

if(this.state.editing){
    onUpdate(info.id,{
        name:this.state.name,
        phone:this.state.phone
    })
}else{
    this.setState({
        name:info.name,
        phone:info.phone
    })
}
    this.setState({
        editing:!this.state.editing,
    })
}

handleRmove = () => {
    const {info, onRemove} = this.props;
    onRemove(info.id);
}

    render(){
        const {name, phone} = this.props.info; 
        const {editing} = this.state;
        const style = {
            border: "1px solid black",
            padding:"8px",
            margin:"8px"
        };

        console.log(name);

        return(
          
            <div style={style}>
                {
                    editing?
                    <Fragment>
                        <form >
                        <div>
                            <input
                            name="name" 
                            onChange={this.handleChange}
                            value={this.state.name}
                            />
                        </div>
                        <div>
                            <input 
                            name="phone"
                            onChange={this.handleChange}
                            value={this.state.phone}
                            />
                            </div>
                        </form>
                    </Fragment>
                    :
                    <Fragment>
                         <div><b>{name}</b></div>
                        <div>{phone}</div>
                    </Fragment>
                }
               
                <button onClick={this.handleRmove}>삭제</button>
                <button onClick={this.handleToggleEdit}>{editing?"적용":"수정"}</button>
            </div>
        )
    }
}

export default PhoneInfo;