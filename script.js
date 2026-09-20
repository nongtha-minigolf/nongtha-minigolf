const toast = document.querySelector("[data-toast]");
const statusEl = document.querySelector("[data-open-status]");
const galleryStrip = document.querySelector("[data-gallery]");
const galleryEmpty = document.querySelector("[data-gallery-empty]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImg = lightbox.querySelector("img");

let langButtons = [];
let galleryItems = [];
let galleryIndex = 0;

function site() {
  if (!window.CONTENU) {
    throw new Error("Ouvre contenu.js : le fichier des textes n a pas ete charge.");
  }
  return window.CONTENU;
}

function linesToHtml(text) {
  return String(text || "").split("\n").join("<br>");
}

function packFor(lang) {
  const textes = site().textes;
  const pack = {};
  Object.keys(textes).forEach((key) => {
    pack[key] = textes[key][lang] || textes[key].en || "";
  });
  return pack;
}

function langCodes() {
  return site().langues.map((item) => item.code);
}

function fillAttr(selector, attr, value) {
  document.querySelectorAll(selector).forEach((el) => {
    el.setAttribute(attr, value);
  });
}

function fillHtml(selector, html) {
  document.querySelectorAll(selector).forEach((el) => {
    el.innerHTML = html;
  });
}

function fillText(selector, text) {
  document.querySelectorAll(selector).forEach((el) => {
    el.textContent = text;
  });
}

function driverText() {
  const data = site();
  return [
    data.nom,
    data.nomLocal,
    data.adresse,
    data.adresseLocale,
    `GPS ${data.gpsLatitude}, ${data.gpsLongitude}`,
    data.telephoneAffiche
  ].join("\n");
}

function whatsappLink() {
  return "https://wa.me/" + String(site().telephoneTel).replace(/\D/g, "");
}

function osmEmbed() {
  const lat = Number(site().gpsLatitude);
  const lng = Number(site().gpsLongitude);
  const pad = 0.0031;
  const bbox = [lng - pad, lat - pad, lng + pad, lat + pad].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

function fillSite() {
  const data = site();
  const telHref = "tel:" + data.telephoneTel;
  const maps = data.googleMaps;

  document.title = data.titreOnglet;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", data.description);

  document.querySelectorAll("[data-src=logo]").forEach((el) => {
    el.src = data.images.logo;
    el.alt = data.nom;
  });
  document.querySelectorAll("[data-src=mascotte]").forEach((el) => {
    el.src = data.images.mascotte;
    el.alt = data.nom;
  });
  fillAttr('link[rel="icon"], link[rel="apple-touch-icon"]', "href", data.images.logo);

  fillAttr("[data-href=tel]", "href", telHref);
  fillAttr("[data-href=maps]", "href", maps);
  fillAttr("[data-href=whatsapp]", "href", whatsappLink());
  fillAttr("[data-href=email]", "href", "mailto:" + data.email);
  fillAttr("[data-href=facebook]", "href", data.facebook);

  fillText("[data-text=nom]", data.nom);
  fillText("[data-text=nom-local]", data.nomLocal);
  fillText("[data-text=tel-affiche]", data.telephoneAffiche);
  fillText("[data-text=tel-intl]", data.telephoneInternational);
  fillText("[data-text=email]", data.email);
  fillText("[data-text=appel]", data.boutonAppel);
  fillHtml("[data-html=adresse]", linesToHtml(data.adresse));
  fillHtml("[data-html=adresse-locale]", linesToHtml(data.adresseLocale));
  fillText("[data-text=gps]", `GPS ${data.gpsLatitude}, ${data.gpsLongitude}`);
  const mapLabel = String(data.adresse).split(/[,\n]/)[0].trim();
  fillText("[data-text=map-hint]", `${mapLabel} · ${data.gpsLatitude}, ${data.gpsLongitude}`);
  fillText("[data-text=facebook]", `Facebook · ${data.nom}`);

  const iframe = document.querySelector("[data-map-embed]");
  if (iframe) {
    iframe.src = osmEmbed();
    iframe.title = data.nom;
  }

  const hoursTable = document.querySelector("[data-hours]");
  if (hoursTable) {
    hoursTable.replaceChildren();
    data.horaires.forEach((slot) => {
      const row = document.createElement("tr");
      row.dataset.days = slot.jours.join(",");
      const label = document.createElement("th");
      label.dataset.i18n = slot.texte;
      const time = document.createElement("td");
      time.textContent = `${slot.debut} – ${slot.fin}`;
      row.append(label, time);
      hoursTable.append(row);
    });
  }

  const langs = document.querySelector("[data-langs]");
  if (langs) {
    langs.replaceChildren();
    data.langues.forEach((item) => {
      const btn = document.createElement("button");
      btn.className = "lang";
      btn.type = "button";
      btn.dataset.setLang = item.code;
      btn.lang = item.code;
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = item.bouton;
      btn.addEventListener("click", () => applyLang(item.code));
      langs.append(btn);
    });
    langButtons = langs.querySelectorAll("[data-set-lang]");
  }
}

function applyLang(lang) {
  const codes = langCodes();
  const next = codes.includes(lang) ? lang : site().langueParDefaut || codes[0] || "en";
  const pack = packFor(next);
  document.body.dataset.lang = next;
  document.documentElement.lang = next;
  langButtons.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.setLang === next));
  });
  localStorage.setItem("nongtha-lang", next);
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (pack[key]) el.innerHTML = pack[key];
  });
  updateOpenStatus();
}

