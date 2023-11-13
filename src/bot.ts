import { Config } from "../config";
import {Telegraf } from "telegraf";
import {Parser} from "./paser";
const config:Config = require("../config.json");

export class Bot{
    private telegrafBot = new Telegraf(config.BOT_TOKEN);
    private parser = new Parser()
    
    public async sendCasualties(){

        const casualties = await this.parser.parseCasualties();
        this.telegrafBot.start((ctx) => ctx.reply("Hi, to start a bot type \"/cas\" in the chat!"));
        this.telegrafBot.command('/cas', (ctx) => {
            const replyString = casualties.join('\n')
            ctx.reply(replyString)
        })
        
        this.telegrafBot.launch()
        console.log('Bot is working!');  
    } 
}