// import reptileISBN from './readInfoISBN';
const reptileISBN = require('./readInfoISBN');

const request = require("request");
const cheerio = require("cheerio");

const bookurllist = [];

const bookdata =async() => {
  console.log('Hello Node.js');
  request({
    // 金石堂書店 搜尋git書籍
    url: "https://www.kingstone.com.tw/search/key/git",
    method: "GET"
  },async(error, res, body) => {
      // 如果有錯誤訊息，或沒有 body(內容)，就 return
      if (error || !body) {
          return;
      };
      
      const $ = cheerio.load(body);
      const list = $(".displaycontent .module_display1 .displaycol .displayunit");
      for (let i = 0; i < list.length; i++) {
        console.log(i)
        const bookurl =list.eq(i).find('.division1 .beta_display .pdnamebox a').attr('href');
        // const ISBN =await bookISBN(bookurl,i);

        // const name = list.eq(i).find('.pdnamebox').text();
        // const author = list.eq(i).find('.basic2box .author a').text();
        // const cover = list.eq(i).find('.alpha_display .coverbox a').children('img').attr('data-src');
        // const abstract = list.eq(i).find('.buymixbox span').text();
        bookurllist.push({ bookurl });
        console.log('nono',bookurl);
      }
      console.log('ans',bookurllist);
      reptileISBN.bookISBN(bookurllist);
  });
};

bookdata();