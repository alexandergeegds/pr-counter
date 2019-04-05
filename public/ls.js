function lsTest(){
    var key = '' + Math.random();
    var value = Math.random();
    try {
        localStorage.setItem(key, value);
        localStorage.removeItem(key);
        return true;
    } catch(e) {
        return false;
    }
}

function lsSave(key, value) {
    if (lsTest()) {
        localStorage.setItem(key, value);
    }
}

function lsGet(key) {
    if (lsTest()) {
        return localStorage.getItem(key);
    }
}
