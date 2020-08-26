import React,{Component} from 'react';
import PhoneForm from './Component/PhoneForm';
import PhoneInfoList from './Component/PhoneInfoList';


class App extends Component {
  id = 0;
  state={
    information:[]
  }

  handleCreate = (data) => {
    const {information} = this.state
    this.setState({
         //react는 push(method) 사용 x, 그대신 concat(method)을 사용해  추가 가능
       information: information.concat(Object.assign({},data,{
        id: this.id++
       }))
       
     
    })
  }

  handleRemove=(id)=>{
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate=(id, data)=>{
    const{information}= this.state;
    this.setState({
      information: information.map(
        info =>{
          if(info.id === id){
            return{
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }
  render(){
    return (
      <div>
          <PhoneForm onCreate={this.handleCreate}/>
          <PhoneInfoList 
          onRemove={this.handleRemove}
          data = {this.state.information}
          onUpdate = {this.handleUpdate}
          />
      </div>    
    );
  }
}

export default App;
