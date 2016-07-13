/* 
 *  @version: 0.0.1
 *  @author : Parth<parthshukla1985@gmail.com>
 *  @purpose : DB Operations
 */

var userTable = require('../models/userTable.js'),
        path = require('path');


exports.renderIndexPage = function (req, res) {
    res.sendFile(path.join(__dirname + '../../../public/views/index.html'));
    //__dirname : It will resolve to your project folder.
};

//For adding a new user to userTable collection
exports.addUserDetails = function (req, res) {
    var usert = new userTable();
    usert.name = req.body.name;
    usert.phone = req.body.phone;
    usert.email = req.body.email;
    usert.address = req.body.address;
    console.log('add here',req.body.email)
    usert.save(function (err, usrObj) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(usrObj);
        }
    });
};

//For fetching all the users from userTable collection
exports.getUserDetails = function (req, res) {
    userTable.find(function (err, usrObj) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(usrObj);
        }
    });
};

//For fetching particular user by email from userTable collection
exports.getUserById = function (req, res) {
    userTable.find({email: req.params.id}, function (err, usrObj) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(usrObj.length, 'nnaif');
            if (usrObj.length)
                res.send({status: 1, data: usrObj[0]});
            else
                res.send({status: 0, data: {}});
        }
    });
};

// Delete a user with the email from collection
exports.deleteUser = function (req, res) {
    userTable.remove({email: req.params.id}, function (err, obj) {
        if (err) {
            console.log('Error occured', err);
            res.status('Error occured').send(err);
        } else {
            res.send(obj.result);
        }

    });

};

//Update a user 
exports.updateUser = function (req, res) {
    var usert = new userTable();
    usert.name = req.body.name;
    usert.email = req.body.email;
    usert.password = req.body.password;
    usert.update({email: req.params.id},{$set:{phone:req.body.phone,name:req.body.name,address:req.body.address}},function(err,obj){
        if(err){
            console.log('Error occured',err);
            res.status('Error occured').send(err);
        }else{
            console.log(obj,'update obbj');
            res.send(obj);
        }
        
    });
    
};