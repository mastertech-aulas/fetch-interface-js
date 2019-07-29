const methods = document.querySelectorAll('.nav-tabs .nav-item a');
const methodViews = document.querySelectorAll('.method-view .view');
const endpoitn = document.querySelector('#endpoint');
const fetchOutput = document.querySelector('#fetch-output');

let selectedMethod = '';

const updateMethodViews = method => {
    for(const view of methodViews) {
        if (view.getAttribute('method') === method) {
            view.classList.toggle('d-none', false);
        }
        else {
            view.classList.toggle('d-none', true);
        }
    }

    fetchOutput.value = '';
};

const toggleMethod = e => {
    e.preventDefault();
    const {target} = e;

    for (const method of methods) {
        if (method !== target) {
            method.classList.toggle('active', false);
        }
    }

    target.classList.toggle('active', true);
    updateMethodViews(target.innerHTML);
    selectedMethod = target.innerHTML;
}

const initialize = () => {
    methods.forEach(method => {
        if (method.classList.contains('active')) {
            selectedMethod = method.innerHTML;
        }

        method.onclick = toggleMethod;
    })
}

initialize();