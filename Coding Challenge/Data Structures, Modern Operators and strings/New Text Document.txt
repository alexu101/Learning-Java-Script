// Coding Challange no 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

/*
//task 1
const events1 = [...new Set(gameEvents.values())];
//sau
let events = new Set();
for (let [, event] of gameEvents) {
  events.add(event);
}
console.log(events);

//task 2
console.log(gameEvents);
for (let [key, event] of gameEvents) {
  if (key == 64 && event == '� Yellow card')
    gameEvents.delete(key);
}
console.log(gameEvents);

//task 3 fara sens

//task 4
for (let [key, event] of gameEvents) {
  let half;
  if (key < 45)
    half = 'FIRST';
  else half = 'SECOND';

  console.log(`[${half} HALF]${key}: ${event}`);
}