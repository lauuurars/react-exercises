import { useState } from "react";

// Un array de usuarios de ejemplo
const users = [
    { id: 1, name: "Laura Riascos", age: 18 },
    { id: 2, name: "Camila Betancourt", age: 19 },
    { id: 3, name: "Ana Gómez", age: 20 },
    { id: 4, name: "Miguel Torres", age: 21 },
    { id: 5, name: "Sofía Quijano", age: 23 },
    { id: 6, name: "Patricia Burbano", age: 24 },
    { id: 7, name: "Richard Watterson", age: 25 },
    { id: 8, name: "Mario Hernandez", age: 20 },
    { id: 9, name: "Christian Yu", age: 22 }
];

export default function UserSearch() {
    const [search, setSearch] = useState("");

    // Filtra ignorando mayúsculas/minúsculas
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen flex flex-col items-center p-6">
            <h1 className="text-2xl font-bold mb-4 text-white">
                Buscar Usuarios
            </h1>

            <input
                type="text"
                placeholder="Escribe un nombre..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-80 border border-gray-300 rounded-lg px-3 py-2 mb-6 
                focus:outline-none focus:ring-2 focus:ring-violet-500"
            />

            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div
                            key={user.id}
                            className="bg-white shadow-md rounded-xl p-4 w-64"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">
                                {user.name}
                            </h3>
                            <p className="text-gray-500">Edad: {user.age}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No se encontraron usuarios</p>
                )}
            </div>
        </div>
    );
}
