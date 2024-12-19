const totalLoadSteps = 65; 
let currentLoadStep = 0;

function updateLoadingBar() {
    currentLoadStep++;
    const percentage = Math.round((currentLoadStep / totalLoadSteps) * 100); 
    document.getElementById('loadingBar').style.width = `${percentage}%`;
    document.getElementById('loadingPercentage').innerText = `${Math.round(percentage)}%`;
}

function saveBooleanToLocalStorage(key, value){
    const valueStr = value.toString();
    localStorage.setItem(key, valueStr);
}

function getBooleanFromLocalStorage(key) {
    const storedValue = localStorage.getItem(key);
    if(storedValue === "true") {
        return true;
    }
    else if(storedValue === "false") {
        return false;
    }
    return false;
}

function saveArrayToLocalStorage(key, array) {
    const arrayString = JSON.stringify(array);
    localStorage.setItem(key, arrayString);
}

function getArrayFromLocalStorage(key){
    const storedValue = localStorage.getItem(key);
    if(storedValue){
        return JSON.parse(storedValue);
    } else {
        return [];
    }
}

function saveGame() {
    localStorage.setItem('version', version);
    /*
    localStorage.setItem('', );
    */
    localStorage.setItem('money', money);
    localStorage.setItem('achievementcounter', achievementcounter);
    localStorage.setItem('moneyt', moneyt);
    localStorage.setItem('upgradest', upgradest);
    saveBooleanToLocalStorage('timestart', timestart);
    localStorage.setItem('start', start);
    saveArrayToLocalStorage('achievementsList', achievementsList);
    saveArrayToLocalStorage('upgradesList', upgradesList);
    localStorage.setItem('incmultiplier', incmultiplier);
    localStorage.setItem('inc', inc);
    localStorage.setItem('clickupgradelevel', clickupgradelevel);
    localStorage.setItem('clickupgradecost', clickupgradecost);
    localStorage.setItem('clickupgradecostmultiplier', clickupgradecostmultiplier);
    localStorage.setItem('clicka', clicka);
    localStorage.setItem('clickt', clickt);
    localStorage.setItem('incvalue', incvalue);
    saveBooleanToLocalStorage('click', click);
    localStorage.setItem('pennyinc', pennyinc);
    localStorage.setItem('pennymultiplier', pennymultiplier);
    localStorage.setItem('pennyvalue', pennyvalue);
    localStorage.setItem('pennylevel', pennylevel);
    localStorage.setItem('pennycost', pennycost);
    localStorage.setItem('pennycostmultiplier', pennycostmultiplier);
    saveBooleanToLocalStorage('penny', penny);
    localStorage.setItem('pennyt', pennyt);

    /*
    localStorage.setItem('inc', inc);
    localStorage.setItem('multiplier', multiplier);
    localStorage.setItem('value', value);
    localStorage.setItem('level', level);
    localStorage.setItem('cost', cost);
    localStorage.setItem('costmultiplier', costmultiplier);
    saveBooleanToLocalStorage('', );
    localStorage.setItem('t', t);
    */
    localStorage.setItem('nickelinc', nickelinc);
    localStorage.setItem('nickelmultiplier', nickelmultiplier);
    localStorage.setItem('nickelvalue', nickelvalue);
    localStorage.setItem('nickellevel', nickellevel);
    localStorage.setItem('nickelcost', nickelcost);
    localStorage.setItem('nickelcostmultiplier', nickelcostmultiplier);
    saveBooleanToLocalStorage('nickel', nickel);
    localStorage.setItem('nickelt', nickelt);

    localStorage.setItem('dimeinc', dimeinc);
    localStorage.setItem('dimemultiplier', dimemultiplier);
    localStorage.setItem('dimevalue', dimevalue);
    localStorage.setItem('dimelevel', dimelevel);
    localStorage.setItem('dimecost', dimecost);
    localStorage.setItem('dimecostmultiplier', dimecostmultiplier);
    saveBooleanToLocalStorage('dime', dime);
    localStorage.setItem('dimet', dimet);

    localStorage.setItem('quarterinc', quarterinc);
    localStorage.setItem('quartermultiplier', quartermultiplier);
    localStorage.setItem('quartervalue', quartervalue);
    localStorage.setItem('quarterlevel', quarterlevel);
    localStorage.setItem('quartercost', quartercost);
    localStorage.setItem('quartercostmultiplier', quartercostmultiplier);
    saveBooleanToLocalStorage('quarter', quarter);
    localStorage.setItem('quartert', quartert);

    localStorage.setItem('halfdollarinc', halfdollarinc);
    localStorage.setItem('halfdollarmultiplier', halfdollarmultiplier);
    localStorage.setItem('halfdollarvalue', halfdollarvalue);
    localStorage.setItem('halfdollarlevel', halfdollarlevel);
    localStorage.setItem('halfdollarcost', halfdollarcost);
    localStorage.setItem('halfdollarcostmultiplier', halfdollarcostmultiplier);
    saveBooleanToLocalStorage('halfdollar', halfdollar);
    localStorage.setItem('halfdollart', halfdollart);

    localStorage.setItem('lastUpdate', lastUpdate);
    localStorage.setItem('lastUpdateA', lastUpdateA);
    localStorage.setItem('lastClick', lastClick);
    localStorage.setItem('moneyps', moneyps);
}

