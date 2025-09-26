import { useState } from "react";

function InputPreview() {
    const [text, setText] = useState(''); //le decimos a text que se inicie en vacío

    return (
        <div className="m-4">
            <input className="border-2 rounded-2xl p-2"
                type="text" // creamos un input de tipo texto
                value={text} // el valor del input será la propiedad "text" para mostrarlo dinámicamente
                onChange={e => setText(e.target.value)} // evento onChange que actualiza el elemento cada vez que el usuario modifica este campo. 
                placeholder="Escribe algo..." // placeholder normi lol
            />
            <p>Texto ingresado: {text}</p>
        </div>
    );
}

// para renderizar el texto del input en tiempo real asignamos la propiedad text :D

export default InputPreview