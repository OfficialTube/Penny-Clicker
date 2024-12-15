var money = 0.00;
var achievementcounter = 0;
var moneyt = 0.00;
var upgradest = 0;
var timeElapsed;
var time = 0;
var seconds = 0;
var stringseconds;
var minutes = 0;
var stringminutes;
var hours = 0;
var stringhours;
var days = 0;
var stringdays;
var timestart = false;
var incmultiplier = 1;
var inc = 0.01; 
var incvalue = inc * incmultiplier;
var clickupgradelevel = 0;
var clickupgradecost = 0.10;
var clickupgradecostmultiplier = 1.25;
var click = false;
var clicka = 0;
var clickt = 0;

var pennyinc = 0.00;
var pennymultiplier = 1;
var pennyvalue = pennyinc * pennymultiplier;
var pennylevel = 0;
var pennycost = 0.50;
var pennycostmultiplier = 1.25;
var penny = false;
var pennyt = 0;

var nickelinc = 0.00;
var nickelmultiplier = 1;
var nickelvalue = nickelinc * nickelmultiplier;
var nickellevel = 0;
var nickelcost = 2.50;
var nickelcostmultiplier = 1.25;
var nickel = false;
var nickelt = 0;

var dimeinc = 0.00;
var dimemultiplier = 1;
var dimevalue = dimeinc * dimemultiplier;
var dimelevel = 0;
var dimecost = 5.00;
var dimecostmultiplier = 1.25;
var dime = false;
var dimet = 0;

var quarterinc = 0.00;
var quartermultiplier = 1;
var quartervalue = quarterinc * quartermultiplier;
var quarterlevel = 0;
var quartercost = 12.50;
var quartercostmultiplier = 1.25;
var quarter = false;
var quartert = 0;

var halfdollarinc = 0.00;
var halfdollarmultiplier = 1;
var halfdollarvalue = halfdollarinc * halfdollarmultiplier;
var halfdollarlevel = 0;
var halfdollarcost = 25.00;
var halfdollarcostmultiplier = 1.25;
var halfdollar = false;
var halfdollart = 0;

let lastUpdate = Date.now();
let lastUpdateA = Date.now();
let moneyps = pennyvalue + nickelvalue + dimevalue;

function updateMoneyps(){
    pennyvalue = pennyinc * pennymultiplier;
    nickelvalue = nickelinc * nickelmultiplier;
    dimevalue = dimeinc * dimemultiplier;
    quartervalue = quarterinc * quartermultiplier;
    halfdollarvalue = halfdollarinc * halfdollarmultiplier;
    moneyps = pennyvalue + nickelvalue + dimevalue + quartervalue + halfdollarvalue;
    document.getElementById("moneyps").innerHTML = change(moneyps) + "/second";
}

