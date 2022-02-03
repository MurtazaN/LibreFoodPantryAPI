const Category = require("../data/Category.js");

module.exports = {
  method: 'get',
  path: '/category',
  async handler(request, response) {
    let name = request.query.name;
    if (name === undefined) {
      categories = await Category.getAll();
    } else {
      Category.getAllNames(name)
    }
    
    response.status(200).json(categories);
  }
};