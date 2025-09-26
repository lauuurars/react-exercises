// importamos useState, este hook actualiza el estado del componente

import { useState } from "react";

function LikePost() {
    const [like, setLike] = useState(0);

    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md space-y-6 p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-violet-600">
                Aprendiendo React OMG
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
                Haciendo 20 ejercicios de React lol
            </p>

            <div className="flex items-center space-x-3">
                <button
                    onClick={() => setLike(like + 1)}
                    className="flex items-center px-4 py-2 bg-violet-500 text-white rounded-full shadow hover:bg-violet-600 transition"
                >
                    ❤️ Like
                </button>
                <span className="text-gray-700 font-medium">{like} Likes</span>
            </div>
        </div>
    )
}

export default LikePost