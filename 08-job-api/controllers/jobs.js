const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");
const { NotFoundError, BadRequestError } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user._id }).sort("createdAt");
  res.status(StatusCodes.OK).json({ count: jobs.length, jobs });
};

const getJob = async (req, res) => {
  const { id: jobId } = req.params;
  const userId = req.user._id;
  const job = await Job.findOne({ createdBy: userId, _id: jobId });
  if (!job) {
    throw new NotFoundError(`no job found of id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job });
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user._id;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  // nested destructuring
  const {
    body: { company, position },
    user: { _id: userID },
    params: { id: jobID },
  } = req;

  if (!company || !position) {
    throw new BadRequestError("required field lacking");
  }

  req.body.createdBy = userID;

  const job = await Job.findByIdAndUpdate(
    { _id: jobID, createdBy: userID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!job) {
    throw new NotFoundError("job not found of given id of register user");
  }

  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  const {
    user: { _id: userID },
    params: { id: jobID },
  } = req;

  const job = await Job.findByIdAndRemove({ _id: jobID, createdBy: userID });

  if (!job) {
    throw new NotFoundError("no job found of user");
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "successfully deleted", oldData: job });
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
