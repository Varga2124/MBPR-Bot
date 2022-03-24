const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTU2MzE0OTI5NzA1Njc2ODcw.Yjubrg.Q6A-TE3QIRgOwL8m5XeedpU58sU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)