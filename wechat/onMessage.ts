import { log, Message } from "wechaty";
import { addToDatabase } from "../notion";
import dayjs from "dayjs";
import { bot } from "./bot";
import { generateSummaryForWebSite } from "../llm";
import { scrapeData } from "../web";

export const onMessage = async (msg: Message) => {
    const sender = msg.talker();
    // 如果发件人不是自己，那么直接return
    if (!sender.self()) {
        return
    }
    switch (msg.type()) {
        case bot.Message.Type.Text:
            const text = msg.text();
            await addToDatabase(text, "文本", null, "待阅读", { start: dayjs().format("YYYY-MM-DD") }, text)
            break;
        case bot.Message.Type.Image:
            break;
        case bot.Message.Type.Audio:
            break;
        case bot.Message.Type.Video:
            break;
        case bot.Message.Type.Location:
            break;
        case bot.Message.Type.Url:
            const urlObj = await msg.toUrlLink()
            const data = await scrapeData(urlObj.url())
            const summary = await generateSummaryForWebSite(data)
            await addToDatabase(urlObj.title(), "链接", urlObj.url(), "待阅读", { start: dayjs().format("YYYY-MM-DD") }, summary.response)
            break;
        case bot.Message.Type.MiniProgram:
            break;
        case bot.Message.Type.Attachment:
            break;
        default:
            log.warn('未知消息类型:', msg)
            break;
    }
}