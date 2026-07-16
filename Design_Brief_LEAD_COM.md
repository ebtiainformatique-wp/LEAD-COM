# Design Brief — Site Web LEAD Marketing & Communication

*Document complémentaire au PRD — à fournir à l'IA/au développeur en charge de l'intégration visuelle du site.*

---

## 1. Direction créative en une phrase

**LEAD COM se distingue en donnant de la valeur aux marques de ses clients — le site doit lui-même incarner ce principe : sobre et professionnel dans sa structure, mais avec un ou deux gestes visuels qui font qu'on ne l'oublie pas.** L'identité existante de l'agence (bleus, flèches-chevrons, ton "fait à la main" dans les titres, signature manuscrite "Value Your Brand!") est **la matière première du design** — on ne réinvente pas la marque, on la met en scène sur le web.

Ce document code la charte visuelle déjà utilisée par LEAD COM dans sa plaquette commerciale, adaptée aux usages web (responsive, accessibilité, interactions).

---

## 2. Palette de couleurs (tokens)

| Nom du token | Hex | Usage |
|---|---|---|
| `--lead-navy` | `#0B3D91` | Couleur de marque principale — logo, titres de section, fond des bandeaux chevrons |
| `--lead-blue` | `#1F6FD6` | Accent principal — boutons, liens, icônes, éléments interactifs |
| `--lead-sky` | `#5BC2E7` | Bleu clair — dégradés, fonds de blocs secondaires, hover |
| `--lead-ink` | `#1A1A1A` | Texte courant sur fond clair |
| `--lead-paper` | `#FFFFFF` | Fond principal des pages |
| `--lead-mist` | `#F4F8FC` | Fond alterné des sections (au lieu de bandes grises génériques) |
| `--lead-alert-red` | `#E11E2A` | Réservé strictement aux bandeaux "Étude de cas / Réalisation client" (ex. CAMRAIL, OK FOODS) — ne jamais utiliser pour la navigation ou les CTA génériques |

**Règle de dégradé signature :** les bandeaux de titre de section utilisent un dégradé chevron à deux tons, `--lead-sky` → `--lead-navy`, orienté à 15° (rappel direct des flèches doubles de la brochure). Ce dégradé chevron **ne doit apparaître qu'à cet endroit précis** — c'est la signature de la marque, pas un fond décoratif à répéter partout.

**Contraste :** tout texte sur `--lead-navy` ou `--lead-blue` doit être en blanc (`--lead-paper`) ; jamais de texte bleu sur bleu.

---

## 3. Typographie (tokens)

| Rôle | Police | Poids/style | Usage |
|---|---|---|---|
| **Display / Titres de section** | `Baloo 2` (Google Fonts) | 700, arrondie, amicale | Titres "QUI SOMMES-NOUS", "NOS OFFRES", etc. — capitales, tracking large (+2%) |
| **Signature de marque** | `Caveat` ou `Dancing Script` | 600, script manuscrit | Uniquement pour "Value Your Brand !" — apparaît 2 fois maximum sur tout le site (hero + footer) pour garder son impact |
| **Corps de texte** | `Inter` | 400 / 500 | Paragraphes, listes de prestations, contenu courant |
| **Utilitaire / labels / légendes** | `Inter` | 500, petites capitales, tracking large | Étiquettes de type "2022-2025", noms de clients sous logos, filtres du portfolio |

