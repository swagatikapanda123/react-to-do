import React from 'react';
import './App.css';
import ListItems from './ListItems';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItems:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItems:{
        text:e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItems;
    if(newItem.text!==""){
      const items=[...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  render(){
    return(
      <div className="App">
        <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="enter text" 
          value={this.state.currentItems.text}
          onChange={this.handleInput}
          />
          <button type="submit">Add</button> 
        </form>
       </header>
       < ListItems items={this.state.items} />
      </div>
      
    )
  }
}


export default App;
