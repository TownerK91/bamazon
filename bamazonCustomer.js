var mysql = require('mysql');           //-->STEP #5
var inquirer = require('inquirer');

var connection = mysql.createConnection({ //{STEPS #2 #3 & #4}
    host: "localhost",
    PORT: 3306,
    user: "root",
    password: "TwoFour66",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    //<good> console.log("http://localhost "+ connection.threadId);
});

//------------------------------------------------------
var run = function() { //STEP #6
    inquirer.prompt([
    {
        name: "id",
        type: "input",
        message: "What is the item id?",
    },
    {
    	name:"stock_quantity",
    	type: "input",
    	message:"how many?",
    }]).then(function(answer){
    	
    })
};
//------------------------------------------------------








connection.query("SELECT * FROM products", function(err, results){
    if (err) {
        throw err;
    }
    for (var i = 0; i < results.length; i++) { 
        console.log(results[i].id + " <> " + results[i].product_name + " <> " + results[i].department_name + " <> " + results[i].price + " <> " + results[i].stock_quantity);
    }
    console.log("**************************************************");
    run();
});




    