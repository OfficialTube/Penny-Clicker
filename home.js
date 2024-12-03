var money = 0.00;
var achievementcounter = 0;
var moneyt = 0.00;
var upgradest = 0;
var timeElapsed = 0;
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
var click1 = false; // level 10
var click2 = false; // level 25
var click3 = false; // level 50
var click4 = false; // level 100
var click5 = false; // level 250
var click6 = false; // level 500
var click7 = false; // level 1,000
var clicka = 0;
var clicka1 = false; // 100 clicks
var clickt = 0;
var clickt1 = false; // $1.00 from clicks

var moneyps = pennyvalue + nickelvalue;

var pennyinc = 0.00;
var pennymultiplier = 1;
var pennyvalue = pennyinc * pennymultiplier;
var pennylevel = 0;
var pennycost = 0.50;
var pennycostmultiplier = 1.25;
var penny = false;
var penny1 = false;
var penny2 = false;
var pennyt = 0;
var pennyt1 = false;

var nickelinc = 0.00;
var nickelmultiplier = 1;
var nickelvalue = nickelinc * nickelmultiplier;
var nickellevel = 0;
var nickelcost = 2.50;
var nickelcostmultiplier = 1.25;
var nickel = false;
var nickel1 = false;
var nickel2 = false;
var nickelt = 0;
var nickelt1 = false;

var total1 = false;
var total2 = false;
var total3 = false;
var total4 = false;

