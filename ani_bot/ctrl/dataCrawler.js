const axios = require("axios");
const cheerio = require("cheerio");
const log = console.log;

const getHtml = async () => {
    try {
        return await axios.get("https://lostark.game.onstove.com/Profile/Character/찌크릿가든");
    } catch (error) {
        console.error(error);
    }
};

var getCharcaterData = async (nickParam) => {
    try {

        const encodedNickname = encodeURI(nickParam);
        console.log(encodedNickname);
        var crawl = await axios.get("https://lostark.game.onstove.com/Profile/Character/" + encodedNickname);
        const $ = cheerio.load(crawl.data);

        const contianer = $("div.profile-ingame").children("div.profile-character");
        const spec = contianer.children("div.profile-info").children("div.game-info");
        const itemSpec = contianer.children("div.profile-info").children("div.level-info");
                
        const responseData = {
            nickname : contianer.find('h3').text().split(' ')[1],
            jobs : spec.children("div.game-info__class").find('span').eq(1).text(),
            itemLevel : itemSpec.children("div.level-info__item").find('span').eq(1).text().split('.')[1].replace(',', ''),
        }
        console.log(responseData);

        return responseData;

    } catch (error) {
        console.error(error);
    }
}

var getMaryData = async (nickParam) => {
    try {

        const encodedNickname = encodeURI(nickParam);
        console.log(encodedNickname);
        var crawl = await axios.get("https://lostark.game.onstove.com/Shop/Mari");
        const $ = cheerio.load(crawl.data);

        const contianer = $("div.shop-mari").find("div.area").children("ul.list-items").children("li");
               
        let itemArray = new Array();
        contianer.each(function(i, items){
            var items = new Object();
            items.item = $(this).children("div.wrapper").children("div.item-desc").find("span").text();
            items.cost = $(this).children("div.wrapper").children("div.area-amount").find("span").text();
            itemArray.push(items);
        })

        return itemArray;

    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getCharcaterData: getCharcaterData, // 캐릭검색
    getMaryData: getMaryData, // 마리
};