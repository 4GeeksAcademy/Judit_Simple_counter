import React from "react";



function SecondCounter({digitSix, digitFive, digitFour, digitThree, digitTwo, digitOne,}) {
    return (
        <div className="simpleCounter">
            <div className="icon">
                <i className="far fa-clock"></i>
            </div>
            <div className="six">{digitSix % 10}</div>
            <div className="six">{digitFive % 10}</div>
            <div className="six">{digitFour % 10}</div>
            <div className="six">{digitThree % 10}</div>
            <div className="six">{digitTwo % 10}</div>
            <div className="six">{digitOne % 10}</div>
        </div>
    );
}

export default SecondCounter;
