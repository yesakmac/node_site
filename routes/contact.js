/*
 * GET about page.
 */

exports.stuff = function(req, res){
  res.render('contact', { title: 'Contact' });
};