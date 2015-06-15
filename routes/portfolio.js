
/*
 * GET portfolio page.
 */

exports.stuff = function(req, res){
  res.render('portfolio', { title: 'Portfolio' });
};