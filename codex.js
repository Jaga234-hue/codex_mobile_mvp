// Set up tab navigation
const tabs = document.querySelectorAll(".tab");
const views = document.querySelectorAll(".view");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetView = tab.getAttribute("data-view");

    // Update active tab
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Show target view
    views.forEach((view) => {
      view.classList.remove("active");
      if (view.id === targetView + "View") {
        view.classList.add("active");
      }
    });
  });
});

// Simulate location detection
setTimeout(() => {
  const locations = [
    "123 Main Street, City Center",
    "456 Park Avenue, Downtown",
    "789 Riverside Drive, West District",
  ];
  const randomLocation =
    locations[Math.floor(Math.random() * locations.length)];
  document.getElementById("locationText").textContent = randomLocation;
}, 2000);

// Handle form submission
document.getElementById("submitIssue").addEventListener("click", function () {
  const category = document.getElementById("issueCategory").value;
  const description = document.getElementById("issueDescription").value;

  if (!category || !description) {
    alert("Please select a category and provide a description");
    return;
  }

  // Show success message
  alert(
    "Issue reported successfully! You can track its status in the Track tab."
  );

  // Reset form
  document.getElementById("issueCategory").value = "";
  document.getElementById("issueDescription").value = "";
});
