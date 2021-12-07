const game=
{
team1: 'Bayern Munich',
team2: 'Borrussia Dortmund',
players: [
[
"Neuer",
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',
],
[
'Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho', 
'Gotze',
],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby',
'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds : {
team1: 1.33,
X: 3.25,
team2: 6.5,
},
};




function printGoals( ...scorers){
    const count={}
    for(const ele of scorers){
        count[ele]=count[ele] ? count[ele]+1 :1;
    }
    // for(const key in count){
    //     console.log(`${key} scored ${count[key]}`)
    // }
    game.scored.map((a,index)=>console.log(`goal ${index+1} : scored by`,a))
    console.log('\n')
}

printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich')
printGoals(...game['scored'])

//avg odd function
const avgOdd=()=>{
    let avg=0
    for(const odd in game.odds){
     avg=game.odds[odd]+avg
  
    }
    avg=avg/(Object.keys(game.odds).length)
 
    return (avg)
}
//average odds
console.log('Average  Odds is:',avgOdd())



const getOdds=()=>{
    for(odd in game.odds){
         game[odd]  ? console.log(`Odds of victory of ${game[odd]} `,game.odds[odd]): console.log(`odds of draw ${game.odds[odd]}`)
    }
}
getOdds()


//task 4 create scorers object
function makeScorerObj(...players){
    const scorers={}
    for(const ele of players){
        scorers[ele]=scorers[ele] ? scorers[ele]+1 :1;
   
     }
    return scorers
}
scorers=makeScorerObj(...game['scored'])
console.log('The scorers object',scorers)