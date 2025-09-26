import { useState } from "react"

function ToggleInfo() {

    const [showInfo, setShowInfo] = useState(true) // por defecto (true) la info se muestra

    // el símbolo && significa que esto solo se muestra u ocurre cuando el estado de showInfo es true
    // el evento onClick cambia el estado de showInfo cada vez que se da click (pasa de true a false y viceversa)
    // tmb asignamos que el texto del btn cambie dinámicamente dependiendo del estado

    return (
        <div className="flex justify-center items-center my-10">
            <div className=" w-3xl bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-violet-800">Laura :P</h3>

                {showInfo && (
                    <p className="text-gray-800 text-sm leading-relaxed font-medium">Love coding, music and gym!</p>
                )}

                <button onClick={() => setShowInfo(!showInfo)} className="m-3.5 px-4 py-2 bg-violet-500 text-white rounded-lg shadow hover:bg-violet-600 transition">
                    {showInfo ? "Ocultar info" : "Mostrar info"}
                </button>
            </div>
        </div>
    )
}

export default ToggleInfo