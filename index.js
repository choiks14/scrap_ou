var cheerio = require('cheerio');
var request = require('request');

 
function startCrawl(){
  request({
    uri:'http://www.todayhumor.co.kr/board/list.php?table=bestofbest',
    encoding:"binary",
    headers:{
      userAgent: "robot",
      referer: "http://www.todayhumor.co.kr"
    }}, function(error, response, html) {
      if(error) { throw error; };
   
      var $ = cheerio.load(html); 
      var list = $("body > div.whole_box > div.vertical_container > div.table_container > table.table_list >  tr > td.table_list_subject > a")
      for(var i = 0;i<list.length;i++){
        var a = $(list[i]);
        console.log(a.attr("href"));
      }

      
  });
}
 
startCrawl();