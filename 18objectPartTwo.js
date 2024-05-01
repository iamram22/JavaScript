var User = {
    name: "",
    getUserName : function() {
        console.log(`User name is ${this.name}`);
    },
};

var Ram = Object.create(User)
Ram.name = "Ramakrishna Kumbar"
Ram.getUserName();