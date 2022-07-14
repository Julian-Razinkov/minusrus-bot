import { Config } from "../config";
import {Telegraf } from "telegraf";
import {Parser} from "./paser";
const config:Config = require("../config.json");

export class Bot{
    private telegrafBot = new Telegraf(config.BOT_TOKEN);
    private parser = new Parser()
    
    public async sendCasualties(){
        const casualties = await this.parser.parseCasualties();
        this.telegrafBot.start((ctx) => ctx.reply("Привіт, я бот який буде піднімати тобі настрій\nя поділюся з тобою втратим русні😉, напиши у чаті /cas"));
        this.telegrafBot.command('/cas', (ctx) => {
            const replyString = casualties.join('\n')
            ctx.reply(replyString)
        })
        this.telegrafBot.launch()
        console.log('Bot is working!');
        
    } 
}