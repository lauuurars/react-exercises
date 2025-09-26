import './App.css'
import GreetingCard from './components/GreetingCard' // exportando nuestro componente para renderizarlo :3
import InputPreview from './components/InputPreview'
import LikePost from './components/LikePost'

function App() {

  // creamos un array para generar diferentes cards
  const users = [
    { name: "Laura", age: 18 },
    { name: "Carlos", age: 30 },
    { name: "Ana", age: 15 },
    { name: "Miguel", age: 28 }
  ]

  // Ejercicio 1: establecemos los usuarios que la función recibe y el index para que pueda acceder a cada elemento y lo reconozca como único (tipo un id), el key se encarga de identificar esta característica

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
      {users.map((user, index) => (
        <GreetingCard key={index} name={user.name} age={user.age} />
      ))}
    </div>

    <LikePost />

    <InputPreview />
    </>
  )
}

export default App
