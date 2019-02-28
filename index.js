let options = {};

const es_type = document.getElementsByName('urlType');
const e_repos = document.getElementById('repos');
const e_authors = document.getElementById('authors');
const e_startDate = document.getElementById('start_date');
const e_endDate = document.getElementById('end_date');
const e_output = document.getElementById('output');
const e_generator = document.getElementById('generator');

const lsKey_REPOS = 'pr-repos';
const lsKey_AUTHORS = 'pr-authors';

const URL_MAX_LENGTH = 120;

function clickHandler() {
    let type = '';
    for (let i = 0; i < es_type.length; i++) {
        if (es_type[i].checked) {
            type = es_type[i].value;
            break;
        }
    }
    lsSave(lsKey_REPOS, e_repos.value);
    lsSave(lsKey_AUTHORS, e_authors.value);
    let repos = e_repos.value.split(/\r?\n\r?/);
    let authors = e_authors.value.split(/\r?\n\r?/);
    let generated = generate(type, repos, authors, e_startDate.value, e_endDate.value);
    let link = document.createElement('a');
    link.href = generated;
    link.target = '_blank';
    link.innerText = generated.length > URL_MAX_LENGTH ? generated.substr(0, URL_MAX_LENGTH - 3) + '...' : generated;
    while (e_output.firstChild) {
        e_output.removeChild(e_output.firstChild);
    }
    e_output.appendChild(link);
}

function generate(type, repos, authors, start, end) {
    return window.build((type ? type : 'search'), {
        repos: repos,
        authors: authors,
        start_date: start,
        end_date: end
    });
}

function dateToString(date) {
    let year = date.getUTCFullYear();
    // remember to offset month by 1 to account for 0-indexing
    let month = date.getUTCMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    let day = date.getUTCDate();
    if (day < 10) {
        day = '0' + day;
    }
    return `${year}-${month}-${day}`;
}

function dateMinusDays(date, days) {
    let millis = days * 24 * 60 * 60 * 1000;
    return new Date(date.getTime() - millis);
}

function setupPage() {
    if (lsGet(lsKey_REPOS)) {
        e_repos.value = lsGet(lsKey_REPOS);
    }
    if (lsGet(lsKey_AUTHORS)) {
        e_authors.value = lsGet(lsKey_AUTHORS);
    }
    let today = new Date();
    let lastWeek = dateMinusDays(today, 7);
    e_startDate.value = dateToString(lastWeek);
    e_endDate.value = dateToString(today);
    e_generator.addEventListener('click', clickHandler, {
        passive: true
    })
}

if (typeof require == 'undefined') {
    setupPage();
}