function loadGame() {
    document.getElementById('loadingScreen').style.display = 'flex';
    const savedVersion = localStorage.getItem('version');
    console.log(`Load Saved Version: ${savedVersion}`);
    if(savedVersion && VALID_VERSIONS.includes(savedVersion)){
        updateLoadingBar(); // 1
        version = document.getElementById("version").innerHTML;
        updateLoadingBar(); // 2
        if(localStorage.getItem('version')){
            version = localStorage.getItem('version');
        }
        updateLoadingBar(); // 3
        /* 
        if(localStorage.getItem('')){
            = parseFloat(localStorage.getItem(''));
        }
        */
        if(localStorage.getItem('money')){
            money = parseFloat(localStorage.getItem('money'));
        }
        updateLoadingBar(); // 4
        if(localStorage.getItem('achievementcounter')){
            achievementcounter = parseInt(localStorage.getItem('achievementcounter'));
        }
        updateLoadingBar(); // 5
        if(localStorage.getItem('moneyt')){
            moneyt = parseFloat(localStorage.getItem('moneyt'));
        }
        updateLoadingBar(); // 6
        if(localStorage.getItem('upgradest')){
            upgradest = parseInt(localStorage.getItem('upgradest'));
        }
        updateLoadingBar(); // 7
        if(localStorage.getItem('timestart') !== null){
            timestart = getBooleanFromLocalStorage('timestart');
        }
        updateLoadingBar(); // 8
        if(localStorage.getItem('start')){
            start = parseInt(localStorage.getItem('start'));
        }
        updateLoadingBar(); // 9
        if(localStorage.getItem('achievementsList')){
            achievementsList = getArrayFromLocalStorage('achievementsList');
        }
        updateLoadingBar(); // 10
        if(localStorage.getItem('upgradesList')){
            upgradesList = getArrayFromLocalStorage('upgradesList');
        }
        updateLoadingBar(); // 11
        if(localStorage.getItem('incmultiplier')){
            incmultiplier = parseFloat(localStorage.getItem('incmultiplier'));
        }
        updateLoadingBar(); // 12
        if(localStorage.getItem('inc')){
            inc = parseFloat(localStorage.getItem('inc'));
        }
        updateLoadingBar(); // 13
        if(localStorage.getItem('clickupgradelevel')){
            clickupgradelevel = parseInt(localStorage.getItem('clickupgradelevel'));
        }
        updateLoadingBar(); // 14
        if(localStorage.getItem('clickupgradecost')){
            clickupgradecost = parseFloat(localStorage.getItem('clickupgradecost'));
        }
        updateLoadingBar(); // 15
        if(localStorage.getItem('clickupgradecostmultiplier')){
            clickupgradecostmultiplier = parseFloat(localStorage.getItem('clickupgradecostmultiplier'));
        }
        updateLoadingBar(); // 16
        if(localStorage.getItem('clicka')){
            clicka = parseInt(localStorage.getItem('clicka'));
        }
        updateLoadingBar(); // 17
        if(localStorage.getItem('clickt')){
            clickt = parseFloat(localStorage.getItem('clickt'));
        }
        updateLoadingBar(); // 18
        if(localStorage.getItem('incvalue')){
            incvalue = parseFloat(localStorage.getItem('incvalue'));
        }
        updateLoadingBar(); // 19
        if(localStorage.getItem('click')){
            click = getBooleanFromLocalStorage('click');
        }
        updateLoadingBar(); // 20
        if(localStorage.getItem('pennyinc')){
            pennyinc = parseFloat(localStorage.getItem('pennyinc'));
        }
        updateLoadingBar(); // 21
        if(localStorage.getItem('pennymultiplier')){
            pennymultiplier = parseFloat(localStorage.getItem('pennymultiplier'));
        }
        updateLoadingBar(); // 22
        if(localStorage.getItem('pennyvalue')){
            pennyvalue = parseFloat(localStorage.getItem('pennyvalue'));
        }
        updateLoadingBar(); // 23
        if(localStorage.getItem('pennylevel')){
            pennylevel = parseInt(localStorage.getItem('pennylevel'));
        }
        updateLoadingBar(); // 24
        if(localStorage.getItem('pennycost')){
            pennycost = parseFloat(localStorage.getItem('pennycost'));
        }
        updateLoadingBar(); // 25
        if(localStorage.getItem('pennycostmultiplier')){
            pennycostmultiplier = parseFloat(localStorage.getItem('pennycostmultiplier'));
        }
        updateLoadingBar(); // 26
        if(localStorage.getItem('penny')){
            penny = getBooleanFromLocalStorage('penny');
        }
        updateLoadingBar(); // 27
        if(localStorage.getItem('pennyt')){
            pennyt = parseFloat(localStorage.getItem('pennyt'));
        }
        updateLoadingBar(); // 28
        /*
        if(localStorage.getItem('inc')){
            inc = parseFloat(localStorage.getItem('inc'));
        }
        updateLoadingBar(); // 
        if(localStorage.getItem('multiplier')){
            multiplier = parseFloat(localStorage.getItem('multiplier'));
        }
        updateLoadingBar(); // 
        if(localStorage.getItem('value')){
            value = parseFloat(localStorage.getItem('value'));
        }
        updateLoadingBar(); // 
        if(localStorage.getItem('level')){
            level = parseInt(localStorage.getItem('level'));
        }
        updateLoadingBar(); // 
        if(localStorage.getItem('cost')){
            cost = parseFloat(localStorage.getItem('cost'));
        }
        updateLoadingBar(); // 
        if(localStorage.getItem('costmultiplier')){
            costmultiplier = parseFloat(localStorage.getItem('costmultiplier'));
        }
        updateLoadingBar(); // 
        if(localStorage.getItem('')){
             = getBooleanFromLocalStorage('');
        }
        updateLoadingBar(); // 
        if(localStorage.getItem('t')){
            t = parseFloat(localStorage.getItem('t'));
        }
        updateLoadingBar(); // 
        */
        if(localStorage.getItem('nickelinc')){
            nickelinc = parseFloat(localStorage.getItem('nickelinc'));
        }
        updateLoadingBar(); // 29
        if(localStorage.getItem('nickelmultiplier')){
            nickelmultiplier = parseFloat(localStorage.getItem('nickelmultiplier'));
        }
        updateLoadingBar(); // 30
        if(localStorage.getItem('nickelvalue')){
            nickelvalue = parseFloat(localStorage.getItem('nickelvalue'));
        }
        updateLoadingBar(); // 31
        if(localStorage.getItem('nickellevel')){
            nickellevel = parseInt(localStorage.getItem('nickellevel'));
        }
        updateLoadingBar(); // 32
        if(localStorage.getItem('nickelcost')){
            nickelcost = parseFloat(localStorage.getItem('nickelcost'));
        }
        updateLoadingBar(); // 33
        if(localStorage.getItem('nickelcostmultiplier')){
            nickelcostmultiplier = parseFloat(localStorage.getItem('nickelcostmultiplier'));
        }
        updateLoadingBar(); // 34
        if(localStorage.getItem('nickel')){
            nickel = getBooleanFromLocalStorage('nickel');
        }
        updateLoadingBar(); // 35
        if(localStorage.getItem('nickelt')){
            nickelt = parseFloat(localStorage.getItem('nickelt'));
        }
        updateLoadingBar(); // 36

        if(localStorage.getItem('dimeinc')){
            dimeinc = parseFloat(localStorage.getItem('dimeinc'));
        }
        updateLoadingBar(); // 37
        if(localStorage.getItem('dimemultiplier')){
            dimemultiplier = parseFloat(localStorage.getItem('dimemultiplier'));
        }
        updateLoadingBar(); // 38
        if(localStorage.getItem('dimevalue')){
            dimevalue = parseFloat(localStorage.getItem('dimevalue'));
        }
        updateLoadingBar(); // 39
        if(localStorage.getItem('dimelevel')){
            dimelevel = parseInt(localStorage.getItem('dimelevel'));
        }
        updateLoadingBar(); // 40
        if(localStorage.getItem('dimecost')){
            dimecost = parseFloat(localStorage.getItem('dimecost'));
        }
        updateLoadingBar(); // 41
        if(localStorage.getItem('dimecostmultiplier')){
            dimecostmultiplier = parseFloat(localStorage.getItem('dimecostmultiplier'));
        }
        updateLoadingBar(); // 42
        if(localStorage.getItem('dime')){
            dime = getBooleanFromLocalStorage('dime');
        }
        updateLoadingBar(); // 43
        if(localStorage.getItem('dimet')){
            dimet = parseFloat(localStorage.getItem('dimet'));
        }
        updateLoadingBar(); // 44

        if(localStorage.getItem('quarterinc')){
            quarterinc = parseFloat(localStorage.getItem('quarterinc'));
        }
        updateLoadingBar(); // 45
        if(localStorage.getItem('quartermultiplier')){
            quartermultiplier = parseFloat(localStorage.getItem('quartermultiplier'));
        }
        updateLoadingBar(); // 46
        if(localStorage.getItem('quartervalue')){
            quartervalue = parseFloat(localStorage.getItem('quartervalue'));
        }
        updateLoadingBar(); // 47
        if(localStorage.getItem('quarterlevel')){
            quarterlevel = parseInt(localStorage.getItem('quarterlevel'));
        }
        updateLoadingBar(); // 48
        if(localStorage.getItem('quartercost')){
            quartercost = parseFloat(localStorage.getItem('quartercost'));
        }
        updateLoadingBar(); // 49
        if(localStorage.getItem('quartercostmultiplier')){
            quartercostmultiplier = parseFloat(localStorage.getItem('quartercostmultiplier'));
        }
        updateLoadingBar(); // 50
        if(localStorage.getItem('quarter')){
            quarter = getBooleanFromLocalStorage('quarter');
        }
        updateLoadingBar(); // 51
        if(localStorage.getItem('quartert')){
            quartert = parseFloat(localStorage.getItem('quartert'));
        }
        updateLoadingBar(); // 52

        if(localStorage.getItem('halfdollarinc')){
            halfdollarinc = parseFloat(localStorage.getItem('halfdollarinc'));
        }
        updateLoadingBar(); // 53
        if(localStorage.getItem('halfdollarmultiplier')){
            halfdollarmultiplier = parseFloat(localStorage.getItem('halfdollarmultiplier'));
        }
        updateLoadingBar(); // 54
        if(localStorage.getItem('halfdollarvalue')){
            halfdollarvalue = parseFloat(localStorage.getItem('halfdollarvalue'));
        }
        updateLoadingBar(); // 55
        if(localStorage.getItem('halfdollarlevel')){
            halfdollarlevel = parseInt(localStorage.getItem('halfdollarlevel'));
        }
        updateLoadingBar(); // 56
        if(localStorage.getItem('halfdollarcost')){
            halfdollarcost = parseFloat(localStorage.getItem('halfdollarcost'));
        }
        updateLoadingBar(); // 57
        if(localStorage.getItem('halfdollarcostmultiplier')){
            halfdollarcostmultiplier = parseFloat(localStorage.getItem('halfdollarcostmultiplier'));
        }
        updateLoadingBar(); // 58
        if(localStorage.getItem('halfdollar')){
            halfdollar = getBooleanFromLocalStorage('halfdollar');
        }
        updateLoadingBar(); // 59
        if(localStorage.getItem('halfdollart')){
            halfdollart = parseFloat(localStorage.getItem('halfdollart'));
        }
        updateLoadingBar(); // 60
        
        if(localStorage.getItem('lastUpdate')){
            lastUpdate = parseInt(localStorage.getItem('lastUpdate'));
        }
        updateLoadingBar(); // 61
        if(localStorage.getItem('lastUpdateA')){
            lastUpdateA = parseInt(localStorage.getItem('lastUpdateA'));
        }
        updateLoadingBar(); // 62
        if(localStorage.getItem('lastClick')){
            lastClick = parseInt(localStorage.getItem('lastClick'));
        }
        updateLoadingBar(); // 63
        if(localStorage.getItem('moneyps')){
            moneyps = parseFloat(localStorage.getItem('moneyps'));
        }
        updateLoadingBar(); // 64


        loadHTML();
        updateLoadingBar(); // 65
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = "none";
        }, 1000);
    } else if(savedVersion === null) {
        console.log("No saved version found. Setting as default version.");
        version = document.getElementById('version').innerHTML;
    }
    else {
        alert(`Your saved game version is outdated and incompatible with the latest version.\n\nYour version: ${savedVersion} \nLatest version: ${document.getElementById('version').innerHTML}\nCompatible versions: ${displayValidVersion()}\n\nYour game will reset and you will lose all of your progress.`);
        resetGame();
    }
    console.log(`Version: ${version}`);
}