const achievementsList = [
    {id:1, type:"clicks", name:"Clicked 1 Time", required:1, achieved:false},
    {id:2, type:"clicks", name:"Clicked 10 Times", required:10, achieved:false},
    {id:3, type:"clicks", name:"Clicked 25 Times", required:25, achieved:false},
    {id:4, type:"clicks", name:"Clicked 50 Times", required:50, achieved:false},
    {id:5, type:"clicks", name:"Clicked 100 Times", required:100, achieved:false},
    {id:6, type:"clicks", name:"Clicked 250 Times", required:250, achieved:false},
    {id:7, type:"clicks", name:"Clicked 500 Times", required:500, achieved:false},
    {id:8, type:"clicks", name:"Clicked 1,000 Times", required:1000, achieved:false},
    {id:9, type:"clicks", name:"Clicked 2,500 Times", required:2500, achieved:false},
    {id:10, type:"clicks", name:"Clicked 5,000 Times", required:5000, achieved:false},
    {id:11, type:"clicks", name:"Clicked 10,000 Times", required:10000, achieved:false},

    {id:12, type:"clickv", name:"Earn $1.00 from Clicks", required:1, achieved:false},
    {id:13, type:"clickv", name:"Earn $2.50 from Clicks", required:2.5, achieved:false},
    {id:14, type:"clickv", name:"Earn $5.00 from Clicks", required:5, achieved:false},
    {id:15, type:"clickv", name:"Earn $10.00 from Clicks", required:10, achieved:false},
    {id:16, type:"clickv", name:"Earn $25.00 from Clicks", required:25, achieved:false},
    {id:17, type:"clickv", name:"Earn $50.00 from Clicks", required:50, achieved:false},
    {id:18, type:"clickv", name:"Earn $100.00 from Clicks", required:100, achieved:false},
    {id:19, type:"clickv", name:"Earn $250.00 from Clicks", required:250, achieved:false},
    {id:20, type:"clickv", name:"Earn $500.00 from Clicks", required:500, achieved:false},
    {id:21, type:"clickv", name:"Earn $1.000a from Clicks", required:1000, achieved:false},
    {id:22, type:"clickv", name:"Earn $2.500a from Clicks", required:2500, achieved:false},
    {id:23, type:"clickv", name:"Earn $5.000a from Clicks", required:5000, achieved:false},

    {id:24, type:"clickl", name:"Upgrade Clicks to Level 1", required:1, achieved:false},
    {id:25, type:"clickl", name:"Upgrade Clicks to Level 10", required:10, achieved:false},
    {id:26, type:"clickl", name:"Upgrade Clicks to Level 25", required:25, achieved:false},
    {id:27, type:"clickl", name:"Upgrade Clicks to Level 50", required:50, achieved:false},

    {id:28, type:"upgrades", name:"Upgrade 1 Time", required:1, achieved:false},
    {id:29, type:"upgrades", name:"Upgrade 5 Times", required:5, achieved:false},
    {id:30, type:"upgrades", name:"Upgrade 10 Times", required:10, achieved:false},
    {id:31, type:"upgrades", name:"Upgrade Everything", required:11, achieved:false},

    {id:32, type:"time", name:"Played for 1 Second", required:1, achieved:false},
    {id:33, type:"time", name:"Played for 1 Minute", required:60, achieved:false},
    {id:34, type:"time", name:"Played for 5 Minutes", required:300, achieved:false},
    {id:35, type:"time", name:"Played for 10 Minutes", required:600, achieved:false},
    {id:36, type:"time", name:"Played for 30 Minutes", required:1800, achieved:false},
    {id:37, type:"time", name:"Played for 1 Hour", required:3600, achieved:false},

    {id:38, type:"pennyv", name:"Earn $1.00 from Pennies", required:1, achieved:false},
    {id:39, type:"pennyv", name:"Earn $2.50 from Pennies", required:2.5, achieved:false},
    {id:40, type:"pennyv", name:"Earn $5.00 from Pennies", required:5, achieved:false},
    {id:41, type:"pennyv", name:"Earn $10.00 from Pennies", required:10, achieved:false},
    {id:42, type:"pennyv", name:"Earn $25.00 from Pennies", required:25, achieved:false},
    {id:43, type:"pennyv", name:"Earn $50.00 from Pennies", required:50, achieved:false},
    {id:44, type:"pennyv", name:"Earn $100.00 from Pennies", required:100, achieved:false},
    {id:45, type:"pennyv", name:"Earn $250.00 from Pennies", required:250, achieved:false},
    {id:46, type:"pennyv", name:"Earn $500.00 from Pennies", required:500, achieved:false},
    {id:47, type:"pennyv", name:"Earn $1.000a from Pennies", required:1000, achieved:false},
    {id:48, type:"pennyv", name:"Earn $2.500a from Pennies", required:2500, achieved:false},

    {id:49, type:"pennyl", name:"Upgrade Pennies to Level 1", required:1, achieved:false},
    {id:50, type:"pennyl", name:"Upgrade Pennies to Level 10", required:10, achieved:false},
    {id:51, type:"pennyl", name:"Upgrade Pennies to Level 25", required:25, achieved:false},

    {id:52, type:"nickelv", name:"Earn $5.00 from Nickels", required:5, achieved:false},
    {id:53, type:"nickelv", name:"Earn $10.00 from Nickels", required:10, achieved:false},
    {id:54, type:"nickelv", name:"Earn $25.00 from Nickels", required:25, achieved:false},
    {id:55, type:"nickelv", name:"Earn $50.00 from Nickels", required:50, achieved:false},
    {id:56, type:"nickelv", name:"Earn $100.00 from Nickels", required:100, achieved:false},
    {id:57, type:"nickelv", name:"Earn $250.00 from Nickels", required:250, achieved:false},
    {id:58, type:"nickelv", name:"Earn $500.00 from Nickels", required:500, achieved:false},
    {id:59, type:"nickelv", name:"Earn $1.000a from Nickels", required:1000, achieved:false},
    {id:60, type:"nickelv", name:"Earn $2.500a from Nickels", required:2500, achieved:false},
    {id:61, type:"nickelv", name:"Earn $5.000a from Nickels", required:5000, achieved:false},

    {id:62, type:"nickell", name:"Upgrade Nickels to Level 1", required:1, achieved:false},
    {id:63, type:"nickell", name:"Upgrade Nickels to Level 10", required:10, achieved:false},
    {id:64, type:"nickell", name:"Upgrade Nickels to Level 25", required:25, achieved:false},

    {id:65, type:"money", name:"Have a Net Worth of 1.0¢", required:0.01, achieved:false},
    {id:66, type:"money", name:"Have a Net Worth of 10.0¢", required:0.1, achieved:false},
    {id:67, type:"money", name:"Have a Net Worth of 25.0¢", required:0.25, achieved:false},
    {id:68, type:"money", name:"Have a Net Worth of 50.0¢", required:0.5, achieved:false},
    {id:69, type:"money", name:"Have a Net Worth of $1.00", required:1, achieved:false},
    {id:70, type:"money", name:"Have a Net Worth of $2.50", required:2.5, achieved:false},
    {id:71, type:"money", name:"Have a Net Worth of $5.00", required:5, achieved:false},
    {id:72, type:"money", name:"Have a Net Worth of $10.00", required:10, achieved:false},
    {id:73, type:"money", name:"Have a Net Worth of $25.00", required:25, achieved:false},
    {id:74, type:"money", name:"Have a Net Worth of $50.00", required:50, achieved:false},
    {id:75, type:"money", name:"Have a Net Worth of $100.00", required:100, achieved:false},
    {id:76, type:"money", name:"Have a Net Worth of $250.00", required:250, achieved:false},
    {id:77, type:"money", name:"Have a Net Worth of $500.00", required:500, achieved:false},
    {id:78, type:"money", name:"Have a Net Worth of $1.000a", required:1000, achieved:false},
    {id:79, type:"money", name:"Have a Net Worth of $2.500a", required:2500, achieved:false},
    {id:80, type:"money", name:"Have a Net Worth of $5.000a", required:5000, achieved:false},
    {id:81, type:"money", name:"Have a Net Worth of $10.00a", required:10000, achieved:false},

    {id:82, type:"moneyt", name:"Earn a total of 1.0¢", required:0.01, achieved:false},
    {id:83, type:"moneyt", name:"Earn a total of 10.0¢", required:0.1, achieved:false},
    {id:84, type:"moneyt", name:"Earn a total of 25.0¢", required:0.25, achieved:false},
    {id:85, type:"moneyt", name:"Earn a total of 50.0¢", required:0.5, achieved:false},
    {id:86, type:"moneyt", name:"Earn a total of $1.00", required:1, achieved:false},
    {id:87, type:"moneyt", name:"Earn a total of $2.50", required:2.5, achieved:false},
    {id:88, type:"moneyt", name:"Earn a total of $5.00", required:5, achieved:false},
    {id:89, type:"moneyt", name:"Earn a total of $10.00", required:10, achieved:false},
    {id:90, type:"moneyt", name:"Earn a total of $25.00", required:25, achieved:false},
    {id:91, type:"moneyt", name:"Earn a total of $50.00", required:50, achieved:false},
    {id:92, type:"moneyt", name:"Earn a total of $100.00", required:100, achieved:false},
    {id:93, type:"moneyt", name:"Earn a total of $250.00", required:250, achieved:false},
    {id:94, type:"moneyt", name:"Earn a total of $500.00", required:500, achieved:false},
    {id:95, type:"moneyt", name:"Earn a total of $1.000a", required:1000, achieved:false},
    {id:96, type:"moneyt", name:"Earn a total of $2.500a", required:2500, achieved:false},
    {id:97, type:"moneyt", name:"Earn a total of $5.000a", required:5000, achieved:false},
    {id:98, type:"moneyt", name:"Earn a total of $10.00a", required:10000, achieved:false},
    {id:99, type:"moneyt", name:"Earn a total of $25.00a", required:25000, achieved:false},
    {id:100, type:"moneyt", name:"Earn a total of $50.00a", required:50000, achieved:false},

    {id:101, type:"pc", name:"Make 1.0¢ per Click", required:0.01, achieved:false},
    {id:102, type:"pc", name:"Make 2.5¢ per Click", required:0.025, achieved:false},
    {id:103, type:"pc", name:"Make 5.0¢ per Click", required:0.05, achieved:false},
    {id:104, type:"pc", name:"Make 10.0¢ per Click", required:0.1, achieved:false},
    {id:105, type:"pc", name:"Make 25.0¢ per Click", required:0.25, achieved:false},
    {id:106, type:"pc", name:"Make 50.0¢ per Click", required:0.5, achieved:false},
    {id:107, type:"pc", name:"Make $1.00 per Click", required:1, achieved:false},

    {id:108, type:"ps", name:"Make 1.0¢ per Second", required:0.01, achieved:false},
    {id:109, type:"ps", name:"Make 5.0¢ per Second", required:0.05, achieved:false},
    {id:110, type:"ps", name:"Make 10.0¢ per Second", required:0.1, achieved:false},
    {id:111, type:"ps", name:"Make 25.0¢ per Second", required:0.25, achieved:false},
    {id:112, type:"ps", name:"Make 50.0¢ per Second", required:0.5, achieved:false},
    {id:113, type:"ps", name:"Make $1.00 per Second", required:1, achieved:false},
    {id:114, type:"ps", name:"Make $2.50 per Second", required:2.5, achieved:false},
    {id:115, type:"ps", name:"Make $5.00 per Second", required:5, achieved:false},
    {id:116, type:"ps", name:"Make $10.00 per Second", required:10, achieved:false},

    {id:117, type:"pennyps", name:"Make 1.0¢ per Second from Pennies", required:0.01, achieved:false},
    {id:118, type:"pennyps", name:"Make 5.0¢ per Second from Pennies", required:0.05, achieved:false},
    {id:119, type:"pennyps", name:"Make 10.0¢ per Second from Pennies", required:0.1, achieved:false},
    {id:120, type:"pennyps", name:"Make 25.0¢ per Second from Pennies", required:0.25, achieved:false},
    {id:121, type:"pennyps", name:"Make 50.0¢ per Second from Pennies", required:0.5, achieved:false},
    {id:122, type:"pennyps", name:"Make $1.00 per Second from Pennies", required:1, achieved:false},
    {id:123, type:"pennyps", name:"Make $2.50 per Second from Pennies", required:2.5, achieved:false},

    {id:124, type:"nickelps", name:"Make 5.0¢ per Second from Nickels", required:0.05, achieved:false},
    {id:125, type:"nickelps", name:"Make 25.0¢ per Second from Nickels", required:0.25, achieved:false},
    {id:126, type:"nickelps", name:"Make 50.0¢ per Second from Nickels", required:0.5, achieved:false},
    {id:127, type:"nickelps", name:"Make $1.00 per Second from Nickels", required:1, achieved:false},
    {id:128, type:"nickelps", name:"Make $2.50 per Second from Nickels", required:2.5, achieved:false},
    {id:129, type:"nickelps", name:"Make $5.00 per Second from Nickels", required:5, achieved:false},
    {id:130, type:"nickelps", name:"Make $10.00 per Second from Nickels", required:10, achieved:false},
];


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
    document.getElementById("achievement-progress").innerHTML = 
        "Achievements: " + achievementcounter + "/" + achievementsList.length + 
        " (" + ((achievementcounter / achievementsList.length) * 100).toFixed(2) + "%)";
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
const pennyt1button = document.getElementById("pennyt1");
const nickelupgradebutton = document.getElementById("nickelupgrade");
const nickelt1button = document.getElementById("nickelt1");

