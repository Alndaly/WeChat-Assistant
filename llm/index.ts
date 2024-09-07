import axios from "axios";
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

const instance = axios.create({
    baseURL: 'http://localhost:11434/api/',
});

export const generateSummaryForWebSite = async (data: string) => {
    // TODO：此处需要配置一些更适合概括网站的模型，或者可以考虑通过正则优化网站内容，使其更符合模型输入要求？
    const res = await instance.post('/generate', {
        model: 'llama3-chinese',
        prompt: `我接下来发你的是个网站的html源码，请忽视所有html标签，假设这是一篇文档，请用50个字以内总结这篇文档。${data}`,
        stream: false
    })
    if (res.status !== 200) {
        throw new Error(res.statusText)
    }
    return res.data
}

// TODO: 增加openai的接口调用方式
export const generateSummaryForWebSiteByOpenAI = async (data: string) => {
    const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: `我接下来发你的是个网站的html源码，请忽视所有html标签并用50个字以内总结这个网站的内容。${data}` }],
        model: 'gpt-3.5-turbo',
    });
    return chatCompletion
}