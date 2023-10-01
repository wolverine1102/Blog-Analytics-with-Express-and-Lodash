const _ = require('lodash');

function search(query, blogData) {
    let resultBlogsList = [];
    _.forEach(blogData, function(element) {
        if (_.includes(element.title.toLowerCase(), query.queryString.toLowerCase())) {
            resultBlogsList.push(element);
        } 
    })
    if(_.size(resultBlogsList) == 0) {
        return ({
            message : `We could not find any matches for '${query.queryString}'`
        });
    }
    else {
        return(resultBlogsList);
    }
}

const memoizedSearch = _.memoize(search);
_.memoize.Cache = WeakMap;

const blogSearch = function(req, res) {
    if(req.errorMessage) {
        res.status(404).json({
            message: req.errorMessage,
        });
    }
    else {
        try {
            blogData = req.blogData;
            if(req.query.query === "") {
                res.status(400).json({
                    message : "Please provide valid keyword"
                })
            }
            else {
                res.status(200).json(memoizedSearch({queryString: req.query.query}, blogData));
            }
        }
        catch(error) {
            res.status(500).json({
                message : error.message
            });
        }
    }
}

module.exports.blogSearch = blogSearch;