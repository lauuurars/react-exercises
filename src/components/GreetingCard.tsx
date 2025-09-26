// para establecer las propiedades (Props) que nuestro componente recibirá escribimos un type especificando qué tipo de variable es cada atributo

type GreetingCardProps = {
    name: string
    age: number
}

// creamos función para enviar los props al componente

function GreetingCard({ name, age }: GreetingCardProps) {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 text-center hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold text-gray-800">
                ¡Bienvenid@ <span className="text-violet-600">{name}</span>!
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
                Tu edad es: {age} años!
            </p>
        </div>
    );
}

export default GreetingCard