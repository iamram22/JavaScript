// interpolation of methods(function) in the objects

var user = {
    firstName : "Nibbs",
    lastName :  "",
    role : "HR Manager",
    loginCount : 3,
    signedInFromPortal : true,
    signedInFromPhysicalId : false,
    upComingTasks : [],
    availableTasks : function (tasks) {
        this.upComingTasks.push(tasks);
    },
    getTasksfromManager : function () {
        return `${this.firstName} is assigned to complete ${this.upComingTasks.length} number of tasks`
    },
}; 

var upComingTasks = true;

user.availableTasks("hospitality of the guest")
user.availableTasks("Food and Snacks arrangements")
user.availableTasks("Smooth event as per the plan")
user.availableTasks("Arrange after event meeting with Senior Managers")
console.log(user.getTasksfromManager());
