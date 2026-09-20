/* =============================================================================
   FICHIER A MODIFIER
   -----------------------------------------------------------------------------
   Change ici les infos, les photos et les phrases du site.
   Tu n as pas besoin d ouvrir index.html ni script.js.

   Regles simples :
   - Garde les virgules et les guillemets.
   - Pour un retour a la ligne dans un titre : <br>
   - Pour une nouvelle photo : mets le fichier dans le dossier indique,
     puis ajoute son nom dans la liste "galerie".
   ============================================================================= */

window.CONTENU = {
  /* --- Infos du lieu ------------------------------------------------------- */
  nom: "Nongtha Minigolf",
  nomLocal: "ສວນກອຟນ້ອຍ ບ້ານໜອງທາ",
  titreOnglet: "Nongtha Minigolf \u2014 Vientiane",
  description: "18-hole mini golf in Ban Nongtha-Neua, Vientiane. How to get here, opening hours, and phone.",

  telephoneAffiche: "020 54 148 481",
  telephoneInternational: "+856 20 54 148 481",
  telephoneTel: "+8562054148481",
  email: "roccomuc81@yahoo.de",
  facebook: "https://www.facebook.com/profile.php?id=61592567421307",
  googleMaps: "https://maps.app.goo.gl/13FEodnFiMYd54Jy6",

  /* Adresse : \n = aller a la ligne */
  adresse: "Hom 6, Ban Nongtha-Neua\nChanthabuly, Vientiane 01000",
  adresseLocale: "ຮ່ອມ 6, ບ້ານ ໜອງທາ ເໜືອ\nເມືອງຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ",
  gpsLatitude: 18.00657,
  gpsLongitude: 102.60486,
  fuseau: "Asia/Vientiane",

  /* 0 = dimanche, 1 = lundi, ... 6 = samedi */
  horaires: [
    { jours: [1, 2, 3, 4], debut: "15:00", fin: "22:00", texte: "mon" },
    { jours: [5, 6, 0], debut: "11:00", fin: "22:00", texte: "fri" }
  ],

  boutonAppel: "Call · ໂທ",
  langueParDefaut: "en",
  langues: [
    { code: "en", bouton: "EN" },
    { code: "lo", bouton: "ລາວ" },
    { code: "th", bouton: "ไทย" },
    { code: "fr", bouton: "FR" }
  ],

  /* --- Images -------------------------------------------------------------- */
  images: {
    logo: "assets/images/logo.jpg",
    mascotte: "assets/images/logo.jpg",
    galerieDossier: "assets/images/gallery/",
    /* Ajoute ici le nom du fichier apres l avoir place dans le dossier */
    galerie: [
      "01.jpg",
      "02.jpg",
      "03.jpg",
      "04.jpg",
      "05.jpg",
      "06.jpg",
      "07.jpg",
      "08.jpg"
    ]
  },

  /* --- Textes du site ------------------------------------------------------
     Chaque phrase a 4 versions : en, lo, th, fr.
     Change les 4 si tu modifies une phrase.
     ----------------------------------------------------------------------- */
  textes: {
    /* Petite ligne au-dessus du titre */
    "eyebrow": {
      en: "Vientiane · 18-hole mini golf",
      lo: "ວຽງຈັນ · ມິນິກອຟ 18 ຮູ",
      th: "เวียงจันทน์ · มินิกอล์ฟ 18 หลุม",
      fr: "Vientiane · mini-golf 18 trous"
    },
    /* Grand titre. <br> = aller a la ligne */
    "hero": {
      en: "Mini golf<br>in Vientiane",
      lo: "ມິນິກອຟ<br>ໃນວຽງຈັນ",
      th: "มินิกอล์ฟ<br>ในเวียงจันทน์",
      fr: "Mini-golf<br>à Vientiane"
    },
    /* Texte sous le titre */
    "lead": {
      en: "18 holes next to Nongtha Lake, in Ban Nongtha-Neua.",
      lo: "18 ຮູ ໃກ້ທະເລສາບໜອງທາ ຢູ່ບ້ານໜອງທາເໜືອ.",
      th: "18 หลุมริมทะเลสาบหนองทา ที่บ้านหนองทาเหนือ",
      fr: "18 trous au bord du lac Nongtha, à Ban Nongtha-Neua."
    },
    /* Bouton principal : comment venir */
    "cta_map": {
      en: "How to get here",
      lo: "ວິທີມາ",
      th: "วิธีมา",
      fr: "Comment venir"
    },
    /* Petit titre de la section acces */
    "kicker_access": {
      en: "Location",
      lo: "ທີ່ຕັ້ງ",
      th: "ที่ตั้ง",
      fr: "Accès"
    },
    /* Titre de la section acces */
    "h_access": {
      en: "How to get here",
      lo: "ວິທີມາຫາເຮົາ",
      th: "วิธีมาหาเรา",
      fr: "Comment venir"
    },
    /* Phrase sous le titre acces */
    "sub_access": {
      en: "Use the map, or show the address to your driver.",
      lo: "ໃຊ້ແຜນທີ່ ຫຼື ສະແດງທີ່ຢູ່ໃຫ້ຄົນຂັບ.",
      th: "ใช้แผนที่ หรือแสดงที่อยู่ให้คนขับ",
      fr: "Utilisez la carte, ou montrez l’adresse à votre chauffeur."
    },
    /* Titre du bloc adresse */
    "h_address": {
      en: "Address",
      lo: "ທີ່ຢູ່",
      th: "ที่อยู่",
      fr: "Adresse"
    },
    /* Bouton Google Maps */
    "maps": {
      en: "Open in Google Maps",
      lo: "ເປີດແຜນທີ່ Google",
      th: "เปิดใน Google Maps",
      fr: "Ouvrir dans Google Maps"
    },
    /* Bouton copier pour le chauffeur */
    "copy_driver": {
      en: "Copy for your driver",
      lo: "ສຳເນົາໃຫ້ຄົນຂັບ",
      th: "คัดลอกให้คนขับ",
      fr: "Copier pour le chauffeur"
    },
    /* Conseil 1, titre */
    "tip1_t": {
      en: "By tuk-tuk or taxi",
      lo: "ລົດຕຸກຕຸກ ຫຼື ແທັກຊີ",
      th: "ตุ๊กตุ๊กหรือแท็กซี่",
      fr: "En tuk-tuk ou en taxi"
    },
    /* Conseil 1, texte */
    "tip1": {
      en: "Ask for “Nongtha Minigolf, Hom 6, Ban Nongtha Neua,” and show the map.",
      lo: "ບອກຄົນຂັບ «ສວນກອຟນ້ອຍ ບ້ານໜອງທາ, ຮ່ອມ 6» ແລ້ວສະແດງແຜນທີ່.",
      th: "บอกคนขับ «Nongtha Minigolf, Hom 6, Ban Nongtha Neua» แล้วโชว์แผนที่",
      fr: "Demandez « Nongtha Minigolf, Hom 6, Ban Nongtha Neua » et montrez la carte."
    },
    /* Conseil 2, titre */
    "tip2_t": {
      en: "Near Nongtha Lake",
      lo: "ໃກ້ທະເລສາບໜອງທາ",
      th: "ใกล้ทะเลสาบหนองทา",
      fr: "Près du lac Nongtha"
    },
    /* Conseil 2, texte */
    "tip2": {
      en: "About 5 km north of the city center. Hom 6 is a small lane in Ban Nongtha-Neua.",
      lo: "ປະມານ 5 ກມ ທິດເໜືອຂອງສູນກາງເມືອງ. ຮ່ອມ 6 ແມ່ນທາງຮ່ອມນ້ອຍ ຢູ່ບ້ານໜອງທາເໜືອ.",
      th: "ประมาณ 5 กม. ทางเหนือของใจกลางเมือง Hom 6 เป็นซอยเล็กในบ้านหนองทาเหนือ",
      fr: "Environ 5 km au nord du centre-ville. Hom 6 est une petite ruelle à Ban Nongtha-Neua."
    },
    /* Conseil 3, titre */
    "tip3_t": {
      en: "Grab, Loca, bicycle or walk",
      lo: "Grab, Loca, ລົດຖີບ ຫຼື ຍ່າງ",
      th: "Grab, Loca, จักรยาน หรือเดิน",
      fr: "Grab, Loca, vélo ou à pied"
    },
    /* Conseil 3, texte */
    "tip3": {
      en: "Save the pin first, then follow the map.",
      lo: "ປັກໝຸດກ່ອນ ແລ້ວຕາມແຜນທີ່.",
      th: "ปักหมุดก่อน แล้วตามแผนที่",
      fr: "Enregistrez le point d’abord, puis suivez la carte."
    },
    /* Petit titre de la section telephone */
    "kicker_call": {
      en: "Contact",
      lo: "ຕິດຕໍ່",
      th: "ติดต่อ",
      fr: "Contact"
    },
    /* Titre de la section telephone */
    "h_call": {
      en: "Call us",
      lo: "ໂທຫາເຮົາ",
      th: "โทรหาเรา",
      fr: "Appelez-nous"
    },
    /* Phrase sous le titre telephone */
    "sub_call": {
      en: "Call or send a WhatsApp message.",
      lo: "ໂທ ຫຼື ສົ່ງ WhatsApp.",
      th: "โทรหรือส่ง WhatsApp",
      fr: "Appelez ou envoyez un message WhatsApp."
    },
    /* Bouton appeler */
    "call_now": {
      en: "Call now",
      lo: "ໂທດຽວນີ້",
      th: "โทรเลย",
      fr: "Appeler"
    },
    /* Bouton copier le numero */
    "copy_num": {
      en: "Copy number",
      lo: "ສຳເນົາເບີ",
      th: "คัดลอกเบอร์",
      fr: "Copier le numéro"
    },
    /* Petit titre des horaires */
    "kicker_hours": {
      en: "Plan your visit",
      lo: "ວາງແຜນ",
      th: "วางแผนการมา",
      fr: "Préparer votre visite"
    },
    /* Titre des horaires */
    "h_hours": {
      en: "Hours",
      lo: "ເວລາເປີດ",
      th: "เวลาเปิด",
      fr: "Horaires"
    },
    /* Libelle des jours de semaine */
    "mon": {
      en: "Mon – Thu",
      lo: "ຈັນ – ພະຫັດ",
      th: "จันทร์ – พฤหัส",
      fr: "Lun – Jeu"
    },
    /* Libelle du week-end */
    "fri": {
      en: "Fri – Sun",
      lo: "ສຸກ – ອາທິດ",
      th: "ศุกร์ – อาทิตย์",
      fr: "Ven – Dim"
    },
    /* Note sous les horaires */
    "hours_note": {
      en: "Weekdays from 15:00. Weekends from 11:00.",
      lo: "ວັນຈັນ–ພະຫັດ ເປີດ 15:00. ວັນສຸກ–ອາທິດ ເປີດ 11:00.",
      th: "วันธรรมดาเปิด 15:00 สุดสัปดาห์เปิด 11:00",
      fr: "En semaine dès 15:00. Le week-end dès 11:00."
    },
    /* Petit titre a propos */
    "kicker_about": {
      en: "About",
      lo: "ກ່ຽວກັບ",
      th: "เกี่ยวกับ",
      fr: "À propos"
    },
    /* Titre a propos */
    "h_about": {
      en: "18 outdoor holes",
      lo: "18 ຮູກາງແຈ້ງ",
      th: "18 หลุมกลางแจ้ง",
      fr: "18 trous en extérieur"
    },
    /* Presentation, phrase 1 */
    "about1": {
      en: "Outdoor mini golf in Ban Nongtha-Neua. Clubs and balls are provided.",
      lo: "ມິນິກອຟກາງແຈ້ງ ຢູ່ບ້ານໜອງທາເໜືອ. ໄມ້ກອຟ ແລະ ລູກກອຟມີໃຫ້.",
      th: "มินิกอล์ฟกลางแจ้งที่บ้านหนองทาเหนือ มีไม้กอล์ฟและลูกกอล์ฟให้",
      fr: "Mini-golf en extérieur à Ban Nongtha-Neua. Clubs et balles fournis."
    },
    /* Presentation, phrase 2 */
    "about2": {
      en: "We speak English, German and Lao.",
      lo: "ເວົ້າອັງກິດ, ເຢຍລະມັນ ແລະ ລາວໄດ້.",
      th: "พูดอังกฤษ เยอรมัน และลาวได้",
      fr: "Nous parlons anglais, allemand et lao."
    },
    /* Pastille : ouvert maintenant */
    "open": {
      en: "Open now · Vientiane time",
      lo: "ເປີດຢູ່ດຽວນີ້ · ວຽງຈັນ",
      th: "เปิดอยู่ตอนนี้ · เวียงจันทน์",
      fr: "Ouvert · heure de Vientiane"
    },
    /* Pastille : ferme maintenant */
    "closed": {
      en: "Closed now · Vientiane time",
      lo: "ປິດຢູ່ດຽວນີ້ · ວຽງຈັນ",
      th: "ปิดอยู่ตอนนี้ · เวียงจันทน์",
      fr: "Fermé · heure de Vientiane"
    },
    /* Message : adresse copiee */
    "copied_driver": {
      en: "Address copied",
      lo: "ສຳເນົາແລ້ວ",
      th: "คัดลอกแล้ว",
      fr: "Adresse copiée"
    },
    /* Message : numero copie */
    "copied_phone": {
      en: "Number copied",
      lo: "ສຳເນົາເບີແລ້ວ",
      th: "คัดลอกเบอร์แล้ว",
      fr: "Numéro copié"
    },
    /* Message : copie impossible */
    "copy_fail": {
      en: "Copy failed",
      lo: "ສຳເນົາບໍ່ໄດ້",
      th: "คัดลอกไม่ได้",
      fr: "Copie impossible"
    },
    /* Message en attendant l heure */
    "checking": {
      en: "Checking Vientiane time...",
      lo: "...",
      th: "...",
      fr: "Vérification de l’heure à Vientiane..."
    },
    /* Carte mobile, bouton */
    "map_tap": {
      en: "Open in Maps",
      lo: "ເປີດແຜນທີ່",
      th: "เปิดแผนที่",
      fr: "Ouvrir la carte"
    },
    /* Barre du bas : carte */
    "dock_maps": {
      en: "Maps",
      lo: "ແຜນທີ່",
      th: "แผนที่",
      fr: "Carte"
    },
    /* Barre du bas : appel */
    "dock_call": {
      en: "Call",
      lo: "ໂທ",
      th: "โทร",
      fr: "Appel"
    },
    /* Petit titre galerie */
    "kicker_gallery": {
      en: "Gallery",
      lo: "ຮູບພາບ",
      th: "แกลเลอรี",
      fr: "Galerie"
    },
    /* Titre galerie */
    "h_gallery": {
      en: "Photos",
      lo: "ຮູບ",
      th: "รูป",
      fr: "Photos"
    },
    /* Texte si aucune photo */
    "gallery_empty": {
      en: "Photos coming soon.",
      lo: "ຮູບຈະມາໄວໆນີ້.",
      th: "รูปจะมาเร็วๆ นี้",
      fr: "Photos bientôt disponibles."
    }
  }
};
