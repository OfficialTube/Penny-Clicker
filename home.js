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

let lastUpdate = Date.now();
let moneyps = pennyvalue + nickelvalue;

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

    {id:15, type:"clickl", name:"Upgrade Clicks to Level 1", required:1, achieved:false},
    {id:16, type:"clickl", name:"Upgrade Clicks to Level 10", required:10, achieved:false},
    {id:17, type:"clickl", name:"Upgrade Clicks to Level 25", required:25, achieved:false},
    {id:18, type:"clickl", name:"Upgrade Clicks to Level 50", required:50, achieved:false},

    {id:19, type:"pc", name:"10.0¢ per Click", required:0.1, achieved:false},
    {id:20, type:"pc", name:"$1.00 per Click", required:1, achieved:false},
    {id:21, type:"pc", name:"$10.00 per Click", required:10, achieved:false},
    {id:22, type:"pc", name:"$100.00 per Click", required:100, achieved:false},
    {id:23, type:"pc", name:"$1.000a per Click", required:1000, achieved:false},


    {id:24, type:"pennyv", name:"Earn $1.00 from Pennies", required:1, achieved:false},
    {id:25, type:"pennyv", name:"Earn $10.00 from Pennies", required:10, achieved:false},
    {id:26, type:"pennyv", name:"Earn $100.00 from Pennies", required:100, achieved:false},
    {id:27, type:"pennyv", name:"Earn $1.000a from Pennies", required:1000, achieved:false},
    {id:28, type:"pennyv", name:"Earn $10.00a from Pennies", required:10000, achieved:false},

    {id:29, type:"pennyl", name:"Upgrade Pennies to Level 1", required:1, achieved:false},
    {id:30, type:"pennyl", name:"Upgrade Pennies to Level 10", required:10, achieved:false},
    {id:31, type:"pennyl", name:"Upgrade Pennies to Level 25", required:25, achieved:false},
    {id:32, type:"pennyl", name:"Upgrade Pennies to Level 50", required:50, achieved:false},

    {id:33, type:"pennyps", name:"10.0¢ per Second from Pennies", required:0.1, achieved:false},
    {id:34, type:"pennyps", name:"$1.00 per Second from Pennies", required:1, achieved:false},
    {id:35, type:"pennyps", name:"$10.00 per Second from Pennies", required:10, achieved:false},


    {id:36, type:"nickelv", name:"Earn $5.00 from Nickels", required:5, achieved:false},
    {id:37, type:"nickelv", name:"Earn $50.00 from Nickels", required:50, achieved:false},
    {id:38, type:"nickelv", name:"Earn $500.00 from Nickels", required:500, achieved:false},
    {id:39, type:"nickelv", name:"Earn $5.000a from Nickels", required:5000, achieved:false},
    {id:40, type:"nickelv", name:"Earn $5.00a from Nickels", required:50000, achieved:false},

    {id:41, type:"nickell", name:"Upgrade Nickels to Level 1", required:1, achieved:false},
    {id:42, type:"nickell", name:"Upgrade Nickels to Level 10", required:10, achieved:false},
    {id:43, type:"nickell", name:"Upgrade Nickels to Level 25", required:25, achieved:false},
    {id:44, type:"nickell", name:"Upgrade Nickels to Level 50", required:50, achieved:false},

    {id:45, type:"nickelps", name:"50.0¢ per Second from Nickels", required:0.5, achieved:false},
    {id:46, type:"nickelps", name:"$5.00 per Second from Nickels", required:5, achieved:false},
    {id:47, type:"nickelps", name:"$50.00 per Second from Nickels", required:50, achieved:false},

    {id:48, type:"money", name:"Have a Net Worth of $10.00", required:10, achieved:false},
    {id:49, type:"money", name:"Have a Net Worth of $100.00", required:100, achieved:false},
    {id:50, type:"money", name:"Have a Net Worth of $1.000a", required:1000, achieved:false},
    {id:51, type:"money", name:"Have a Net Worth of $10.00a", required:10000, achieved:false},
    {id:52, type:"money", name:"Have a Net Worth of $100.0a", required:100000, achieved:false},

    {id:53, type:"moneyt", name:"Earn a total of $10.00", required:10, achieved:false},
    {id:54, type:"moneyt", name:"Earn a total of $100.00", required:100, achieved:false},
    {id:55, type:"moneyt", name:"Earn a total of $1.000a", required:1000, achieved:false},
    {id:56, type:"moneyt", name:"Earn a total of $10.00a", required:10000, achieved:false},
    {id:57, type:"moneyt", name:"Earn a total of $100.0a", required:100000, achieved:false},
    {id:58, type:"moneyt", name:"Earn a total of $1.000b", required:1000000, achieved:false},

    {id:59, type:"ps", name:"Make 10.0¢ per Second", required:0.1, achieved:false},
    {id:60, type:"ps", name:"Make $1.00 per Second", required:1, achieved:false},
    {id:61, type:"ps", name:"Make $10.00 per Second", required:10, achieved:false},

    {id:62, type:"time", name:"Played for 1 Minute", required:60, achieved:false},
    {id:63, type:"time", name:"Played for 5 Minutes", required:300, achieved:false},
    {id:64, type:"time", name:"Played for 10 Minutes", required:600, achieved:false},
    {id:65, type:"time", name:"Played for 30 Minutes", required:1800, achieved:false},
    {id:66, type:"time", name:"Played for 1 Hour", required:3600, achieved:false},

    {id:67, type:"upgrades", name:"Upgrade 1 Time", required:1, achieved:false},
    {id:68, type:"upgrades", name:"Upgrade 5 Times", required:5, achieved:false},
    {id:69, type:"upgrades", name:"Upgrade 10 Times", required:10, achieved:false},
    {id:70, type:"upgrades", name:"Upgrade 25 Times", required:25, achieved:false},
    {id:71, type:"upgrades", name:"Upgrade Everything", required:33, achieved:false},
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
            if(upgrade.status == true){
                createUpgrade(upgrade);
            }
        }
    })
    document.getElementById("upgradest").innerHTML = 
        "Upgrades: " + upgradest + "/" + upgradesList.length + 
        " (" + ((upgradest / upgradesList.length) * 100).toFixed(2) + "%)";
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
                        pennyvalue = pennyinc * pennymultiplier;
                        moneyps = pennyvalue + nickelvalue;
                        document.getElementById("moneyps").innerHTML = change(moneyps) + "/second";
                        createUpgrade(upgrade);
                        upgradest++;
                    }
                    if(upgrade.utype == "nickel"){
                        upgrade.purchased = true;
                        money -= upgrade.required
                        nickelmultiplier *= upgrade.multiplier;
                        nickelvalue = nickelinc * nickelmultiplier;
                        moneyps = pennyvalue + nickelvalue;
                        document.getElementById("moneyps").innerHTML = change(moneyps) + "/second";
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
    });
    document.getElementById("achievement-progress").innerHTML = "Achievements: " + achievementcounter + "/" + achievementsList.length + " (" + ((achievementcounter / achievementsList.length) * 100).toFixed(2) + "%)";
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
    if(timestart == false){
        start = Date.now();
        console.log(start);
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
    moneyt += moneyps * deltaTime;
    document.getElementById("money").innerHTML = change(money);
    document.title = change(money) + " | Penny Clicker " + document.getElementById("version").innerHTML;
    document.getElementById("moneyt").innerHTML = "Total Earnings: " + change(moneyt);

    if(money >= 0.10 && click == false) {
        clickupgradebutton.style.display = "inline-block";
        click = true;
    }
    if(money >= 0.50 && penny == false) {
        pennyupgradebutton.style.display = "inline-block";
        penny = true;
        document.getElementById("pennyt").innerHTML = "Pennies: " + change(pennyt) + " (" + change(pennyvalue) + "/second)";
    }
    if(money >= 2.50 && nickel == false) {
        nickelupgradebutton.style.display = "inline-block";
        nickel = true;
        document.getElementById("nickelt").innerHTML = "Nickels: " + change(nickelt) + " (" + change(nickelvalue) + "/second)";
    }

    if(penny == true) {
        pennyt += (pennyvalue/10);
        document.getElementById("pennyt").innerHTML = "Pennies: " + change(pennyt) + " (" + change(pennyvalue) + "/second)";
    }
    
    if(nickel == true) {
        nickelt += (nickelvalue/10);
        document.getElementById("nickelt").innerHTML = "Nickels: " + change(nickelt) + " (" + change(nickelvalue) + "/second)";
    }
    
    
    if(money < clickupgradecost) {
        document.getElementById("clickupgrade").style.backgroundColor = "gray";
    }
    else {
        document.getElementById("clickupgrade").style.backgroundColor = "white";
    }

    if(money < pennycost) {
        document.getElementById("pennyupgrade").style.backgroundColor = "gray";
    }
    else {
        document.getElementById("pennyupgrade").style.backgroundColor = "white";
    }

    if(money < nickelcost) {
        document.getElementById("nickelupgrade").style.backgroundColor = "gray";
    }
    else {
        document.getElementById("nickelupgrade").style.backgroundColor = "white";
    }
}, 100);

