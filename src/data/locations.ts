import type { LocationData } from "@/components/LocationPage";

// Echter lokaler Content je Stadtteil (reale Quartiere/Landmarks) — kein Token-Tausch.
// Jede Seite hat: individuelle localContent-Absätze (Bebauung, typische Einsätze, Anfahrt),
// individuell formulierte FAQ-Antworten und nearby-Links zu Nachbar-Stadtteilen (Cross-Linking).
// Neue Stadtteile hier ergaenzen + page.tsx anlegen + Footer (stadtteilLinks) + sitemap.ts
// + Homepage-Karte verlinken.
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
    localContent: [
      "Eimsbüttel gehört zu den dichtesten Altbauvierteln Hamburgs: Gründerzeithäuser mit alten Holztüren und Kastenschlössern rund um die Osterstraße, dazu sanierte Etagenwohnungen Richtung Hoheluft. Solche Türen verlangen Erfahrung und das passende Werkzeug – wir öffnen auch betagte Wohnungstüren in aller Regel völlig ohne Schäden, denn gerade bei alten Türblättern wäre jeder Bohrschaden teuer.",
      "Unser Techniker kennt den Verkehr zwischen Grindel, Weidenallee und Osterstraße und findet auch dann schnell zu Ihnen, wenn am Eimsbütteler Marktplatz mal wieder kein Parkplatz frei ist. Den Festpreis nennen wir Ihnen vorab am Telefon, bezahlt wird nach getaner Arbeit – per Karte oder bar, ganz wie Sie möchten.",
    ],
    nearby: [
      { slug: "eppendorf", name: "Eppendorf" },
      { slug: "ottensen", name: "Ottensen" },
      { slug: "altona", name: "Altona" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Eimsbüttel?", answer: "Bei uns gibt es Festpreise statt böser Überraschungen: Sie schildern uns kurz die Situation – zugefallene Tür oder abgeschlossen, Altbau oder Neubau – und wir nennen Ihnen am Telefon den Endpreis für Ihren Einsatz in Eimsbüttel. Nacht- oder Wochenendaufschläge berechnen wir nicht." },
      { question: "Wie schnell ist der Schlüsseldienst in Eimsbüttel vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob an der Osterstraße, in Hoheluft-West, am Eppendorfer Weg oder nahe der Weidenallee. Wir kennen die schnellsten Wege durch Eimsbüttel." },
      { question: "Bieten Sie Schlüsselnotdienst in Eimsbüttel auch nachts an?", answer: "Ja – auch um 3 Uhr nachts stehen wir an Ihrer Tür. Unser Notdienst für Eimsbüttel läuft an 365 Tagen im Jahr rund um die Uhr, und nachts kostet die Türöffnung bei uns genauso viel wie tagsüber." },
      { question: "Welche Leistungen bieten Sie in Eimsbüttel an?", answer: "Von der klassischen Türöffnung über Auto- und Tresoröffnung bis zum Zylinderwechsel nach Schlüsselverlust. Gerade in den Eimsbütteler Altbauten rüsten wir außerdem häufig Einbruchschutz nach – vom Zusatzschloss bis zum Panzerriegel." },
      { question: "Wird die Tür bei der Türöffnung in Eimsbüttel beschädigt?", answer: "In fast allen Fällen nicht: Eine zugefallene Tür öffnen wir mit Spezialwerkzeug spurlos. Das gilt auch für die alten Holztüren, die in Eimsbüttels Gründerzeithäusern noch überall im Einsatz sind – hier arbeiten wir besonders behutsam." },
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
    localContent: [
      "Barmbek ist für uns ein Heimspiel: Unser Standort am Winterhuder Weg grenzt direkt an Barmbek-Süd. Die typischen Rotklinker-Wohnblocks an der Fuhlsbüttler Straße, die sanierten Etagenhäuser an der Dehnhaide, die Wohnanlagen an der Habichtstraße – wir kennen die Türen und Schließanlagen im Viertel aus hunderten Einsätzen.",
      "Ob Sie nach dem Einkauf im Fuhle-Center vor verschlossener Tür stehen, der Schlüssel im Zylinder abgebrochen ist oder das Schloss der Kellertür klemmt: Meist sind wir in 15 bis 20 Minuten da. Ersatzzylinder in gängigen Größen haben wir im Wagen dabei, sodass alles in einem Termin erledigt ist.",
    ],
    nearby: [
      { slug: "winterhude", name: "Winterhude" },
      { slug: "bramfeld", name: "Bramfeld" },
      { slug: "wandsbek", name: "Wandsbek" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Barmbek?", answer: "Den Preis erfahren Sie bei uns vor der Anfahrt: Am Telefon nennen wir Ihnen den Festpreis für Ihre Türöffnung in Barmbek – abhängig davon, ob die Tür nur zugefallen oder abgeschlossen ist. Versteckte Kosten oder Aufschläge für Nacht und Wochenende gibt es nicht." },
      { question: "Wie schnell ist der Schlüsseldienst in Barmbek vor Ort?", answer: "Besonders schnell: Unser Standort am Winterhuder Weg grenzt direkt an Barmbek. Dadurch sind wir in Barmbek-Nord und Barmbek-Süd oft schon in 15-20 Minuten bei Ihnen, rund um die Uhr." },
      { question: "Bieten Sie Schlüsselnotdienst in Barmbek auch nachts an?", answer: "Selbstverständlich – und weil Barmbek quasi vor unserer Haustür liegt, sind wir auch nachts besonders schnell da. Der Notdienst ist durchgehend besetzt, an Feiertagen und Wochenenden genauso wie unter der Woche." },
      { question: "Welche Leistungen bieten Sie in Barmbek an?", answer: "Alles rund um Tür und Schloss: Türöffnung, Autoöffnung, Tresoröffnung, Austausch von Schließzylindern und Einbruchschutz. In den Barmbeker Wohnblocks kümmern wir uns auch um klemmende Haustüren und defekte Schließanlagen – in Absprache mit der Hausverwaltung." },
      { question: "Wird die Tür bei der Türöffnung in Barmbek beschädigt?", answer: "Nein – zugefallene Türen öffnen wir grundsätzlich schadenfrei, und auch bei abgeschlossenen Türen gelingt das in den allermeisten Fällen. Sollte doch einmal ein Zylinder aufgebohrt werden müssen, haben wir den passenden Ersatz direkt dabei." },
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
    localContent: [
      "Zwischen Eppendorfer Baum, Isestraße und Klosterstern stehen einige der schönsten Altbauten Hamburgs – mit entsprechend hochwertigen Türen, Mehrfachverriegelungen und Schließanlagen. Hier arbeiten wir besonders schonend: Öffnung ohne Kratzer im Lack, beim Zylinderwechsel ausschließlich Markenqualität, auf Wunsch mit Sicherungskarte.",
      "Auch rund ums UKE sind wir regelmäßig im Einsatz – etwa wenn im Schichtdienst der Wohnungsschlüssel in der Klinik liegen geblieben ist. Vom Winterhuder Weg aus sind wir in wenigen Minuten in Eppendorf, oft schneller, als Sie einen Ersatzschlüssel organisieren könnten.",
    ],
    nearby: [
      { slug: "winterhude", name: "Winterhude" },
      { slug: "eimsbuettel", name: "Eimsbüttel" },
      { slug: "barmbek", name: "Barmbek" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Eppendorf?", answer: "Sie zahlen bei uns den Preis, der am Telefon vereinbart wurde – keinen Cent mehr. Nennen Sie uns kurz die Situation, und Sie bekommen sofort den Festpreis für Ihren Einsatz in Eppendorf, ohne Zuschläge für Nacht, Wochenende oder Anfahrt." },
      { question: "Wie schnell ist der Schlüsseldienst in Eppendorf vor Ort?", answer: "Unser Standort am Winterhuder Weg liegt nah an Eppendorf – dadurch sind wir oft schon in 15-25 Minuten bei Ihnen, ob am Eppendorfer Baum, an der Isestraße oder am UKE." },
      { question: "Bieten Sie Schlüsselnotdienst in Eppendorf auch nachts an?", answer: "Ja, rund um die Uhr an 7 Tagen die Woche. Gerade nachts profitieren Sie von der kurzen Anfahrt aus dem Nachbarstadtteil – kein langes Warten im Treppenhaus oder vor der Haustür." },
      { question: "Welche Leistungen bieten Sie in Eppendorf an?", answer: "Türöffnung, Autoöffnung, Tresoröffnung, Zylinderwechsel und Einbruchschutz. In Eppendorfs Altbauten beraten wir zusätzlich oft zu Mehrfachverriegelungen und einbruchhemmenden Beschlägen – hochwertige Türen verdienen hochwertige Sicherung." },
      { question: "Wird die Tür bei der Türöffnung in Eppendorf beschädigt?", answer: "Unser Anspruch ist die spurenfreie Öffnung – und die gelingt fast immer. Besonders bei den hochwertigen Wohnungstüren in Eppendorf arbeiten wir ausschließlich mit schonenden Öffnungstechniken statt mit der Bohrmaschine." },
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
    localContent: [
      "Wandsbek hat viele Gesichter: den Trubel am Wandsbek Markt mit Quarree und Busbahnhof, die ruhigen Straßen der Gartenstadt, Villen in Marienthal und dichte Wohnblocks in Eilbek. Entsprechend unterschiedlich sind die Türen – vom einfachen Zylinder im Mehrfamilienhaus bis zur Mehrfachverriegelung im Einfamilienhaus. Wir haben für alle gängigen Schlösser Werkzeug und Ersatzteile an Bord.",
      "Rund um die Wandsbeker Marktstraße und in Eilbek öffnen wir am häufigsten zugefallene Wohnungstüren, in Marienthal und der Gartenstadt sichern wir nach Einbrüchen auch Fenster und Nebeneingänge. Ein Anruf genügt: Festpreis vorab, Techniker unterwegs, erledigt.",
    ],
    nearby: [
      { slug: "barmbek", name: "Barmbek" },
      { slug: "farmsen", name: "Farmsen" },
      { slug: "bramfeld", name: "Bramfeld" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Wandsbek?", answer: "Das hängt von der Art der Öffnung ab – eine zugefallene Tür ist günstiger als eine abgeschlossene. Was beide gemeinsam haben: Sie erfahren den Festpreis vor der Anfahrt am Telefon, und dabei bleibt es. Auch nachts und am Wochenende in ganz Wandsbek." },
      { question: "Wie schnell ist der Schlüsseldienst in Wandsbek vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob am Wandsbek Markt, in der Gartenstadt, in Marienthal oder Eilbek. Wir kennen die schnellsten Wege." },
      { question: "Bieten Sie Schlüsselnotdienst in Wandsbek auch nachts an?", answer: "Ja. Unser Notdienst ist rund um die Uhr besetzt – wenn Sie nachts am Wandsbek Markt aus der Bahn steigen und der Schlüssel fehlt, erreichen Sie uns genauso wie sonntagmorgens in der Gartenstadt." },
      { question: "Welche Leistungen bieten Sie in Wandsbek an?", answer: "Das komplette Programm: Tür-, Auto- und Tresoröffnung, Zylinderwechsel, Schließanlagen und Einbruchschutz. Für die Einfamilienhäuser in Marienthal und der Gartenstadt gehören auch Fenstersicherungen und Panzerriegel zu unseren häufigsten Aufträgen." },
      { question: "Wird die Tür bei der Türöffnung in Wandsbek beschädigt?", answer: "In den allermeisten Fällen bleibt Ihre Tür völlig unversehrt – dafür sorgen über 19 Jahre Erfahrung und professionelles Öffnungswerkzeug. Falls ein Zylinder doch ersetzt werden muss, montieren wir den neuen sofort mit." },
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
    localContent: [
      "Auch südlich der Elbe lassen wir Sie nicht warten: In der Harburger Innenstadt und im Phoenix-Viertel öffnen wir regelmäßig Wohnungstüren in Altbauten und WG-Zimmern rund um die TU Hamburg. In Heimfeld und am Binnenhafen kommen Büro- und Gewerbetüren dazu – vom Ladenlokal am Sand bis zum Loft auf der Schlossinsel.",
      "Gerade im Phoenix-Viertel mit seinen älteren Schließanlagen lohnt sich nach einer Öffnung oft der Zylinderwechsel – wir sagen Ihnen ehrlich, was nötig ist und was nicht. Die Anfahrt läuft je nach Verkehrslage durch den Elbtunnel oder über die Elbbrücken; unser Techniker wählt die schnellere Route.",
    ],
    nearby: [{ slug: "wilhelmsburg", name: "Wilhelmsburg" }],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Harburg?", answer: "Für Einsätze in Harburg gelten dieselben Festpreise wie nördlich der Elbe – ohne Anfahrtszuschlag. Rufen Sie an, schildern Sie kurz die Lage, und Sie bekommen den verbindlichen Endpreis, bevor unser Techniker losfährt." },
      { question: "Wie schnell ist der Schlüsseldienst in Harburg vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob in der Innenstadt, im Phoenix-Viertel, in Heimfeld oder am Binnenhafen." },
      { question: "Bieten Sie Schlüsselnotdienst in Harburg auch nachts an?", answer: "Ja – auch spät nachts, wenn keine S-Bahn mehr fährt und der Schlüssel weg ist, kommen wir nach Harburg. Der Notdienst läuft 24/7, an Feiertagen genauso wie unter der Woche." },
      { question: "Welche Leistungen bieten Sie in Harburg an?", answer: "Neben Tür-, Auto- und Tresoröffnung übernehmen wir in Harburg viele Zylinderwechsel und Schließanlagen-Reparaturen – gerade in den Altbauten des Phoenix-Viertels. Auch Gewerbekunden am Binnenhafen betreuen wir, inklusive Einbruchschutz." },
      { question: "Wird die Tür bei der Türöffnung in Harburg beschädigt?", answer: "Fast nie: Wir setzen auf zerstörungsfreie Öffnungstechnik, die auch bei älteren Türen funktioniert. Sollte ein Schloss bereits defekt sein, tauschen wir es direkt vor Ort – der Wagen ist mit Ersatzzylindern bestückt." },
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
    localContent: [
      "Bergedorf hat von allem etwas: Einkaufstrubel am Sachsentor und im CCB, Altbauten rund ums Bergedorfer Schloss, Großwohnanlagen in Lohbrügge und Einfamilienhäuser Richtung Nettelnburg. Entsprechend breit ist unser Einsatzspektrum – vom einfachen Wohnungszylinder bis zur Schließanlage im Geschäftshaus.",
      "In Lohbrügge sind es meist zugefallene Wohnungstüren, in den Einfamilienhausgebieten eher verlorene Schlüssel samt Zylinderwechsel und anschließendem Einbruchschutz. Unser Fahrzeug ist komplett ausgestattet, sodass fast jeder Auftrag in einem einzigen Termin erledigt ist – auch im äußersten Südosten Hamburgs ohne Anfahrtszuschlag.",
    ],
    nearby: [
      { slug: "wandsbek", name: "Wandsbek" },
      { slug: "farmsen", name: "Farmsen" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Bergedorf?", answer: "Auch für Bergedorf gilt: Festpreis am Telefon, keine Anfahrtspauschale, keine Nacht- oder Feiertagszuschläge. Sie wissen vor dem Einsatz genau, was die Türöffnung kostet – egal ob am Serrahn oder draußen in Nettelnburg." },
      { question: "Wie schnell ist der Schlüsseldienst in Bergedorf vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob im Zentrum am Serrahn, am Bergedorfer Schloss, in Lohbrügge oder in Sande." },
      { question: "Bieten Sie Schlüsselnotdienst in Bergedorf auch nachts an?", answer: "Ja, unser Notdienst erreicht Bergedorf zu jeder Tages- und Nachtzeit – 365 Tage im Jahr. Auch wenn Sie spätabends vom Bahnhof Bergedorf kommen und vor verschlossener Tür stehen, sind wir zügig da." },
      { question: "Welche Leistungen bieten Sie in Bergedorf an?", answer: "Türöffnung, Autoöffnung und Tresoröffnung, dazu Zylinderwechsel und Einbruchschutz. In den Einfamilienhausgebieten von Sande bis Nettelnburg montieren wir häufig Panzerriegel und Fenstersicherungen – gern mit ehrlicher Beratung, was Ihr Haus wirklich braucht." },
      { question: "Wird die Tür bei der Türöffnung in Bergedorf beschädigt?", answer: "Der Regelfall ist die schadensfreie Öffnung – mit Spezialwerkzeug statt Brechstange. Nur wenn ein Schloss defekt oder abgeschlossen und hochwertig gesichert ist, muss gelegentlich der Zylinder dran glauben; Ersatz montieren wir sofort." },
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
    localContent: [
      "Ottensen ist Altbau pur: schmale Treppenhäuser, alte Holztüren und rund um Spritzenplatz und Ottenser Hauptstraße nicht selten noch original Kastenschlösser aus der Gründerzeit. Solche Türen öffnen wir mit Spezialwerkzeug fast immer völlig schadenfrei – bei einem hundert Jahre alten Türblatt wäre jeder Bohrschaden ein teurer Fehler.",
      "Zwischen Fabrik, Zeißstraße und Mercado ist Parken eng, doch unser Techniker kennt die Ecken und steht trotzdem schnell vor Ihrer Tür. Auch für die Büros und Ateliers in den umgebauten Fabriketagen sind wir regelmäßig im Einsatz – von der Notöffnung bis zur Wartung ganzer Schließanlagen.",
    ],
    nearby: [
      { slug: "altona", name: "Altona" },
      { slug: "eimsbuettel", name: "Eimsbüttel" },
      { slug: "blankenese", name: "Blankenese" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Ottensen?", answer: "Wir nennen Ihnen den kompletten Festpreis am Telefon – abhängig davon, ob Ihre Tür nur ins Schloss gefallen oder abgeschlossen ist. Danach ändert sich nichts mehr: keine Anfahrtskosten, keine Zuschläge, auch nicht nachts in Ottensen." },
      { question: "Wie schnell ist der Schlüsseldienst in Ottensen vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob an der Ottenser Hauptstraße, am Spritzenplatz, an der Zeißstraße oder am Bahnhof Altona." },
      { question: "Bieten Sie Schlüsselnotdienst in Ottensen auch nachts an?", answer: "Ja – wenn nach dem Konzert in der Fabrik oder dem Abend am Spritzenplatz der Schlüssel fehlt, erreichen Sie uns auch um Mitternacht. Der Notdienst für Ottensen ist ohne Pause besetzt, das ganze Jahr über." },
      { question: "Welche Leistungen bieten Sie in Ottensen an?", answer: "Vom Öffnen zugefallener Altbautüren über Auto- und Tresoröffnung bis zum Nachrüsten von Einbruchschutz in Erdgeschosswohnungen. Für die Gewerbeflächen in Ottensens Fabriklofts warten und erweitern wir auch komplette Schließanlagen." },
      { question: "Wird die Tür bei der Türöffnung in Ottensen beschädigt?", answer: "Gerade bei Ottensens alten Holztüren gilt: erst die sanfte Methode. Mit Öffnungsnadeln und Spezialwerkzeug bleibt die Tür in fast allen Fällen makellos – das schützt auch Stuck, Zarge und den Geldbeutel." },
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
    localContent: [
      "Die Elbinsel gehört fest zu unserem Einsatzgebiet: Altbauten im Reiherstiegviertel, die Neubauquartiere rund um den Inselpark aus der Bauausstellung und klassische Mehrfamilienhäuser in Kirchdorf – jede Ecke Wilhelmsburgs hat ihre eigenen Türen und Schließsysteme, und wir kennen sie.",
      "Über die Elbbrücken oder die Wilhelmsburger Reichsstraße sind wir schnell auf der Insel – auch nachts, wenn jede Minute vor der verschlossenen Tür zu viel ist. Am Telefon bekommen Sie sofort Preis und voraussichtliche Ankunftszeit, danach können Sie sich auf beides verlassen.",
    ],
    nearby: [{ slug: "harburg", name: "Harburg" }],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Wilhelmsburg?", answer: "Ein Anruf, ein Preis: Für Wilhelmsburg nennen wir Ihnen den Festpreis direkt am Telefon – ohne Insel-Zuschlag, ohne Anfahrtskosten, ohne Aufpreis bei Nacht. Erst wenn der Preis für Sie passt, fährt unser Techniker los." },
      { question: "Wie schnell ist der Schlüsseldienst in Wilhelmsburg vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob im Reiherstiegviertel, in Kirchdorf, am Rathaus oder am Inselpark." },
      { question: "Bieten Sie Schlüsselnotdienst in Wilhelmsburg auch nachts an?", answer: "Ja, rund um die Uhr – die Elbbrücken sind für uns auch um 4 Uhr morgens kein Hindernis. Unser Notdienst für Wilhelmsburg ist an allen Tagen des Jahres erreichbar, Feiertage eingeschlossen." },
      { question: "Welche Leistungen bieten Sie in Wilhelmsburg an?", answer: "Das volle Spektrum: Tür-, Auto- und Tresoröffnung, Zylinderwechsel und Einbruchschutz. In den Altbauten des Reiherstiegviertels tauschen wir viele verschlissene Schlösser, in den Neubauquartieren am Inselpark programmieren und erweitern wir auch moderne Schließanlagen." },
      { question: "Wird die Tür bei der Türöffnung in Wilhelmsburg beschädigt?", answer: "Beschädigungsfreie Öffnung ist unser Standard – über 19 Jahre Berufserfahrung zahlen sich hier aus. Bei zugefallenen Türen bleibt garantiert keine Spur, bei abgeschlossenen gelingt die sanfte Öffnung in den allermeisten Fällen ebenfalls." },
    ],
  },
  bramfeld: {
    slug: "bramfeld",
    name: "Bramfeld",
    title: "Schlüsseldienst Bramfeld 24/7",
    description:
      "Schlüsseldienst Hamburg-Bramfeld – besonders schnell vor Ort (Standort in der Nähe). Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Bramfeld – von der Bramfelder Chaussee über den Dorfplatz bis zum Bramfelder See und Steilshoop. Unser Standort liegt in der Nähe, daher sind wir besonders schnell bei Ihnen.",
    speedFeature: "Standort in der Nähe – oft in 15-20 Min da",
    areaIntro:
      "Ob an der Bramfelder Chaussee, am Bramfelder Dorfplatz, rund um den Bramfelder See oder in Steilshoop – unser Techniker kennt Bramfeld und ist rund um die Uhr für Sie im Einsatz.",
    areas: ["Bramfelder Chaussee & Dorfplatz", "Rund um den Bramfelder See", "Steilshoop & Steilshooper Allee", "Hellbrookkamp & Bramfeld-Süd"],
    localContent: [
      "Von unserem Standort am Winterhuder Weg sind es nur wenige Minuten nach Bramfeld – deshalb gehören die Straßen zwischen Bramfelder Chaussee, Dorfplatz und Bramfelder See zu unseren schnellsten Einsatzgebieten. Vom Reihenhaus in Bramfeld-Süd bis zu den Großwohnanlagen an der Steilshooper Allee kennen wir die Türen im Viertel.",
      "In Steilshoop öffnen wir häufig Wohnungstüren in den Wohnblocks – hier zählt Erfahrung mit zentralen Schließanlagen und Etagentüren. In den Einfamilienhausstraßen rund um den Dorfplatz sind dagegen Zylinderwechsel und Einbruchschutz die häufigsten Aufträge. Beides erledigen wir in einem Termin, das Material ist an Bord.",
    ],
    nearby: [
      { slug: "barmbek", name: "Barmbek" },
      { slug: "farmsen", name: "Farmsen" },
      { slug: "wandsbek", name: "Wandsbek" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Bramfeld?", answer: "Den genauen Preis sagen wir Ihnen, bevor wir losfahren: Festpreis am Telefon, abhängig nur davon, ob die Tür zugefallen oder abgeschlossen ist. Zuschläge für Nacht, Wochenende oder Anfahrt gibt es in Bramfeld nicht – der Weg ist für uns ohnehin kurz." },
      { question: "Wie schnell ist der Schlüsseldienst in Bramfeld vor Ort?", answer: "Besonders schnell: Unser Standort am Winterhuder Weg liegt nur wenige Minuten von Bramfeld entfernt. Dadurch sind wir oft schon in 15-20 Minuten bei Ihnen – ob an der Bramfelder Chaussee, am Bramfelder See oder in Steilshoop." },
      { question: "Bieten Sie Schlüsselnotdienst in Bramfeld auch nachts an?", answer: "Ja – und dank der kurzen Anfahrt müssen Sie auch nachts nicht lange im Hausflur oder vor der Haustür ausharren. Der Notdienst für Bramfeld und Steilshoop ist durchgehend erreichbar, auch an Sonn- und Feiertagen." },
      { question: "Welche Leistungen bieten Sie in Bramfeld an?", answer: "Türöffnung, Autoöffnung, Tresoröffnung, Zylinder- und Schlosswechsel sowie Einbruchschutz. In den Steilshooper Wohnanlagen arbeiten wir routiniert mit Schließanlagen, in den Einfamilienhäusern Bramfelds montieren wir häufig Zusatzsicherungen für Türen und Fenster." },
      { question: "Wird die Tür bei der Türöffnung in Bramfeld beschädigt?", answer: "Nein, das ist die große Ausnahme: Standard ist bei uns die zerstörungsfreie Öffnung mit Spezialwerkzeug. Und falls ein alter Zylinder tatsächlich ersetzt werden muss, haben wir passende Markenzylinder direkt im Fahrzeug." },
    ],
  },
  blankenese: {
    slug: "blankenese",
    name: "Blankenese",
    title: "Schlüsseldienst Blankenese 24/7",
    description:
      "Schlüsseldienst Hamburg-Blankenese – in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Blankenese – vom Treppenviertel über die Blankeneser Bahnhofstraße bis zum Süllberg und Elbstrand. Schnell vor Ort, faire Preise, keine versteckten Kosten.",
    speedFeature: "In 20-30 Minuten in Blankenese",
    areaIntro:
      "Ob im Treppenviertel mit seinen verwinkelten Gassen, an der Blankeneser Bahnhofstraße, am Süllberg oder unten am Elbstrand – unser Techniker ist rund um die Uhr für Sie im Einsatz.",
    areas: ["Treppenviertel & Strandweg", "Blankeneser Bahnhofstraße & Markt", "Süllberg & Baurs Park", "Dockenhuden & Blankeneser Landstraße"],
    localContent: [
      "Blankenese ist für einen Schlüsseldienst ein Spezialfall: Ins Treppenviertel kommt kein Auto direkt vor die Tür – unser Techniker geht die letzten Treppen zu Fuß, das Werkzeug ist genau dafür gepackt. Bei den Häusern an Süllberg und Baurs Park wiederum haben wir es meist mit hochwertigen Sicherheitstüren und Mehrfachverriegelungen zu tun, die entsprechend fachkundig geöffnet werden wollen.",
      "Diskretion ist hier selbstverständlich: unauffällige Anfahrt, saubere und leise Arbeit. Nach einer Öffnung prüfen wir auf Wunsch gleich den Einbruchschutz – bei freistehenden Häusern in Dockenhuden und entlang der Elbchaussee ein Thema, das viele unserer Kunden direkt mit erledigen lassen.",
    ],
    nearby: [
      { slug: "ottensen", name: "Ottensen" },
      { slug: "altona", name: "Altona" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Blankenese?", answer: "Auch am Elbhang gilt unser Prinzip: verbindlicher Festpreis am Telefon, bevor der Techniker startet. Selbst wenn Ihr Haus mitten im Treppenviertel liegt und die letzten Meter zu Fuß zurückgelegt werden – ein Treppen-Zuschlag existiert bei uns nicht." },
      { question: "Wie schnell ist der Schlüsseldienst in Blankenese vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob im Treppenviertel, an der Bahnhofstraße oder in Dockenhuden. Auch die engen Gassen im Treppenviertel sind für uns kein Problem." },
      { question: "Bieten Sie Schlüsselnotdienst in Blankenese auch nachts an?", answer: "Ja, zu jeder Uhrzeit – auch wenn Sie nachts nach einem Spaziergang am Elbstrand vor verschlossener Tür stehen. Unser Notdienst ist 365 Tage im Jahr durchgehend besetzt." },
      { question: "Welche Leistungen bieten Sie in Blankenese an?", answer: "Neben Tür-, Auto- und Tresoröffnung vor allem hochwertige Sicherheitstechnik: Mehrfachverriegelungen, Schließanlagen mit Sicherungskarte, Panzerriegel und Fenstersicherungen. Für die Villen an Süllberg und Elbchaussee erstellen wir auf Wunsch ein komplettes Sicherheitskonzept." },
      { question: "Wird die Tür bei der Türöffnung in Blankenese beschädigt?", answer: "Unsere Öffnungstechnik hinterlässt in fast allen Fällen keinerlei Spuren – wichtig gerade bei den hochwertigen Haustüren in Blankenese. Sicherheitstüren mit Mehrfachverriegelung erfordern etwas mehr Zeit, bleiben aber ebenfalls in aller Regel unversehrt." },
    ],
  },
  farmsen: {
    slug: "farmsen",
    name: "Farmsen",
    title: "Schlüsseldienst Farmsen 24/7",
    description:
      "Schlüsseldienst Hamburg-Farmsen – in 20-30 Min vor Ort. Türöffnung ohne Schäden, faire Festpreise, 24/7 Notdienst. ☎ 040 18204419",
    heroIntro:
      "Ihr zuverlässiger Schlüsseldienst in Farmsen-Berne – vom U-Bahnhof Farmsen über die August-Krogmann-Straße bis zum Trabrennbahn-Quartier und Berne. Schnell vor Ort, faire Preise, keine versteckten Kosten.",
    speedFeature: "In 20-30 Minuten in Farmsen",
    areaIntro:
      "Ob rund um den U-Bahnhof Farmsen, an der August-Krogmann-Straße, im Trabrennbahn-Quartier oder in Berne – unser Techniker kennt Farmsen und ist rund um die Uhr für Sie im Einsatz.",
    areas: ["Rund um den U-Bahnhof Farmsen", "August-Krogmann-Straße & Trabrennbahn-Quartier", "Berner Heerweg & Berne", "Farmsen-Süd & Berner Au"],
    localContent: [
      "Farmsen-Berne ist geprägt von Reihenhäusern, Genossenschaftswohnungen und den Neubauten im Trabrennbahn-Quartier. Die typischen Einsätze hier: zugefallene Haustüren, in älteren Zylindern abgebrochene Schlüssel und klemmende Terrassentüren – alles Aufgaben, die wir direkt vor Ort und in einem Termin lösen.",
      "Über den Ring 3 oder parallel zur U1 sind wir schnell im Viertel, auch draußen in Berne und an der Berner Au. Mit den Schließsystemen der Baugenossenschaften kennen wir uns aus – und wie überall gilt: Festpreis am Telefon, bevor unser Techniker überhaupt losfährt.",
    ],
    nearby: [
      { slug: "bramfeld", name: "Bramfeld" },
      { slug: "wandsbek", name: "Wandsbek" },
      { slug: "barmbek", name: "Barmbek" },
    ],
    faq: [
      { question: "Was kostet ein Schlüsseldienst in Farmsen?", answer: "Transparenz zuerst: Am Telefon schildern Sie uns kurz die Situation, wir nennen den Festpreis – fertig. Bei diesem Preis bleibt es dann auch, ohne Anfahrtskosten und ohne Aufschläge, egal zu welcher Uhrzeit wir nach Farmsen kommen." },
      { question: "Wie schnell ist der Schlüsseldienst in Farmsen vor Ort?", answer: "In der Regel sind wir innerhalb von 20-30 Minuten bei Ihnen – egal ob am U-Bahnhof Farmsen, an der August-Krogmann-Straße, im Trabrennbahn-Quartier oder in Berne." },
      { question: "Bieten Sie Schlüsselnotdienst in Farmsen auch nachts an?", answer: "Ja – ob früh morgens vor der Arbeit oder mitten in der Nacht: Der Notdienst für Farmsen-Berne ist ohne Unterbrechung erreichbar, an jedem Tag des Jahres. Ein Anruf genügt, und der Techniker macht sich auf den Weg." },
      { question: "Welche Leistungen bieten Sie in Farmsen an?", answer: "Wir öffnen Türen, Autos und Tresore, wechseln Zylinder und Schlösser und rüsten Einbruchschutz nach. In den Reihenhäusern von Farmsen-Berne sichern wir besonders oft Terrassentüren und Kellerzugänge – die typischen Schwachstellen bei Einbrüchen." },
      { question: "Wird die Tür bei der Türöffnung in Farmsen beschädigt?", answer: "In aller Regel nicht: Zugefallene Türen öffnen wir garantiert ohne Spuren, abgeschlossene fast immer. Muss doch einmal ein alter, verschlissener Zylinder aufgebohrt werden, ersetzen wir ihn sofort durch einen neuen Markenzylinder aus dem Fahrzeugbestand." },
    ],
  },
};

export const locationSlugs = Object.keys(locations);