**Échelle typographique (base 16px) :**
- H1 (hero) : 56px / 1.05 — Baloo 2
- H2 (titre de section) : 36px / 1.1 — Baloo 2
- H3 (sous-titre / nom d'offre) : 24px / 1.2 — Baloo 2
- Corps : 17px / 1.6 — Inter
- Petit texte / légende : 13px / 1.4 — Inter, uppercase, tracking 0.08em

---

## 4. Concept de mise en page

### Principe directeur : **"7 couleurs, un fil conducteur"**
Chacune des 7 marques de service (Lead Brand, Research, Opérationnel, Digital, Goodies, Light, Training) reçoit une **teinte d'accent dérivée** de la palette principale (nuances de `--lead-blue`/`--lead-sky` à luminosité variable, jamais une couleur hors-famille), pour qu'on puisse les distinguer visuellement dans le portfolio et le menu "Nos offres", tout en restant clairement "famille LEAD". Exemple :
- Lead Brand → `#1F6FD6`
- Lead Research → `#2E86DE`
- Lead Opérationnel → `#4FA3E3`
- Lead Digital → `#3C6FD1`
- Lead Goodies → `#5BC2E7`
- Lead Light → `#2F5FA8`
- Lead Training → `#6FB6E0`

(Ces valeurs sont des points de départ ; à ajuster une fois les vrais logos des 7 marques récupérés, pour rester cohérent avec leurs pictogrammes existants.)

### Wireframe — Page d'accueil (desktop)

```
┌──────────────────────────────────────────────┐
│  LOGO LEAD          Menu →  [Contactez-nous]  │  ← nav sticky, fond blanc/ombre légère
├──────────────────────────────────────────────┤
│                                                │
│   "Value Your Brand !"  (script, grand)       │
│   Accroche 2 lignes sur le contexte            │  ← HERO : signature visuelle
│   concurrentiel + CTA                          │     (parapluie bleu qui se
│   [illustration parapluie bleu / ballon bleu]  │     détache — voir §5)
│                                                │
├──────────────────────────────────────────────┤
│ ▸▸▸ QUI SOMMES-NOUS  (bandeau chevron)         │
│  Texte court + bouton "en savoir plus"         │
├──────────────────────────────────────────────┤
│ ▸▸▸ NOS OFFRES  (bandeau chevron)              │
│  [7 cartes en grille 4x2, une par marque]      │
├──────────────────────────────────────────────┤
│ ▸▸▸ ILS NOUS FONT CONFIANCE (bandeau chevron)  │
│  [carrousel logos clients, fond --lead-mist]   │
├──────────────────────────────────────────────┤
│ ▸▸▸ RÉALISATIONS (bandeau chevron)             │
│  [3 études de cas en avant, cartes image+texte]│
├──────────────────────────────────────────────┤
│  Footer : coordonnées, liens, "Value Your      │
│  Brand !" en petit, mentions légales           │
└──────────────────────────────────────────────┘
```

### Wireframe — Carte "Offre" (utilisée en grille sur la page Nos Offres)

```
┌───────────────────────┐
│ [pictogramme rond,     │  ← teinte propre à l'offre (voir palette dérivée)
│  couleur de l'offre]   │
│                        │
│ Lead Brand              (Baloo 2, H3)
│ Pour vous imposer...     (Inter, 2 lignes d'accroche)
│                        │
│ • Réflexion stratégique
│ • Construction des marques
│ • ...                  │
│                        │
│ [En savoir plus →]     │  ← lien texte, couleur de l'offre
└───────────────────────┘
```

### Wireframe — Frise "Méthodologie" (12 étapes)

Éviter une simple liste à puces : utiliser une **frise horizontale scrollable sur mobile / grille 4×3 sur desktop**, chaque étape étant une bulle numérotée reliée par un trait, dans l'esprit chevron. Les numéros (1 à 12) sont justifiés ici car il s'agit d'un vrai processus séquentiel (contrairement à un usage décoratif de "01/02/03").

```
① Réception Brief → ② Diagnostic → ③ Kick-off → ④ Idée Forte
⑤ Brief Créa → ⑥ Recommandation → ⑦ Prés. interne → ⑧ Prés. client
⑨ Débriefs/Budget → ⑩ Validation → ⑪ Implémentation → ⑫ Contrôle
```

---

## 5. Signature visuelle (l'élément mémorable)

**Le parapluie bleu qui se distingue.** C'est l'image la plus forte et la plus caractéristique de la brochure originale (parapluies gris/noirs uniformes avec un seul parapluie bleu qui capte le regard). C'est LE geste visuel à conserver et à mettre en scène dans le hero de la page d'accueil :

- Version simple : illustration SVG stylisée (pas de photo stock générique) d'un parapluie bleu émergeant d'une rangée de parapluies gris, en haut du hero.
- Version animée (optionnelle, discrète) : au chargement, le parapluie bleu "s'ouvre" légèrement ou se soulève d'1-2px au hover — un seul micro-mouvement, pas une animation complexe.
- Ce motif ne doit être utilisé **qu'une seule fois** sur le site (page d'accueil), pour préserver son impact — ne pas le décliner en filigrane sur d'autres pages.

