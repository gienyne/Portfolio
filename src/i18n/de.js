export const de = {
  roleSubtitle: "Embedded Engineer",
  locationVal: "35440 Linden, Deutschland",
  navHome: "Startseite",
  navProjects: "Projekte",
  navContact: "Kontakt",
  btnCV: "Lebenslauf (PDF)",

  heroTitle: "Hallo, ich bin <span class='hero-name'>Dimitry</span>",
  heroSub: "Embedded Software | IoT | Industrie 4.0",
  heroDesc: "Ich entwickle Software für Mikrocontroller und vernetzte Systeme. Mein Schwerpunkt liegt auf der hardwarenahen Programmierung, der Kommunikation zwischen Geräten und der Integration eingebetteter Systeme in industrielle Anwendungen. Dabei interessieren mich insbesondere das Zusammenspiel von Hardware und Software sowie die Entwicklung technischer Lösungen, die verschiedene Komponenten und Systeme miteinander verbinden.",
  btnContact: "Kontakt",
  mcuTitle: "Mikrocontroller",
  stackHw: "Embedded Systems",
  stackIiot: "Industrie 4.0",

  secProjects: "Ausgewählte Projekte",
  btnDetails: "Details →",
  backToProjects: "← Projekte",
  notFound: "Seite nicht gefunden.",

  proj1Title: "SenseLink",
  proj1Desc: "FreeRTOS-Firmware für STM32F030R8 zur parallelen Erfassung und Verarbeitung von Sensordaten. Vier Tasks, Queue-basierte Kommunikation und ein mutex-geschützter I²C-Bus sorgen für eine strukturierte Zusammenarbeit, ergänzt durch ein MQTT-Live-Dashboard.",

  proj2Title: "CAN-Bus Wetterstation",
  proj2Desc: "Verteilte Wetterstation mit mehreren STM32F429-Knoten, die Temperatur, Luftfeuchtigkeit und Luftdruck mit BME280-Sensoren erfassen und über den CAN-Bus austauschen. Ein Joystick ermöglicht die Auswahl eines Knotens und die Anzeige seiner Messwerte.",

  proj3Title: "ESP32 Smart Wetterstation",
  proj3Desc: "ESP32-basierte Wetterstation zur Erfassung von Temperatur, Luftfeuchtigkeit und Helligkeit. Bei über 25 °C schaltet sich der Lüfter automatisch ein. MQTT und Node-RED ermöglichen die Fernsteuerung, während die Messwerte auf einer SD-Karte gespeichert werden.",

  proj4Title: "Steuerplatine für eine Aufzugskabine",
  proj4Desc: "STM32F4-basierte Steuerplatine für eine Aufzugskabine mit Überlasterkennung, Türansteuerung und CAN-Bus-Kommunikation. Die Entwicklung umfasst den Schaltplan und das zweilagige PCB-Layout in KiCad.",

  proj5Title: "AquaControl PLC",
  proj5Desc: "CODESYS-basierte Bewässerungssteuerung, die eine Pumpe mit Regenwasser versorgt und bei leerem Tank automatisch auf Leitungswasser umschaltet. Die SPS-Logik in Structured Text und FUP wird durch eine HMI und einen OPC-UA-Server ergänzt.",

  proj6Title: "DameSpiel",
  proj6Desc: "Java-basiertes Damespiel mit MVC-Architektur und Processing-Oberfläche. Neben dem Zwei-Spieler-Modus ermöglicht ein KI-Gegner auf Basis von Minimax und Alpha-Beta-Pruning das Spielen gegen den Computer.",

  proj7Title: "Industrial Edge Gateway",
  proj7Desc: "C++-basiertes Industrial Edge Gateway, das heterogene Maschinen- und Sensordaten in einem gemeinsamen Datenmodell zusammenführt und als Sparkplug-B-Nachrichten über MQTT bereitstellt. Ein Spring-Boot-Backend speichert die Daten in TimescaleDB und stellt sie für ein React-Dashboard bereit.",

  proj8Title: "AVR128DB48 Embedded Learning Labs",
  proj8Desc: "Lernprojekt mit elf Übungen für den AVR128DB48 zur praktischen Arbeit mit Mikrocontroller-Peripherie. Die Themen reichen von GPIO, Timern und PWM bis zu ADC, USART, I²C und IR-Dekodierung und werden durch kommentierte Codebeispiele ergänzt.",

  contactHeading: "Lass uns sprechen",
  contactText: "Hast du eine Frage, ein Embedded-Projekt oder möchtest du zusammenarbeiten? Schreib mir gerne direkt.",
  placeholderName: "Name",
  placeholderEmail: "E-Mail",
  placeholderMessage: "Nachricht",
  btnSend: "Senden",
  formSending: "Wird gesendet …",
  formOk: "Danke, deine Nachricht ist angekommen. Ich melde mich bald.",
  formErr: "Das Senden hat nicht geklappt. Schreib mir bitte direkt per E-Mail.",

  chatStatus: "Portfolio-Assistent",
  chatPlaceholder: "Deine Frage ...",
  chatWelcome: "Hallo! Hast du Fragen zu Dimitrys Projekten oder seinen technischen Kenntnissen? Frag mich gerne!",

  bot: {
    suggestions: [
      "Wer ist Dimitry?",
      "Welche Projekte gibt es?",
      "Welche Technologien beherrscht er?",
      "Wo studiert er?",
      "Wie erreiche ich ihn?",
    ],

    rules: [
      [["wer ist", "wer bist", "vorstell", "über dich", "über ihn", "profil", "was macht", "was machst"], "Dimitry ist Embedded Engineer. Er entwickelt Software für Mikrocontroller und vernetzte Systeme, mit Schwerpunkt auf hardwarenaher Programmierung, der Kommunikation zwischen Geräten und der Integration in industrielle Anwendungen."],

      [["projekt", "portfolio", "referenz", "erfahrung"], "Ausgewählte Projekte: Industrial Edge Gateway (C++, Sparkplug B, OPC UA), SenseLink (FreeRTOS auf STM32), CAN-Bus-Wetterstation, ESP32-Wetterstation, Steuerplatine für eine Aufzugskabine (KiCad), AquaControl (CODESYS), DameSpiel (Java) und die AVR128DB48 Learning Labs. Mehr auf der Seite „Projekte“."],

      [["technolog", "skill", "kenntnis", "fähigkeit", "stack", "programmiersprach", "beherrsch", "tools", "werkzeug"], "Embedded: C/C++, STM32, ESP32, AVR128DB48, FreeRTOS und KiCad. Kommunikation und Industrie: CAN, I²C, UART, MQTT mit Sparkplug B, OPC UA, CODESYS und Node-RED. Außerdem Java."],

      [["studi", "thm", "hochschule", "universit", "abschluss", "bachelor", "ausbildung"], "Dimitry studiert Ingenieur-Informatik (B.Sc.) an der Technischen Hochschule Mittelhessen (THM) mit Fokus auf Embedded Systems und IoT."],

      [["kontakt", "erreich", "mail", "schreib", "telefon", "anruf"], "Du erreichst Dimitry über das Kontaktformular oder per E-Mail unter ntofeunyatchadimitry@gmail.com."],

      [[" cv ", "lebenslauf", "bewerbung", "unterlagen"], "Den Lebenslauf gibt es als PDF: Klicke in der Seitenleiste auf „Lebenslauf (PDF)“."],

      [["gateway", "sparkplug", "opc", "smart factory", "industrie", "spritzguss", "edge"], "Im Industrial Edge Gateway führt Dimitry ESP32-Sensoren und OPC-UA-Maschinen zusammen, darunter eine Spritzgussmaschine der Smart Factory Mittelhessen, und stellt die Daten als Sparkplug B über MQTT bereit. Details stehen auf der Projektseite."],

      [["freertos", "stm32", "senselink", "firmware", "rtos", "echtzeit"], "Mit FreeRTOS auf einem STM32 (Cortex-M0, 8 KB RAM) hat Dimitry SenseLink umgesetzt: vier Tasks, Queue-basierte Kommunikation und ein mutex-geschützter I²C-Bus."],

      [["wohn", "standort", "wo lebt", "wo ist", "linden"], "Dimitry ist in 35440 Linden (Hessen) ansässig."],

      [["hallo", "guten tag", " hi ", "servus", "moin"], "Hallo! Frag mich zu Dimitrys Profil, seinen Projekten oder seinen technischen Kenntnissen."],

      [["danke", "vielen dank"], "Gern geschehen!"],
    ],

    fallback: "Dazu habe ich leider keine Antwort. Wähle eine der Fragen aus oder schreib Dimitry direkt über das Kontaktformular.",
  },
};
