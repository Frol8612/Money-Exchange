// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    const arr = [['H', 50], ['Q', 25], ['D', 10], ['N', 5], ['P', 1]];

    if (currency > 10000) {
        return {
            error:
                "You are rich, my friend! We don't have so much coins for exchange",
        };
    }

    const creatObj = (el, cur) => {
        return {
            count: Math.floor(cur / el),
            cur: cur % el,
        };
    };

    let newObj = {};

    arr.forEach(el => {
        if (currency >= el[1]) {
            let obj = creatObj(el[1], currency, el[0]);
            currency = obj.cur;
            newObj[el[0]] = obj.count;
        }
    });
    return newObj;
};
