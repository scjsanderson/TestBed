/*  PLANNING A PROJECT:
-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

I want to create a zombie text adventure game where the player 
starts with a random scenario. They search for a weapon and fight a zombie.
The player has a 33% chance of getting bitten and losing, or killing the zombie and winning.

-----------------------------------------------
2. What steps do you think are necessary?
-----------------------------------------------

Beginning:
1. Write scenarios
2. Store a list of possible scenarios
3. Alert a random scenario from the list of possible scenarios 

Weapon:
1. Create a list of weapons 
2. Save the list of weapons
3. Alert which weapon the player finds

-----------------------------------------------
3. What syntax or coding patterns might you use?
-----------------------------------------------

Arrays for lists
Need multiple random numbers so a randomNumber function

-----------------------------------------------
Remember: There are many ways to create things with code! The most important part is to write it and get it working.  If you can't get something to work, try making it simpler.  
After, look for ways you might improve your code! 
*/



var Scene=("You are exploring the hills close to your village when you come upon a small cave.", "You have heard of treasures buried in an old keep deep in the forest to the West of town. Yor pack your gear and head off to reap your riches", "You have been tasked with inspecting an abandon house in your village." )


alert("You are exploring the hills close to your village when you come upon a small cave.");
var answer=prompt("Do you enter? Enter or Leave");

alert("You decided to "+answer);
if(answer==="Enter")
  {
    alert("Upon entering the cave you see a goblin starring back at you.");
    var attack=prompt("Do you attack? Yes or No");
    if (attack==="Yes")
      {
        alert("You kill the goblin")
      }
    else if(attack==="No")
      {
        alert("The goblin rushes at you, running his dagger through your chest killing you")
      }
  }

else if(answer==="Leave")
  {
    alert("You turn around and go back home");
  }
