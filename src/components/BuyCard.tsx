import { useState } from "react"

type CardProps = {
    name: string
    cost: number
}

function BuyCard({ name, cost }: CardProps) {
    const [InCar, setInCar] = useState(true)

    function addToCar() {
        setInCar(!InCar) //cambiamos el estado de la variable
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-lg font-bold text-violet-800">Nombre del Producto: {name}</h3>
            <p className="text-lg font-normal text-gray-800">Costo del Producto: $ {cost}</p>

            <button className="m-3.5 px-4 py-2 bg-violet-500 text-white rounded-lg shadow hover:bg-violet-600 transition"
                style={{
                    backgroundColor: InCar ? "#9929EA" : "#3B0270" //si es true es morao, si es false es rojito
                }} 
                onClick={addToCar}
            >

                {InCar ? "Añadir al Carrito 🛒" : "Añadido Correctamente :D"}
            </button>
        </div>
    )
}

export default BuyCard