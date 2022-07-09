var mongoose = require("mongoose");
const { isError } = require("underscore");
mongoose.connect(process.env.MONGODB_URI);
require("./models/User");
require("./models/Item");
require("./models/Comment");
require("./config/passport");

var Item = mongoose.model("Item");
var Comment = mongoose.model("Comment");
var User = mongoose.model("User");

async function createUser(randomNumber) {

    var user = new User({
        username: `user${randomNumber}`,
        email: `user${randomNumber}@example.com`,
        bio: "lorem Ipsum....",

    });
    user.setPassword("password");
    let savedUser = await user.save();
    console.log(savedUser);
    return savedUser;

}

async function createItem(randomNumber, user) {

    var item = new Item({
        title: "hiyou", description: "desc1", image: "nopee"
    });

    item.seller = user
    await item.save();

    var comment = new Comment({
        body: "no comment",

    });

    comment.item = item;
    comment.seller = user;

    comment.save()
}

async function run() {

    for (let index = 0; index < 100; index++) {
        let r = (Math.random() + 1).toString(36).substring(7);
        const user = await createUser(r);
        await createItem(index, user);


    }

    console.log("done create 100 items");
    setTimeout(()=> {
        mongoose.connection.close()
    }, 1000)

}

run()