const total1button = document.getElementById("total1");
const total2button = document.getElementById("total2");
const total3button = document.getElementById("total3");
const total4button = document.getElementById("total4");

function change(input) {
    if (input > 99995000) {
        return "$" + (input/1000000).toFixed(1) + "b";
    }
    else if (input > 9999500) {
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
    if(timestart == true) {
        seconds++; 
        timeElapsed++;
    }
    if (seconds >= 60) {
        seconds -= 60;
        minutes++;
    }
    if (minutes >= 60) {
        minutes -= 60;
        hours++;
    }
    if (hours >= 24){
        hours-=24;
        days++;
    }
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
        stringdays = days + " days, ";
    }
    document.getElementById("timeelapsed").innerHTML = "Time Elapsed: " + stringdays + stringhours + stringminutes + stringseconds;
}, 1000);

setInterval(function() {
    money += (pennyvalue + nickelvalue)/10;
    moneyt += (pennyvalue + nickelvalue)/10;
    document.getElementById("money").innerHTML = change(money);
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
        if (pennyt >= 1 && pennyt1 == false) {
            pennyt1button.style.display = "inline-block";
        }
    }
    
    if(nickel == true) {
        nickelt += (nickelvalue/10);
        document.getElementById("nickelt").innerHTML = "Nickels: " + change(nickelt) + " (" + change(nickelvalue) + "/second)";
        if (nickelt >= 5 && nickelt1 == false) {
            nickelt1button.style.display = "inline-block";
        }

    }
    
    if(click == true){
        if(money < clickupgradecost) {
            document.getElementById("clickupgrade").style.backgroundColor = "gray";
        }
        else {
            document.getElementById("clickupgrade").style.backgroundColor = "white";
        }
    }
    if(penny == true){
        if(money < pennycost) {
            document.getElementById("pennyupgrade").style.backgroundColor = "gray";
        }
        else {
            document.getElementById("pennyupgrade").style.backgroundColor = "white";
        }
    }
    if(nickel == true){
        if(money < nickelcost) {
            document.getElementById("nickelupgrade").style.backgroundColor = "gray";
        }
        else {
            document.getElementById("nickelupgrade").style.backgroundColor = "white";
        }
    }
    if(click1 == false){
        if(money < 1) {
            document.getElementById("click1").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("click1").style.filter = "grayscale(0%)";
        }
    }
    if(click2 == false){
        if(money < 30) {
            document.getElementById("click2").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("click2").style.filter = "grayscale(0%)";
        }
    }
    if(click3 == false){
        if(money < 7500) {
            document.getElementById("click3").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("click3").style.filter = "grayscale(0%)";
        }
    }
    if(clicka1 == true){
        if(money < 0.5) {
            document.getElementById("clicka1").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("clicka1").style.filter = "grayscale(0%)";
        }
    }
    if(clickt1 == true){
        if(money < 1) {
            document.getElementById("clickt1").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("clickt1").style.filter = "grayscale(0%)";
        }
    }
    if(penny1 == false){
        if(money < 5) {
            document.getElementById("penny1").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("penny1").style.filter = "grayscale(0%)";
        }
    }
    if(penny2 == false){
        if(money < 150) {
            document.getElementById("penny2").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("penny2").style.filter = "grayscale(0%)";
        }
    }
    if(pennyt1 == true){
        if(money < 1) {
            document.getElementById("pennyt1").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("pennyt1").style.filter = "grayscale(0%)";
        }
    }
    if(nickel1 == false){
        if(money < 25) {
            document.getElementById("nickel1").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("nickel1").style.filter = "grayscale(0%)";
        }
    }
    if(nickel2 == false){
        if(money < 750) {
            document.getElementById("nickel2").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("nickel2").style.filter = "grayscale(0%)";
        }
    }
    if(nickelt1 == true){
        if(money < 5) {
            document.getElementById("nickelt1").style.filter = "grayscale(100%)";
        }
        else {
            document.getElementById("nickelt1").style.filter = "grayscale(0%)";
        }
    }
    /*if(moneyt >= 10 && total1 == false) {
        total1button.style.display = "inline-block";
    }
    if(moneyt >= 25 && total2 == false) {
        total2button.style.display = "inline-block";
    }
    if(moneyt >= 50 && total3 == false) {
        total3button.style.display = "inline-block";
    }
    if(moneyt >= 100 && total4 == false) {
        total4button.style.display = "inline-block";
    }*/
}, 100);

