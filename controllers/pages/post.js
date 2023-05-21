const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const dayjs = require("dayjs");

// send homepage as initial action
router.get("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const postData = await Post.findOne({
      where: { id: postId },
      include: [User],
    });
    const post = postData.get({ plain: true });

    const commentsData = await Comment.findAll({
      where: { PostId: postId },
    });

    const comments = await commentsData.map((comment) => {
      return comment.get({ plain: true });
    });

    post.createdAt = dayjs(post.createdAt).format("MMM DD YYYY");
    console.log("req.session:", req.session)
    res.render("post", {
      post: post,
      comments: comments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});

module.exports = router;
