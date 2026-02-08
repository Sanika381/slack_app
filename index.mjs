import Slack from '@slack/bolt'
import dotenv from 'dotenv'
dotenv.config()

const app = new Slack.App({
    signingSecret: process.env.SLACK_SIGNINGSECRET,
    token: process.env.SLACK_TOKEN
})

await app.client.chat.postMessage({
    channel: process.env.CHANNEL,
    text: `Hello <@U0ADMQZ7DSS>`
})
console.log("message sent Successfully!");

