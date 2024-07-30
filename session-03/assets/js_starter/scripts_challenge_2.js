// Challenge 2 Starter
const userObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe"
    },
    isEmployed: true,
};

// Clone the complexObject three times using the spread operator.
function myClone(obj) {
    const clones = [];

    for (let i = 0; i < 3; i++) {
        clones[i] = {...obj};
        clones[i].age += i;
    }
    return clones;
}

// Store the cloned objects in an array
const arr = myClone(userObject);

// Sort the array of cloned objects based on the 'age' property in ascending order
arr.sort((a, b) => (a.age > b.age) ? 1 : -1);

// Log the sorted array to the console
console.log(arr);