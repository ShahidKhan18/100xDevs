const { CatchAsyncError } = require("../middlewares");

class BaseService {
  constructor(model) {
    this.model = model;
  }

  create = async function (data) {
    const newData = await this.model.create(data);
    return newData;
  };

  getAll = async function (query) {
    const data = await this.model.find(query);
    return data;
  };

  getById = async function (id) {
    const data = await this.model.findById(id);
    return data;
  };

  update = async function (id, data) {
    const updatedData = await this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedData;
  };

  deleteById = async function (id) {
    const deletedData = await this.model.findByIdAndDelete(id);
    return deletedData;
  };

  getByQuery = async function (query) {
    const data = await this.model.find(query);
    return data;
  };

  getByIdAndPopulate = async function (id, populate) {
    const data = await this.model.findById(id).populate(populate);
    return data;
  };

  getByQueryAndPopulate = async function (query, populate) {
    const data = await this.model.find(query).populate(populate);
    return data;
  };
}

module.exports = BaseService;
