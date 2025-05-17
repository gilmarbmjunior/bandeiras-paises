const container = document.getElementById("bandeira_list");

async function loadFlags() {
  for (const flagName of flagList) {
    const res = await fetch(`flags_html/${flagName}.html`);
    const html = await res.text();
    container.innerHTML += html;
  }
}

loadFlags();
