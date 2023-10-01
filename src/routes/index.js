const { Router } = require('express');
const { fetchData } = require('../middlewares/fetch_data');
const { blogSearch } = require('../controllers/blog_search');
const { blogStats } = require('../controllers/blog_stats');

const router = Router();

router.get('/api/blog-search/', fetchData, blogSearch);
router.get('/api/blog-stats', fetchData, blogStats);

module.exports.router = router;