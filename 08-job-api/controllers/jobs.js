const getAllJobs = (req, res) => {
  res.send(`get all job for ${req.user._id}`);
};
const getJob = (req, res) => {
  res.send("get single job");
};
const createJob = (req, res) => {
  res.send("create");
};
const updateJob = (req, res) => {
  res.send("update job");
};
const deleteJob = (req, res) => {
  res.send("delete Job ");
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
