function result(a, b) {
    let pus = (a + b);
    a = document.getElementById('a');
    b = document.getElementById('b');

}


function plus() {
    if ("a + b") {
        let res = a + b;
    }
    else if ("a - b") {
        let  res = a - b;
    }
}





function result(a) {
    document.getElementById('result').innerHTML += a;
    document.getElementById("result").setAttribute("style",  "margin-left:"  +  950   + "px"  );

}

function result1() {
    let aid;
    let aResult;
    let aLenght;
    aid = document.getElementById("id1").innerHTML;
    aResult = document.getElementById("result").innerHTML;
    if (aResult === "0") {
        document.getElementById("rezult").innerHTML = "1";
    }
    aLenght = aResult.length;
}


