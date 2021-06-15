import React from "react";

var stringstyle = {
    fontFamily: 'Fira Mono',
    fontSize: 50,
    color: '#ffffff'
}
// const ErrorMessage = '<strong>' +
//     'only <l style={stringstyle}>5kb</l> Gzipped!</strong>'
const ErrorMessage = (props) => {
    return (
        <span style={stringstyle}>This span will get typed.</span>
    );
};

export default ErrorMessage;