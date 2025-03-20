// Function to find the year the Denver Broncos won the Super Bowl
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}