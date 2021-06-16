import React from "react";
import Typing from 'react-typing-animation';

var stringstyle = {
    fontFamily: 'Fira Mono',
    fontSize: 25,
    color: '#ffffff'
}
// const ErrorMessage = '<strong>' +
//     'only <l style={stringstyle}>5kb</l> Gzipped!</strong>'

function ErrorMessage() {
    return (
        <Typing>
            <span style={stringstyle}>This span will get typed.</span>
        </Typing>
    );
}

export default ErrorMessage;