PR Counter
---

Helper for counting merged PRs.

[Hosted statically by github.io](https://alexandergeegds.github.io/pr-counter/)

## Options

### API / Search

Specify `api` if you intend to send a request manually to the GitHub API.
(Remember that the request will require [authentication](https://developer.github.com/v3/#authentication) for private repos.)

Specify `search` to generate a URL that will open on the GitHub website.
The link utilises GitHub search parameters to build a URL that jumps to a helpful starting point.

### Repos

Specify a list of repos to include.
Repos should be in the usual GitHub `owner/name` format.
Each repo should be on a new line.

For example:

```
alexandergeegds/pr-counter
```

### Authors

Specify a list of authors to include.
Each author name should be on a new line.

For example:

```
alexandergeegds
```

### Dates

Specify a start / end date to look for.
Leave blank to leave unspecified.
Default values suggest the last week or so as a starting point.
If typing manually, specify a date in the format `YYYY-MM-DD`.
(If using the browser form, this usually gets overridden to `DD/MM/YYYY`, but this will depend on your locale.)
