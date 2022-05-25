// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun('bathe my dog');

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}
mondayWork('work from home');

function wrapAdjective(str = '*') {
    return function(name = 'special') {
        return `You are ${str}${name}${str}!`;
    }
}
