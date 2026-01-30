function sendDevis(e){
  e.preventDefault();
  const f = e.target;

  const nom = f.nom.value.trim();
  const tel = f.tel.value.trim();
  const email = f.email.value.trim();
  const prestation = f.prestation.value;
  const ville = f.ville.value.trim();
  const msg = f.message.value.trim();

  const subject = encodeURIComponent(`Demande de devis - ${nom} (${ville})`);
  const body = encodeURIComponent(
`Bonjour Batiman'S,

Je souhaite un devis.

Nom : ${nom}
Téléphone : ${tel}
Email : ${email}
Prestation : ${prestation}
Ville : ${ville}

Détails :
${msg}

Merci,
${nom}`
  );

  const to = "contact@batimans.fr"; // tu pourras remplacer
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form-devis");
  if(form) form.addEventListener("submit", sendDevis);
});
