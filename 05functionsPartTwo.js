//This is how parameters in functions are used

function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is an admin gets full access`
            break;
        case "subadmin":
            return `${name}is a sub-admin gets access edit and create courses`
            break;
        case "testprep":
            return `${name} is a test-prep gets full access to view and take tests`
            break;
        case "user":
            return `${name} is a user can comsume the content`
            break;
    
        default: 
            return `${name} is a trail user, can only browse through the courses and register as new user`
            break;
    };
};

//switch will simply switch the given param and execute when param value is declared. 

console.log(getUserRole("Ram", "admin"));

//storing the output data in a variable

userRoleOfDave = getUserRole("Dave", "testprep")
console.log(userRoleOfDave);

userRoleOfBatMan = getUserRole("Batman", "")
console.log(userRoleOfBatMan);