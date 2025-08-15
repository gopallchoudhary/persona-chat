"use client";
import ChatPage from "@/components/ChatPage";
import PersonaCard from "@/components/PersonaCard";
import { PersonaChatContext } from "@/context/PersonaContext";
import { useContext} from "react";

export default function Home() {
  const { open} = useContext(PersonaChatContext);
  return (
    <div className=" ">
      {open ? (
        <ChatPage />
      ) : (
        <div className="p-8 w-fit mx-auto flex flex-col gap-8">
          <div className="w-fit  mx-auto">
            <h1 className="text-white mt-8  text-5xl font-semibold">
              Persona-Chat
            </h1>
          </div>
          <div className="flex gap-6">
            <PersonaCard
              name="Hitesh"
              imageURL="https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s900-c-k-c0x00ffffff-no-rj"
            />

          </div>
        </div>
      )}
    </div>
  );
}
