import React from 'react';
import './App.css';
import axios from 'axios';


export default class App extends React.Component{
  constructor(){
    super()
      this.state={
        name:[]
      }
  }

  componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')

          .then(res=>{
            const name = res.data;
            this.setState({
               name
            })
          }) 
  }


  render(){
    return(
      <div className='App'>
            <ul>
              {
                this.state.name.map(el=><li>{el.name}</li>)
              }
            </ul>
      </div>
    )
  }
}