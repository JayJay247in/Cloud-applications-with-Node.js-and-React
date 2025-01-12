// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Australia/Brisbane" })); // Return the Date Object
};