import dotenv from 'dotenv'
dotenv.config();

import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_DATABASE_ID;

export const addToDatabase = async (title: string, domain: string, url: string | null, status: string, date: DateRequest, summary: string) => {
    if (!databaseId) {
        throw new Error('No database ID provided');
    }
    const response = await notion.pages.create({
        parent: {
            database_id: databaseId,
        },
        properties: {
            '事项': {
                type: 'title',
                title: [
                    {
                        type: 'text',
                        text: {
                            content: title,
                        },
                    },
                ],
            },
            '领域': {
                type: 'multi_select',
                multi_select: [{
                    name: domain
                }]
            },
            '进度': {
                type: 'select',
                select: {
                    name: status
                }
            },
            '总结': {
                type: 'rich_text',
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: summary,
                        },
                    }
                ]
            },
            '项目链接': {
                type: 'url',
                url: url
            },
            '出版日期': { // Date is formatted as YYYY-MM-DD or null
                type: 'date',
                date: date
            },
        }
    });
}