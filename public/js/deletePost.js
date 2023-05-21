const postDelBtn = document.querySelectorAll("#delete-post");

postDelBtn.forEach((button) => {
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const id = button.dataset.post_id
    
    await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });
    location.reload()
  });
});
