const router = require('express')();
const taskController = require('./taskController');


router.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, "..public/index.html"))
});

router.use('/notes', taskController);

module.exports = router