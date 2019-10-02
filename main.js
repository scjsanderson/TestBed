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
