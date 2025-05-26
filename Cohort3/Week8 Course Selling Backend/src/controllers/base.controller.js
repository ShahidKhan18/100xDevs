const { StatusCodes } = require("http-status-codes");
const { AppError, SuccessResponse } = require("../utils");
const { CatchAsyncError } = require("../middlewares");
const { get } = require("mongoose");

class BaseController {
  constructor(service) {
    if (!service) {
      throw new AppError(
        "Service is Required",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }

    this.service = service;
  }

  create = CatchAsyncError(async function (req, res) {
    if (!req.body) {
      throw new AppError("Request body is required", StatusCodes.BAD_REQUEST);
    }
    const newData = await this.service.create(req.body);

    SuccessResponse.data = newData;
    SuccessResponse.statusCode = StatusCodes.CREATED;
    SuccessResponse.message = "Data created successfully";
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  });
}

getAll = CatchAsyncError(async function (req, res) {
  const data = await this.service.getAll(req.query);
  SuccessResponse.data = data;
  SuccessResponse.statusCode = StatusCodes.OK;
  SuccessResponse.message = "Data retrieved successfully";
  return res.status(StatusCodes.OK).json(SuccessResponse);
});

getById = CatchAsyncError(async function (req, res) {
  const id = req.params.id;
  if (!id) {
    throw new AppError("ID is required", StatusCodes.BAD_REQUEST);
  }
  const data = await this.service.getById(id);
  if (!data) {
    throw new AppError("Data not found", StatusCodes.NOT_FOUND);
  }
  SuccessResponse.data = data;
  SuccessResponse.statusCode = StatusCodes.OK;
  SuccessResponse.message = "Data retrieved successfully";
  return res.status(StatusCodes.OK).json(SuccessResponse);
});

update = CatchAsyncError(async function (req, res) {
  const id = req.params.id;
  if (!id) {
    throw new AppError("ID is required", StatusCodes.BAD_REQUEST);
  }
  const updatedData = await this.service.update(id, req.body);
  if (!updatedData) {
    throw new AppError("Data not found", StatusCodes.NOT_FOUND);
  }
  SuccessResponse.data = updatedData;
  SuccessResponse.statusCode = StatusCodes.OK;
  SuccessResponse.message = "Data updated successfully";
  return res.status(StatusCodes.OK).json(SuccessResponse);
});

deleteById = CatchAsyncError(async function (req, res) {
  const id = req.params.id;
  if (!id) {
    throw new AppError("ID is required", StatusCodes.BAD_REQUEST);
  }
  const deletedData = await this.service.delete(id);
  if (!deletedData) {
    throw new AppError("Data not found", StatusCodes.NOT_FOUND);
  }
  SuccessResponse.data = deletedData;
  SuccessResponse.statusCode = StatusCodes.OK;
  SuccessResponse.message = "Data deleted successfully";
  return res.status(StatusCodes.OK).json(SuccessResponse);
});

getByQuery = CatchAsyncError(async function (req, res) {
  const query = req.query;
  if (!query) {
    throw new AppError("Query is required", StatusCodes.BAD_REQUEST);
  }
  const data = await this.service.getByQuery(query);
  SuccessResponse.data = data;
  SuccessResponse.statusCode = StatusCodes.OK;
  SuccessResponse.message = "Data retrieved successfully";
  return res.status(StatusCodes.OK).json(SuccessResponse);
});
getByIdAndPopulate = CatchAsyncError(async function (req, res) {
  const id = req.params.id;
  const populate = req.query.populate;
  if (!id) {
    throw new AppError("ID is required", StatusCodes.BAD_REQUEST);
  }
  const data = await this.service.getByIdAndPopulate(id, populate);
  if (!data) {
    throw new AppError("Data not found", StatusCodes.NOT_FOUND);
  }
  SuccessResponse.data = data;
  SuccessResponse.statusCode = StatusCodes.OK;
  SuccessResponse.message = "Data retrieved successfully";
  return res.status(StatusCodes.OK).json(SuccessResponse);
});

getByQueryAndPopulate = CatchAsyncError(async function (req, res) {
  const query = req.query;
  const populate = req.query.populate;
  if (!query) {
    throw new AppError("Query is required", StatusCodes.BAD_REQUEST);
  }
  const data = await this.service.getByQueryAndPopulate(query, populate);
  SuccessResponse.data = data;
  SuccessResponse.statusCode = StatusCodes.OK;
  SuccessResponse.message = "Data retrieved successfully";
  return res.status(StatusCodes.OK).json(SuccessResponse);
});
