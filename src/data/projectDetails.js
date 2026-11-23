export const PROJECT_DETAILS = {
  "industrial-edge-gateway": {
    title: "Industrial Edge Gateway",
    lead: {
      de: "Eine C++-basierte Plattform, die Daten aus unterschiedlichen Maschinen und Sensoren zusammenführt und über Sparkplug B und MQTT für industrielle Anwendungen bereitstellt.",
      en: "A C++-based platform that brings together data from different machines and sensors and makes it available for industrial applications via Sparkplug B and MQTT.",
      fr: "Une plateforme en C++ qui rassemble les données de différentes machines et capteurs et les met à disposition d'applications industrielles via Sparkplug B et MQTT.",
    },

    blocks: [
      {
        type: "figure",
        image: "device-details.png",
        alt: {
          de: "Web-Dashboard des Industrial Edge Gateway mit Gerätestatus und Messwerten",
          en: "Web dashboard of the Industrial Edge Gateway showing device status and measurements",
          fr: "Tableau de bord web de l'Industrial Edge Gateway avec l'état des appareils et les mesures",
        },
        caption: {
          de: "Web-Dashboard zur Überwachung der verbundenen Geräte und ihrer Messdaten.",
          en: "Web dashboard for monitoring the connected devices and their measurement data.",
          fr: "Tableau de bord web pour surveiller les appareils connectés et leurs données de mesure.",
        },
      },

      {
        type: "heading",
        text: { de: "Architektur", en: "Architecture", fr: "Architecture" },
      },
      {
        type: "text",
        text: {
          de: "Das Gateway erfasst Daten von ESP32-Sensorboards und industriellen Maschinen über MQTT und OPC UA. Die unterschiedlichen Datenquellen werden in einem gemeinsamen Datenmodell zusammengeführt und als Sparkplug-B-Nachrichten über MQTT bereitgestellt. Ein Spring-Boot-Backend speichert die Daten in TimescaleDB und stellt sie dem React-Dashboard zur Verfügung.",
          en: "The gateway collects data from ESP32 sensor boards and industrial machines via MQTT and OPC UA. The different data sources are merged into a common data model and published as Sparkplug B messages over MQTT. A Spring Boot backend stores the data in TimescaleDB and serves it to the React dashboard.",
          fr: "La passerelle collecte les données de cartes capteurs ESP32 et de machines industrielles via MQTT et OPC UA. Les différentes sources sont réunies dans un modèle de données commun et publiées en messages Sparkplug B sur MQTT. Un backend Spring Boot stocke les données dans TimescaleDB et les met à disposition du tableau de bord React.",
        },
      },
      {
        type: "figure",
        image: "gateway_architecture.png",
        alt: {
          de: "Systemarchitektur des Industrial Edge Gateway",
          en: "System architecture of the Industrial Edge Gateway",
          fr: "Architecture système de l'Industrial Edge Gateway",
        },
        caption: {
          de: "Architektur vom Datenquellen-Connector bis zum Web-Dashboard.",
          en: "Architecture from the data source connector to the web dashboard.",
          fr: "Architecture du connecteur de source de données jusqu'au tableau de bord web.",
        },
      },
      {
        type: "heading",
        text: { de: "Technologien", en: "Technologies", fr: "Technologies" },
      },
      {
        type: "specs",
        items: [
          { label: "Gateway", text: "C++17, Paho MQTT, open62541pp, Protobuf" },
          { label: "Backend", text: "Java 21, Spring Boot, TimescaleDB" },
          { label: "Frontend", text: "React, TypeScript, Material UI" },
          { label: { de: "Infrastruktur", en: "Infrastructure", fr: "Infrastructure" }, text: "Docker, Eclipse Mosquitto" },
        ],
      },

      {
        type: "github",
        url: "https://github.com/gienyne/Industrial_edge_gateway",
        text: {
          de: "Quellcode und technische Dokumentation auf GitHub.",
          en: "Source code and technical documentation on GitHub.",
          fr: "Code source et documentation technique sur GitHub.",
        },
      },
    ],
  },

  "avr128db48-labs": {
    title: "AVR128DB48 Embedded Learning Labs",
    lead: {
      de: "Elf praktische Übungen, die schrittweise an die Programmierung des AVR128DB48 heranführen – von grundlegenden Assembler- und C-Konzepten bis zur Arbeit mit Sensoren, Aktoren und Kommunikationsschnittstellen.",
      en: "Eleven hands-on exercises that lead step by step into programming the AVR128DB48 – from basic assembly and C concepts to working with sensors, actuators and communication interfaces.",
      fr: "Onze exercices pratiques qui introduisent pas à pas la programmation de l'AVR128DB48, des notions de base en assembleur et en C jusqu'au travail avec capteurs, actionneurs et interfaces de communication.",
    },

    blocks: [
      {
        type: "figure",
        image: "avr128db48-labs.jpg",
        alt: {
          de: "AVR128DB48 Curiosity Nano Entwicklungsboard",
          en: "AVR128DB48 Curiosity Nano development board",
          fr: "Carte de développement AVR128DB48 Curiosity Nano",
        },
        caption: {
          de: "AVR128DB48 Curiosity Nano als Grundlage der praktischen Übungen.",
          en: "AVR128DB48 Curiosity Nano as the basis of the practical exercises.",
          fr: "AVR128DB48 Curiosity Nano, base des exercices pratiques.",
        },
      },

      {
        type: "heading",
        text: { de: "Inhalte", en: "Contents", fr: "Contenu" },
      },
      {
        type: "list",
        items: [
          {
            label: { de: "GPIO und Timer", en: "GPIO and timers", fr: "GPIO et timers" },
            text: {
              de: "Digitale Ein- und Ausgänge, Tasterentprellung, Interrupts und PWM zur Steuerung von LEDs und Servomotoren.",
              en: "Digital inputs and outputs, button debouncing, interrupts and PWM to control LEDs and servo motors.",
              fr: "Entrées et sorties numériques, anti-rebond des boutons, interruptions et PWM pour piloter LED et servomoteurs.",
            },
          },
          {
            label: { de: "Analoge Signale", en: "Analog signals", fr: "Signaux analogiques" },
            text: {
              de: "Messung mit dem ADC über Potentiometer, Fotowiderstand und internen Temperatursensor sowie Audioausgabe über den DAC.",
              en: "Measurement with the ADC using a potentiometer, a photoresistor and the internal temperature sensor, plus audio output via the DAC.",
              fr: "Mesure avec l'ADC via potentiomètre, photorésistance et capteur de température interne, ainsi que sortie audio via le DAC.",
            },
          },
          {
            label: { de: "Kommunikation", en: "Communication", fr: "Communication" },
            text: {
              de: "Serielle Kommunikation über USART, I²C-Ansteuerung eines LCDs und Kommunikation mit dem Farbsensor TCS34725.",
              en: "Serial communication over USART, I²C control of an LCD and communication with the TCS34725 color sensor.",
              fr: "Communication série par USART, commande d'un écran LCD en I²C et communication avec le capteur de couleur TCS34725.",
            },
          },
          {
            label: { de: "Signalverarbeitung", en: "Signal processing", fr: "Traitement du signal" },
            text: {
              de: "Dekodierung des NEC-Infrarotprotokolls mithilfe von Interrupts und Pulsbreitenmessung.",
              en: "Decoding of the NEC infrared protocol using interrupts and pulse width measurement.",
              fr: "Décodage du protocole infrarouge NEC à l'aide d'interruptions et de mesure de largeur d'impulsion.",
            },
          },
        ],
      },

      {
        type: "heading",
        text: { de: "Lernkonzept", en: "Learning concept", fr: "Concept pédagogique" },
      },
      {
        type: "text",
        text: {
          de: "Jede Übung enthält eine Aufgabenstellung mit Lernzielen, Erklärungen zu den zugrunde liegenden Konzepten und Hinweise zur Umsetzung. Dazu kommen kommentierter Startcode und eine ausführlich kommentierte Musterlösung. Die Übungen führen von einer Assembler-Simulation zur hardwarenahen C-Programmierung mit dem AVR128DB48.",
          en: "Each exercise contains a problem statement with learning goals, explanations of the underlying concepts and hints for the implementation. In addition there is commented starter code and a thoroughly commented reference solution. The exercises lead from an assembler simulation to low-level C programming with the AVR128DB48.",
          fr: "Chaque exercice comprend un énoncé avec objectifs d'apprentissage, des explications sur les concepts sous-jacents et des conseils de mise en œuvre. S'y ajoutent un code de départ commenté et une solution de référence abondamment commentée. Les exercices mènent d'une simulation d'assembleur à la programmation C proche du matériel avec l'AVR128DB48.",
        },
      },

      {
        type: "heading",
        text: { de: "Hardwareaufbauten", en: "Hardware setups", fr: "Montages matériels" },
      },
      {
        type: "text",
        text: {
          de: "Die folgenden Abbildungen zeigen beispielhafte Hardwareaufbauten aus ausgewählten Übungen. Weitere Aufbauten und Details sind im GitHub-Repository zu finden.",
          en: "The following figures show example hardware setups from selected exercises. More setups and details can be found in the GitHub repository.",
          fr: "Les figures suivantes montrent des exemples de montages tirés d'exercices choisis. D'autres montages et détails se trouvent dans le dépôt GitHub.",
        },
      },
      {
        type: "figure",
        image: "avr128db48-adc-usart.png",
        alt: {
          de: "Breadboard-Aufbau mit Potentiometer, Fotowiderstand, RGB-LED, Tastern und LCD",
          en: "Breadboard setup with potentiometer, photoresistor, RGB LED, buttons and LCD",
          fr: "Montage sur breadboard avec potentiomètre, photorésistance, LED RVB, boutons et écran LCD",
        },
        caption: {
          de: "Hardwareaufbau zur Erfassung analoger Sensorsignale und zur seriellen Kommunikation über USART.",
          en: "Hardware setup for acquiring analog sensor signals and for serial communication over USART.",
          fr: "Montage pour l'acquisition de signaux analogiques de capteurs et la communication série par USART.",
        },
      },
      {
        type: "figure",
        image: "avr128db48-interrupts-timers.png",
        alt: {
          de: "Breadboard-Aufbau mit Tastern, RGB-LED und LCD",
          en: "Breadboard setup with buttons, RGB LED and LCD",
          fr: "Montage sur breadboard avec boutons, LED RVB et écran LCD",
        },
        caption: {
          de: "Hardwareaufbau zur Demonstration von GPIO-Interrupts und Timerfunktionen.",
          en: "Hardware setup demonstrating GPIO interrupts and timer functions.",
          fr: "Montage de démonstration des interruptions GPIO et des fonctions de timer.",
        },
      },

      {
        type: "heading",
        text: { de: "Technologien", en: "Technologies", fr: "Technologies" },
      },
      {
        type: "specs",
        items: [
          { label: "Controller", text: "AVR128DB48 Curiosity Nano" },
          {
            label: { de: "Programmiersprachen", en: "Programming languages", fr: "Langages" },
            text: { de: "Assembly, C", en: "Assembly, C", fr: "Assembleur, C" },
          },
          {
            label: { de: "Entwicklungsumgebung", en: "Development environment", fr: "Environnement de développement" },
            text: "Microchip Studio",
          },
        ],
      },

      {
        type: "github",
        url: "https://github.com/gienyne/AVR128DB48-Embedded-Learning-Labs",
        text: {
          de: "Alle elf Übungen mit Aufgabenstellungen, Startcode und Lösungen auf GitHub.",
          en: "All eleven exercises with problem statements, starter code and solutions on GitHub.",
          fr: "Les onze exercices avec énoncés, code de départ et solutions sur GitHub.",
        },
      },
    ],
  },

  "aufzug-steuerplatine": {
    title: {
      de: "Steuerplatine für eine Aufzugskabine",
      en: "Elevator Car Control Board",
      fr: "Carte de commande d'une cabine d'ascenseur",
    },
    lead: {
      de: "Entwicklung einer STM32F4-basierten Steuerplatine für eine Aufzugskabine mit Überlasterkennung, Türansteuerung und CAN-Bus-Kommunikation.",
      en: "Development of an STM32F4-based control board for an elevator car with overload detection, door control and CAN bus communication.",
      fr: "Développement d'une carte de commande à base de STM32F4 pour une cabine d'ascenseur, avec détection de surcharge, commande de porte et communication par bus CAN.",
    },

    blocks: [
      {
        type: "figure",
        image: "aufzug-steuerplatine.jpg",
        alt: {
          de: "3D-Ansicht der entwickelten Steuerplatine für eine Aufzugskabine",
          en: "3D view of the developed control board for an elevator car",
          fr: "Vue 3D de la carte de commande développée pour une cabine d'ascenseur",
        },
        caption: {
          de: "3D-Ansicht der entwickelten Steuerplatine.",
          en: "3D view of the developed control board.",
          fr: "Vue 3D de la carte de commande développée.",
        },
      },

      {
        type: "heading",
        text: { de: "Schaltungsdesign", en: "Circuit design", fr: "Conception du circuit" },
      },
      {
        type: "text",
        text: {
          de: "Der Schaltplan zeigt die Anbindung des STM32F4 an die verschiedenen Komponenten der Steuerplatine. Dazu gehören die Spannungsversorgung, die Motorsteuerung für die Kabinentür, die Überlasterkennung sowie die Kommunikationsschnittstellen.",
          en: "The schematic shows how the STM32F4 is connected to the various components of the control board. These include the power supply, the motor control for the car door, the overload detection and the communication interfaces.",
          fr: "Le schéma montre le raccordement du STM32F4 aux différents composants de la carte : l'alimentation, la commande du moteur de la porte de cabine, la détection de surcharge et les interfaces de communication.",
        },
      },
      {
        type: "figure",
        image: "aufzug-schaltplan.jpg",
        alt: {
          de: "Elektronischer Schaltplan der Aufzugsteuerplatine",
          en: "Electronic schematic of the elevator control board",
          fr: "Schéma électronique de la carte de commande d'ascenseur",
        },
        caption: {
          de: "Elektronischer Schaltplan, erstellt mit KiCad.",
          en: "Electronic schematic, created with KiCad.",
          fr: "Schéma électronique, réalisé avec KiCad.",
        },
      },

      {
        type: "heading",
        text: { de: "PCB-Layout", en: "PCB layout", fr: "Layout du PCB" },
      },
      {
        type: "text",
        text: {
          de: "Das Leiterplattenlayout zeigt die Platzierung der Bauteile und die Führung der Leiterbahnen auf der Platine. Es wurde mit KiCad entwickelt.",
          en: "The PCB layout shows the placement of the components and the routing of the traces on the board. It was developed with KiCad.",
          fr: "Le layout du PCB montre le placement des composants et le tracé des pistes sur la carte. Il a été développé avec KiCad.",
        },
      },
      {
        type: "figure",
        image: "aufzug-pcb-layout_version1.1.jpg",
        alt: {
          de: "Leiterplattenlayout der Aufzugsteuerplatine mit Bauteilen, Leiterbahnen und Kupferflächen",
          en: "PCB layout of the elevator control board with components, traces and copper areas",
          fr: "Layout du PCB de la carte de commande avec composants, pistes et zones de cuivre",
        },
        caption: {
          de: "PCB-Layout der Steuerplatine, erstellt mit KiCad.",
          en: "PCB layout of the control board, created with KiCad.",
          fr: "Layout PCB de la carte de commande, réalisé avec KiCad.",
        },
      },

      {
        type: "heading",
        text: { de: "Technologien", en: "Technologies", fr: "Technologies" },
      },
      {
        type: "specs",
        items: [
          { label: "Controller", text: "STM32F4" },
          { label: { de: "Bussysteme", en: "Bus systems", fr: "Bus" }, text: "CAN, I²C, USART" },
          { label: { de: "Hardware-Design", en: "Hardware design", fr: "Conception matérielle" }, text: "KiCad" },
        ],
      },

      {
        type: "github",
        url: "https://github.com/gienyne/stm32-elevator-cabin-control-board",
        text: {
          de: "Das vollständige PCB-Layout und weitere Projektdetails sind auf GitHub verfügbar.",
          en: "The complete PCB layout and further project details are available on GitHub.",
          fr: "Le layout PCB complet et d'autres détails du projet sont disponibles sur GitHub.",
        },
      },
    ],
  },
};