function upgradesTotal() {
    upgradest++;
    document.getElementById("upgradest").innerHTML = "Total Upgrades: " + upgradest + "/11 (" + ((upgradest/11)*100).toFixed(1) + "%)";
}

const clicka1button = document.getElementById("clicka1");
const clickt1button = document.getElementById("clickt1");
const button = document.getElementById("button");
button.addEventListener("click", function() {
    timestart = true;
    money += incvalue;
    moneyt += incvalue;
    clickt += incvalue;
    clicka += 1;
    document.getElementById("click").innerHTML = "Clicks: " + clicka.toLocaleString();
    document.getElementById("clickt").innerHTML = "Clicks: " + change(clickt);
    if(clicka >= 100 && clicka1 == false) {
        clicka1button.style.display = "inline-block";
        clicka1 = true;
    }
    if(clickt >= 1 && clickt1 == false) {
        clickt1button.style.display = "inline-block";
        clickt1 = true;
    }
})

const click1button = document.getElementById("click1");
const click2button = document.getElementById("click2");
const click3button = document.getElementById("click3");
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
    if(clickupgradelevel >= 10 && click1 == false) {
        click1button.style.display = "inline-block";
    }
    if(clickupgradelevel >= 25 && click2 == false) {
        click2button.style.display = "inline-block";
    }
    if(clickupgradelevel >= 50 && click3 == false) {
        click3button.style.display = "inline-block";
    }
})

