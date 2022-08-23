const {Event} = require("../model/event");
const { User } = require("../model/user");

class EventController {
  static async getAllEvent(req, res) {
    const events = await Event.findAll({
      order: [
        ['id', 'DESC'],
      ],
      include:User
    });
    res.send([...events]);
  }


  static async getEventToday(req, res) {
    const events = await Event.findAll({
      order: [
        ['id', 'DESC'],
      ],
      limit: 2
    });
    res.send([...events]);
  }

  static async getEventByUserId(req, res) {
    const events = await Event.findAll({
      where: {
        userId: req.body.userId,
      },
    });
    res.send([...events]);
  }

  static async addEvent(req, res) {
    if (req.user) {
      await Event.create({
        ...req.body,
        userId: req.user.id,
        picUrl: req.file.filename,
       
      }) 
      res.send({
        status: "ok"
      })
    } else {
      res.send({
        status: "error"
      })
    }
  }

  static async deleteEvent(req, res) {
    if (req.user) {
      await Event.destroy({where: {id: req.body.id} });
      res.send({
        status: "deleted"
      })
    } else {
      res.send({
        status: "error"
      })
    }
  }

}

module.exports = EventController;