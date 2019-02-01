const router = require("express").Router();
const bookRoutes = require("./books");
const axios = require("axios")
router.route("/google")
    .get((req, res) => {

        axios.get("https://www.googleapis.com/books/v1/volumes", { params: req.query })
            .then(({ data: { items } }) => {
                res.json(items)
            })
            .catch(err => res.status(422).json(err));
    });
// Book routes
router.use("/books", bookRoutes);


module.exports = router;