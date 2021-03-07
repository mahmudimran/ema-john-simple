import React from 'react';

const NotFound = () => {
    const foundStyle={
        color:"red",
        fontSize:'30px',
        textAlign:'center',
        marginTop:'14px'
    }
    return (
        <div>
            <h1 style={foundStyle}>Sorry, Page Not Found 404 !</h1>
        </div>
    );
};

export default NotFound;