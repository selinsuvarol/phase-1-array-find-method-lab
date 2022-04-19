// code your solution here
const arrayOfObjects = [
    {year:"2015", result: "W"},
    {year:"2014", result: "n/a"},
    {year:"2013", result: "T"},
]

function superbowlWin(array) {
    const result = array.find((arr) => arr.result === "W");
    if (result) {
        return result.year;
    }else{
        return undefined;
    };
};