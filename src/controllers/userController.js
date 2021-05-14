export const join = (req, res) => res.send("Join");
export const login = (req, res) => res.send("login");
export const logout = (req, res) => res.send("Log out");
export const edit = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Remove User");
export const see = (req, res) => {
  return res.send(`User #${req.params.id} See`);
};
