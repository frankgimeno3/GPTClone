 
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// Configura tus credenciales de OpenAI
const apiKey = "TU_API_KEY"; // Reemplaza "TU_API_KEY" con tu clave de API real de OpenAI
const openaiBaseUrl = "https://api.openai.com/v1";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Hacer una solicitud GET a la API de OpenAI para obtener la lista de modelos
    const response = await axios.get(`${openaiBaseUrl}/engines`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    const modelOptions = response.data.data.map((model: any) => ({
      value: model.id,
      label: model.id,
    }));

    res.status(200).json({ modelOptions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Hubo un error al obtener la lista de modelos de OpenAI" });
  }
}