/* eslint-disable no-console */
const lineup = [{
  id: 1, name: 'Chris Sale', position: 'P', teamId: 12, gameId: 123, salary: 9500
}, {
  id: 2, name: 'Yadier Molina', position: 'C', teamId: 22, gameId: 115, salary: 2500
}, {
  id: 3, name: 'Luke Voit', position: '1B', teamId: 20, gameId: 115, salary: 2800
}, {
  id: 4, name: 'Dee Gordon', position: '2B', teamId: 18, gameId: 101, salary: 3200
}, {
  id: 5, name: 'Manny Machado', position: '3B', teamId: 14, gameId: 134, salary: 3100
}, {
  id: 6, name: 'Troy Tulowitzki', position: 'SS', teamId: 27, gameId: 126, salary: 3300
}, {
  id: 7, name: 'Andrew McCutchen', position: 'OF', teamId: 11, gameId: 131, salary: 3800
}, {
  id: 8, name: 'Bryce Harper', position: 'OF', teamId: 15, gameId: 119, salary: 3800
}, {
  id: 9, name: 'Mookie Betts', position: 'OF', teamId: 12, gameId: 123, salary: 3600
}]

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

const sortTeam = (a, b) => {
  return a.gameId - b.gameId
}


const findMaxBlock = (arr) => {
  if (arr.length < 2) return arr.length

  let counter = 1
  let maxCounter = 1

  for (i = 1; i < arr.length; i++) {
    if (arr['teamId'][i] === arr['teamId'][i-1]) { ++counter
      if (counter > maxCounter) maxCounter = counter
    } else (counter = 1)
  }

  return maxCounter
}

const validateLineup = (lineup) => {
  if (lineup.length === 9 &&
    lineup.reduce(sumTotal, 0) <= 45000 &&
    lineup.filter(outfield).length === 3 &&
    Math.max(...Object.values(lineup.reduce(countedGames, {}))) <= 3) return true

  return false
}

console.log(validateLineup(lineup))
// console.log(Math.max(...Object.values(countedGames)) <= 3)

module.exports = validateLineup
