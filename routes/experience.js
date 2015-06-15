/*
 * GET about page.
 */

exports.stuff = function(req, res){
  res.render('experience', { title: 'Experience' });
};