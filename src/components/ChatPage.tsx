"use client"
import { PersonaChatContext } from '@/context/PersonaContext';
import React, { useContext, useState } from 'react';



const ChatPage = () => {
    const { messages, sendMessage, setOpen } = useContext(PersonaChatContext)
    const [inputMessage, setInputMessage] = useState("")

    type ChatMessage = {
        role: "user" | "assistant";
        content: string;
    };

    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!inputMessage.trim()) return;
        setLoading(true);
        await sendMessage(inputMessage);
        setLoading(false);
        setInputMessage("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md h-[600px] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">



                {/* Chat Header */}
                <div className="bg-blue-500  text-white p-5 text-center">
                    <div className='flex'>
                        <button onClick={() => setOpen((prev: boolean) => !prev)} className='hover:cursor-pointer'>Back</button>
                    </div>
                    <h1 className="text-lg font-semibold">Chat Box</h1>
                </div>

                {/* Messages Container */}
                <div className="flex-1 p-5 overflow-y-auto space-y-4">
                    {messages?.map((message: ChatMessage, index: number) => (
                        <div
                            key={index}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[70%] px-4 py-3 rounded-2xl ${message.role === 'user'
                                    ? 'bg-blue-500 text-white rounded-br-sm'
                                    : 'bg-gray-200 text-gray-800 rounded-bl-sm'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed">{message.content}</p>

                            </div>
                        </div>
                    ))}

                    {/* Loader bubble */}
                    {loading && (
                        <div className="flex justify-start">
                            <div className="max-w-[70%] px-4 py-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-sm">
                                <span className="loader-dot animate-bounce"></span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Container */}
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            onClick={() => {
                                handleSend()
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
