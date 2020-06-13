import React from 'react';
import { connect } from 'react-redux';

function CounterComponent({ counter, dispatch}) {
    return (
        <div>
            <button onClick={() => dispatch({ type: 'REMOVE10' })}>-10</button>
            <button onClick={() => dispatch({ type: 'REMOVE1' })}>-1</button>
            <p>{counter}</p>
            <button onClick={() => dispatch({ type: 'ADD1' })}>+1</button>
            <button onClick={() => dispatch({ type: 'ADD10' })}>+10</button>
            <button onClick={() => dispatch({ type: 'RESET'})}>Reset (et aussi comment c'est dur en vrai Redux avec React)</button>
        </div>
    )
}

const mapStateToProps = state => ({
    counter: state
})

const CounterContainer = connect(mapStateToProps)(CounterComponent)

export default CounterContainer;