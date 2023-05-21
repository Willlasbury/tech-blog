const postForm = document.querySelector("form");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title-text").value;
  const content = document.querySelector("#content-text").value;

  const newPost = {
    title: title,
    content: content,
  };

  fetch("./api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
});
