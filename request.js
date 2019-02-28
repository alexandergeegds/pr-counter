function sendGetWithToken(url, token, onSuccess, onFail) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState != 4) { return; }
        if (this.status >= 200 && this.status < 300) {
            onSuccess(this);
        } else {
            onFail(this);
        }
    };
    xhr.setRequestHeader('Accept', 'application/vnd.github.v3+json');
    if (token) {
        xhr.setRequestHeader('Authorization', `token ${token}`);
    }
    xhr.send();
}
