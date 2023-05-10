const commentForms = document.querySelectorAll("form");
const commentInput = document.querySelector("#comment");
const commentBtn = document.querySelectorAll("button");

commentForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const newComment = {
      text: commentInput.value,
      // TODO: get post id
      PostId: 1,
    };
    const response = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    });
    form.reset()
  });
});
