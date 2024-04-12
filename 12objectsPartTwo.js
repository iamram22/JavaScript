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
