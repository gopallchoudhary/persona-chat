"use client";
import { PersonaChatContext } from "@/context/PersonaContext";
import { useContext} from "react";

interface PersonProps {
    name: string;
    imageURL: string;
}


export default function PersonaCard({ name, imageURL }: PersonProps) {
    const { setOpen, setCurrentPersona } = useContext(PersonaChatContext)

    return (
        <div className="w-72 rounded-md flex flex-col items-center justify-center overflow-hidden bg-white shadow-md hover:shadow-xl duration-300 transition-all border border-gray-100 hover:scale-105 ease-in-out">
            <div className=" flex flex-col items-center text-center">
                <img
                    src={imageURL}
                    alt={name}
                    className="w-screen h-72 border-4 rounded-lg border-white"
                />
                <p className="mt-1 text-lg font-semibold text-gray-800">{name}</p>
            </div>
            <button
                onClick={() => {
                    setOpen((prev: any) => !prev)
                    setCurrentPersona(name)
                }}
                className="bg-gradient-to-r from-indigo-400 to-cyan-400  w-full text-white px-6 py-2 rounded shadow-md hover:cursor-pointer text-lg font-medium hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 duration-500 transition-colors"
            >
                Chat
            </button>
        </div>
    );
}