const button = document.getElementById("button");
button.addEventListener("click", function() {
    timestart = true;
    money += incvalue;
    moneyt += incvalue;
    clickt += incvalue;
    clicka += 1;
    document.getElementById("click").innerHTML = "Clicks: " + clicka.toLocaleString();
    document.getElementById("clickt").innerHTML = "Clicks: " + change(clickt);
})

clickupgradebutton.addEventListener("click", function() {
    if (money >= clickupgradecost) {
        money -= clickupgradecost;
        inc+=0.001;
        incvalue = inc * incmultiplier;
        clickupgradelevel++;
        clickupgradecost = clickupgradecost * clickupgradecostmultiplier;
        document.getElementById("clickupgradelevel").innerHTML = "Level: " + clickupgradelevel + "   ";
        document.getElementById("clickupgradecost").innerHTML = "Upgrade Cost: " + change(clickupgradecost);
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click" 
    }
})

pennyupgradebutton.addEventListener("click", function() {
    if(money >= pennycost){
        money-= pennycost;
        pennyinc+=0.01;
        pennyvalue = pennyinc * pennymultiplier;
        pennylevel++;
        pennycost *= pennycostmultiplier;
        moneyps = pennyvalue + nickelvalue;
        document.getElementById("pennylevel").innerHTML = "Level: " + pennylevel + "   ";
        document.getElementById("pennycost").innerHTML = "Upgrade Cost: " + change(pennycost); 
        document.getElementById("moneyps").innerHTML = change(moneyps) + "/second";
    }
})

nickelupgradebutton.addEventListener("click", function() {
    if(money >= nickelcost){
        money -= nickelcost;
        nickelinc += 0.05;
        nickelvalue = nickelinc * nickelmultiplier;
        nickellevel++;
        nickelcost *= nickelcostmultiplier;
        moneyps = pennyvalue + nickelvalue;
        document.getElementById("nickellevel").innerHTML = "Level: " + nickellevel + "   ";
        document.getElementById("nickelcost").innerHTML = "Upgrade Cost: " + change(nickelcost); 
        document.getElementById("moneyps").innerHTML = change(moneyps) + "/second";
    }
})