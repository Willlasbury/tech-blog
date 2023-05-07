const router = require("express").Router();
const { Post, User } = require("../../models");

// CREATE new post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User],
    });
    if (posts.length === 0) {
      return res.status(404).json({ msg: "no posts in database!" });
    }
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err });
  }
});

router.get("/:id", (req, res) => {
  Post.findByPk(req.params.id)
    .then((post) => {
      if (!post) {
        return res
          .status(404)
          .json({ msg: "no post with that id in database!" });
      }
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.post("/", async (req, res) => {
  try {
    if(!req.session.user_id){
        return res.json("Please log in first")
    }
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        UserId: req.session.user_id
    };

    const dbResponse = await Post.create(newPost);

    if (dbResponse){

        return res.json(dbResponse)
    } else {
        return res.status(500).json({ msg: "some error"});
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});

router.put("/:id", (req, res) => {
  Post.update(
    {
      name: req.body.name,
      due_date: req.body.due_date,
      description: req.body.description,
      status: req.body.status,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((editpost) => {
      if (!editpost[0]) {
        return res
          .status(404)
          .json({ msg: "no post with this id in database!" });
      }
      res.json(editpost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

router.delete("/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((delpost) => {
      if (!delpost) {
        return res
          .status(404)
          .json({ msg: "no post with this id in database!" });
      }
      res.json(delpost);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error occurred", err });
    });
});

module.exports = router;
