flagList.forEach((flagName) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `flags_css/${flagName}.css`;
  document.head.appendChild(link);
});