const penny1button = document.getElementById("penny1");
const penny2button = document.getElementById("penny2");
pennyupgradebutton.addEventListener("click", function() {
    if(money >= pennycost){
        money-= pennycost;
        pennyinc+=0.01;
        pennyvalue = pennyinc * pennymultiplier;
        pennylevel++;
        pennycost *= pennycostmultiplier;
        moneyvalue = pennyvalue + nickelvalue;
        document.getElementById("pennylevel").innerHTML = "Level: " + pennylevel + "   ";
        document.getElementById("pennycost").innerHTML = "Upgrade Cost: " + change(pennycost); 
        document.getElementById("moneyps").innerHTML = change(moneyvalue) + "/second";
    }
    if(pennylevel >= 10 && penny1 == false) {
        penny1button.style.display = "inline-block";
    }
    if(pennylevel >= 25 && penny2 == false) {
        penny2button.style.display = "inline-block";
    }
})

const nickel1button = document.getElementById("nickel1");
const nickel2button = document.getElementById("nickel2");
nickelupgradebutton.addEventListener("click", function() {
    if(money >= nickelcost){
        money -= nickelcost;
        nickelinc += 0.05;
        nickelvalue = nickelinc * nickelmultiplier;
        nickellevel++;
        nickelcost *= nickelcostmultiplier;
        moneyvalue = pennyvalue + nickelvalue;
        document.getElementById("nickellevel").innerHTML = "Level: " + nickellevel + "   ";
        document.getElementById("nickelcost").innerHTML = "Upgrade Cost: " + change(nickelcost); 
        document.getElementById("moneyps").innerHTML = change(moneyvalue) + "/second";
    }
    if(nickellevel >= 10 && nickel1 == false) {
        nickel1button.style.display = "inline-block";
    }
    if(nickellevel >= 25 && nickel2 == false) {
        nickel2button.style.display = "inline-block";
    }
})

