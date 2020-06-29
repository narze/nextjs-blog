export default (req, res) => {
  res.status(200).json({ text: `HAI, ${req.query.name || "World"}!` })
}