const upgradesList = [
    //{id:, type:"", utype:"", name:"", required:, multiplier:, status:false, crequired:,color:},
    {id:1, type:"clicka", utype:"click", name:"100 Clicks", required:0.50, multiplier:1.5, status:false, crequired:100, color:3, purchased:false},
    {id:2, type:"clicka", utype:"click", name:"250 Clicks", required:2.50, multiplier:1.5, status:false, crequired:250, color:3, purchased:false},
    {id:3, type:"clicka", utype:"click", name:"500 Clicks", required:10, multiplier:1.5, status:false, crequired:500, color:3, purchased:false},
    {id:4, type:"clicka", utype:"click", name:"1,000 Clicks", required:50, multiplier:2, status:false, crequired:1000, color:3, purchased:false},
    {id:5, type:"clicka", utype:"click", name:"2,500 Clicks", required:250, multiplier:2, status:false, crequired:2500, color:3, purchased:false},
    {id:6, type:"clicka", utype:"click", name:"5,000 Clicks", required:1000, multiplier:2, status:false, crequired:5000, color:3, purchased:false},
    {id:7, type:"clicka", utype:"click", name:"10,000 Clicks", required:5000, multiplier:3, status:false, crequired:10000, color:3, purchased:false},
    {id:8, type:"clicka", utype:"click", name:"25,000 Clicks", required:25000, multiplier:3, status:false, crequired:25000, color:3, purchased:false},
    {id:9, type:"clicka", utype:"click", name:"50,000 Clicks", required:100000, multiplier:3, status:false, crequired:50000, color:3, purchased:false},

    {id:10, type:"clickt", utype:"click", name:"Clicks = $1.00", required:1, multiplier:1.5, status:false, crequired:1,color:2, purchased:false},
    {id:11, type:"clickt", utype:"click", name:"Clicks = $10.00", required:10, multiplier:1.5, status:false, crequired:10,color:2, purchased:false},
    {id:12, type:"clickt", utype:"click", name:"Clicks = $100.00", required:100, multiplier:1.5, status:false, crequired:100,color:2, purchased:false},
    {id:13, type:"clickt", utype:"click", name:"Clicks = $1.000a", required:1000, multiplier:1.5, status:false, crequired:1000,color:2, purchased:false},
    {id:14, type:"clickt", utype:"click", name:"Clicks = $10.00a", required:10000, multiplier:1.5, status:false, crequired:10000,color:2, purchased:false},

    {id:15, type:"clickl", utype:"click", name:"Click Upgrade I", required:1, multiplier:2, status:false, crequired:10,color:1, purchased:false},
    {id:16, type:"clickl", utype:"click", name:"Click Upgrade II", required:30, multiplier:2, status:false, crequired:25,color:1, purchased:false},
    {id:17, type:"clickl", utype:"click", name:"Click Upgrade III", required:7500, multiplier:2, status:false, crequired:50,color:1, purchased:false},

    {id:18, type:"pennyt", utype:"penny", name:"Pennies = $1.00", required:1, multiplier:1.5, status:false, crequired:1,color:2, purchased:false},
    {id:19, type:"pennyt", utype:"penny", name:"Pennies = $10.00", required:10, multiplier:1.5, status:false, crequired:10,color:2, purchased:false},
    {id:20, type:"pennyt", utype:"penny", name:"Pennies = $100.00", required:100, multiplier:1.5, status:false, crequired:100,color:2, purchased:false},
    {id:21, type:"pennyt", utype:"penny", name:"Pennies = $1.000a", required:1000, multiplier:1.5, status:false, crequired:1000,color:2, purchased:false},
    {id:22, type:"pennyt", utype:"penny", name:"Pennies = $10.00a", required:10000, multiplier:1.5, status:false, crequired:10000,color:2, purchased:false},

    {id:23, type:"pennyl", utype:"penny", name:"Penny Upgrade I", required:5, multiplier:2, status:false, crequired:10,color:1, purchased:false},
    {id:24, type:"pennyl", utype:"penny", name:"Penny Upgrade II", required:150, multiplier:2, status:false, crequired:25,color:1, purchased:false},
    {id:25, type:"pennyl", utype:"penny", name:"Penny Upgrade III", required:40000, multiplier:2, status:false, crequired:50,color:1, purchased:false},

    {id:26, type:"nickelt", utype:"nickel", name:"Nickels = $5.00", required:5, multiplier:1.5, status:false, crequired:5,color:2, purchased:false},
    {id:27, type:"nickelt", utype:"nickel", name:"Nickels = $50.00", required:50, multiplier:1.5, status:false, crequired:50,color:2, purchased:false},
    {id:28, type:"nickelt", utype:"nickel", name:"Nickels = $500.00", required:500, multiplier:1.5, status:false, crequired:500,color:2, purchased:false},
    {id:29, type:"nickelt", utype:"nickel", name:"Nickels = $5.000a", required:5000, multiplier:1.5, status:false, crequired:5000,color:2, purchased:false},
    {id:30, type:"nickelt", utype:"nickel", name:"Nickels = $50.00a", required:50000, multiplier:1.5, status:false, crequired:50000,color:2, purchased:false},

    {id:31, type:"nickell", utype:"nickel", name:"Nickel Upgrade I", required:25, multiplier:2, status:false, crequired:10,color:1, purchased:false},
    {id:32, type:"nickell", utype:"nickel", name:"Nickel Upgrade II", required:750, multiplier:2, status:false, crequired:25,color:1,purchased:false},
    {id:33, type:"nickell", utype:"nickel", name:"Nickel Upgrade III", required:200000, multiplier:2, status:false, crequired:50,color:1, purchased:false},


    {id:34, type:"dimet", utype:"dime", name:"Dimes = $10.00", required:10, multiplier:1.5, status:false, crequired:10,color:2, purchased:false},
    {id:35, type:"dimet", utype:"dime", name:"Dimes = $100.00", required:100, multiplier:1.5, status:false, crequired:100,color:2, purchased:false},
    {id:36, type:"dimet", utype:"dime", name:"Dimes = $1.000a", required:1000, multiplier:1.5, status:false, crequired:1000,color:2, purchased:false},
    {id:37, type:"dimet", utype:"dime", name:"Dimes = $10.00a", required:10000, multiplier:1.5, status:false, crequired:10000,color:2, purchased:false},
    {id:38, type:"dimet", utype:"dime", name:"Dimes = $100.0a", required:100000, multiplier:1.5, status:false, crequired:100000,color:2, purchased:false},

    {id:39, type:"dimel", utype:"dime", name:"Dime Upgrade I", required:50, multiplier:2, status:false, crequired:10,color:1, purchased:false},
    {id:40, type:"dimel", utype:"dime", name:"Dime Upgrade II", required:1500, multiplier:2, status:false, crequired:25,color:1, purchased:false},
    {id:41, type:"dimel", utype:"dime", name:"Dime Upgrade III", required:400000, multiplier:2, status:false, crequired:50,color:1, purchased:false},


    {id:42, type:"quartert", utype:"quarter", name:"Quarters = $25.00", required:25, multiplier:1.5, status:false, crequired:25,color:2, purchased:false},
    {id:43, type:"quartert", utype:"quarter", name:"Quarters = $250.00", required:250, multiplier:1.5, status:false, crequired:250,color:2, purchased:false},
    {id:44, type:"quartert", utype:"quarter", name:"Quarters = $2.500a", required:2500, multiplier:1.5, status:false, crequired:2500,color:2, purchased:false},
    {id:45, type:"quartert", utype:"quarter", name:"Quarters = $25.00a", required:25000, multiplier:1.5, status:false, crequired:25000,color:2, purchased:false},
    {id:46, type:"quartert", utype:"quarter", name:"Quarters = $250.0a", required:250000, multiplier:1.5, status:false, crequired:250000,color:2, purchased:false},

    {id:47, type:"quarterl", utype:"quarter", name:"Quarter Upgrade I", required:125, multiplier:2, status:false, crequired:10,color:1, purchased:false},
    {id:48, type:"quarterl", utype:"quarter", name:"Quarter Upgrade II", required:4000, multiplier:2, status:false, crequired:25,color:1, purchased:false},
    {id:49, type:"quarterl", utype:"quarter", name:"Quarter Upgrade III", required:1000000, multiplier:2, status:false, crequired:50,color:1, purchased:false},


    {id:50, type:"halfdollart", utype:"halfdollar", name:"Half Dollars = $50.00", required:50, multiplier:1.5, status:false, crequired:50,color:2, purchased:false},
    {id:51, type:"halfdollart", utype:"halfdollar", name:"Half Dollars = $500.00", required:500, multiplier:1.5, status:false, crequired:500,color:2, purchased:false},
    {id:52, type:"halfdollart", utype:"halfdollar", name:"Half Dollars = $5.000a", required:5000, multiplier:1.5, status:false, crequired:5000,color:2, purchased:false},
    {id:53, type:"halfdollart", utype:"halfdollar", name:"Half Dollars = $50.00a", required:50000, multiplier:1.5, status:false, crequired:50000,color:2, purchased:false},
    {id:54, type:"halfdollart", utype:"halfdollar", name:"Half Dollars = $500.0a", required:500000, multiplier:1.5, status:false, crequired:500000,color:2, purchased:false},

    {id:55, type:"halfdollarl", utype:"halfdollar", name:"Half Dollar Upgrade I", required:250, multiplier:2, status:false, crequired:10,color:1, purchased:false},
    {id:56, type:"halfdollarl", utype:"halfdollar", name:"Half Dollar Upgrade II", required:7500, multiplier:2, status:false, crequired:25,color:1, purchased:false},
    {id:57, type:"halfdollarl", utype:"halfdollar", name:"Half Dollar Upgrade III", required:2000000, multiplier:2, status:false, crequired:50,color:1, purchased:false},
];

