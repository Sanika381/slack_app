import Slack from '@slack/bolt'
import dotenv from 'dotenv'
import cron from 'node-cron'
dotenv.config()
async function slackCron(){
const app = new Slack.App({
    signingSecret: process.env.SLACK_SIGNINGSECRET,
    token: process.env.SLACK_TOKEN
})

await app.client.chat.postMessage({
    channel: process.env.CHANNEL,
    text: `Hello <@U0ADMQZ7DSS>`
})
}


cron.schedule('30 10 * * 1-6',()=>{
    slackCron()
console.log("message sent Successfully!");
})


