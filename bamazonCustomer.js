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
        name: "itemID",
        type: "input",
        message: "What is the item id?",
    },
    {
    	name:"stock",
    	type: "input",
    	message:"how many?",
    }]).then(function(answer){
    	console.log("You picked Item" + answer.itemID);
    	console.log("You are buying " + answer.stock + " of item # " + answer.itemID); 
    })
}
//------------------------------------------------------



connection.query("SELECT * FROM products", function(err, results){
    if (err) {
        throw err;
    }
    for (var i = 0; i < results.length; i++) { 
        console.log(" ID # -->" + results[i].id + " \n Product-->" + results[i].product_name + " \n Department-->" + results[i].department_name + " \n Amt--> $" + results[i].price +" \n Quantity--> " + results[i].stock_quantity + 
        	"\n <----------------->");
    }
    console.log("**************************************************");
    run();
});




    