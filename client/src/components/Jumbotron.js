import React from "react";
import "../App.css"

function Jumbotron({ children }) {
    return (
        <div className="jumbotron text-center">
            {children}
        </div>
    );
}

export default Jumbotron;
