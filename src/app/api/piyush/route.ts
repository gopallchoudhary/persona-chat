import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const client = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
})

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { messages } = reqBody


        

        const response = await client.chat.completions.create({
            model: "gemini-2.5-flash",
            messages
        })

        const msg = response.choices[0].message.content
        return NextResponse.json({
            success: true,
            message: "data fetched successfully",
            msg
        })
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        })
    }
}