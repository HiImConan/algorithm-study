function solution(players, callings) {
    let playerRank = {};
    let dashboard = {};
    for (let i = 0; i < players.length; i++) {
        playerRank[players[i]] = i;
    }
    for (let i = 0; i < players.length; i++) {
        dashboard[i] = players[i]
    }
    for (let called of callings) {
        const calledRank = playerRank[called]
        const passed = dashboard[calledRank - 1]
        dashboard[calledRank - 1] = called;
        dashboard[calledRank] = passed;
        playerRank[called]--;
        playerRank[passed]++;
    }
    let result = []
    for (let idx in dashboard) {
        result.push(dashboard[idx])
    }
    return result
}