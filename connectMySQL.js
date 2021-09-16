var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'b8636f87c72af6',
  password : '9b5cc3b0',
  database: 'HerokuBook',
});

connection.connect(
  function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else {
        console.log("Connection established.");
        readData();
    }
  }
);

function readData(){
  connection.query('SELECT * FROM books', 
    function (err, results, fields) {
      if (err) throw err;
      else console.log('Selected ' + results.length + ' row(s).');
      for (i = 0; i < results.length; i++) {
          console.log('Row: ' + JSON.stringify(results[i]));
      }
      console.log('Done.');
  });
  connection.end(
    function (err) { 
      if (err) throw err;
      else  console.log('Closing connection.') 
  });
};
