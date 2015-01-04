/**
 * Created by Bozhidar on 23.12.2014 г..
 */

exports.home = function(request, responce){
    var pathToClient = '../../../client/'
    responce.render(pathToClient + 'index.html');
};