const achievementsList = [
    {id:1, type:"clicks", name:"Clicked 100 Times", required:100, achieved:false},
    {id:2, type:"clicks", name:"Clicked 250 Times", required:250, achieved:false},
    {id:3, type:"clicks", name:"Clicked 500 Times", required:500, achieved:false},
    {id:4, type:"clicks", name:"Clicked 1,000 Times", required:1000, achieved:false},
    {id:5, type:"clicks", name:"Clicked 2,500 Times", required:2500, achieved:false},
    {id:6, type:"clicks", name:"Clicked 5,000 Times", required:5000, achieved:false},
    {id:7, type:"clicks", name:"Clicked 10,000 Times", required:10000, achieved:false},
    {id:8, type:"clicks", name:"Clicked 25,000 Times", required:25000, achieved:false},
    {id:9, type:"clicks", name:"Clicked 50,000 Times", required:50000, achieved:false},

    {id:10, type:"clickv", name:"Earn $1.00 from Clicks", required:1, achieved:false},
    {id:11, type:"clickv", name:"Earn $10.00 from Clicks", required:10, achieved:false},
    {id:12, type:"clickv", name:"Earn $100.00 from Clicks", required:100, achieved:false},
    {id:13, type:"clickv", name:"Earn $1.000a from Clicks", required:1000, achieved:false},
    {id:14, type:"clickv", name:"Earn $10.00a from Clicks", required:10000, achieved:false},
    {id:15, type:"clickv", name:"Earn $100.0a from Clicks", required:100000, achieved:false},
    {id:16, type:"clickv", name:"Earn $1.000b from Clicks", required:1000000, achieved:false},

    {id:17, type:"clickl", name:"Upgrade Clicks to Level 1", required:1, achieved:false},
    {id:18, type:"clickl", name:"Upgrade Clicks to Level 10", required:10, achieved:false},
    {id:19, type:"clickl", name:"Upgrade Clicks to Level 25", required:25, achieved:false},
    {id:20, type:"clickl", name:"Upgrade Clicks to Level 50", required:50, achieved:false},

    {id:21, type:"pc", name:"10.0¢ per Click", required:0.1, achieved:false},
    {id:22, type:"pc", name:"$1.00 per Click", required:1, achieved:false},
    {id:23, type:"pc", name:"$10.00 per Click", required:10, achieved:false},
    {id:24, type:"pc", name:"$100.00 per Click", required:100, achieved:false},
    {id:25, type:"pc", name:"$1.000a per Click", required:1000, achieved:false},


    {id:26, type:"pennyv", name:"Earn $1.00 from Pennies", required:1, achieved:false},
    {id:27, type:"pennyv", name:"Earn $10.00 from Pennies", required:10, achieved:false},
    {id:28, type:"pennyv", name:"Earn $100.00 from Pennies", required:100, achieved:false},
    {id:29, type:"pennyv", name:"Earn $1.000a from Pennies", required:1000, achieved:false},
    {id:30, type:"pennyv", name:"Earn $10.00a from Pennies", required:10000, achieved:false},

    {id:31, type:"pennyl", name:"Upgrade Pennies to Level 1", required:1, achieved:false},
    {id:32, type:"pennyl", name:"Upgrade Pennies to Level 10", required:10, achieved:false},
    {id:33, type:"pennyl", name:"Upgrade Pennies to Level 25", required:25, achieved:false},
    {id:34, type:"pennyl", name:"Upgrade Pennies to Level 50", required:50, achieved:false},

    {id:35, type:"pennyps", name:"10.0¢ per Second from Pennies", required:0.1, achieved:false},
    {id:36, type:"pennyps", name:"$1.00 per Second from Pennies", required:1, achieved:false},
    {id:37, type:"pennyps", name:"$10.00 per Second from Pennies", required:10, achieved:false},


    {id:38, type:"nickelv", name:"Earn $5.00 from Nickels", required:5, achieved:false},
    {id:39, type:"nickelv", name:"Earn $50.00 from Nickels", required:50, achieved:false},
    {id:40, type:"nickelv", name:"Earn $500.00 from Nickels", required:500, achieved:false},
    {id:41, type:"nickelv", name:"Earn $5.000a from Nickels", required:5000, achieved:false},
    {id:42, type:"nickelv", name:"Earn $50.00a from Nickels", required:50000, achieved:false},

    {id:43, type:"nickell", name:"Upgrade Nickels to Level 1", required:1, achieved:false},
    {id:44, type:"nickell", name:"Upgrade Nickels to Level 10", required:10, achieved:false},
    {id:45, type:"nickell", name:"Upgrade Nickels to Level 25", required:25, achieved:false},
    {id:46, type:"nickell", name:"Upgrade Nickels to Level 50", required:50, achieved:false},

    {id:47, type:"nickelps", name:"50.0¢ per Second from Nickels", required:0.5, achieved:false},
    {id:48, type:"nickelps", name:"$5.00 per Second from Nickels", required:5, achieved:false},
    {id:49, type:"nickelps", name:"$50.00 per Second from Nickels", required:50, achieved:false},


    {id:50, type:"dimev", name:"Earn $10.00 from Dimes", required:10, achieved:false},
    {id:51, type:"dimev", name:"Earn $100.00 from Dimes", required:100, achieved:false},
    {id:52, type:"dimev", name:"Earn $1.000a from Dimes", required:1000, achieved:false},
    {id:53, type:"dimev", name:"Earn $10.00a from Dimes", required:10000, achieved:false},
    {id:54, type:"dimev", name:"Earn $100.0a from Dimes", required:100000, achieved:false},

    {id:55, type:"dimel", name:"Upgrade Dimes to Level 1", required:1, achieved:false},
    {id:56, type:"dimel", name:"Upgrade Dimes to Level 10", required:10, achieved:false},
    {id:57, type:"dimel", name:"Upgrade Dimes to Level 25", required:25, achieved:false},
    {id:58, type:"dimel", name:"Upgrade Dimes to Level 50", required:50, achieved:false},

    {id:59, type:"dimeps", name:"$1.00 per Second from Dimes", required:1, achieved:false},
    {id:60, type:"dimeps", name:"$10.00 per Second from Dimes", required:10, achieved:false},
    {id:61, type:"dimeps", name:"$100.00 per Second from Dimes", required:100, achieved:false},

    
    {id:62, type:"quarterv", name:"Earn $25.00 from Quarters", required:25, achieved:false},
    {id:63, type:"quarterv", name:"Earn $250.00 from Quarters", required:250, achieved:false},
    {id:64, type:"quarterv", name:"Earn $2.500a from Quarters", required:2500, achieved:false},
    {id:65, type:"quarterv", name:"Earn $25.00a from Quarters", required:25000, achieved:false},
    {id:66, type:"quarterv", name:"Earn $250.0a from Quarters", required:250000, achieved:false},

    {id:67, type:"quarterl", name:"Upgrade Quarters to Level 1", required:1, achieved:false},
    {id:68, type:"quarterl", name:"Upgrade Quarters to Level 10", required:10, achieved:false},
    {id:69, type:"quarterl", name:"Upgrade Quarters to Level 25", required:25, achieved:false},
    {id:70, type:"quarterl", name:"Upgrade Quarters to Level 50", required:50, achieved:false},

    {id:71, type:"quarterps", name:"$2.50 per Second from Quarters", required:2.5, achieved:false},
    {id:72, type:"quarterps", name:"$25.00 per Second from Quarters", required:25, achieved:false},
    {id:73, type:"quarterps", name:"$250.00 per Second from Quarters", required:250, achieved:false},


    {id:74, type:"halfdollarv", name:"Earn $50.00 from Half Dollars", required:50, achieved:false},
    {id:75, type:"halfdollarv", name:"Earn $500.00 from Half Dollars", required:500, achieved:false},
    {id:76, type:"halfdollarv", name:"Earn $5.000a from Half Dollars", required:5000, achieved:false},
    {id:77, type:"halfdollarv", name:"Earn $50.00a from Half Dollars", required:50000, achieved:false},
    {id:78, type:"halfdollarv", name:"Earn $500.0a from Half Dollars", required:50000, achieved:false},

    {id:79, type:"halfdollarl", name:"Upgrade Half Dollars to Level 1", required:1, achieved:false},
    {id:80, type:"halfdollarl", name:"Upgrade Half Dollars to Level 10", required:10, achieved:false},
    {id:81, type:"halfdollarl", name:"Upgrade Half Dollars to Level 25", required:25, achieved:false},
    {id:82, type:"halfdollarl", name:"Upgrade Half Dollars to Level 50", required:50, achieved:false},

    {id:83, type:"halfdollarps", name:"$5.00 per Second from Half Dollars", required:5, achieved:false},
    {id:84, type:"halfdollarps", name:"$50.00 per Second from Half Dollars", required:50, achieved:false},
    {id:85, type:"halfdollarps", name:"$500.00 per Second from Half Dollars", required:500, achieved:false},


    {id:86, type:"money", name:"Have a Net Worth of $10.00", required:10, achieved:false},
    {id:87, type:"money", name:"Have a Net Worth of $100.00", required:100, achieved:false},
    {id:88, type:"money", name:"Have a Net Worth of $1.000a", required:1000, achieved:false},
    {id:89, type:"money", name:"Have a Net Worth of $10.00a", required:10000, achieved:false},
    {id:90, type:"money", name:"Have a Net Worth of $100.0a", required:100000, achieved:false},
    {id:91, type:"money", name:"Have a Net Worth of $1.000b", required:1000000, achieved:false},

    {id:92, type:"moneyt", name:"Earn a total of $10.00", required:10, achieved:false},
    {id:93, type:"moneyt", name:"Earn a total of $100.00", required:100, achieved:false},
    {id:94, type:"moneyt", name:"Earn a total of $1.000a", required:1000, achieved:false},
    {id:95, type:"moneyt", name:"Earn a total of $10.00a", required:10000, achieved:false},
    {id:96, type:"moneyt", name:"Earn a total of $100.0a", required:100000, achieved:false},
    {id:97, type:"moneyt", name:"Earn a total of $1.000b", required:1000000, achieved:false},
    {id:98, type:"moneyt", name:"Earn a total of $10.00b", required:10000000, achieved:false},

    {id:99, type:"ps", name:"Make 10.0¢ per Second", required:0.1, achieved:false},
    {id:100, type:"ps", name:"Make $1.00 per Second", required:1, achieved:false},
    {id:101, type:"ps", name:"Make $10.00 per Second", required:10, achieved:false},
    {id:102, type:"ps", name:"Make $100.00 per Second", required:100, achieved:false},
    {id:103, type:"ps", name:"Make $1.000a per Second", required:1000, achieved:false},

    {id:104, type:"time", name:"Played for 1 Minute", required:60, achieved:false},
    {id:105, type:"time", name:"Played for 5 Minutes", required:300, achieved:false},
    {id:106, type:"time", name:"Played for 10 Minutes", required:600, achieved:false},
    {id:107, type:"time", name:"Played for 30 Minutes", required:1800, achieved:false},
    {id:108, type:"time", name:"Played for 1 Hour", required:3600, achieved:false},

    {id:109, type:"upgrades", name:"Upgrade 1 Time", required:1, achieved:false},
    {id:110, type:"upgrades", name:"Upgrade 5 Times", required:5, achieved:false},
    {id:111, type:"upgrades", name:"Upgrade 10 Times", required:10, achieved:false},
    {id:112, type:"upgrades", name:"Upgrade 25 Times", required:25, achieved:false},
    {id:113, type:"upgrades", name:"Upgrade 50 Times", required:50, achieved:false},
    {id:114, type:"upgrades", name:"Upgrade Everything", required:57, achieved:false},
];

