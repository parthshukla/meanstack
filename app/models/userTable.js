/* 
 * @version: 0.0.1
 * @author : Parth<parthshukla1985@gmail.com>
 * @purpose : Creating the Database model Schema
 * 
 */

// grab the mongoose module
var mongoose = require('mongoose'),
        Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:String,
    phone:String,
    email:String,
    address:String
});

var userTable = mongoose.model('userTable', UserSchema);
// module.exports allows us to pass this to other files when it is called
module.exports = userTable;