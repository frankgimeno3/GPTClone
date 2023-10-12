import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
// import openai from "../../lib/chatgpt";

type Option = {
    value: string;
    label: string;
}

type Data = {
    modelOptions: Option[]
}

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse) {
        const models = await OpenAI.listModels().then((res:any)=> res.data.data)
        const modelOptions = models.map((model:any) => ({
            value: model.id,
            label: model.id,
        }))
    
    res.status(200).json({modelOptions})
    
}