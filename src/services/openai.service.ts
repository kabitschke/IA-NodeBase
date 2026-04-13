import OpenAI from 'openai';
import { z } from 'zod';
import { zodTextFormat } from 'openai/helpers/zod';

export function createOpenAIClient() {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY não encontrada nas variáveis de ambiente');
    }

    return new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
}


export const bookFinder = async (search: string) => {
    const bookResponseSchema = z.object({
        title: z.string(),
        author: z.string(),
    });



    const client = createOpenAIClient();
    const response = await client.responses.parse({
        model: 'gpt-5-nano',
        input: [
            { role: 'system', content: 'Você é um guia de livros experiente' },
            { role: 'user', content: `Me de as informações do livro que possui essas caracteristicas: ${search}. Se o livre existir em português, me de as informações em português.` }
        ],
        text: {
            format: zodTextFormat(bookResponseSchema, "book"),
        }
    });
    return response.output_parsed ?? false;

}
