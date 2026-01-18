const index = (req, res) => {
  res.render("index", {
    title: "Travlr Getaways",
    homeActive: "selected"
  });
};

module.exports = {
  index
};