click1button.addEventListener("click", function() {
    if(money >= 1.00) {
        money -= 1.00;
        click1 = true;
        incmultiplier *= 2;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        click1button.style.display = "none"
        upgradesTotal();
    }
})

click2button.addEventListener("click", function() {
    if(money >= 30.00) {
        money -= 30.00;
        click2 = true;
        incmultiplier *= 2;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        click2button.style.display = "none"
        upgradesTotal();
    }
})

click3button.addEventListener("click", function() {
    if(money >= 7500) {
        money -= 7500;
        click3 = true;
        incmultiplier *= 2;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        click3button.style.display = "none"
        upgradesTotal();
    }
})

clicka1button.addEventListener("click", function() {
    if(money >= 0.50) {
        money -= 0.50;
        clicka1 = true;
        incmultiplier *= 2;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        clicka1button.style.display = "none"
        upgradesTotal();
    }
})

clickt1button.addEventListener("click", function() {
    if(money >= 1.00) {
        money -= 1.00;
        clickt1 = true;
        incmultiplier *= 1.5;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        clickt1button.style.display = "none"
        upgradesTotal();
    }
})

penny1button.addEventListener("click", function() {
    if(money >= 5.00) {
        money -= 5.00;
        penny1 = true;
        pennymultiplier *= 2;
        pennyvalue = pennyinc * pennymultiplier;
        moneyvalue = pennyvalue + nickelvalue;
        document.getElementById("moneyps").innerHTML = change(moneyvalue) + "/second";
        penny1button.style.display = "none";
        upgradesTotal();
    }
})

