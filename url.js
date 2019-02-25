const search = {
    prefix: 'https://github.com/search',
    suffix: '&type=Issues',
    replacements: {
        ':': '%3A'
    }
};
const api = {
    prefix: 'https://api.github.com/search/issues'
};

window.build = build;
function build(endpointString, options) {
    if (endpointString == 'search') {
        return buildUrl(search, options);
    } else if (endpointString == 'api') {
        return buildUrl(api, options);
    }
}

function buildUrl(endpoint, options) {
    let query = buildQuery(options);
    if (endpoint.replacements) {
        for (let replacement in endpoint.replacements) {
            while (query.indexOf(replacement) > 0) {
                query = query.replace(replacement, endpoint.replacements[replacement]);
            }
        }
    }
    return (endpoint.prefix ? endpoint.prefix : '') + '?q=' + query + (endpoint.suffix ? endpoint.suffix : '');
}

function buildQuery(options) {
    query = [];
    if (options.repo && !options.repos) {
        options.repos = options.repo;
    }
    if (options.repos) {
        if (typeof options.repos == 'string') {
            options.repos = [options.repos]
        }
        for (let repo of options.repos) {
            if (repo) {
                query.push('repo:' + repo);
            }
        }
    }
    query.push('is:pr');
    query.push('is:merged');
    if (options.start_date || options.end_date) {
        dateQuery = ((options.start_date ? options.start_date : '*') + '..'
                + (options.end_date ? options.end_date : '*'));
        query.push('merged:' + dateQuery);
    }
    if (options.author && !options.authors) {
        options.authors = options.author;
    }
    if (options.authors) {
        if (typeof options.authors == 'string') {
            options.authors = [options.authors]
        }
        for (let author of options.authors) {
            if (author) {
                query.push('author:' + author);
            }
        }
    }
    return query.join('+');
}
