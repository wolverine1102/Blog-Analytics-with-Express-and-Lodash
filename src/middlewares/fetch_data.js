const asyncHandler = require('express-async-handler');
const _ = require('lodash');

const data = async function() {
    const blogData = []; 

    const options = {
        method: 'GET',
        headers: {
        'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6'
        }
    };  

    const response = await fetch('https://intent-kit-16.hasura.app/api/rest/blogs', options);
    if(response.ok) {
        const data = await response.json();
        data.blogs.forEach(item => blogData.push(item));
    }
    else {
        console.error(response.status + ' : ' + response.statusText);
    }

    return blogData;
}

const memoizedData = _.memoize(data);
_.memoize.Cache = WeakMap;

const fetchData = asyncHandler(
    async (req, res, next) => {
        req.blogData = await memoizedData();
        if (req.blogData.length == 0) {
            req.errorMessage = 'Unable to fetch data. Something went wrong';
        }
        next();
    }
);

module.exports.fetchData = fetchData;