**Élément secondaire (structurel, pas décoratif) : le bandeau-chevron.** Chaque titre de section de niveau 2 est introduit par la forme de flèches doubles qui existe déjà dans la brochure (▸▸ TITRE). Ce motif structurel encode une vraie information : on avance, on progresse — cohérent avec le discours de l'agence sur la performance et la croissance des marques.

---

## 6. Style des composants

- **Boutons primaires (CTA)** : fond `--lead-blue`, texte blanc, coins arrondis 8px (pas 0 — l'univers de la marque est amical, pas institutionnel-strict), état hover en `--lead-navy`.
- **Boutons secondaires** : contour `--lead-blue`, fond transparent, texte `--lead-blue`.
- **Cartes** (offres, réalisations, clients) : fond blanc, ombre douce (`box-shadow: 0 4px 16px rgba(11,61,145,0.08)`), coin arrondi 12px, jamais de bordure dure noire.
- **Icônes** : style trait fin (line icons), monochromes dans la teinte de la section — éviter les icônes 3D "clipart" génériques malgré leur présence dans la brochure imprimée (les silhouettes 3D grises de la brochure sont un choix daté à ne pas reproduire sur le web ; les remplacer par des icônes line-art modernes qui gardent le même sens).
- **Séparateurs de section** : jamais un simple `<hr>` — utiliser le motif chevron en dégradé bleu (fin bandeau de 4-6px) en bas de chaque section, comme sur la brochure.

---

## 7. Ton visuel des images/photos

- Privilégier des photos réelles côté "réalisations client" (shooting Advans, team building MIA, etc.) présentées en **couleurs naturelles, cadrage franc**, pas de filtre bleu appliqué dessus (on garde les couleurs des marques clientes intactes dans les études de cas — le bleu LEAD reste dans l'interface autour, pas sur les photos).
- Les illustrations "corporate" (bonhommes 3D blancs génériques) présentes dans la brochure d'origine sont à **moderniser** : les remplacer par des illustrations line-art ou des photos réelles d'équipe si disponibles, pour éviter un rendu daté sur le web.

---

## 8. Mouvement / interactions

- Apparition douce (fade + léger slide de 12px vers le haut) des sections au scroll, une seule fois par section, pas de répétition à chaque scroll.
- Survol des cartes d'offres : légère élévation (translateY(-4px) + ombre plus prononcée).
- Le bandeau-chevron des titres peut avoir un très léger effet de "tirage" (les flèches qui glissent d'1-2px) au scroll d'entrée — sobre, pas continu.
- Respecter `prefers-reduced-motion` : désactiver les translations/animations si l'utilisateur l'a demandé au niveau système.

---

## 9. Accessibilité & responsive

- Contraste minimum AA (4.5:1) entre texte et fond partout, y compris sur les bandeaux `--lead-navy`.
- Focus clavier visible (contour `--lead-sky` de 2px) sur tous les éléments interactifs.
- Breakpoints : mobile (<640px, grille des offres en 1 colonne, frise méthodologie en scroll horizontal), tablette (640–1024px, 2 colonnes), desktop (>1024px, 3-4 colonnes selon section).

---

## 10. Ce qu'il ne faut PAS faire

- Ne pas utiliser de fond crème/beige avec accent terracotta, ni de thème sombre avec accent vert acide/vermillon : la marque a déjà une identité bleue forte, il faut la respecter plutôt que suivre une esthétique IA par défaut.
- Ne pas transformer les 7 marques de service en 7 couleurs totalement différentes du nuancier (pas de rouge/vert/jaune/violet) — elles doivent rester une famille de bleus reconnaissable.
- Ne pas multiplier les animations (l'agence vend de la clarté et de l'efficacité, pas du gadget visuel).
- Ne pas réutiliser le rouge `--lead-alert-red` ailleurs que pour les bandeaux "réalisation client" — il ne doit jamais concurrencer le bleu de marque.

---

## 11. Résumé pour l'IA de développement

En une ligne : **un site bleu marine/blanc, chaleureux grâce à une typographie de titres arrondie et une signature manuscrite, structuré par des bandeaux-chevrons signature, avec un seul geste visuel fort (le parapluie bleu du hero), 7 nuances de bleu pour distinguer les offres, des cartes à ombre douce et coins arrondis, et des photos réelles non filtrées pour les réalisations clients.**
