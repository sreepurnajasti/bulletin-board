import React, {Component} from 'react'
import Note from './Note'
import {FaPlus} from 'react-icons/fa'

class Board extends Component{
  constructor(props){
    super(props)
    this.state = {
      notes: []
    }
    this.eachNote = this.eachNote.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.add = this.add.bind(this)
    this.nextId = this.nextId.bind(this)
  }
  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }
  add(text){
    this.setState(prevState => ({
      notes: [...prevState.notes,{
        id: this.nextId(),
        note:text
      }]
    }))
  }
  update(newText, id){
    console.log('updating item at index', id, newText)
    this.setState(prevState => ({
      notes: prevState.notes.map(
        n => (n.id !== id) ? n : {...n, note: newText}
      )
    }))
  }
  remove(x){
    console.log('removing item at index', x)
    this.setState(prevState => ({
      notes: prevState.notes.filter(n => n.id !== x)
    }))
  }
  eachNote(n, i){
    return (
      <Note key={n.id} index={n.id} onChange={this.update} onRemove={this.remove}> {n.note}</Note>
    )
  }
  render(){
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button id="add" onClick={this.add.bind(null,"newNote")}><FaPlus/></button>
      </div>
    )
  }
}

export default Board