// Game States
// "WIN" - player robot has defeated all enemy robots
//   * fight all enemy robots
//   * defeat each enemy robot
// "LOSE" - player robots health is zero or less

var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
    var enemyHealth = 50;
    var enemyAttack = 12;


var fight = function(enemyNames) {

    

    //repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player chooses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {

        //Subtract the value of 'playerAttack' from the value of enemyHealth and use that result to update the value in the 'enemyHealth' variable
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
        );

        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //check enemys health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died!");
            break;
        }
        else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        //check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }

        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }

    else {
        window.alert("You need to pick a valid option. Try again!");
    }   
            
    if (enemyHealth > 0) {
    };
    //if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to skip this fight?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert (playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
    }
    }
};


if (playerHealth > 0) {
    // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    for (var i = 0; i < enemyNames.length; i++) {

        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    }
  }

  else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }