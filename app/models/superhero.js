
function SuperHero (opts) {
  if(!opts) opts = {};
  this.uid = opts.uid || '';
  this.heroName = opts.heroName || '';
  this.realName = opts.realName || '';
}

module.exports = SuperHero;

