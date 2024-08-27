const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  address: {
    street: "123 Main St",
    city: "Perth",
    zipCode: "6000",
  },
  skills: ["JavaScript", "HTML", "CSS"],
  socialProfiles: {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  isEmployed: true,
  // Function to calculate membership status
  calculateMembershipStatus: function () {
    if (this.age >= 18 && !this.isStudent) {
      return "Full Member";
    } else if (this.age >= 18 && this.isStudent) {
      return "Student Discount";
    } else {
      return "Not Eligible for Discount";
    }
  },
};
