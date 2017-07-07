chars = [
    carlos {
        "name": "Carlos",
        "mood": "pleasant",
        "inventory": [],
        "lefthand": [],
        "righthand": [],
        "friends": ["Dee"]    
    },

    dee {
        "name": "Dee",
        "mood": "pleasant",
        "inventory": [],
        "lefthand": [],
        "righthand": [],
        "friends": [],
        deeDog{
            "name": "Stein",
            "mood": "ecstatic",
            "inventory": [],
            "lefthand": [],
            "righthand": [],
            "friends": ["Milo", "Dee", "Carlos"],
        }
    },

    milo {
        "name": "Dee",
        "mood": "pleasant",
        "inventory": ["wrench"],
        "lefthand": ["gas can"],
        "righthand": [],
        "friends": ["Carlos", "Stein"],
    }
]
    

function makeFriend(char, friend) {
  chars.friends.push(friend);
  return myDog.name + " just befriended " + friend + "!";
}

        
//Organize better later        
function panic (char) {
    
    if (char.lefthand.length != undefined && char.righthand != undefined) {
        return "They just dropped " + char.lefthand.shift(); + " and " + char.righthandhand.shift(); + ".";
    }
    
    char.lefthand.shift();
    char.righthandhand.shift();
    return char + " is freaking out!";
    
}