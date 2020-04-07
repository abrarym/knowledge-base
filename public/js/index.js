function toggleReplies() {
  const rowReplies = document.querySelectorAll('.rowToggle');

  rowReplies.forEach(reply => {
    if (reply.style.display === 'flex') {
      reply.style.display = 'none';
    } else {
      reply.style.display = 'flex';
    }
  });
}

toggleReplies();