function upgrades() {
    upgradesList.forEach(upgrade => {
        if(!upgrade.purchased){
            if(upgrade.type == "clicka" && upgrade.status == false){
                if(clicka >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "clickt" && upgrade.status == false){
                if(clickt >= upgrade.crequired) {
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "clickl" && upgrade.status == false){
                if(clickupgradelevel >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "pennyt" && upgrade.status == false){
                if(pennyt >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "pennyl" && upgrade.status == false){
                if(pennylevel >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "nickelt" && upgrade.status == false){
                if(nickelt >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "nickell" && upgrade.status == false){
                if(nickellevel >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "dimet" && upgrade.status == false){
                if(dimet >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "dimel" && upgrade.status == false){
                if(dimelevel >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "quartert" && upgrade.status == false){
                if(quartert >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "quarterl" && upgrade.status == false){
                if(quarterlevel >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "halfdollart" && upgrade.status == false){
                if(halfdollart >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.type == "halfdollarl" && upgrade.status == false){
                if(halfdollarlevel >= upgrade.crequired){
                    upgrade.status = true;
                    createUpgrade(upgrade);
                }
            }
            if(upgrade.status == true){
                createUpgrade(upgrade);
            }
        }
    })
    document.getElementById("upgradest").innerHTML = 
        "Upgrades: " + upgradest + "/" + upgradesList.length + 
        " (" + Math.round((upgradest / upgradesList.length) * 10000)/100 + "%)";
}
function upgradeType(upgrade){
    if(upgrade.utype == "click") {
        return "Click";
    }
    else if(upgrade.utype == "penny"){
        return "Penny";
    }
    else if (upgrade.utype == "nickel"){
        return "Nickel";
    }
    else if (upgrade.utype == "dime"){
        return "Dime";
    }
    else if (upgrade.utype == "quarter"){
        return "Quarter";
    }
    else if (upgrade.utype == "halfdollar"){
        return "Half Dollar";
    }
}

function createUpgrade(upgrade) {
    const upgradeContainer = document.getElementById("current-upgrades");
    upgradeContainer.innerHTML = '';
    upgradesList
        .filter(upgrade => upgrade.status) 
        .sort((a, b) => a.required - b.required) 
        .forEach(upgrade => {
            if(!upgrade.purchased){
                const ub = document.createElement('button');
            ub.classList.add('secondary-upgrade');
            if(upgrade.color == 1) {
                ub.classList.add("color1");
            }
            else if(upgrade.color == 2) {
                ub.classList.add("color2");
            }
            else {
                ub.classList.add("color3");
            }
            const p1 = document.createElement('p');
            p1.innerHTML = upgrade.name;
            const p2 = document.createElement('p');
            p2.innerHTML = upgradeType(upgrade) + " Upgrades: " + upgrade.multiplier + "x";
            const p3 = document.createElement("p");
            p3.innerHTML = "Upgrade Cost: " + change(upgrade.required);

            ub.appendChild(p1);
            ub.appendChild(p2);
            ub.appendChild(p3);
            const upgradesDiv = document.getElementById('current-upgrades');
            if(money >= upgrade.required){
                ub.style.filter = "grayscale(0%)";
                ub.addEventListener("click", function(){
                    if(upgrade.utype == "click"){
                        upgrade.purchased = true;
                        money -= upgrade.required
                        incmultiplier *= upgrade.multiplier;
                        incvalue = inc * incmultiplier;
                        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click"
                        createUpgrade(upgrade);
                        upgradest++;
                    }
                    if(upgrade.utype == "penny"){
                        upgrade.purchased = true;
                        money -= upgrade.required
                        pennymultiplier *= upgrade.multiplier;
                        updateMoneyps();
                        createUpgrade(upgrade);
                        upgradest++;
                    }
                    if(upgrade.utype == "nickel"){
                        upgrade.purchased = true;
                        money -= upgrade.required
                        nickelmultiplier *= upgrade.multiplier;
                        updateMoneyps();
                        createUpgrade(upgrade);
                        upgradest++;
                    }
                    if(upgrade.utype == "dime"){
                        upgrade.purchased = true;
                        money -= upgrade.required
                        dimemultiplier *= upgrade.multiplier;
                        updateMoneyps();
                        createUpgrade(upgrade);
                        upgradest++;
                    }
                    if(upgrade.utype == "quarter"){
                        upgrade.purchased = true;
                        money -= upgrade.required
                        quartermultiplier *= upgrade.multiplier;
                        updateMoneyps();
                        createUpgrade(upgrade);
                        upgradest++;
                    }
                    if(upgrade.utype == "halfdollar"){
                        upgrade.purchased = true;
                        money -= upgrade.required
                        halfdollarmultiplier *= upgrade.multiplier;
                        updateMoneyps();
                        createUpgrade(upgrade);
                        upgradest++;
                    }
                })
            }
            else{
                ub.style.filter = "grayscale(100%)";
            }
            upgradesDiv.appendChild(ub);
            }
    });
}

function achieved() {
    achievementsList.forEach(achievement => {
        if (achievement.type == "clicks" && !achievement.achieved && clicka >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++;
        }
        if (achievement.type == "clickv" && !achievement.achieved && clickt >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "clickl" && !achievement.achieved && clickupgradelevel >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "upgrades" && !achievement.achieved && upgradest >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "time" && !achievement.achieved && timeElapsed >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "pennyv" && !achievement.achieved && pennyt >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "pennyl" && !achievement.achieved && pennylevel >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "nickelv" && !achievement.achieved && nickelt >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "nickell" && !achievement.achieved && nickellevel >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "dimev" && !achievement.achieved && dimet >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "dimel" && !achievement.achieved && dimelevel >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "quarterv" && !achievement.achieved && quartert >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "quarterl" && !achievement.achieved && quarterlevel >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "halfdollarv" && !achievement.achieved && halfdollart >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "halfdollarl" && !achievement.achieved && halfdollarlevel >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        
        if (achievement.type == "money" && !achievement.achieved && money >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "moneyt" && !achievement.achieved && moneyt >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "pc" && !achievement.achieved && incvalue >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "ps" && !achievement.achieved && moneyps >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "pennyps" && !achievement.achieved && pennyvalue >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "nickelps" && !achievement.achieved && nickelvalue >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "dimeps" && !achievement.achieved && dimevalue >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "quarterps" && !achievement.achieved && quartervalue >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
        if (achievement.type == "halfdollarps" && !achievement.achieved && halfdollarvalue >= achievement.required) {
            achievement.achieved = true;
            achievementcounter++
        }
    });
    document.getElementById("achievement-progress").innerHTML = "Achievements: " + achievementcounter + "/" + achievementsList.length + " (" + Math.round((achievementcounter / achievementsList.length) * 10000)/100 + "%)";
    const achievementContainer = document.getElementById("achievement-achieved");
    achievementContainer.innerHTML = '';
    achievementsList
        .filter(achievement => achievement.achieved) 
        .sort((a, b) => a.id - b.id) 
        .forEach(achievement => {
            const p = document.createElement('p');
            p.classList.add("achievement-achieved");
            p.innerText = achievement.id + ". " + achievement.name;
            achievementContainer.appendChild(p); 
    });
}


const clickupgradebutton = document.getElementById("clickupgrade");
const pennyupgradebutton = document.getElementById("pennyupgrade");
const nickelupgradebutton = document.getElementById("nickelupgrade");
const dimeupgradebutton = document.getElementById("dimeupgrade");
const quarterupgradebutton = document.getElementById("quarterupgrade");
const halfdollarupgradebutton = document.getElementById("halfdollarupgrade");

function change(input) {
    if (input >= 99995000000000) {
        return "$" + (input/1000000000000).toFixed(1) + "d";
    }
    else if (input >= 9999500000000) {
        return "$" + (input/1000000000000).toFixed(2) + "d";
    }
    else if (input >= 999950000000) {
        return "$" + (input/1000000000000).toFixed(3) + "d";
    }
    else if (input >= 99995000000) {
        return "$" + (input/1000000000).toFixed(1) + "c";
    }
    else if (input >= 9999500000) {
        return "$" + (input/1000000000).toFixed(2) + "c";
    }
    else if (input >= 999950000) {
        return "$" + (input/1000000000).toFixed(3) + "c";
    }
    else if (input >= 99995000) {
        return "$" + (input/1000000).toFixed(1) + "b";
    }
    else if (input >= 9999500) {
        return "$" + (input/1000000).toFixed(2) + "b";
    }
    else if (input >= 999950) {
        return "$" + (input/1000000).toFixed(3) + "b";
    }
    else if(input >= 99995) {
        return "$" + (input/1000).toFixed(1) + "a";
    }
    else if(input >= 9999.5) {
        return "$" + (input/1000).toFixed(2) + "a";
    }
    else if (input >= 999.995) {
        return "$" + (input/1000).toFixed(3) + "a";
    }
    else if (input >= 0.995) {
        return "$" + input.toFixed(2);
    }
    else {
        return (input*100).toFixed(1) + "¢";
    }
}

setInterval(function() {
    achieved();
    upgrades();
    const now = Date.now();
    const deltaTime = (now - lastUpdateA)/1000;
    lastUpdateA = now;
    moneyt += moneyps * deltaTime;
    document.getElementById("moneyt").innerHTML = "Total Earnings: " + change(moneyt);
    if(money >= 0.10 && click == false) {
        clickupgradebutton.style.display = "flex";
        click = true;
    }
    if(money >= 0.50 && penny == false) {
        pennyupgradebutton.style.display = "flex";
        penny = true;
    }
    if(money >= 2.50 && nickel == false) {
        nickelupgradebutton.style.display = "flex";
        nickel = true;
    }
    if(money >= 5.00 && dime == false) {
        dimeupgradebutton.style.display = "flex";
        dime = true;
    }
    if(money >= 12.50 && quarter == false) {
        quarterupgradebutton.style.display = "flex";
        quarter = true;
    }
    if(money >= 25.00 && halfdollar == false) {
        halfdollarupgradebutton.style.display = "flex";
        halfdollar = true;
    }

    document.getElementById("click").innerHTML = "Clicks: " + clicka.toLocaleString();
    document.getElementById("clickt").innerHTML = "Clicks: " + change(clickt);

    if(penny == true) {
        pennyt += pennyvalue * deltaTime;
        document.getElementById("pennyt").innerHTML = "Pennies: " + change(pennyt) + " (" + change(pennyvalue) + "/second)";
    }
    
    if(nickel == true) {
        nickelt += nickelvalue * deltaTime;
        document.getElementById("nickelt").innerHTML = "Nickels: " + change(nickelt) + " (" + change(nickelvalue) + "/second)";
    }

    if(dime == true) {
        dimet += dimevalue * deltaTime;
        document.getElementById("dimet").innerHTML = "Dimes: " + change(dimet) + " (" + change(dimevalue) + "/second)";
    }

    if(quarter == true) {
        quartert += quartervalue * deltaTime;
        document.getElementById("quartert").innerHTML = "Quarters: " + change(quartert) + " (" + change(quartervalue) + "/second)";
    }

    if(halfdollar == true) {
        halfdollart += halfdollarvalue * deltaTime;
        document.getElementById("halfdollart").innerHTML = "Half Dollars: " + change(halfdollart) + " (" + change(halfdollarvalue) + "/second)";
    }

    if(timestart == false){
        start = Date.now();
    }
    timeElapsed = (Date.now() - start)/1000;
    seconds = Math.floor(timeElapsed)%60;
    minutes = Math.floor(timeElapsed/60)%60;
    hours = Math.floor(timeElapsed/3600)%24;
    days = Math.floor(timeElapsed/86400);
    if(seconds == 1) {
        stringseconds = "1 second";
    }
    else {
        stringseconds = seconds + " seconds";
    }
    if(minutes == 1) {
        stringminutes = "1 minute, ";
    }
    else {
        stringminutes = minutes + " minutes, ";
    }
    if(hours == 1) {
        stringhours = "1 hour, ";
    }
    else {
        stringhours = hours + " hours, ";
    }
    if(days == 1) {
        stringdays = "1 day, ";
    }
    else {
        stringdays = days.toLocaleString() + " days, ";
    }
    document.getElementById("timeelapsed").innerHTML = "Time Elapsed: " + stringdays + stringhours + stringminutes + stringseconds;
}, 1000);

setInterval(function() {
    const now = Date.now();
    const deltaTime = (now - lastUpdate)/1000;
    lastUpdate = now;
    money += moneyps * deltaTime;
    document.getElementById("money").innerHTML = change(money);
    document.title = change(money) + " | Penny Clicker " + document.getElementById("version").innerHTML;

    if(money < clickupgradecost) {
        document.getElementById("clickupgrade").style.backgroundColor = "gray";
        document.getElementById("clickupgradecost").style.color = "darkred";
    }
    else {
        document.getElementById("clickupgrade").style.backgroundColor = "white";
        document.getElementById("clickupgradecost").style.color = "black";
    }

    if(money < pennycost) {
        document.getElementById("pennyupgrade").style.backgroundColor = "gray";
        document.getElementById("pennycost").style.color = "darkred";
    }
    else {
        document.getElementById("pennyupgrade").style.backgroundColor = "white";
        document.getElementById("pennycost").style.color = "black";
    }

    if(money < nickelcost) {
        document.getElementById("nickelupgrade").style.backgroundColor = "gray";
        document.getElementById("nickelcost").style.color = "darkred";
    }
    else {
        document.getElementById("nickelupgrade").style.backgroundColor = "white";
        document.getElementById("nickelcost").style.color = "black";
    }
    if(money < dimecost) {
        document.getElementById("dimeupgrade").style.backgroundColor = "gray";
        document.getElementById("dimecost").style.color = "darkred";
    }
    else {
        document.getElementById("dimeupgrade").style.backgroundColor = "white";
        document.getElementById("dimecost").style.color = "black";
    }
    if(money < quartercost) {
        document.getElementById("quarterupgrade").style.backgroundColor = "gray";
        document.getElementById("quartercost").style.color = "darkred";
    }
    else {
        document.getElementById("quarterupgrade").style.backgroundColor = "white";
        document.getElementById("quartercost").style.color = "black";
    }
    if(money < halfdollarcost) {
        document.getElementById("halfdollarupgrade").style.backgroundColor = "gray";
        document.getElementById("halfdollarcost").style.color = "darkred";
    }
    else {
        document.getElementById("halfdollarupgrade").style.backgroundColor = "white";
        document.getElementById("halfdollarcost").style.color = "black";
    }
}, 100);

const button = document.getElementById("button");
button.addEventListener("click", function() {
    timestart = true;
    money += incvalue;
    moneyt += incvalue;
    clickt += incvalue;
    clicka += 1;
})

clickupgradebutton.addEventListener("click", function() {
    if (money >= clickupgradecost) {
        money -= clickupgradecost;
        inc+=0.001;
        incvalue = inc * incmultiplier;
        clickupgradelevel++;
        clickupgradecost = clickupgradecost * clickupgradecostmultiplier;
        document.getElementById("clickupgradelevel").innerHTML = clickupgradelevel;
        document.getElementById("clickupgradecost").innerHTML = change(clickupgradecost);
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click" 
    }
})

pennyupgradebutton.addEventListener("click", function() {
    if(money >= pennycost){
        money-= pennycost;
        pennyinc+=0.01;
        pennylevel++;
        updateMoneyps();
        pennycost *= pennycostmultiplier;
        document.getElementById("pennylevel").innerHTML = pennylevel;
        document.getElementById("pennycost").innerHTML = change(pennycost); 
    }
})

nickelupgradebutton.addEventListener("click", function() {
    if(money >= nickelcost){
        money -= nickelcost;
        nickelinc += 0.05;
        nickellevel++;
        updateMoneyps();
        nickelcost *= nickelcostmultiplier;
        document.getElementById("nickellevel").innerHTML = nickellevel;
        document.getElementById("nickelcost").innerHTML = change(nickelcost); 
    }
})

dimeupgradebutton.addEventListener("click", function() {
    if(money >= dimecost){
        money -= dimecost;
        dimeinc += 0.10;
        dimelevel++;
        updateMoneyps();
        dimecost *= dimecostmultiplier;
        document.getElementById("dimelevel").innerHTML = dimelevel;
        document.getElementById("dimecost").innerHTML = change(dimecost); 
    }
})

quarterupgradebutton.addEventListener("click", function() {
    if(money >= quartercost){
        money -= quartercost;
        quarterinc += 0.25;
        quarterlevel++;
        updateMoneyps();
        quartercost *= quartercostmultiplier;
        document.getElementById("quarterlevel").innerHTML = quarterlevel;
        document.getElementById("quartercost").innerHTML = change(quartercost); 
    }
})

halfdollarupgradebutton.addEventListener("click", function() {
    if(money >= halfdollarcost){
        money -= halfdollarcost;
        halfdollarinc += 0.50;
        halfdollarlevel++;
        updateMoneyps();
        halfdollarcost *= halfdollarcostmultiplier;
        document.getElementById("halfdollarlevel").innerHTML = halfdollarlevel;
        document.getElementById("halfdollarcost").innerHTML = change(halfdollarcost); 
    }
})