
import react from "react";
import PropTypes from 'prop-types';


const PrimeraApp = ({saludo, subtitulo}) =>{
    return (
        <>
        <h1>{saludo}</h1>
        <p>{subtitulo}</p>
        </>
    );  
}

//setting para props de PrimeraApp
PrimeraApp.propTypes ={
    //obligado a que reciba un string y obligatorio
    saludo: PropTypes.string.isRequired,
}

//props por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtítulo',
}

export default PrimeraApp;