import { Component, useState } from 'react'
import './App.css'
import uniqid from "uniqid";
import Overview from "./components/overview"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      task: { 
        text: "",
        id: uniqid(),
        idNew: 0,
      },
      tasks: [],
    }
    
  }

  changeHandle = (e) => {
    this.setState(
      this.state = {
        task: { 
          text: e.target.value,
          id: this.state.task.id,
          idNew: this.state.task.idNew,
        },
      }  
    )
  }

  submitHandle = (e) => {
    e.preventDefault();
    this.setState(
      this.state = {
        tasks: this.state.tasks.concat(this.state.task),
        task: {        
          text: "",
          id: uniqid(),
          idNew: this.state.task.idNew+=1,
        }
      }
    )
  }

  render() {

    const { task, tasks } = this.state; 

    return (
      <>
        <form onSubmit={this.submitHandle}>
          <label htmlFor="input">Todo list</label>
          <input value={task.text} type="text" onChange={this.changeHandle} />
          <button type='submit'>SUBMIT</button>
          <Overview tasks={tasks}/>
        </form>
      </>
    )
  }

}
