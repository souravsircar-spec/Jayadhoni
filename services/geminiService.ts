
import { GoogleGenAI, Type } from "@google/genai";
import { SpiritualReflection } from "../types";

/**
 * Generates a spiritual reflection and a Bible verse for a given song title and lyrics using Gemini API.
 */
export const getSpiritualReflection = async (title: string, lyrics: string): Promise<SpiritualReflection> => {
  // Always initialize with a named parameter for apiKey.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    You are a Christian theologian. Provide a devotional reflection and one highly relevant Bible verse (reference + text) for the following Bengali Christian hymn.
    
    Song Title: ${title}
    Song Lyrics: ${lyrics}
    
    Instructions:
    1. Provide the 'reflection' in 2-3 deep, poetic, and encouraging sentences in BENGALI.
    2. Provide the 'bibleVerse' including both the reference and the full verse text in BENGALI.
    3. Ensure the JSON format is strictly followed.
  `;

  try {
    // Using gemini-3.1-pro-preview for complex reasoning tasks like theological reflection.
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            reflection: {
              type: Type.STRING,
              description: "A spiritual reflection in Bengali (2-3 sentences).",
            },
            bibleVerse: {
              type: Type.STRING,
              description: "A relevant Bible verse in Bengali with reference.",
            },
          },
          required: ["reflection", "bibleVerse"],
        },
      },
    });

    // Access the text property directly (not a method).
    const text = response.text || "{}";
    const result = JSON.parse(text);
    
    return {
      reflection: result.reflection || "গানের কথাগুলোর ওপর ধ্যান করুন এবং ঈশ্বরের সান্নিধ্য অনুভব করুন।",
      bibleVerse: result.bibleVerse || "গীতসংহিতা ১১৯:১০৫ - তোমার বাক্য আমার চরণের প্রদীপ, ও আমার পথের আলো।"
    };
  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      reflection: "বর্তমানে আত্মিক ধ্যান তৈরি করা সম্ভব হচ্ছে না। গানের কথাগুলোর মাধ্যমে শান্তি খুঁজে নিন।",
      bibleVerse: "গীতসংহিতা ১১৯:১০৫ - তোমার বাক্য আমার চরণের প্রদীপ, ও আমার পথের আলো।"
    };
  }
};
