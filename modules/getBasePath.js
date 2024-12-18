function getBasePath(req) {
  return `${req.protocol}://${req.get('host')}/imgs/`;
}

module.exports = getBasePath;