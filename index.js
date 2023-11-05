const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

// get user info
app.get('/api/get-user', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    // get user info from github
    axios.get('https://api.github.com/user', {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: token
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

//get users 
app.get('/api/get-users', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    // get users from github
    axios.get('https://api.github.com/users', {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: token
        }
    })
        .then(response => {
            // console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            // console.log(error);
            res.send(error);
        });
    }
);

// get specific user info
app.get('/api/get-user-info', (req, res) => {
    const token = req.headers.authorization;
    const user = req.query.user;
    console.log(token);
    // get user info from github
    axios.get(`https://api.github.com/users/${user}`, {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: token
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

// get user followers
app.get('/api/get-followers', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    // get followers from github
    axios.get('https://api.github.com/user/followers', {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: token
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);


// get user projects
app.get('/api/get-projects', (req, res) => {
    const token = req.headers.authorization;
    console.log(token);
    // get projects from github
    axios.get('https://api.github.com/user/repos', {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: token
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

app.get('/api/get-issues', (req, res) => {
    const token = req.headers.authorization;
    const project = req.query.project;
    console.log(token);
    // get projects from github
    axios.get(`https://api.github.com/repos/${project}/issues`, {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: token
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

app.get('/api/get-issues-comments', (req, res) => {
    const token = req.headers.authorization;
    const project = req.query.project;
    const issue = req.query.issue;
    console.log(token);
    // get projects from github
    axios.get(`https://api.github.com/repos/${project}/issues/${issue}/comments`, {
        headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: token
        }
    })
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
            res.send(error);
        });
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
