/*
 * GET about page.
 */

exports.stuff = function(req, res){
  res.render('about', { title: 'About' });
};