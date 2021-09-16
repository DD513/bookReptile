const bookISBN =async(bookurllist) => {
  console.log('hi',bookurllist);
  // let ISBN ;
  // request({
  //   url: `https://www.kingstone.com.tw/${bookurl}`,
  //   method: "GET"
  // },async(error, res, body) => {
  //   // 如果有錯誤訊息，或沒有 body(內容)，就 return
  //   if (error || !body) {
  //       return url;
  //   }

  //   const $ = cheerio.load(body);
  //   const info = $(".tablebox_deda .table_1col_deda");
  //   ISBN =await info.eq(i).find('.table_1unit_deda:nth-child(2) li:nth-child(4)').text();
  //   console.log("haha",ISBN,bookurl,'我是i',i);
  // })
  // console.log("jj",ISBN);
  // return ISBN;
}

bookISBN();