function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default genRandomInt;

// This formula is great for Generating Random things
// - Game Development: Randomly generating game elements like enemy positions, loot drops, or random events.
// - Simulations: Creating random data points for simulations or modeling scenarios.
// - Testing: Generating random test data for software testing.
// - Lottery or Raffle Systems: Picking random winners from a list of participants.
// - Random Sampling: Selecting random samples from a dataset.
// - Procedural Generation: Creating random terrains, maps, or levels in games or simulations.
// - Randomized Algorithms: Implementing algorithms that require randomization, such as randomized quicksort.
// - User Experience: Randomly displaying different content or advertisements to users.
// - Security: Generating random tokens or keys for security purposes (though for cryptographic purposes, a more secure random number generator should be used).
