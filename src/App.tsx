import './App.css'
import GreetingCard from './components/GreetingCard' // exportando nuestro componente para renderizarlo :3
import InputPreview from './components/InputPreview'
import LikePost from './components/LikePost'
import MascotCard from './components/MascotCard'

function App() {

  // creamos un array para generar diferentes cards
  const users = [
    { name: "Laura", age: 18 },
    { name: "Carlos", age: 30 },
    { name: "Ana", age: 15 },
    { name: "Miguel", age: 28 },
    { name: "Sofía", age: 17 },
    { name: "José", age: 35 }
  ]

  const animals = [
    { name: "Manchitas", animalType: "Conejo" },
    { name: "Garfield", animalType: "Gato" },
    { name: "Yoyo", animalType: "Perro" },
    { name: "Nube", animalType: "Panda" },
    { name: "Manolo", animalType: "Perro" },
    { name: "Piero", animalType: "Gato" }
  ]

  // Ejercicio 1: establecemos los usuarios que la función recibe y el index para que pueda acceder a cada elemento y lo reconozca como único (tipo un id), el key se encarga de identificar esta característica

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6">
        {users.map((user, index) => (
          <GreetingCard key={index} name={user.name} age={user.age} />
        ))}
      </div>

      <LikePost />

      <InputPreview />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {animals.map((animal, index) => (
          <MascotCard key={index} name={animal.name} animalType={animal.animalType} />
        ))}
      </div>
    </>
  )
}

export default App
