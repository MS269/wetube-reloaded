export const trending = (req, res) => res.send("Trending");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const see = (req, res) => {
  return res.send(`Video #${req.params.id} See`);
};
export const edit = (req, res) => {
  return res.send(`Video #${req.params.id} Edit`);
};
export const deleteVideo = (req, res) => {
  return res.send(`Video #${req.params.id} Delete Video`);
};
