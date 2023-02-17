import PropTypes from 'prop-types'


export function Mybotoncito({text}){
    console.log(text)
    return <button>{text}</button>
}

Mybotoncito.prototype={
    text:PropTypes.string.isRequired
}