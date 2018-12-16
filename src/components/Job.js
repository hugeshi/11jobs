import React from 'react';
import './Job.css';

const job = function(props) {
  // const style = {
  //     '@media(min-width: 500px)':{
  //         width: '450px'
  //     }
  // }
  return (
    <div className="Job">
      <h1 onClick={props.click}>
        Hello to {props.name},and the age is {props.age}
      </h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default job;
