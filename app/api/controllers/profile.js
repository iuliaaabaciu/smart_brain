const handleGetProfile = (req, res, db) => {
  const { id } = req.params;

  db.select('*').from('users').where({id})
    .then(user => {
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json()
      }
  })
  .catch(err => res.status(400).json(err));
}

module.exports = {
  handleGetProfile: handleGetProfile
}