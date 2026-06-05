import type { LocationData } from "@/components/LocationPage";

// Echter lokaler Content je Stadtteil (reale Quartiere/Landmarks) — kein Token-Tausch.
// Reihenfolge entspricht der Prioritaet. Neue Stadtteile hier ergaenzen + page.tsx anlegen
// + Footer (stadtteilLinks) + sitemap.ts + Homepage-Karte verlinken.
export const locations: Record<string, LocationData> = {
  eimsbuettel: {
    slug: "eimsbuettel",
    name: "Eimsbüttel",
    title: "Schlüsseldienst Eimsbüttel 24/7",
    description:
      "Schlüsseldienst Hamburg-Eimsbüttel – in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Eimsbüttel – von der Osterstraße über Hoheluft-West bis zum Eppendorfer Weg. Schnell vor Ort, faire Preise, keine versteckten Kosten.",
    speedFeature: "In 20-30 Minuten in Eimsbüttel",
    areaIntro:
      "Ob rund um die Osterstraße, am Eimsbütteler Marktplatz, in Hoheluft-West oder nahe der Weidenallee – unser Techniker kennt Eimsbüttel und ist rund um die Uhr für Sie im Einsatz.",
    areas: ["Osterstraße & Eimsbütteler Marktplatz", "Hoheluft-West & Eppendorfer Weg", "Weidenallee & Schanzen-Nähe", "Lokstedter Weg & Bezirk Eimsbüttel"],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Eimsbüttel?", answer: "Wir arbeiten mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Die Kosten hängen von der Art der Türöffnung ab. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Eimsbüttel." },
      { question: "Wie schnell ist der Schlüsseldienst in Eimsbüttel vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob an der Osterstraße, in Hoheluft-West, am Eppendorfer Weg oder nahe der Weidenallee. Wir kennen die schnellsten Wege durch Eimsbüttel." },
      { question: "Bieten Sie Schlüsselnotdienst in Eimsbüttel auch nachts an?", answer: "Ja, unser Schlüsselnotdienst in Eimsbüttel ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Eimsbüttel an?", answer: "Wir bieten in Eimsbüttel das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden – alles aus einer Hand zu fairen Festpreisen." },
      { question: "Wird die Tür bei der Türöffnung in Eimsbüttel beschädigt?", answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und Spezialwerkzeug garantieren wir eine schonende Türöffnung in Eimsbüttel." },
    ],
  },
  barmbek: {
    slug: "barmbek",
    name: "Barmbek",
    title: "Schlüsseldienst Barmbek 24/7",
    description:
      "Schlüsseldienst Hamburg-Barmbek – besonders schnell vor Ort (Standort in der Nähe). Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Unser Standort am Winterhuder Weg liegt gleich um die Ecke – dadurch sind wir in Barmbek-Nord und Barmbek-Süd besonders schnell bei Ihnen. Türöffnung ohne Schäden, faire Festpreise, rund um die Uhr.",
    speedFeature: "Standort in der Nähe – oft in 15-20 Min da",
    areaIntro:
      "Von der Fuhlsbüttler Straße über die Dehnhaide bis zum Museum der Arbeit – ob Barmbek-Nord oder Barmbek-Süd, unser Techniker ist schnell bei Ihnen, rund um die Uhr.",
    areas: ["Barmbek-Nord & Fuhlsbüttler Straße", "Barmbek-Süd & Dehnhaide", "Habichtstraße & Bramfelder Straße", "Rund um Bahnhof Barmbek"],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Barmbek?", answer: "Wir arbeiten mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Barmbek." },
      { question: "Wie schnell ist der Schlüsseldienst in Barmbek vor Ort?", answer: "Besonders schnell: Unser Standort am Winterhuder Weg grenzt direkt an Barmbek. Dadurch sind wir in Barmbek-Nord und Barmbek-Süd oft schon in 15-20 Minuten bei Ihnen, rund um die Uhr." },
      { question: "Bieten Sie Schlüsselnotdienst in Barmbek auch nachts an?", answer: "Ja, unser Schlüsselnotdienst in Barmbek ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Barmbek an?", answer: "Wir bieten in Barmbek das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden – alles aus einer Hand zu fairen Festpreisen." },
      { question: "Wird die Tür bei der Türöffnung in Barmbek beschädigt?", answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und Spezialwerkzeug garantieren wir eine schonende Türöffnung in Barmbek." },
    ],
  },
  eppendorf: {
    slug: "eppendorf",
    name: "Eppendorf",
    title: "Schlüsseldienst Eppendorf 24/7",
    description:
      "Schlüsseldienst Hamburg-Eppendorf – schnell vor Ort, Standort in der Nähe. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Eppendorf – vom Eppendorfer Baum über die Isestraße bis zum Klosterstern und UKE. Unser Standort liegt in der Nähe, daher sind wir schnell bei Ihnen.",
    speedFeature: "Standort in der Nähe – oft in 15-25 Min da",
    areaIntro:
      "Ob am Eppendorfer Baum, an der Isestraße mit ihren Magnolien, rund um den Klosterstern oder am UKE – unser Techniker kennt Eppendorf und ist rund um die Uhr für Sie da.",
    areas: ["Eppendorfer Baum & Eppendorfer Landstraße", "Isestraße & Klosterstern", "Rund um das UKE", "Eppendorfer Marktplatz & Lehmweg"],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Eppendorf?", answer: "Wir arbeiten mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Eppendorf." },
      { question: "Wie schnell ist der Schlüsseldienst in Eppendorf vor Ort?", answer: "Unser Standort am Winterhuder Weg liegt nah an Eppendorf – dadurch sind wir oft schon in 15-25 Minuten bei Ihnen, ob am Eppendorfer Baum, an der Isestraße oder am UKE." },
      { question: "Bieten Sie Schlüsselnotdienst in Eppendorf auch nachts an?", answer: "Ja, unser Schlüsselnotdienst in Eppendorf ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Eppendorf an?", answer: "Wir bieten in Eppendorf das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden – alles aus einer Hand zu fairen Festpreisen." },
      { question: "Wird die Tür bei der Türöffnung in Eppendorf beschädigt?", answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und Spezialwerkzeug garantieren wir eine schonende Türöffnung in Eppendorf." },
    ],
  },
  wandsbek: {
    slug: "wandsbek",
    name: "Wandsbek",
    title: "Schlüsseldienst Wandsbek 24/7",
    description:
      "Schlüsseldienst Hamburg-Wandsbek – in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Wandsbek – von Wandsbek Markt über die Gartenstadt bis Marienthal und Eilbek. Schnell vor Ort, faire Preise, keine versteckten Kosten.",
    speedFeature: "In 20-30 Minuten in Wandsbek",
    areaIntro:
      "Ob am Wandsbek Markt und Quarree, in der Wandsbek-Gartenstadt, in Marienthal oder Eilbek – unser Techniker kennt Wandsbek und ist rund um die Uhr für Sie im Einsatz.",
    areas: ["Wandsbek Markt & Quarree", "Wandsbek-Gartenstadt", "Marienthal & Eilbek", "Wandsbeker Marktstraße & Umgebung"],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Wandsbek?", answer: "Wir arbeiten mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Wandsbek." },
      { question: "Wie schnell ist der Schlüsseldienst in Wandsbek vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob am Wandsbek Markt, in der Gartenstadt, in Marienthal oder Eilbek. Wir kennen die schnellsten Wege." },
      { question: "Bieten Sie Schlüsselnotdienst in Wandsbek auch nachts an?", answer: "Ja, unser Schlüsselnotdienst in Wandsbek ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Wandsbek an?", answer: "Wir bieten in Wandsbek das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden – alles aus einer Hand zu fairen Festpreisen." },
      { question: "Wird die Tür bei der Türöffnung in Wandsbek beschädigt?", answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und Spezialwerkzeug garantieren wir eine schonende Türöffnung in Wandsbek." },
    ],
  },
  harburg: {
    slug: "harburg",
    name: "Harburg",
    title: "Schlüsseldienst Harburg 24/7",
    description:
      "Schlüsseldienst Hamburg-Harburg – in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Harburg – von der Harburger Innenstadt über das Phoenix-Viertel bis Heimfeld und zum Binnenhafen. Schnell vor Ort, faire Preise, keine versteckten Kosten.",
    speedFeature: "In 20-30 Minuten in Harburg",
    areaIntro:
      "Ob in der Harburger Innenstadt, im Phoenix-Viertel, in Heimfeld, am Sand oder rund um die Schlossinsel und den Binnenhafen – unser Techniker ist rund um die Uhr für Sie im Einsatz.",
    areas: ["Harburger Innenstadt & Sand", "Phoenix-Viertel", "Heimfeld & TU Hamburg", "Binnenhafen & Schlossinsel"],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Harburg?", answer: "Wir arbeiten mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Harburg." },
      { question: "Wie schnell ist der Schlüsseldienst in Harburg vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob in der Innenstadt, im Phoenix-Viertel, in Heimfeld oder am Binnenhafen." },
      { question: "Bieten Sie Schlüsselnotdienst in Harburg auch nachts an?", answer: "Ja, unser Schlüsselnotdienst in Harburg ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Harburg an?", answer: "Wir bieten in Harburg das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden – alles aus einer Hand zu fairen Festpreisen." },
      { question: "Wird die Tür bei der Türöffnung in Harburg beschädigt?", answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und Spezialwerkzeug garantieren wir eine schonende Türöffnung in Harburg." },
    ],
  },
  bergedorf: {
    slug: "bergedorf",
    name: "Bergedorf",
    title: "Schlüsseldienst Bergedorf 24/7",
    description:
      "Schlüsseldienst Hamburg-Bergedorf – in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Bergedorf – vom Bergedorfer Zentrum über den Serrahn bis Lohbrügge und Sande. Schnell vor Ort, faire Preise, keine versteckten Kosten.",
    speedFeature: "In 20-30 Minuten in Bergedorf",
    areaIntro:
      "Ob im Bergedorfer Zentrum rund um Serrahn und CCB, am Bergedorfer Schloss, in Lohbrügge oder in Sande – unser Techniker ist rund um die Uhr für Sie im Einsatz.",
    areas: ["Bergedorfer Zentrum & Serrahn", "Rund um das Bergedorfer Schloss", "Lohbrügge", "Sande & Nettelnburg"],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Bergedorf?", answer: "Wir arbeiten mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Bergedorf." },
      { question: "Wie schnell ist der Schlüsseldienst in Bergedorf vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob im Zentrum am Serrahn, am Bergedorfer Schloss, in Lohbrügge oder in Sande." },
      { question: "Bieten Sie Schlüsselnotdienst in Bergedorf auch nachts an?", answer: "Ja, unser Schlüsselnotdienst in Bergedorf ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Bergedorf an?", answer: "Wir bieten in Bergedorf das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden – alles aus einer Hand zu fairen Festpreisen." },
      { question: "Wird die Tür bei der Türöffnung in Bergedorf beschädigt?", answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und Spezialwerkzeug garantieren wir eine schonende Türöffnung in Bergedorf." },
    ],
  },
  ottensen: {
    slug: "ottensen",
    name: "Ottensen",
    title: "Schlüsseldienst Ottensen 24/7",
    description:
      "Schlüsseldienst Hamburg-Ottensen – in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Ottensen – von der Ottenser Hauptstraße über den Spritzenplatz bis zur Zeißstraße und zum Mercado. Schnell vor Ort, faire Preise, keine versteckten Kosten.",
    speedFeature: "In 20-30 Minuten in Ottensen",
    areaIntro:
      "Ob an der Ottenser Hauptstraße, am Spritzenplatz, an der Bahrenfelder Straße oder rund um den Bahnhof Altona und das Mercado – unser Techniker kennt Ottensen und ist rund um die Uhr für Sie da.",
    areas: ["Ottenser Hauptstraße & Spritzenplatz", "Bahrenfelder Straße & Zeißstraße", "Rund um Bahnhof Altona & Mercado", "Große Brunnenstraße & Umgebung"],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Ottensen?", answer: "Wir arbeiten mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Ottensen." },
      { question: "Wie schnell ist der Schlüsseldienst in Ottensen vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob an der Ottenser Hauptstraße, am Spritzenplatz, an der Zeißstraße oder am Bahnhof Altona." },
      { question: "Bieten Sie Schlüsselnotdienst in Ottensen auch nachts an?", answer: "Ja, unser Schlüsselnotdienst in Ottensen ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Ottensen an?", answer: "Wir bieten in Ottensen das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden – alles aus einer Hand zu fairen Festpreisen." },
      { question: "Wird die Tür bei der Türöffnung in Ottensen beschädigt?", answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und Spezialwerkzeug garantieren wir eine schonende Türöffnung in Ottensen." },
    ],
  },
  wilhelmsburg: {
    slug: "wilhelmsburg",
    name: "Wilhelmsburg",
    title: "Schlüsseldienst Wilhelmsburg 24/7",
    description:
      "Schlüsseldienst Hamburg-Wilhelmsburg – in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Wilhelmsburg – vom Reiherstiegviertel über Kirchdorf bis zum Inselpark und Wilhelmsburger Rathaus. Schnell vor Ort, faire Preise, keine versteckten Kosten.",
    speedFeature: "In 20-30 Minuten in Wilhelmsburg",
    areaIntro:
      "Ob im Reiherstiegviertel, rund um das Wilhelmsburger Rathaus, in Kirchdorf oder am Inselpark – unser Techniker ist auf der Elbinsel rund um die Uhr für Sie im Einsatz.",
    areas: ["Reiherstiegviertel", "Rund um das Wilhelmsburger Rathaus", "Kirchdorf & Georgswerder", "Inselpark & Umgebung"],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Wilhelmsburg?", answer: "Wir arbeiten mit fairen Festpreisen – ohne versteckte Kosten oder Nacht-Aufschläge. Rufen Sie uns an und wir nennen Ihnen vorab den genauen Preis für Ihren Einsatz in Wilhelmsburg." },
      { question: "Wie schnell ist der Schlüsseldienst in Wilhelmsburg vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob im Reiherstiegviertel, in Kirchdorf, am Rathaus oder am Inselpark." },
      { question: "Bieten Sie Schlüsselnotdienst in Wilhelmsburg auch nachts an?", answer: "Ja, unser Schlüsselnotdienst in Wilhelmsburg ist 24 Stunden am Tag, 7 Tage die Woche erreichbar – auch nachts, am Wochenende und an Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Wilhelmsburg an?", answer: "Wir bieten in Wilhelmsburg das volle Programm: Türöffnung, Autoöffnung, Tresoröffnung, Schließzylinder-Wechsel, Einbruchschutz und Reparatur von Einbruchschäden – alles aus einer Hand zu fairen Festpreisen." },
      { question: "Wird die Tür bei der Türöffnung in Wilhelmsburg beschädigt?", answer: "Nein, in den allermeisten Fällen öffnen wir Ihre Tür komplett schadensfrei. Mit über 19 Jahren Erfahrung und Spezialwerkzeug garantieren wir eine schonende Türöffnung in Wilhelmsburg." },
    ],
  },
};

export const locationSlugs = Object.keys(locations);
