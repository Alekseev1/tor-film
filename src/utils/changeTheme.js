const changeTheme = (theme) => {
  document.body.classList.toggle("dark");
  return theme === "light" ? "dark" : "light";
};

export default changeTheme;
