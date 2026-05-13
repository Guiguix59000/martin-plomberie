// ============================================================
// FICHIER DE CONFIGURATION — modifiez ce fichier pour mettre
// à jour les textes, services, avis et zones sans toucher au HTML.
// ============================================================

const CONFIG = {

  company: {
    name: 'Martin',
    nameAccent: 'Plomberie',
    badge: 'Artisan certifié RGE',
    phone: '04 77 XX XX XX',
    phoneHref: 'tel:+33477000000',
    email: 'contact@martin-plomberie.fr',
  },

  // ──────────────────────────────────────────────────────────
  // FORMSPREE — pour activer l'envoi d'email :
  //   1. Créez un compte sur https://formspree.io
  //   2. Créez un nouveau formulaire et renseignez l'email du client
  //   3. Copiez l'ID du formulaire (ex: "xyzabc12") ci-dessous
  // ──────────────────────────────────────────────────────────
  formspreeId: 'VOTRE_ID_ICI',

  hero: {
    titleLines: ['Plombier à', 'Saint-Étienne', '& alentours'],
    titleAccentIndex: 1,
    subtitle: 'Dépannage, installation et rénovation. Intervention rapide 7j/7 — devis gratuit sous 24h.',
    ctaPrimary: 'Demander un devis',
    ctaSecondary: 'Voir nos services',
  },

  // target   = valeur finale animée
  // decimals = nombre de décimales affichées
  stats: [
    { label: 'Clients satisfaits', target: 350, prefix: '+', suffix: '',    decimals: 0 },
    { label: "D'expérience",       target: 12,  prefix: '',  suffix: ' ans', decimals: 0 },
    { label: 'Note Google',        target: 4.9, prefix: '',  suffix: '/5',   decimals: 1 },
  ],

  // accentColor = couleur de la bordure gauche de la carte
  services: [
    {
      name: 'Dépannage urgent',
      desc: 'Fuite, canalisation bouchée, robinet cassé — intervention en moins de 2h dans la Loire.',
      iconPath: '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>',
      accentColor: '#1a2a3a',
    },
    {
      name: 'Rénovation salle de bain',
      desc: 'Pose de douche, baignoire, vasque. Remplacement complet de la plomberie sur devis.',
      iconPath: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
      accentColor: '#e8a735',
    },
    {
      name: 'Chauffe-eau & sanitaire',
      desc: 'Installation et entretien de chauffe-eau, VMC, systèmes de chauffage au sol.',
      iconPath: '<path d="M12 2a5 5 0 015 5v3H7V7a5 5 0 015-5zM7 10h10l1 11H6L7 10z"/>',
      accentColor: '#2e7d62',
    },
  ],

  whyUs: [
    {
      title: 'Disponible 7j/7',
      desc: 'Urgences ou rendez-vous planifiés, nous nous adaptons à votre emploi du temps.',
    },
    {
      title: 'Devis gratuit et transparent',
      desc: 'Aucune surprise sur la facture. Le prix annoncé est le prix final.',
    },
    {
      title: 'Certifié et assuré',
      desc: 'Garantie décennale, assurance RC pro — votre logement est entre de bonnes mains.',
    },
  ],

  // Plusieurs avis : ils défilent automatiquement toutes les 6 secondes.
  testimonials: [
    {
      text: "Intervention rapide le dimanche soir pour une fuite sous l'évier. Professionnel, propre et honnête sur le prix. Je recommande sans hésiter.",
      author: 'Marie Dupont',
      location: 'Saint-Étienne, Loire',
      initials: 'MD',
      rating: 5,
    },
    {
      text: "Très satisfait de l'intervention pour la rénovation de ma salle de bain. Travail soigné, délais respectés et prix honnête. Du bon travail.",
      author: 'Pierre Martin',
      location: 'Firminy, Loire',
      initials: 'PM',
      rating: 5,
    },
    {
      text: "Dépannage réalisé en moins d'une heure un samedi matin. Efficace, poli et pas de mauvaises surprises sur la facture. Très recommandé.",
      author: 'Sophie Bernard',
      location: 'Saint-Chamond, Loire',
      initials: 'SB',
      rating: 5,
    },
  ],

  zones: [
    'Saint-Étienne', 'Firminy', 'Saint-Chamond',
    'Rive-de-Gier', 'Montbrison', 'Andrézieux', 'Le Chambon',
  ],

  cta: {
    title: 'Besoin d\'un plombier ?',
    subtitle: 'Devis gratuit — Réponse sous 24h — Intervention rapide',
    btnText: 'Nous contacter',
  },

  footer: {
    links: [
      { label: 'Mentions légales', href: '#' },
      { label: 'CGV', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
    ],
    copyright: '© 2025 Martin Plomberie',
  },
};
