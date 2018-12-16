// @flow
import React, { Component } from 'react';
import './App.css';
import Job from './components/Job';

class App extends Component {
  state = {
    jobs: [
      { id: '1', name: 'Zhao', age: 22 },
      { id: '2', name: 'Zhao1', age: 33 },
      { id: '3', name: 'Zhao2', age: 3 }
    ],
    showJobs: false
  };

  nameChangedHandler = (event, id) => {
    const jobIndex = this.state.jobs.findIndex(j => {
      return j.id === id;
    });
    const job = { ...this.state.jobs[jobIndex] };

    //cosnt job = Object.assign({},this.state.jobs[jobIndex])
    job.name = event.target.value;

    const jobs = [...this.state.jobs];
    jobs[jobIndex] = job;
    this.setState({
      jobs: jobs
    });
  };

  toggleJobHandler = () => {
    const doesShow = this.state.showJobs;
    this.setState({ showJobs: !doesShow });
  };

  deleteJobHandler = jobIndex => {
    const jobs = [...this.state.jobs];
    jobs.splice(jobIndex, 1);
    this.setState({ jobs: jobs });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let jobs = null;

    if (this.state.showJobs) {
      jobs = (
        <div>
          {this.state.jobs.map((job, index) => {
            return (
              <Job
                click={() => this.deleteJobHandler(index)}
                name={job.name}
                age={job.age}
                key={job.id}
                changed={event => this.nameChangedHandler(event, job.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = 'red';
    }

    let classes = [];
    if (this.state.jobs.length <= 2) {
      classes.push('red');
    }
    if (this.state.jobs.length <= 1) {
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1>Hello,Ketty</h1>
        <p className={classes.join(' ')}>It's really working</p>
        <button style={style} onClick={this.toggleJobHandler}>
          Toggle Jobs
        </button>
        {jobs}
      </div>
    );
  }
}

export default App;
