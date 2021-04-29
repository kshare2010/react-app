import React, { Component } from 'react';
///import './counter.css';

class Counter extends Component {
    render() { 
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return ( 
        <div>

        <span className={classes}> {this.formatCount()}</span>
        <button onClick={() => this.props.onIncreament(this.props.counter)} className="btn btn-secondary btn-sm">increament</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>
     
        </div>
       );
    }
    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? "zero" : count; 
    }
}
 
export default Counter;