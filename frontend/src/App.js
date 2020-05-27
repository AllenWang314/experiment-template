import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import Axios from "axios";
import './App.css';

const API_LINK = "http://localhost:8000/api/generate_sequence/";
const API_LINK_POST = "http://localhost:8000/api/post";
const NUM_TASKS = 3;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      meta_status: 0,
      name: "",
      sequences: [],
      sequence_ids: [],
      predictions: [],
      index: 0
    };
    this.generateContent = this.generateContent.bind(this);
    this.generateTask = this.generateTask.bind(this);
    this.guess = this.guess.bind(this);
    this.begin = this.begin.bind(this);
    this.next = this.next.bind(this);
    this.changeName = this.changeName.bind(this);
  }

  next() {
    this.setState({index: this.state.index + 1});
  }

  guess(event) {
    event.preventDefault();
    const resp = event.target.attributes.getNamedItem('data-key').value
    const new_pred = [... this.state.predictions];
    new_pred.push(resp);
    this.setState({predictions: new_pred,status: this.state.status + 1, index: 0}, 
      () => { if (this.state.status > NUM_TASKS) {
        const values = {
          name: this.state.name, 
          sequence_ids: this.state.sequence_ids,
          sequence_1: this.state.sequences[0],
          sequence_2: this.state.sequences[1],
          sequence_3: this.state.sequences[2],
          responses: this.state.predictions
        };
        Axios.post(API_LINK_POST, values, {
          headers: {
              "Content-Type": "application/json"
          }
      });
      }});
  }

  begin(event) {
    event.preventDefault();
    this.setState({status: 1});
  }

  changeName(event) {
    event.preventDefault();
    this.setState({name: event.target.value});
  }

  generateTask() {
    if (this.state.sequences.length < this.state.status) {
     Axios.get(API_LINK + this.state.status).then((response) => {
        const new_seq = [... this.state.sequences]
        const new_seq_ids = [... this.state.sequence_ids]
        if (!new_seq[this.state.status-1]){
          new_seq.push(response.data[1])
          this.setState({sequences: new_seq});
        }
        if (!new_seq_ids[this.state.status-1]){
          new_seq_ids.push(response.data[0])
          this.setState({sequence_ids: new_seq_ids});
        }
      });
    }
    else if (this.state.index === this.state.sequences[this.state.status-1].length) {
      // have user guess 
      return (
        <header className="App-header">
      <p>
        What letter comes next?
      </p>
      <ButtonGroup onClick = {this.guess}>
        <Button data-key='A'>A</Button>
        <Button data-key='B'>B</Button>
        <Button data-key='C'>C</Button>
        <Button data-key='Z'>Random</Button>      
      </ButtonGroup>

      </header>
    );
  }
  else if (this.state.index > 0){
    return (
      <header className="App-header">
    <font size="+15">{this.state.sequences[this.state.status-1][this.state.index-1]}</font>
    <br/>
    <br/>
    <Button onClick = {this.next}>Next</Button>
  </header>);
  }
      return (      <header className="App-header">
      <p>
        Task {this.state.status} of {NUM_TASKS}: You will be asked to predict the last letter in a sequence of letters. 
        <br/> Press the button to see the next letter.
      </p>
      <br/>
      <br/>
      <Button onClick = {this.next}>Next</Button>
    </header>);

  }

  generateContent() {
    if (this.state.status === 0) {
      return (<div className="App">
        <div className="App-header">
          <p>
            Name is optional. Hit submit to begin.
          </p>

            <label>
              Name: &emsp; <input type="text" value={this.state.name} onChange = {this.changeName} />
            </label>
            <br/>
            <br/>
            <Button type="submit" onClick={this.begin}>Submit</Button>

        </div>
      </div>);
    }
    else if (this.state.status <= NUM_TASKS) {
      return (this.generateTask());
    }
    else {
      return (<div className="App">
        <header className="App-header">
          <p>
            Experiment complete! Thank you for your time.
          </p>
        </header>
      </div>);
    }
  }

  render() {
    return (
      this.generateContent()
    );
  }
}

export default App;
