import React,{Component} from 'react';
import PhoneForm from './PhoneForm';

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
  render(){
    return (
      <div>
          <PhoneForm onCreate={this.handleCreate}/>
          {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
