/**
 * Created by Bozhidar on 30.12.2014 г..
 */

var mongoose = require('mongoose'),
    models = require('Models'),
    q = require('q');

function Repository(requiredModel){
    var check = /Model$/;
    if(check.test(requiredModel) !== true){
        requiredModel += 'Model';
    }

    this.model = models.requiredModel;
}

Repository.prototype.getOne = function(searchOption){
    var deferred = q.defer();

    if(typeof searchOption === 'undefined'){
        searchOption = {};
    }

    this.model.findOne(searchOption, function(error, document){
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(document);
        }
    });

    return deferred.promise;
};

Repository.prototype.Insert = function(document){
    this.model.insert(document);
}