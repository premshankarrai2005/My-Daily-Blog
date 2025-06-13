//  📝 Day 30: Write a javascript program whicm simulates rolling a dice that take two input number of dice and number of sides and array that take the result of the rolling a dice ?

// Solution:-

function rollDice(numDice, numSides) {
    
    if (numDice <= 0 || numSides <= 0) {
        console.log("Number of dice and sides must be greater than 0.");
        return [];
    }
    else{
       const results = [];

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * numSides) + 1;
        results.push(roll);
    }

    console.log(`Rolling ${numDice} dice with ${numSides} sides each:`);
    console.log(`Results: [${results.join(", ")}]`); 
    
    return results;
    }
    

    
}

rollDice(4, 5);


