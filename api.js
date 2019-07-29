const endpointBase = 'http://localhost:8080/';
const fetchButton = document.querySelector('#fetch-button');

const makePayload = method => {
    const fields = document.querySelectorAll(`.view[method="${method}"] input`);
    const payload = fields.length ? {} : null;

    for (const field of fields) {
        payload[field.name] = field.value;
    }

    return payload;
};

const processResponse = data => data.json();

const createRequest = () => {
    const payload = makePayload(selectedMethod);
    let options = {
        method: selectedMethod,
        headers: {}
    };

    if (payload) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(payload);
    }

    if (selectedMethod !== "DELETE") {
        fetch(`${endpointBase}${endpoint.value}`, options)
            .then(processResponse)
            .then(data => {
                fetchOutput.value = data ? JSON.stringify(data, null, 4) : '';
            });
    }
    else {
        fetch(`${endpointBase}${endpoint.value}`, options)
            .then(() => {
                fetchOutput.value = '';
            });
    }

};

const start = () => {
    fetchButton.onclick = createRequest;
}

start();