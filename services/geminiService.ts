import { GoogleGenAI, Chat } from "@google/genai";
import { getSystemPrompt } from '../constants';

let ai: GoogleGenAI | null = null;

const getAI = () => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set.");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
}

// Initializes a chat session synchronously
export const initializeChat = (language: string = 'English'): Chat => {
    const genAI = getAI();
    const systemInstruction = getSystemPrompt(language);
    
    return genAI.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction,
        },
    });
};

// Sends a message to an existing chat session and gets the response
export const getChatResponse = async (chat: Chat, message: string): Promise<string> => {
    const response = await chat.sendMessage({ message });
    return response.text;
};