function resetGame() {
    localStorage.clear();
    sessionStorage.clear();

    version = document.getElementById('version').innerHTML;
    money = 0;
    achievementcounter = 0;
    moneyt = 0;
    upgradest = 0;
    timestart = false;
    achievementsList = [
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
    upgradesList = [
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
    incmultiplier = 1;
    inc = 0.01;
    clickupgradelevel = 0;
    clickupgradecost = 0.10;
    clickupgradecostmultiplier = 1.25;
    clicka = 0;
    clickt = 0;
    incvalue = inc * incmultiplier;
    click = false;
    pennyinc = 0.00;
    pennymultiplier = 1;
    pennyvalue = pennyinc * pennymultiplier;
    pennylevel = 0;
    pennycost = 0.50;
    pennycostmultiplier = 1.25;
    penny = false;
    pennyt = 0;

    nickelinc = 0.00;
    nickelmultiplier = 1;
    nickelvalue = nickelinc * nickelmultiplier;
    nickellevel = 0;
    nickelcost = 2.50;
    nickelcostmultiplier = 1.25;
    nickel = false;
    nickelt = 0;

    dimeinc = 0.00;
    dimemultiplier = 1;
    dimevalue = dimeinc * dimemultiplier;
    dimelevel = 0;
    dimecost = 5.00;
    dimecostmultiplier = 1.25;
    dime = false;
    dimet = 0;

    quarterinc = 0.00;
    quartermultiplier = 1;
    quartervalue = quarterinc * quartermultiplier;
    quarterlevel = 0;
    quartercost = 12.50;
    quartercostmultiplier = 1.25;
    quarter = false;
    quartert = 0;

    halfdollarinc = 0.00;
    halfdollarmultiplier = 1;
    halfdollarvalue = halfdollarinc * halfdollarmultiplier;
    halfdollarlevel = 0;
    halfdollarcost = 25.00;
    halfdollarcostmultiplier = 1.25;
    halfdollar = false;
    halfdollart = 0;

    lastUpdate = Date.now();
    lastUpdateA = Date.now();
    lastClick = Date.now();
    moneyps = pennyvalue + nickelvalue + dimevalue + quartervalue + halfdollarvalue;

    location.reload();
}

const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', function() {
    if(confirm("Are you sure you want to reset the game?")) {
        resetGame();
    }
});

function displayValidVersion(){
    if(VALID_VERSIONS.length == 1) {
        return VALID_VERSIONS[0];
    } else {
        return `${VALID_VERSIONS[0]} - ${VALID_VERSIONS.at(-1)}`;
    }
}

function loadHTML(){
    document.getElementById('clickupgradelevel').innerHTML = clickupgradelevel;
    document.getElementById('clickupgradecost').innerHTML = change(clickupgradecost);
    document.getElementById('pennylevel').innerHTML = pennylevel;
    document.getElementById('pennycost').innerHTML = change(pennycost);
    document.getElementById('nickellevel').innerHTML = nickellevel;
    document.getElementById('nickelcost').innerHTML = change(nickelcost);
    document.getElementById('dimelevel').innerHTML = dimelevel;
    document.getElementById('dimecost').innerHTML = change(dimecost);
    document.getElementById('quarterlevel').innerHTML = quarterlevel;
    document.getElementById('quartercost').innerHTML = change(quartercost);
    document.getElementById('halfdollarlevel').innerHTML = halfdollarlevel;
    document.getElementById('halfdollarcost').innerHTML = change(halfdollarcost);
    document.getElementById('moneyps').innerHTML = `${change(moneyps)}/second`;
}