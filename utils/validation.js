function validateTaskTitle(title) {
  if (!title || typeof title !== 'string') return false;
  return title.trim().length > 0;
}

module.exports = { validateTaskTitle };