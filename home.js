var money = 0.00;
var moneyt = 0.00;
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

const clicka1button = document.getElementById("clicka1");
const clickt1button = document.getElementById("clickt1");
const button = document.getElementById("button");
button.addEventListener("click", function() {
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