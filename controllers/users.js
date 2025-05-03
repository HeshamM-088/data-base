const getUsers = async (req, res) => {
  return res.status(200).json("done from controllers");
};

module.exports = {
  getUsers,
};
