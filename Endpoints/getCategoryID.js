const Category = require("../data/Category.js");

module.exports = {
  method: 'get',
  path: '/category/:id',
  async handler(request, response) {
    const id = request.params.id;
    const item = await Category.getOne(id);
    if (category !== null) {
      response.status(200).json(item);
    } else {
      response.status(404).json({
        status: 404,
        error: "Category not found",
        message: "ID does not exist"
      })
    }
  }
};