/**
 * AppController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	main: function(req, res){
    if (typeof req.user === 'undefined') {
      return res.redirect('/login');
    }

    res.view('homepage');
  }
};

