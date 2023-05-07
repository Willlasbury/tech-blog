const router = require("express").Router();
const {Post, User} = require('../../models')

// send homepage as initial action
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({include: [User]})
    const allPosts = postData.map(post=>post.get({plain:true, include:[User]}))

    console.log("allPosts:", allPosts)



    console.log("allPosts:", allPosts)
    res.render("homepage", {
      allPosts: allPosts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});

// control what happens when user clicks on login 
router.get("/login",(req,res)=>{
  // prevent user from accessing login page if they are already logged in
  if(req.session.logged_in){
      return res.redirect("/profile")
  }
  // direct to login page and send session logged in status
  res.render("login",{
      logged_in:req.session.logged_in
  })
})


module.exports = router