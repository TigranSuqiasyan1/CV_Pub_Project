const { Dancer } = require("../model/dancer");
const { User } = require("../model/user");

class DancerController{
    static async getAllDancer(req, res) {
        const dancers = await Dancer.findAll({
          order: [
            ['id', 'DESC'],
          ],
          limit:7,
          include:User
    
        });
        res.send([...dancers]);
      }

      static async addNewDancer(req, res) {
        await Dancer.create({ ...req.body,  userId:  req.user.id,  picUrl: req.file.filename,})//1->req.user.id
        res.send({ status: "ok" })
    }

    static async deleteDancer(req, res) {
      if(req.user){
        await Dancer.destroy({ where: { id: req.body.id } });
      res.send({ status: "deleted" })
      }else {
        res.send({
          status: "error"
        })
      }
  }
}

module.exports = DancerController;
