let p1, p2, znach, res;

function result(a) {
    document.getElementById('result').innerHTML += a;
}
function resultZnak(c) {
    p1 = parseInt(document.getElementById('result').innerHTML);
    document.getElementById('znak').innerHTML = c;
    if ('p1' || p1 === null) {
        document.getElementById('archiv').innerHTML = p1;
        document.getElementById('result').innerHTML = '';
}
}
function resultRavno() {
    p2 = parseInt(document.getElementById('result').innerHTML);
    znach = document.getElementById('znak').innerHTML;
    if (znach === '+') {
        res = p1 + p2;
        }
    if (znach === '-') {
        res = p1 - p2;
        console.log(res);
    }
    if (znach === '*') {
        res = p1 * p2;
        console.log(res);
    }
    if (znach === '/') {
        res = p1 / p2;
        console.log(res);
    }
    document.getElementById('result').innerHTML = res;
}
function clear() {
    document.getElementById('result').innerHTML = '0';
        document.getElementById('archiv').innerHTML = '';
            document.getElementById('znak').innerHTML = '';
}
function mathPowAny(a) {
    p1 = document.getElementById('result').innerHTML;
    res = Math.pow(p1, a);
    document.getElementById('result').innerHTML = res;
}
