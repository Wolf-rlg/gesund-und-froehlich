/**
 * ============================================================
 *  CONTENT.JS – Zentrales Datenobjekt für gesund-und-froehlich.com
 * ============================================================
 *  Alle Texte und Bild-URLs an EINER Stelle.
 *  Änderungen hier werden beim nächsten Seitenaufruf sichtbar,
 *  ohne dass die HTML-Struktur angefasst werden muss.
 * ============================================================
 */

const CONTENT = {

  /* ───────── META / SEO ───────── */
  meta: {
    title: "Gesund & Fröhlich | Osteopathie & Physiotherapie in Berlin-Weißensee",
    description:
      "Osteopathie, Physiotherapie, Säuglingsbehandlung und Matrix-Rhythmus-Therapie in Berlin-Weißensee. Ganzheitliche Behandlung für Erwachsene, Kinder und Säuglinge – Heilpraktiker für Physiotherapie."
  },

  /* ───────── BILDER ───────── */
  images: {
    logo:
      "https://static.wixstatic.com/media/90a441_9ed1134216c2425abd2fc1ad28abadad~mv2.jpg/v1/fill/w_508,h_242,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_9ed1134216c2425abd2fc1ad28abadad~mv2.jpg",
    footerLogo:
      "https://static.wixstatic.com/media/90a441_20aea49910914d6eae1d4afd1a10684e~mv2.jpg/v1/fill/w_241,h_57,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_20aea49910914d6eae1d4afd1a10684e~mv2.jpg",
    teamFull:
      "https://static.wixstatic.com/media/90a441_57b403f08e40410882feee969ef02982~mv2.jpg/v1/fill/w_600,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_57b403f08e40410882feee969ef02982~mv2.jpg",
    timPortrait:
      "https://static.wixstatic.com/media/90a441_51666ae3b3a2412288a04773e9b7f974~mv2.jpg/v1/fill/w_480,h_720,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_51666ae3b3a2412288a04773e9b7f974~mv2.jpg",
    katrinPortrait:
      "https://static.wixstatic.com/media/90a441_5fa5176f7d6143719cce740e06c44543~mv2.jpg/v1/fill/w_480,h_720,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_5fa5176f7d6143719cce740e06c44543~mv2.jpg",
    praxisAussen:
      "https://static.wixstatic.com/media/90a441_695ce0be13b34428b8236a40c67bb540~mv2.jpg/v1/fill/w_694,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_695ce0be13b34428b8236a40c67bb540~mv2.jpg",
    praxisInnen:
      "https://static.wixstatic.com/media/90a441_870e3dbf7142407b8d3cf29f2955346d~mv2.jpg/v1/fill/w_566,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_870e3dbf7142407b8d3cf29f2955346d~mv2.jpg",
    behandlung:
      "https://static.wixstatic.com/media/90a441_2783222c642a488b8b197261190c716e~mv2.jpg/v1/fill/w_386,h_181,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_2783222c642a488b8b197261190c716e~mv2.jpg",
    saeugling:
      "https://static.wixstatic.com/media/90a441_5d1e697169ec47d7954a8a0eb2a009da~mv2.jpg/v1/fill/w_266,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_5d1e697169ec47d7954a8a0eb2a009da~mv2.jpg",
    osteopathieInfo:
      "https://static.wixstatic.com/media/90a441_1248839258f0428682a42e2d150773ef~mv2.jpg/v1/fill/w_244,h_614,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_1248839258f0428682a42e2d150773ef~mv2.jpg",
    matrixGeraet:
      "https://static.wixstatic.com/media/90a441_50925de06d6747449338486d7ade78e4~mv2.jpg/v1/fill/w_436,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_50925de06d6747449338486d7ade78e4~mv2.jpg",
    matrixBehandlung:
      "https://static.wixstatic.com/media/90a441_69cc2579f68446e38012711b2a62a551~mv2.jpg/v1/fill/w_436,h_206,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_69cc2579f68446e38012711b2a62a551~mv2.jpg",
    visitenkarte:
      "https://static.wixstatic.com/media/90a441_02cad247f76240fdb72c625bd178eac4~mv2.jpg/v1/fill/w_374,h_173,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_02cad247f76240fdb72c625bd178eac4~mv2.jpg",
    teamSmall:
      "https://static.wixstatic.com/media/90a441_8619d137f0de46c3aae565b43b469f44~mv2.jpg/v1/fill/w_386,h_180,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_8619d137f0de46c3aae565b43b469f44~mv2.jpg"
  },

  /* ───────── NAVIGATION ───────── */
  nav: {
    brand: "Gesund & Fröhlich",
    phone: "0176 32 89 42 94",
    phoneHref: "tel:+4917632894294",
    links: [
      { label: "Leistungen", href: "#leistungen" },
      { label: "Osteopathie", href: "#osteopathie" },
      { label: "Matrix-Therapie", href: "#matrix" },
      { label: "Über uns", href: "#portrait" },
      { label: "Praxis", href: "#praxis" },
      { label: "Infos & Preise", href: "#faq" },
      { label: "Kontakt", href: "#kontakt" }
    ]
  },

  /* ───────── HERO ───────── */
  hero: {
    badge: "Osteopathie & Physiotherapie in Berlin-Weißensee",
    title: "Der Ursache auf die Spur kommen… Selbstheilung unterstützen.",
    subtitle:
      "Sie suchen eine osteopathische oder physiotherapeutische Behandlung, die umfassend ist und nicht nur symptomatisch, sondern komplexe Strukturen bzw. Störungen behandelt? Den Körper bei der Selbstheilung unterstützen? Endlich langfristig aufgebaute Probleme lösen?",
    subtitleHighlight: "Dann sind Sie bei uns – 'Gesund und Fröhlich' – richtig!",
    text: "Wir begleiten Sie auf dem Weg zu mehr Gesundheit und Wohlbefinden, weniger Schmerz, einem besseren Körpergefühl und mehr Aktivität. Unsere Herangehensweise ist ein Zusammenspiel osteopathischer und manualtherapeutischer Behandlungstechniken und ermöglicht einen komplexen, umfassenden Therapieansatz.",
    cta1: "Termin anfragen",
    cta2: "Leistungen ansehen",
    highlights: [
      "Heilpraktiker für Physiotherapie – auch ohne Verordnung",
      "Osteopathische Behandlungen für Erwachsene, Kinder & Säuglinge",
      "Matrix-Rhythmus-Therapie"
    ]
  },

  /* ───────── LEISTUNGEN ───────── */
  leistungen: {
    title: "Unser Leistungsspektrum",
    lead: "Wir verbinden osteopathische, manualtherapeutische und physiotherapeutische Methoden zu einem individuell abgestimmten Behandlungskonzept.",
    items: [
      {
        title: "Physiotherapie | Heilpraktiker für Physiotherapie",
        text: "Als Heilpraktiker für Physiotherapie dürfen wir Patienten auch ohne ärztliche Weisung, also ohne Verordnung, physiotherapeutisch legal behandeln (Manuelle Therapie n. Typaldos, Cranio-mandibuläre Dysfunktionen | CMD…). Die Behandlung kann dann von privaten Kassen oder Heilpraktikerversicherungen erstattet werden.",
        list: [
          "Manuelle Therapie nach Typaldos",
          "CMD (Cranio-Mandibuläre Dysfunktionen)",
          "Kinesiology- & Spiraldynamik Taping",
          "Manuelle Lymphdrainage",
          "Krankengymnastik | Ultraschall | Elektrotherapie",
          "Therapeutisches Klettern",
          "Massage"
        ],
        icon: "🦴"
      },
      {
        title: "Funktionelle Osteopathie (F.O.)",
        text: "Die funktionelle Osteopathie zielt darauf ab, die Funktionalität einer Struktur wiederherzustellen und ihr Zusammenspiel mit den umliegenden Strukturen z.B. andere Gelenke, Muskeln oder Sehnen, aber auch Organen zu normalisieren. Hierbei wird vorrangig über eine Aktivierung der Selbstheilungskräfte gearbeitet.",
        list: [
          "Craniosacrale osteopathische Techniken",
          "Viszerale osteopathische Techniken",
          "Parietale osteopathische Techniken"
        ],
        icon: "🤲"
      },
      {
        title: "Säuglingsbehandlung | Osteopathische Techniken",
        text: "Das Neugeborenen- und Säuglingsalter ist ein Schwerpunkt der osteopathischen Arbeit, da in dieser Lebensphase Entwicklungsstörungen und andere z.B. geburtsbedingte Beschwerden des Kindes durch sanfte osteopathische Techniken besonders gut beseitigt oder gemildert werden können.",
        list: [
          "Perinatale osteopathische Techniken",
          "Fehlhaltungen & Asymmetrien",
          "Motorische & Entwicklungsstörungen",
          "Koliken & Schreikinder",
          "Konzentrationsprobleme",
          "Präventive Nachkontrolle nach Geburt"
        ],
        icon: "👶"
      },
      {
        title: "Matrix-Rhythmus-Therapie (MaRhyThe)",
        text: "Unsere Körperzellen schwingen rhythmisch, wenn sie gesund sind. Funktioniert diese Rhythmik nicht mehr richtig, kann es zu Verlangsamungen und Stauungen im Bereich des gesamten Muskel-, Knochen-, Knorpel-, Gefäß- und Nervengewebes kommen. Die Matrix-Rhythmus-Therapie wirkt dem entgegen.",
        list: [
          "Akute & chronische Schmerzen",
          "Migräne, Kopfschmerz, Tinnitus",
          "Frozen Shoulder, Kapselfibrose",
          "Rheuma, Fibromyalgie, Arthrose",
          "Narben & Verwachsungen",
          "Haltungsschäden"
        ],
        icon: "〰️"
      },
      {
        title: "Cranio-mandibuläre Dysfunktion (CMD)",
        text: "Die CMD ist ein Überbegriff für strukturelle, funktionelle, biochemische und mitunter psychische Fehlregulationen der Muskel- oder Gelenkfunktion der Kiefergelenke. Viele Beschwerden wie Kopf- und Gesichtsschmerzen, Kiefergelenksgeräusche, Tinnitus, Schwindel und auch Ohrenschmerzen können ihre Ursache in einer CMD haben.",
        list: [
          "Kopf- & Gesichtsschmerzen",
          "Kiefergelenksgeräusche",
          "Tinnitus & Schwindel",
          "Interdisziplinäre Zusammenarbeit mit Zahnärzten & Kieferorthopäden"
        ],
        icon: "🦷"
      },
      {
        title: "Kinesio-Taping",
        text: "Ziel des Kinesio-Taping-Verfahrens ist es, körpereigene Heilungsprozesse durch ein spezielles Material sowie entsprechende Anlagemethoden zu unterstützen. Das ganzheitliche Betrachten des menschlichen Körpers mit seinen Zusammenhängen über Haut, Muskeln, Faszien usw. bildet die Grundlage des weltweit erfolgreich angewandten Kinesio Tapings.",
        list: [
          "Muskuläre Verspannungen",
          "Lymphologisch & Gynäkologisch",
          "ISG-Probleme & Bandscheibenprobleme",
          "Verstauchungen & Bewegungseinschränkungen"
        ],
        icon: "🩹"
      }
    ]
  },

  /* ───────── OSTEOPATHIE DETAIL ───────── */
  osteopathie: {
    title: "Osteopathische Behandlungen",
    subtitle: "'Hilfe zur Selbstheilung'",
    text1:
      "Die Osteopathie beruht auf dem Prinzip, dass der menschliche Körper als Einheit betrachtet werden sollte. Die funktionelle Osteopathie zielt darauf ab, die Funktionalität einer Struktur wiederherzustellen und ihr Zusammenspiel mit den umliegenden Strukturen z.B. andere Gelenke, Muskeln oder Sehnen, aber auch Organe zu normalisieren. Es wird nicht nur die betroffene Struktur isoliert behandelt, sondern stets auch im Verhältnis zum umliegenden Gewebe.",
    text2:
      "Wir bei 'Gesund und Fröhlich' arbeiten vorrangig myofaszial, also an Muskeln und Faszien. Faszien sind Strukturen aus Bindegewebe, welche unter anderem Muskel- und Organsysteme umgeben und verbinden. Dies führt dazu, dass Ursache und Wirkung von Schmerzen oftmals nicht an einem Ort vereint sind. Durch myofasziale Druck- und Zugtechniken wird eine Normalisierung der Gewebespannung angeregt und die Durchblutung der Gewebe, vor allem aber ihre Beweglichkeit gegeneinander verbessert.",
    schwerpunkte: [
      "Akute & chronische Bewegungseinschränkungen",
      "Tinnitus, Migräne, Kopfschmerz, Schwindel",
      "Kieferschmerzen, Kieferknacken und Kieferfehlstellungen",
      "Akute & chronische Schmerzsyndrome",
      "Wirbelsäulen- & Rückenschmerzen",
      "Gelenkschmerzen & -blockierungen",
      "Nachsorge nach orthopädischen & chirurgischen Eingriffen"
    ],
    kassen:
      "Patienten verschiedenster Kassen haben seit 2012 die Möglichkeit, osteopathische Behandlungen gegen Rezept in Anspruch zu nehmen – z.B. TK, BKK Verband Plus, BKK Gildemeister Seidensticker, AOK Plus, IKK Classic, Actimonda, BKK Mobil Oil, Atlas BKK, BIG, HEK u.v.m.",
    kassenHinweis:
      "Als Gründungsmitglieder des BVfO (Berufsverband funktionelle Osteopathie) sind wir als Leistungserbringer von o.g. Kassen gelistet und anerkannt. Die Behandlung muss durch eine ärztliche Verordnung legitimiert werden und wird wie ein Privatrezept abgerechnet.",
    saeugling: {
      title: "Osteopathische Behandlung für Säuglinge & Kinder",
      text: "Hat Ihr Säugling oder Kind Beschwerden wie z.B. Fehlhaltungen, Asymmetrien, Entwicklungsstörungen, motorische Störungen, Koliken, ist ein Schreikind oder hat Konzentrationsprobleme? Oder wollen Sie einfach untersuchen lassen, ob Ihr Kind die Anstrengungen der Geburt gut überstanden hat? In der Neugeborenen- und Säuglingsphase können weitreichende Fehlentwicklungen und bestehende Dysfunktionen besonders gut osteopathisch behandelt werden, aber auch größere Kinder sprechen gut auf osteopathische Behandlungen an."
    }
  },

  /* ───────── MATRIX-RHYTHMUS-THERAPIE ───────── */
  matrix: {
    title: "Matrix-Rhythmus-Therapie",
    quote: "'Ohne Rhythmus kein Leben.' – Albert Einstein",
    text1:
      "Unsere Körperzellen schwingen rhythmisch, wenn sie gesund sind. Funktioniert diese Rhythmik nicht mehr richtig, kann es in der Matrix (Zellumgebung) zu Verlangsamungen und Stauungen / Funktionseinschränkungen oder sogar Funktionsverlusten im Bereich des gesamten Muskel-, Knochen-, Knorpel-, Gefäß- und Nervengewebes kommen.",
    text2:
      "Diesen Prozessen wirkt die Matrix-Rhythmus-Therapie (entwickelt von Dr. Ulrich G. Randoll) entgegen. Das Therapiegerät hat einen Resonator, der mechanische Schwingungen erzeugt, die analog mit den körpereigenen Schwingungen sind. So werden u.a. Skelettmuskulatur und Nervensystem sanft angeregt und Stoffwechselprozesse können sich binnen kurzer Zeit normalisieren – die Heilung wird angeregt.",
    funktionTitle: "Wie funktioniert die Behandlung?",
    funktionText:
      "Das Matrixmobil ist als verlängerter Arm des Therapeuten zu verstehen, der manuell den Gewebezustand bzw. die Spannungen erspürt und dann mittels des speziell geformten Resonators durch Schwingungen zielgerichtet und tiefenwirksam behandelt. Die Matrix-Rhythmus-Therapie ist eine sanfte Anwendung, die gut in unseren allumfassenden therapeutischen Ansatz passt und sich hervorragend mit der physiotherapeutischen / osteopathischen Arbeit kombinieren lässt.",
    hinweis:
      "Natürlich sind auch Rahmenbedingungen wie ausgewogene Ernährung, Bewegung, Sauerstoff, Wärme und eine aktive Mitarbeit des Patienten wichtig für den Behandlungserfolg.",
    anwendungen: [
      "Akute und chronische Schmerzen",
      "Migräne, Kopfschmerz, Tinnitus",
      "Verspannungsschmerzen",
      "Eingeschränkte Beweglichkeit",
      "Nach Operationen / Unfällen",
      "Frozen Shoulder, Kapselfibrose",
      "Rheuma, Fibromyalgie, Arthrose",
      "Beschleunigung der Nervenregeneration",
      "Karpal-Tunnel-Syndrom",
      "Narben, Verwachsungen, Kontrakturen",
      "Haltungsschäden"
    ]
  },

  /* ───────── HP PHYSIOTHERAPIE DETAIL ───────── */
  hpPhysio: {
    methoden: [
      "Manuelle Therapie nach Typaldos",
      "CMD (Cranio-Mandibuläre Dysfunktion)",
      "Kinesiology- & Spiraldynamik Taping",
      "Manuelle Lymphdrainage",
      "Krankengymnastik | Ultraschall | ET",
      "Therapeutisches Klettern"
    ],
    beschwerden: [
      "Rückenschmerzen in HWS / BWS / LWS",
      "Bewegungseinschränkungen oder Schmerzen in den Gliedmaßen",
      "Kopfschmerz / Migräne",
      "Behandlungen nach Verletzungen verschiedener Art (Knie, Schulter etc.)",
      "Ödeme primär / sekundär"
    ],
    hinweis:
      "Als Heilpraktiker für Physiotherapie dürfen wir Patienten auch ohne ärztliche Weisung, also ohne Verordnung, ganz legal behandeln. Die Leistungen werden anschließend privat in Rechnung gestellt. Die meisten Privatkassen und auch einige gesetzliche Krankenkassen erstatten die entstandenen Kosten mittlerweile auf Nachfrage.",
    selbstzahler:
      "Physiotherapeutische Behandlungen können Sie bei uns gerne jederzeit als Selbstzahler, Mitglied privater Kasse (auch Beihilfe) oder über die BG (in Folge eines Arbeitsunfalls) in Anspruch nehmen. Patienten mit gesetzlicher Krankenversicherung können unsere Leistungen mit einem Rezept für Osteopathie oder bei Zusatzversicherung für Heilpraktikerleistungen erstattet bekommen.",
    typaldos: {
      title: "Manuelle Therapie nach Typaldos",
      text: "Das Faszienmodell (FDM) nach Typaldos ist eine Kombination aus visueller Diagnostik, manuellen und osteopathischen Techniken. Stephen Typaldos (D.O. | Arzt und Notfallmediziner, 1957–2006) entdeckte immer wiederkehrende Muster in der Körpersprache und Schmerzbeschreibung seiner Patienten. Diesen ordnete er sechs fasziale Dysfunktionen und spezifische Behandlungstechniken zu. Er erkannte, dass Patienten intuitiv wissen, welche Behandlungsschritte für sie wichtig sind, denn sie drückten es durch typische Gesten und Worte aus. Die darauf aufbauende Behandlung war oft sofort lindernd oder wirksam."
    },
    kinesioTaping: {
      title: "Kinesio-Taping",
      text: "Ziel des Kinesio-Taping-Verfahrens ist es, körpereigene Heilungsprozesse durch ein spezielles Material sowie entsprechende Anlagemethoden zu unterstützen. Das ganzheitliche Betrachten des menschlichen Körpers mit seinen Zusammenhängen über Haut, Muskeln, Faszien usw. bildet die Grundlage des weltweit erfolgreich angewandten Kinesio Tapings.",
      anwendungen: [
        "Muskuläre Verspannungen",
        "Nach div. Operationen",
        "Lymphologisch & Gynäkologisch",
        "Kopfschmerz & ISG-Probleme",
        "Bewegungseinschränkungen & Bandscheibenprobleme",
        "Verstauchungen"
      ]
    }
  },

  /* ───────── PORTRAIT / ÜBER UNS ───────── */
  portrait: {
    title: "Wir über uns",
    lead: "Wir sind ein junges, 'fröhliches' Praxisteam.",
    teamIntro:
      "Ähnlich unserer familiären Bindung (verheiratet / 2 Kinder), betrachten wir auch die Symbiose physiotherapeutischer und osteopathischer Arbeit als eine erfolgreich funktionierende Einheit: Eine umfassende Betrachtung und Behandlung von Muskel-, Skelett-, Nerven- & Organsystemen unter dem Kompromiss zweier Betrachtungswinkel.",
    philosophy:
      "Die Basis einer erfolgreichen Therapie ist unserer Auffassung nach immer eine ausführliche Untersuchung, Befundung, Dokumentation und regelmäßige Zwischenbefunde. Neben Ihrer Gesundheit ist Ihr Wohlbefinden unser größtes Anliegen. In einer angenehm ruhigen Atmosphäre können Sie dem Alltag entfliehen und entspannt in unsere Behandlung gehen, die ihre Wirksamkeit so besonders gut entfalten kann…",
    cta: "Überzeugen Sie sich selbst von unserer Arbeit.",
    sectionTitle: "Ihre Therapeuten",
    members: [
      {
        name: "Tim Fröhlich",
        qualifications: [
          "Physiotherapeut seit 2008",
          "F.O. (Therapeut für funktionelle Osteopathie) seit 2012",
          "Heilpraktiker für Physiotherapie seit 2014",
          "Ehemaliger Leistungssportler Handball",
          "Fortbildungen in perinataler Osteopathie, MT nach Typaldos, CMD, Kinesiology Taping",
          "Dozent bei 'Cura Kurse' (c-u-r-a.com) seit 2015"
        ],
        quote: "'Unser Wissen ist nicht vorhanden, wenn es nicht benutzt wird.' – Igor Strawinsky",
        quoteOsteo:
          "'Osteopathie ist eine wissenschaftliche Kenntnis von Anatomie und Physiologie in den Händen einer Person mit Intelligenz und Fähigkeiten, die dieses Wissen zum Nutzen von Menschen einsetzt, die krank oder verwundet sind, durch Spannungen, Schocks, Stürze oder mechanischen Dysfunktionen oder durch Verletzungen des Körpers jeglicher Art.' – Dr. A. T. Still"
      },
      {
        name: "Katrin Fröhlich",
        qualifications: [
          "Physiotherapeutin seit 2007",
          "Bachelor für Physiotherapie",
          "F.O. (Therapeutin für funktionelle Osteopathie) seit 2012",
          "Heilpraktikerin für Physiotherapie seit 2014",
          "Ehemalige Leistungssportlerin Schwimmen",
          "Fortbildungen in perinataler Osteopathie, Osteopathie für Schwangere, CMD, Kinesiology Taping, Lymphdrainage"
        ],
        quote:
          "'Heilende Hände beziehen ihre Kraft aus einem heilen Herzen.' – Sigrun Hopfensperger",
        quoteOsteo:
          "'Ich muss es fühlen, um es zu wissen!' – W. G. Sutherland"
      }
    ]
  },

  /* ───────── PRAXISRÄUME ───────── */
  praxis: {
    title: "Eindrücke unserer Praxisräume",
    lead: "In einer angenehm ruhigen Atmosphäre können Sie dem Alltag entfliehen und entspannt in unsere Behandlung gehen.",
    gallery: [
      {
        src: "https://static.wixstatic.com/media/90a441_695ce0be13b34428b8236a40c67bb540~mv2.jpg/v1/fill/w_694,h_462,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_695ce0be13b34428b8236a40c67bb540~mv2.jpg",
        alt: "Praxis Gesund und Fröhlich – Außenansicht"
      },
      {
        src: "https://static.wixstatic.com/media/90a441_870e3dbf7142407b8d3cf29f2955346d~mv2.jpg/v1/fill/w_566,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/90a441_870e3dbf7142407b8d3cf29f2955346d~mv2.jpg",
        alt: "Behandlungsraum Gesund und Fröhlich"
      },
      {
        src: "https://static.wixstatic.com/media/90a441_2783222c642a488b8b197261190c716e~mv2.jpg/v1/fill/w_386,h_181,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_2783222c642a488b8b197261190c716e~mv2.jpg",
        alt: "Osteopathische Behandlung"
      },
      {
        src: "https://static.wixstatic.com/media/90a441_8619d137f0de46c3aae565b43b469f44~mv2.jpg/v1/fill/w_386,h_180,al_c,lg_1,q_80,enc_avif,quality_auto/90a441_8619d137f0de46c3aae565b43b469f44~mv2.jpg",
        alt: "Praxisteam Gesund und Fröhlich"
      }
    ]
  },

  /* ───────── FAQ / INFOS & PREISE ───────── */
  faq: {
    title: "Fragen und Antworten",
    items: [
      {
        q: "Wie lange dauert eine Behandlung?",
        a: "Eine osteopathische Behandlung oder Matrixtherapie dauert 50–60 Minuten. Innerhalb dieser Stunde nehmen wir uns natürlich auch Zeit für Patientengespräch, Anamnese der Beschwerden und Behandlungsbefund. Eine osteopathische Säuglingsbehandlung dauert ungefähr 45 Minuten. Die Dauer einer physiotherapeutischen Behandlung / Heilpraktikerbehandlung (Physio) hängt von der jeweiligen Indikation, Verordnung und/oder dem Wunsch des Patienten ab und variiert zwischen ½ Stunde und 1 Stunde Behandlungszeit."
      },
      {
        q: "Wie hoch sind die Kosten?",
        a: "Die Höhe der Behandlungskosten bei einer osteopathischen Behandlung oder Matrixtherapie belaufen sich auf 100 €. Die Zahlung kann bar, per EC oder auf Rechnung erfolgen. Liegt eine Verordnung (Rezept) für osteopathische Behandlungen vor, können die Kosten ggf. von der jeweiligen Krankenkasse anteilig erstattet werden. Die Bedingung der Zugehörigkeit eines osteopathischen Berufsverbandes ist gegeben (BVfO). Bei physiotherapeutischen Behandlungen richtet sich die Höhe der Kosten nach der Gebührenordnung (GebüH) bzw. den Sätzen der Kasse/Beihilfe/BG-Versicherung. Akutbehandlungen können wir als Heilpraktiker für Physiotherapie grundsätzlich ohne Verordnung durchführen. Bei einer halben Stunde Behandlungszeit belaufen sich die Kosten auf 50 € – eine Stunde Behandlung kostet 100 €. Ist eine private Heilpraktiker-Zusatzversicherung vorhanden, können die Kosten natürlich auch hier erstattet werden."
      },
      {
        q: "Wie oft sollte / kann ich mich behandeln lassen?",
        a: "Wie bei vielen anderen medizinischen Therapien ist es bei osteopathischen und physiotherapeutischen Behandlungen so, dass ein akutes Problem meist weniger Sitzungen benötigt als chronische Beschwerden. Abhängig ist dies natürlich auch immer von der Diagnose / eventuellen Grunderkrankungen. Nach 2–5 Behandlungen sollten sich die Beschwerden spürbar gebessert haben. Um dem Körper / den Strukturen Zeit zu geben, sich nach der Behandlung zu regulieren, sind je nach Beschwerden 1–4 Wochen zwischen den Behandlungen sinnvoll. Bei akuten Beschwerden erfolgt die Behandlung in der Regel in kürzeren Intervallen. Säuglinge werden mitunter in kurzen Abständen behandelt, da Behandlungserfolge sonst durch die recht häufigen Entwicklungsschübe wieder rückläufig sein können. Erst wenn akute Beschwerden / Symptomatiken behoben sind, ist es ggf. sinnvoll, den Behandlungserfolg in einem größeren Abstand noch einmal zu überprüfen."
      },
      {
        q: "Was muss ich mitbringen?",
        a: "Vorhandene Befunde (MRT, CT, Röntgen…) sind hilfreich für Anamnese und Befund. Ein Handtuch als Behandlungsunterlage bekommen Sie vor Ort von uns geliehen."
      }
    ],
    cta: "Wir freuen uns auf dich / euch!"
  },

  /* ───────── DOCTOLIB ───────── */
  doctolib: {
    title: "Online-Terminbuchung",
    placeholder:
      "Hier wird in Kürze das Doctolib-Buchungs-Widget eingebunden. Sie können dann direkt online einen Termin bei uns buchen.",
    hint: "Bis dahin erreichen Sie uns telefonisch, per WhatsApp oder über das Kontaktformular unten."
  },

  /* ───────── KONTAKT ───────── */
  kontakt: {
    title: "Kontakt",
    lead: "Sie interessieren sich für unsere Leistungen oder möchten einen Termin vereinbaren? Kontaktieren Sie uns telefonisch (auch SMS und WhatsApp), per E-Mail oder über das Formular und wir melden uns so bald wie möglich bei Ihnen!",
    phone: "0176 32 89 42 94",
    phoneHref: "tel:+4917632894294",
    whatsapp: "https://wa.me/4917632894294",
    sms: "sms:+4917632894294",
    email: "info@gesund-und-froehlich.com",
    emailHref: "mailto:info@gesund-und-froehlich.com",
    address: "Tassostr. 21, 13086 Berlin",
    addressDetail: "Berlin-Weißensee",
    hours: [
      { day: "Montag", time: "9:00 – 18:00" },
      { day: "Dienstag", time: "9:00 – 16:00" },
      { day: "Mittwoch", time: "9:00 – 18:00" },
      { day: "Donnerstag", time: "9:00 – 18:00" },
      { day: "Freitag", time: "9:00 – 14:00" }
    ],
    formLabels: {
      name: "Name",
      email: "E-Mail-Adresse",
      phone: "Telefon / Handy",
      message: "Ihre Nachricht (ggf. inkl. Wunschzeiten)",
      submit: "Nachricht senden",
      consent:
        "Ich stimme zu, dass meine Angaben zur Terminvergabe verarbeitet werden. Die Daten werden nur zur Terminvergabe gespeichert und nicht an Dritte weitergegeben."
    },
    absageHinweis:
      "Bitte beachten Sie, dass vereinbarte Termine bis spätestens 48 Stunden vorher abgesagt werden müssen, falls Ihnen etwas dazwischen kommt. Andernfalls müssen wir den Termin leider in Rechnung stellen.",
    datenschutz:
      "Alle hier abgegebenen Daten sind freiwillig und genehmigen uns, Sie zur Terminvergabe zu kontaktieren. Die Daten werden nur zur Terminvergabe gespeichert und nicht an Dritte weitergegeben. Sollten Sie hiermit nicht einverstanden sein, können Sie uns auch gerne telefonisch oder über info@gesund-und-froehlich.com direkt kontaktieren."
  },

  /* ───────── FOOTER ───────── */
  footer: {
    copyright: "© 2026 Gesund & Fröhlich – Heilpraktiker für Physiotherapie",
    address: "Tel 0176 32894294 · Tassostr. 21 · 13086 Berlin-Weißensee",
    links: [
      { label: "Impressum", href: "https://www.gesund-und-froehlich.com/impressum" },
      { label: "Datenschutz", href: "https://www.gesund-und-froehlich.com/datenschutzerklarung" }
    ]
  }
};
