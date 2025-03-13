import { useState } from "react";

function HandleClick() {
    const [message, setMessage] = useState("");

    function handleClick() {
        let username = prompt("Enter your name:")?.trim();
        if (username) {
            setMessage(`Hello, ${username}!`);
        } else {
            setMessage("Hello, Stranger!");
        }
    }  

    return (
        <div className="card">
            <button onClick={handleClick}>Click me</button>
            <br />
           <h2>{message}</h2> 
        </div>
    );
}

export default HandleClick;
