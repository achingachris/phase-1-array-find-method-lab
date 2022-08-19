// code your solution here

// Returns a year the KC Chiefs won the superbowl and undefined if the record has no win objects
let superbowlWin = (superbowlWinRecord) => {
  let superbowlWon = superbowlWinRecord.find((superbowl) => {
    return superbowl.result === 'W'
  })
  if (superbowlWon) {
    return superbowlWon.year
  } else {
    return undefined
  }
}
