import axios from "axios";
import * as cheerio  from "cheerio";

export class Parser{
    private url = 'https://index.minfin.com.ua/ua/russian-invading/casualties/';
    private headers = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
    }
    public async parseCasualties(){
        const casualties:string[] = [];

        const {data} = await axios.get(this.url, {
            headers: this.headers
        });

        const $ = cheerio.load(data);
        $('.casualties').first().children('div').find('ul').children('li').each((i, el) => {
            const data = $(el).text();
            casualties.push(data);
        })
        return casualties;
    }

}