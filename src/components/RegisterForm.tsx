import { useState } from "react";

function RegisterForm() {

    const [textName, setTextName] = useState('');
    const [textEmail, setTextEmail] = useState('');

    return (
        <div className="flex justify-center items-center m-8">
            <form className="bg-white shadow-lg rounded-xl p-6 w-96 space-y-4">
                
                <div>
                    <label className="block text-xl font-bold text-violet-700 mb-1">
                        Ingresa tu nombre:
                    </label>
                    <input
                        className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        type="text"
                        value={textName}
                        onChange={(e) => setTextName(e.target.value)}
                    />
                    <h4 className="mt-2 text-gray-600">
                        <span className="font-semibold">Nombre ingresado:</span> {textName || "—"}
                    </h4>
                </div>

                <div>
                    <label className="block text-xl font-bold text-violet-700 mb-1">
                        Ingresa tu email:
                    </label>
                    <input
                        className="w-full text-black border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                        type="email"
                        value={textEmail}
                        onChange={(e) => setTextEmail(e.target.value)}
                    />
                    <h4 className="mt-2 text-gray-600">
                        <span className="font-semibold">Correo ingresado:</span> {textEmail || "—"}
                    </h4>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm