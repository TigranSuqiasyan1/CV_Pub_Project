const {User} = require("../model/user");
const bcrypt = require("bcrypt");
const len = 10;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


class UserController {
  static async registerUser(req, res) {
    let us = {
      ...req.body
    };
    let user = await User.findOne({
      where: {
        email: us.email,
      },
    });

    if (user) {
      res.send({
        error: "email has already"
      });
    } else {
      if (us.passwordConfirm == us.password) {
        delete req.session.error;
        delete us.passwordConfirm;
        let hash = bcrypt.hashSync(us.password, len);
        await User.create({
          ...us,
          password: hash,
          type: 1,
          active: 1,
          picUrl: req.file.filename,
        });

        res.send({
          status: "ok"
        });

      } else {
        res.send({
          error: "password invalid"
        });
      }
    }
  }

  static async loginUser(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        res.send({
          error: "error 404"
        });
      }
      if (user) {
        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }
          res.send({
            status: "ok"
          })
        });
      } else {
        res.send({
          error: "user not found"
        });
      }
    })(req, res, next);
  }

  static async getUser(req, res) {
    res.send(req.user ? req.user : {
      error: "user not found"
    })
  }

  static async getAllUser(req, res) {
    const users = await User.findAll();
    res.send([...users]);
  }


  static async logout(req, res) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.send({
        status: 'logout'
      })
    });
  }


  static async editUser(req, res) {
    if (req.user) {
      
      let obj = {
        ...req.body
      }
      delete obj.id
      await User.update(obj, {
        where: {
          id: req.body.id
        }
      });
      res.send({
        status: "edited"
      })
    } else {
      res.send({
        status: "error"
      })
    }
  }


  static async deleteUser(req, res) {
    if (req.user) {

      await User.destroy({
        where: {
          id: req.body.id
        }
      });
      res.send({
        status: "deleted"
      })
    } else {
      res.send({
        status: "error"
      })
    }
  }



  static async updateUserPicUrl(req, res) {
    if (req.user) {
      let uspic = await User.findOne({
        where: {
          id: req.body.id
        }
      });
      let str =
        __dirname.substring(0, __dirname.lastIndexOf("controller")) +
        "public\\images\\user\\" +
        uspic.picUrl;
      fs.unlinkSync(str, (err, ok) => {
        if (err) err;
      });
      await User.update({
        picUrl: req.file.filename
      }, {
        where: {
          id: req.body.id
        }
      });
      res.send({
        status: "user update"
      });
    } else {
      res.send({
        error: "user not found"
      });
    }
  }
}


passport.use('local', new LocalStrategy(async function (username, password, done) {
  let us = await User.findOne({
    where: {
      email: username
    }
  });
  if (us) {
    if (bcrypt.compareSync(password, us.password)) {
      return done(null, us);
    } else {
      return done(null, false);
    }
  } else {
    return done(null, false);
  }
}));

passport.serializeUser(async function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  let user = await User.findOne({
    where: {
      id: id,
    },
  });
  done(null, user);
});

module.exports = UserController;