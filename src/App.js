import React,{Component} from 'react';
import PhoneForm from './Component/PhoneForm';
import PhoneInfoList from './Component/PhoneInfoList';


class App extends Component {
  id = 3;
  state={
    information:[
      {
        id:0,
        name:"홍길동",
        phone:"010-000-0000"
      },
      {
        id:1,
        name:"홍길남",
        phone:"010-000-0000"
      },
      {
        id:2,
        name:"홍길북",
        phone:"010-000-0000"
      }
    ],
    keyword:"",
  }

  handleChange = (event) =>{
    this.setState({
      keyword: event.target.value,
    })
    //검색을 위한 이벤트
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
          <input 
            value={this.state.keyword}
            onChange={this.handleChange}
            placeholder="검색..."
          />
          <PhoneInfoList 
          onRemove={this.handleRemove}
          data = {this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
            // 검색필터
          )}
          onUpdate = {this.handleUpdate}
          />
      </div>    
    );
  }
}

export default App;
