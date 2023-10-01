const _ = require('lodash');

function stats(blogData) {
    let count = _.size(blogData);

    let privacyCount = 0;
    _.forEach(blogData, function(element) {
        if (_.includes(element.title.toLowerCase(), 'privacy')) {
            privacyCount += 1;
        }
    })

    let longest = 0;
    let longestTitleBlog = {};
    _.forEach(blogData, function(element) {
        if (_.size(element.title) > longest) {
            longestTitleBlog = element;
            longest = _.size(element.title); 
        }
    })

    let titles = [];
    _.forEach(blogData, function(element) {
        titles.push(element.title);
    })

    return ({
        "Total number of blogs" : count,
        "The title of the longest blog" : longestTitleBlog,
        "Number of blogs with 'privacy' in the title" : privacyCount,
        "An array of unique blog titles" : _.uniq(titles)
    })
}

const memoizedStats = _.memoize(stats)
_.memoize.Cache = WeakMap;

const blogStats = function(req, res) {
    if(req.errorMessage) {
        res.status(404).json({
            message: req.errorMessage,
        })
    }
    else {
        try {
            blogData = req.blogData;
            res.status(200).json(memoizedStats(blogData));
        }
        catch(error) {
            res.status(500).json(error);
        }
    }
}

module.exports.blogStats = blogStats;