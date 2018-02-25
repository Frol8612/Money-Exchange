// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let arr = [50, 25, 10, 5, 1],
        num = currency,
        newObj = {};

    if (num >= 10000) {
        return newObj = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (num <= 0) {
        newObj = {};
    } else {
        console.log(arr);
        if (num >= 50) {
            if (num % arr[0] == 0) {
                var h = num / arr[0];
            } else {
                h = Math.floor(num / arr[0]);
                num = num % arr[0];
            }
            console.log(num);
        }
        
        if (num < 50) {
            if (num % arr[1] == 0) {
                var q = num / arr[1];
            } else {
                q = Math.floor(num / arr[1]);
                num = num % arr[1];
            }
            console.log(num);
        }

        if (num < 25) {
            if (num % arr[2] == 0) {
                var d = num / arr[2];
            } else {
                d = Math.floor(num / arr[2]);
                num = num % arr[2];
            }
            console.log(num);
        }

       if (num < 10) {
        if (num % arr[3] == 0) {
            var n = num / arr[3];
        } else {
            n = Math.floor(num / arr[3]);
            num = num % arr[3];
        }
        console.log(num);
       }

        if (num < 5) {
            var p = 0;
            while (num > 0) {
                num = num - arr[4];
                p++;
            }
            
        }
        newObj.H = h;
        newObj.Q = q;
        newObj.D = d;
        newObj.N = n;
        newObj.P = p;
        if (h == 0 || h == undefined) {
            delete newObj.H;
        }
        if (q == 0 || q == undefined) {
            delete newObj.Q;
        }
        if (d == 0 || d == undefined) {
            delete newObj.D;
        }
        if (n == 0 || n == undefined) {
            delete newObj.N;
        }
        if (p == 0 || p == undefined) {
            delete newObj.P;
        }

    }
    return newObj;
}
