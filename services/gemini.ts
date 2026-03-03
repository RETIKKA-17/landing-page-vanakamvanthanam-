
import { GoogleGenAI } from "@google/genai";

export async function getDecorationIdeas(eventType: string, colorPreference: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Suggest 3 unique, luxury decoration ideas for a ${eventType} in India using a ${colorPreference} color palette. Keep descriptions concise and elegant.`,
      config: {
        temperature: 0.7,
        topP: 0.8,
        systemInstruction: "You are a senior event stylist and decoration expert at Vanakkam Vandhanam. Your suggestions should be premium, culturally relevant to India, and visually vivid."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our designers are currently brainstorming! Please contact us on WhatsApp for a personalized recommendation.";
  }
}