function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.hidden = true;
  }, 1800);
}

async function copyText(text, okKey) {
  const pack = packFor(document.body.dataset.lang);
  try {
    await navigator.clipboard.writeText(text);
    showToast(pack[okKey]);
  } catch {
    showToast(pack.copy_fail);
  }
}

function toMinutes(hhmm) {
  const [hours, minutes] = String(hhmm).split(":").map(Number);
  return hours * 60 + minutes;
}

function localNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: site().fuseau || "Asia/Vientiane",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());
  const get = (type) => parts.find((part) => part.type === type)?.value || "";
  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    day: dayMap[get("weekday")],
    minutes: Number(get("hour")) * 60 + Number(get("minute"))
  };
}

function isOpen(now) {
  const slot = site().horaires.find((item) => item.jours.includes(now.day));
  if (!slot) return false;
  return now.minutes >= toMinutes(slot.debut) && now.minutes < toMinutes(slot.fin);
}

function updateOpenStatus() {
  const now = localNow();
  const open = isOpen(now);
  const pack = packFor(document.body.dataset.lang);
  statusEl.classList.toggle("is-open", open);
  statusEl.classList.toggle("is-closed", !open);
  statusEl.textContent = open ? pack.open : pack.closed;
  document.querySelectorAll(".hours tr[data-days]").forEach((row) => {
    const days = row.dataset.days.split(",").map(Number);
    row.classList.toggle("is-today", days.includes(now.day));
  });
}

function probeImage(file) {
  const dir = site().images.galerieDossier;
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(file);
    img.onerror = () => resolve(null);
    img.src = dir + file;
  });
}

async function listGallery() {
  const listed = site().images.galerie || [];
  const found = [];
  for (const file of listed) {
    const hit = await probeImage(file);
    if (hit) found.push(hit);
  }
  return found;
}

function renderGallery(files) {
  galleryItems = files;
  galleryStrip.replaceChildren();

  if (!files.length) {
    galleryEmpty.hidden = false;
    galleryStrip.hidden = true;
    return;
  }

  galleryEmpty.hidden = true;
  galleryStrip.hidden = false;
  files.forEach((file, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item";
    const img = document.createElement("img");
    img.src = site().images.galerieDossier + file;
    img.alt = `${site().nom} ${index + 1}`;
    img.loading = "lazy";
    button.append(img);
    button.addEventListener("click", () => openLightbox(index));
    galleryStrip.append(button);
  });
}

function openLightbox(index) {
  galleryIndex = index;
  lightboxImg.src = site().images.galerieDossier + galleryItems[index];
  lightboxImg.alt = `${site().nom} ${index + 1}`;
  if (!lightbox.open) lightbox.showModal();
}

function stepLightbox(delta) {
  if (!galleryItems.length) return;
  galleryIndex = (galleryIndex + delta + galleryItems.length) % galleryItems.length;
  openLightbox(galleryIndex);
}

function bindActions() {
  document.getElementById("copy-driver").addEventListener("click", () => {
    copyText(driverText(), "copied_driver");
  });
  document.getElementById("copy-phone").addEventListener("click", () => {
    copyText(site().telephoneTel, "copied_phone");
  });
  lightbox.querySelector("[data-lightbox-close]").addEventListener("click", () => lightbox.close());
  lightbox.querySelector("[data-lightbox-prev]").addEventListener("click", () => stepLightbox(-1));
  lightbox.querySelector("[data-lightbox-next]").addEventListener("click", () => stepLightbox(1));
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  document.addEventListener("keydown", (event) => {
    if (!lightbox.open) return;
    if (event.key === "ArrowRight") stepLightbox(1);
    if (event.key === "ArrowLeft") stepLightbox(-1);
  });
}

fillSite();
bindActions();
listGallery().then(renderGallery);
applyLang(localStorage.getItem("nongtha-lang") || site().langueParDefaut);
setInterval(updateOpenStatus, 60 * 1000);
