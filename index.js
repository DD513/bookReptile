const request = require("request");
const cheerio = require("cheerio");

const booklist = [];

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
        const ISBN =await bookISBN(bookurl,i);

        const name = list.eq(i).find('.pdnamebox').text();
        const author = list.eq(i).find('.basic2box .author a').text();
        const cover = list.eq(i).find('.alpha_display .coverbox a').children('img').attr('data-src');
        const abstract = list.eq(i).find('.buymixbox span').text();
        booklist.push({ ISBN, name , author , cover , abstract });
      }
      console.log('nono',booklist);
      return booklist;
  });
};

const bookISBN =async(bookurl,i) => {
  let ISBN ;
  request({
    url: `https://www.kingstone.com.tw/${bookurl}`,
    method: "GET"
  },async(error, res, body) => {
    // 如果有錯誤訊息，或沒有 body(內容)，就 return
    if (error || !body) {
        return url;
    }

    const $ = cheerio.load(body);
    const info = $(".tablebox_deda .table_1col_deda");
    ISBN =await info.eq(i).find('.table_1unit_deda:nth-child(2) li:nth-child(4)').text();
    console.log("haha",ISBN,bookurl,'我是i',i);
  })
  console.log("jj",ISBN);
  return ISBN;
}

bookdata();
