import './App.css'
import BuyCard from './components/BuyCard'
import Clock from './components/DigitalClock'
import GreetingCard from './components/GreetingCard' // exportando nuestro componente para renderizarlo :3
import InputPreview from './components/InputPreview'
import LikePost from './components/LikePost'
import MascotCard from './components/MascotCard'
import RegisterForm from './components/RegisterForm'
import ToggleInfo from './components/ToggleInfo'
import UserOnline from './components/UserOnline'

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

  const products = [
    { name: "iPhone 17", cost: 1700},
    { name: "Llavero Kuromi", cost: 500},
    { name: "AirPods Pro", cost: 1200},
    { name: "Zapatos Adidas", cost: 400},
    { name: "Gorra Snoopy", cost: 120},
    { name: "iPad Pro M4", cost: 2000}
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

      <ToggleInfo />

      <UserOnline />

      <RegisterForm />

      <Clock />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6" >
        {products.map((product, index) => (
          <BuyCard key={index} name={product.name} cost={product.cost} />
        ))}
      </div>
    </>
  )
}

export default App