penny2button.addEventListener("click", function() {
    if(money >= 150.00) {
        money -= 150.00;
        penny2 = true;
        pennymultiplier *= 2;
        pennyvalue = pennyinc * pennymultiplier;
        moneyvalue = pennyvalue + nickelvalue;
        document.getElementById("moneyps").innerHTML = change(moneyvalue) + "/second";
        penny2button.style.display = "none";
        upgradesTotal();
    }
})

pennyt1button.addEventListener("click", function() {
    if(money >= 1.00) {
        money -= 1.00;
        pennyt1 = true;
        pennymultiplier *= 1.5;
        pennyvalue = pennyinc * pennymultiplier;
        moneyvalue = pennyvalue + nickelvalue;
        document.getElementById("moneyps").innerHTML = change(moneyvalue) + "/second";
        pennyt1button.style.display = "none";
        upgradesTotal();
    }
})

nickel1button.addEventListener("click", function() {
    if(money >= 25.00) {
        money -= 25.00;
        nickel1 = true;
        nickelmultiplier *= 2;
        nickelvalue = nickelinc * nickelmultiplier;
        moneyvalue = pennyvalue + nickelvalue;
        document.getElementById("moneyps").innerHTML = change(moneyvalue) + "/second";
        nickel1button.style.display = "none";
        upgradesTotal();
    }
})

nickel2button.addEventListener("click", function() {
    if(money >= 750.00) {
        money -= 750.00;
        nickel2 = true;
        nickelmultiplier *= 2;
        nickelvalue = nickelinc * nickelmultiplier;
        moneyvalue = pennyvalue + nickelvalue;
        document.getElementById("moneyps").innerHTML = change(moneyvalue) + "/second";
        nickel2button.style.display = "none";
        upgradesTotal();
    }
})

nickelt1button.addEventListener("click", function() {
    if(money >= 10.00) {
        money -= 10.00;
        nickelt1 = true;
        nickelmultiplier *= 1.5;
        nickelvalue = nickelinc * nickelmultiplier;
        moneyvalue = pennyvalue + nickelvalue;
        document.getElementById("moneyps").innerHTML = change(moneyvalue) + "/second";
        nickelt1button.style.display = "none";
        upgradesTotal();
    }
})

total1button.addEventListener("click", function() {
    if(money >= 2.50) {
        money -= 2.50;
        total1 = true;
        incmultiplier *= 1.5;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        total1button.style.display = "none"
    }
})

total2button.addEventListener("click", function() {
    if(money >= 6.25) {
        money -= 6.25;
        total2 = true;
        incmultiplier *= 1.5;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        total2button.style.display = "none"
    }
})

total3button.addEventListener("click", function() {
    if(money >= 12.5) {
        money -= 12.5;
        total3 = true;
        incmultiplier *= 1.5;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        total3button.style.display = "none"
    }
})

total4button.addEventListener("click", function() {
    if(money >= 25) {
        money -= 25;
        total4 = true;
        incmultiplier *= 1.5;
        incvalue = inc * incmultiplier;
        document.getElementById("moneypc").innerHTML = change(incvalue) + "/click";
        total4button.style.display = "none"
    }
})