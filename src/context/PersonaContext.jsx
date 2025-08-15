"use client";
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const PersonaChatContext = createContext();

function PersonaChatProvider({ children }) {
    const [currentPersona, setCurrentPersona] = useState(null);
    const [chatHistories, setChatHistories] = useState({
        Hitesh: [],
        Piyush: [],
    });
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false)

    const personas = {
        Hitesh: { name: "Hitesh", apiRoute: "/api/hitesh" },
        Piyush: { name: "Piyush", apiRoute: "/api/piyush" },
    };

    const messages = currentPersona ? chatHistories[currentPersona] : [];

    // Add message to a persona's history
    function addMessage(role, content) {
        if (!currentPersona) return;
        setChatHistories((prev) => ({
            ...prev,
            [currentPersona]: [
                ...(prev[currentPersona] || []),
                { role, content }
            ]
        }));
    }

    // Send message and get reply from API
    async function sendMessage(userMessage) {
        if (!currentPersona) return;

        addMessage("user", userMessage);

        try {
            setLoading(true)
            const res = await axios.post(
                personas[currentPersona].apiRoute,
                {
                    messages: [
                        ...(chatHistories[currentPersona] || []),
                        { role: "user", content: userMessage }
                    ]
                }
            );
            setLoading(false)

            console.log(res);





            if (res.data?.msg) {
                addMessage("assistant", res.data.msg);
            }
        } catch (err) {
            console.error("Error sending message:", err);
        }
    }

    return (
        <PersonaChatContext.Provider
            value={{
                currentPersona,
                setCurrentPersona,
                chatHistories,
                addMessage,
                sendMessage,
                open,
                setOpen,
                messages,
                loading
            }}
        >
            {children}
        </PersonaChatContext.Provider>
    );
}

export default PersonaChatProvider

// Example personas object

