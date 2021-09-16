const request = require("request");
const cheerio = require("cheerio");

const bookdata = () => {
  console.log('Hello Node.js');
  request({
    // 金石堂書店 搜尋git書籍
    url: "https://ipac.nlpi.edu.tw/search/",//"searchField=FullText&searchInput=react"
    parms: {searchField:"FullText",searchInput:"git"},
    method: "GET",
    rejectUnauthorized:false
  }, (error, res, body) => {
      // 如果有錯誤訊息，或沒有 body(內容)，就 return
      if (error || !body) {
          return;
      };
      const booklist = [];
      const $ = cheerio.load(body);
      const list = $(".booklist_block form div");
      const page = list.find('.showPage').text();
      for (let i = 0; i < list.length; i++) {
        const ISBN = list.eq(i).find('.bookmidblock .bookdata h2').text();

        // const ISBN = list.eq(i).find('').text();
        // const name = list.eq(i).find('.pdnamebox').text();
        // const author = list.eq(i).find('.basic2box .author a').text();
        // const cover = list.eq(i).find('.alpha_display .coverbox a').children('img').attr('data-src');
        // const abstract = list.eq(i).find('.buymixbox span').text();
        booklist.push({ ISBN });
        // console.log('12',bookurl);
      }
      console.log('nono',booklist,page);
  });
};

bookdata();
