import { Parser } from "./src/paser";
import {Bot} from "./src/bot";
const parser = new Parser();

const main = async () => {
    const bot = new Bot();
    bot.sendCasualties()
}
main()
