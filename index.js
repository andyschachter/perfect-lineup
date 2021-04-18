/* eslint-disable no-console */
const sumTotal = (totalSalary, player) => {
  return totalSalary + player.salary
}

const outfield = (lineup) => {
  return lineup.position === 'OF'
}

const countedGames = (mostGames, player) => {
  if (!mostGames[player.gameId]) {
    mostGames[player.gameId] = 1
  } else {
    mostGames[player.gameId]++
  }

  return mostGames
}

const countedPlayers = (mostPlayers, player) => {
  if (!mostPlayers[player.teamId]) {
    mostPlayers[player.teamId] = 1
  } else {
    mostPlayers[player.teamId]++
  }

  return mostPlayers
}

const validateLineup = (lineup) => {
  if (lineup.length === 9 &&
    lineup.reduce(sumTotal, 0) <= 45000 &&
    lineup.filter(outfield).length === 3 &&
    Math.max(...Object.values(lineup.reduce(countedGames, {}))) <= 3 &&
    Math.max(...Object.values(lineup.reduce(countedPlayers, {}))) <= 2) return true

  return false
}

module.exports = validateLineup
