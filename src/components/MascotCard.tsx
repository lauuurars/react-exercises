type MascotProps = {
    name: string
    animalType: string
}

function MascotCard ({name, animalType} : MascotProps) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">Hola, mi nombre es <span className="text-violet-700 font-medium">{name}</span> y soy un  <span className="text-violet-700 font-medium">{animalType}</span>! :3 </h3>
        </div>
    )
}

export default MascotCard