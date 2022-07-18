const router = require("express").Router();
const { Post, Comment, User } = require("../models/index");

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log(posts)
      res.render("all-posts", { layout: "dashboard", posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.get("/new", (req, res) => {
  try{
    res.render("new-post");
  }
  catch(err) {
        res.status(500).json(err);
      };
    })
module.exports = router;
