const logoutBtn = document.querySelector("#logout");

logoutBtn.addEventListener("click", async (event) => {
  try {
    event.preventDefault();
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });
    if (response.ok) {
      location.reload();
    } else {
      alert("some error");
    }
  } catch (err) {}
});
