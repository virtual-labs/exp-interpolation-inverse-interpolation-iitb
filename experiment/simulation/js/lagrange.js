function gety(x_val, yr) {
    let y = [];
    for (let i = 0; i < x_val.length; i++) {
        y[i] = (Math.pow(x_val[i], 4)) + yr;
    }
    return (y);
}
function lagrange(xi, n, x_val) {
    let sum = 1;
    for (let j = 0; j < 4; j++) {
        if (n != j) {
            // console.log(xi);
            // console.log(n);
            // console.log(j);
            // console.log(x_val[n]);
            // console.log(x_val[j]);
            sum = sum * ((xi - x_val[j]) / (x_val[n] - x_val[j]));
        }
        else { }
    }
    return (sum);
}
//# sourceMappingURL=lagrange.js.map