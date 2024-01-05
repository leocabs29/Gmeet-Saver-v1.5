document.addEventListener("DOMContentLoaded", function() {
    showTask();  // Call the function when the DOM is fully loaded

    // Add event listener for the button click
    document.getElementById("addBtn").addEventListener("click", function() {
        add();
    });
});
