class Request {
    // host
    // headers

    constructor(host) {
        this.host = host;
        this.headers = [];
    }

    addHeader(name, value) {
        this.headers[name] = value;
    }

    get(url) {
        return this.createRequest(url, 'GET');
    }

    post(url, data = []) {
        return this.createRequest(url, 'POST', data)
    }

    createRequest(url, type, data = []) {
        let request = new XMLHttpRequest();
        request.open(type, this.host + url, true);

        // Headers
        for (let index in this.headers) {
            if (!this.headers.hasOwnProperty(index)) {
                continue;
            }
            let val = this.headers[index];
            request.setRequestHeader(index, val);
        }

        let promise1 = new Promise((resolve, reject) => {
            request.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    // Success!

                    // @TODO check json header

                    let data = JSON.parse(this.response);
                    resolve(data);
                } else {
                    // We reached our target server, but it returned an error
                    reject();
                }
            };
            request.onerror = function () {
                reject();
            };
        });
        request.send(data);
        return promise1;
    }
}

export default Request