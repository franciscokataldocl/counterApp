//rafcp + tab crea functional components automaticamente
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 0 }) => {

    //hooks

    const [counter, setCounter] = useState(0); //estado inicial del componente



    //funcion que aumenta el contador
    const ClickOnPlus = (e) => {
        setCounter(counter + 1);
    }

    const ClickOnMinus = (e) => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            setCounter(counter - 0);

        }
    }

    //funcion que aumenta el contador
    const ClickOnReset = (e) => {
        setCounter(value);
    }



    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button className="plus" onClick={ClickOnPlus}>+</button>
            <button className="reset" onClick={ClickOnReset}>reset</button>
            <button className="minus" onClick={ClickOnMinus}> -</button>

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}
CounterApp.defaultProps = {
    value: 0,
}


export default CounterApp
