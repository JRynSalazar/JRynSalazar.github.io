
function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  }
  if (getCookie("isLoggedIn") !== "true") {
    window.location.href = "index.html"; 
  }

  function confirmLogout() {
    let confirmAction = confirm("Are you sure you want to logout?");
    if (confirmAction) {
      document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; 
      window.location.href = "index.html"; 
    }
  }

  window.addEventListener("pageshow", function (event) {
  if (event.persisted || performance.getEntriesByType("navigation")[0].type === "back_forward") {
      location.reload();
    }
  });