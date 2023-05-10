const router = require("express").Router();
const { comment, User, Comment } = require("../../models");

router.get("/test", (req,res)=>{
  res.json(
    'test'
  )
})


// CREATE new comment
router.post("/", async (req, res) => {
  try {
    // if (comments.length === 0) {
    //   return res.status(404).json({ msg: "no comments in database!" });
    // }

    const newComment = {
        text: req.body.text,
        PostId: req.body.PostId
    }

    const dbResponse = await Comment.create(newComment)


    res.json(dbResponse);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "error occurred", err:err });
  }
});

// router.get("/:id", (req, res) => {
//     Comment.findByPk(req.params.id)
//     .then((comment) => {
//       if (!comment) {
//         return res
//           .status(404)
//           .json({ msg: "no comment with that id in database!" });
//       }
//       res.json(comment);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: "error occurred", err });
//     });
// });

// router.comment("/", async (req, res) => {
//   try {
//     if(!req.session.user_id){
//         return res.json("Please log in first")
//     }
//     const newcomment = {
//         title: req.body.title,
//         content: req.body.content,
//         UserId: req.session.user_id
//     };

//     const dbResponse = await Comment.create(newcomment);

//     if (dbResponse){

//         return res.json(dbResponse)
//     } else {
//         return res.status(500).json({ msg: "some error"});
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ msg: "some error", err: err });
//   }
// });

// router.put("/:id", (req, res) => {
//     Comment.update(
//     {
//       name: req.body.name,
//       due_date: req.body.due_date,
//       description: req.body.description,
//       status: req.body.status,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((editcomment) => {
//       if (!editcomment[0]) {
//         return res
//           .status(404)
//           .json({ msg: "no comment with this id in database!" });
//       }
//       res.json(editcomment);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: "error occurred", err });
//     });
// });

// router.delete("/:id", (req, res) => {
//   Comment.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((delcomment) => {
//       if (!delcomment) {
//         return res
//           .status(404)
//           .json({ msg: "no comment with this id in database!" });
//       }
//       res.json(delcomment);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({ msg: "error occurred", err });
//     });
// });

module.exports = router;
