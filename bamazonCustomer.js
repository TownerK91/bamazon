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
        var chosen = answer.itemID
        console.log(chosen);
        var many = answer.stock
        console.log(many);




  //----------------* Need to Break 4 loop on [i] *--------------------------------------
        connection.query("SELECT * FROM products", function(err, results){
            var actualItem;
            for (var i = 0; i<results.length; i++){


        //--------NOT WORKING----------------------------
                // if (results[i].product_name === answer.chosen){
                //     actualItem = results[i].products;
                //     console.log(actualItem);
                //    }
        //--------NOT WORKING----------------------------
                if (many <= results[i].stock_quantity){
                    console.log("Youre in luck!");
                }else if(many > results[i].stock_quantity){
                    console.log("Insufficient Quantity");
                }
            }
        }); //<-End of connection.query(TWO)
//------------------------------------------------------------






    })
}//<-End of Run Function



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
});  //->end of connection.query(ONE)








//===============--SCRUB--===================================================
        // connection.query() 
        // if(answer.stock <= "SELECT [i].0 FROM stock_quantity"){
        //  console.log("We have it");
        // }else{
        //  console.log("insufficient inventory");
        // }
//===============--SCRUB--==================================================