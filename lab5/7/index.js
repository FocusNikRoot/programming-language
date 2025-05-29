function wait(time) {
    return new Promise(resolve => setTimeout(resolve, time * 100));
}

async function processTask(candidate, taskNum, prepTime, defenseTime, needRest) {
    const name = candidate[0];
    console.log(`${name} started the ${taskNum} task.`);
    await wait(prepTime);
    console.log(`${name} moved on to the defense of the ${taskNum} task.`);
    await wait(defenseTime);
    console.log(`${name} completed the ${taskNum} task.`);
    if (needRest) {
        console.log(`${name} is resting.`);
        await wait(5);
    }
}

async function interviews(candidates) {
    const firstTasks = candidates.map(async candidate => {
        await processTask(candidate, 1, candidate[1], candidate[2], true);
    });
    await Promise.all(firstTasks);

    const secondTasks = candidates.map(async candidate => {
        await processTask(candidate, 2, candidate[3], candidate[4], false);
    });
    await Promise.all(secondTasks);
}

interviews([
    ['Ivan', 5, 2, 7, 2],
    ['John', 3, 4, 5, 1],
    ['Sophia', 4, 2, 5, 1]
]);