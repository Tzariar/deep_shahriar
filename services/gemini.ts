import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT_STRING } from "../utils/resumeData";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  history: { role: 'user' | 'model'; parts: { text: string }[] }[],
  newMessage: string
) => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment variable.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: RESUME_CONTEXT_STRING,
      },
      history: history,
    });

    const result = await chat.sendMessage({
      message: newMessage,
    });

    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to the AI service right now. Please try again later.";
  }
};
