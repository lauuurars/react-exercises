import { useEffect, useState } from "react";

type ClockProps = {
    locale?: string;            // opcional: 'es-CO', 'en-US', etc. Por defecto usa el locale del navegador
    showSeconds?: boolean;      // si false, oculta los segundos
    showDate?: boolean;         // si true, muestra la fecha debajo de la hora
    size?: "sm" | "md" | "lg";  // tamaño visual
};

    function Clock({
    locale,
    showSeconds = true,
    showDate = false,
    size = "md",
}: ClockProps) {
    const [now, setNow] = useState<Date>(new Date());

    useEffect(() => {
        // actualiza el estado cada segundo
        const id = setInterval(() => setNow(new Date()), 1000);

        // cleanup para evitar memory leaks
        return () => clearInterval(id);
    }, []);

    // formato de hora según props
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        ...(showSeconds ? { second: "2-digit" } : {}),
    };

    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };

    const timeString = now.toLocaleTimeString(locale || undefined, timeOptions);
    const dateString = now.toLocaleDateString(locale || undefined, dateOptions);

    const sizeClass =
        size === "sm" ? "text-base" : size === "lg" ? "text-3xl" : "text-xl";

    return (
        <div className="inline-flex flex-col items-center bg-white rounded-xl shadow px-6 py-4">
            <div className={`font-mono ${sizeClass} font-semibold text-violet-800`}>
                {timeString}
            </div>

            {showDate && (
                <div className="mt-1 text-sm text-gray-500">{dateString}</div>
            )}

            <div className="mt-3 text-xs text-gray-400">Actualizado cada segundo</div>
        </div>
    );
}

export default Clock