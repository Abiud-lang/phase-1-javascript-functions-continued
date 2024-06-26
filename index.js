// code your solution here
function saturdayFun(event = 'roller-skate') {
    return `This Saturday, I want to ${event}!`

  }
  const mondayWork = function(event = 'go to the office') {
    return `This Monday, I will ${event}.`
    
  }
  function wrapAdjective(wrapper) {
    return function(adjective) {
      return `You are ${wrapper}${adjective}${wrapper}!`
    }
  }
  