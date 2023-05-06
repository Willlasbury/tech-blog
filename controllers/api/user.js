const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const data = await User.findAll();
    if(data.length===0){
        return res.status(404).json({msg:"no Users in database!"})
    }
    return res.json(data)
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});

// create a new user when signing up
router.post("/", async (req, res) => {
  try {

    const newUser = {
      email: req.body.email,
      password: req.body.password
    }

    const dbResponse = await User.create(newUser)

    req.session.save(() => {
      req.session.user_id = dbResponse.dataValues.id;
      req.session.logged_in = true;
    });
    return res.status(200).json(dbResponse);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "some error", err: err });
  }
});






module.exports = router
