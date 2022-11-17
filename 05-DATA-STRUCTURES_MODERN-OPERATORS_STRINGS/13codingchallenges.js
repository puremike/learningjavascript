const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

//arrays of the gameEvents without duplicates
const events = [...new Set(gameEvents.values())];
console.log(events);

//remove the yellow card from minute 64
gameEvents.delete(64);
console.log(gameEvents);

const gameEventTime = 90;

const time = [...gameEvents.keys()].pop();
console.log(
  `Keep in mind that the game happens on average, every ${
    time / gameEvents.size
  }minutes\n`
);

for (const [key, value] of gameEvents) {
  if (key <= 45) console.log(`[FIRST HALF] ${key}: ${value}`);
  else console.log(`[SECOND HALF] ${key}: ${value}`);
}
