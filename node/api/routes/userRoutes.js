'use strict';
module.exports = function(app) {
var userList = require('../controllers/userController');

  app.route('/user')
    .get(userList.list_all_user)
    .post(userList.create_user);

  app.route('/user/login')
    .post(userList.login_user);

  app.route('/user/:userId')
    .get(userList.read_user)
    .put(userList.update_user)
    .delete(userList.delete_user);
};
