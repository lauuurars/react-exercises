import { useState } from "react";

function UserOnline() {
    
    const [isUserOnline, setIsUserOnline] = useState(false); //se iniciará en que el user está off-line

    function changeState() {
        setIsUserOnline(!isUserOnline); //pasamos la variable de true a false y viceversa
    }

    return (
        <button className="rounded-2xl p-3"
            style={{
                backgroundColor: isUserOnline ? "violet" : "red" //si es true es morao, si es false es rojito
            }}
            onClick={changeState} // se activa la función changeState al dar click 
        >
            {isUserOnline ? "El Usuario está Online :D" : "El User está Offline :c"}
        </button>
    );
}

export default UserOnline