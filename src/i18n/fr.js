export const fr = {
  roleSubtitle: "Ingénieur embarqué",
  locationVal: "35440 Linden, Allemagne",
  navHome: "Accueil",
  navProjects: "Projets",
  navContact: "Contact",
  btnCV: "Télécharger le CV",

  heroTitle: "Bonjour, je suis <span class='hero-name'>Dimitry</span>",
  heroSub: "Logiciel embarqué | IoT | Industrie 4.0",
  heroDesc: "Je développe des logiciels pour microcontrôleurs et systèmes connectés. Je m'intéresse principalement à la programmation bas niveau, à la communication entre appareils et à l'intégration de systèmes embarqués dans des applications industrielles. Je m'intéresse particulièrement à l'interaction entre le matériel et le logiciel, ainsi qu'au développement de solutions techniques permettant de connecter différents composants et systèmes.",
  btnContact: "Contact",
  mcuTitle: "Microcontrôleurs",
  stackHw: "Systèmes embarqués",
  stackIiot: "Industrie 4.0",

  secProjects: "Projets sélectionnés",
  btnDetails: "Détails →",
  backToProjects: "← Projets",
  notFound: "Page introuvable.",

  proj1Title: "SenseLink",
  proj1Desc: "Firmware basé sur FreeRTOS pour le STM32F030R8, conçu pour l'acquisition et le traitement parallèles des données de capteurs. Quatre tâches, une communication par files d'attente et un bus I²C protégé par mutex assurent une coordination structurée, complétée par un tableau de bord MQTT en temps réel.",

  proj2Title: "Station météo sur bus CAN",
  proj2Desc: "Station météo distribuée composée de plusieurs nœuds STM32F429 qui mesurent la température, l'humidité et la pression atmosphérique à l'aide de capteurs BME280 et échangent les données via le bus CAN. Un joystick permet de sélectionner un nœud et d'afficher ses mesures.",

  proj3Title: "Station météo intelligente ESP32",
  proj3Desc: "Station météo basée sur ESP32 pour mesurer la température, l'humidité et la luminosité. Le ventilateur s'active automatiquement lorsque la température dépasse 25 °C. MQTT et Node-RED permettent le contrôle à distance, tandis que les mesures sont enregistrées sur une carte SD.",

  proj4Title: "Carte de commande pour cabine d'ascenseur basée sur STM32",
  proj4Desc: "Carte de commande pour cabine d'ascenseur basée sur STM32F4, intégrant la détection de surcharge, la commande des portes et la communication via le bus CAN. La conception comprend le schéma électronique et le routage du circuit imprimé double couche réalisés sous KiCad.",

  proj5Title: "AquaControl PLC",
  proj5Desc: "Système de commande d'irrigation basé sur CODESYS qui alimente une pompe en eau de pluie et bascule automatiquement sur l'eau du réseau lorsque la cuve est vide. La logique de l'automate, programmée en Structured Text et en FBD, est complétée par une interface HMI et un serveur OPC UA.",

  proj6Title: "Jeu de dames",
  proj6Desc: "Jeu de dames développé en Java avec une architecture MVC et une interface réalisée avec Processing. En plus du mode deux joueurs, un adversaire basé sur l'algorithme Minimax et l'élagage Alpha-Beta permet de jouer contre l'ordinateur.",

  proj7Title: "Industrial Edge Gateway",
  proj7Desc: "Passerelle industrielle développée en C++ qui regroupe des données hétérogènes de machines et de capteurs dans un modèle commun, puis les publie sous forme de messages Sparkplug B via MQTT. Un backend Spring Boot stocke les données dans TimescaleDB et les met à disposition d'un tableau de bord React.",

  proj8Title: "AVR128DB48 Embedded Learning Labs",
  proj8Desc: "Projet d'apprentissage composé de onze exercices pour l'AVR128DB48, axé sur la mise en pratique des périphériques du microcontrôleur. Les thèmes vont des GPIO, timers et PWM à l'ADC, l'USART, l'I²C et au décodage infrarouge, avec des exemples de code commentés.",

  contactHeading: "Discutons",
  contactText: "Tu as une question, un projet embarqué ou souhaites collaborer ? N'hésite pas à me contacter.",
  placeholderName: "Nom",
  placeholderEmail: "E-mail",
  placeholderMessage: "Message",
  btnSend: "Envoyer",
  formSending: "Envoi en cours …",
  formOk: "Merci, ton message a bien été reçu. Je te répondrai bientôt.",
  formErr: "Une erreur est survenue. Tu peux me contacter directement par e-mail.",

  chatStatus: "Assistant du portfolio",
  chatPlaceholder: "Ta question ...",
  chatWelcome: "Bonjour ! Tu as des questions sur les projets de Dimitry ou ses compétences techniques ? N'hésite pas à me les poser !",

  bot: {
    suggestions: [
      "Qui est Dimitry ?",
      "Quels projets a-t-il réalisés ?",
      "Quelles technologies connaît-il ?",
      "Où étudie-t-il ?",
      "Comment le contacter ?",
    ],

    rules: [
      [["qui est", "à propos de lui", "profil", "que fait-il", "présentation"], "Dimitry est ingénieur en systèmes embarqués. Il développe des logiciels pour microcontrôleurs et systèmes connectés, en mettant l'accent sur la programmation bas niveau, la communication entre appareils et l'intégration de systèmes embarqués dans des applications industrielles."],

      [["projet", "portfolio", "expérience", "sense"], "Parmi ses projets : Industrial Edge Gateway (C++, Sparkplug B, OPC UA), SenseLink (FreeRTOS sur STM32), une station météo sur bus CAN, une station météo ESP32, une carte de commande pour cabine d'ascenseur (KiCad), AquaControl (CODESYS), un jeu de dames (Java) et les AVR128DB48 Learning Labs. Retrouve plus de détails sur la page Projets."],

      [["technologie", "compétence", "connaissance", "programmation", "langage", "outil", "stack"], "Systèmes embarqués : C/C++, STM32, ESP32, AVR128DB48, FreeRTOS et KiCad. Communication et systèmes industriels : CAN, I²C, UART, MQTT avec Sparkplug B, OPC UA, CODESYS et Node-RED. Il utilise également Java."],

      [["étude", "études", "thm", "université", "diplôme", "bachelor", "formation"], "Dimitry étudie le génie informatique (B.Sc.) à la Technische Hochschule Mittelhessen (THM), avec une spécialisation en systèmes embarqués et IoT."],

      [["contact", "joindre", "email", "e-mail", "mail", "message", "téléphone"], "Tu peux contacter Dimitry via le formulaire de contact ou par e-mail à l'adresse ntofeunyatchadimitry@gmail.com."],

      [["cv", "curriculum", "vitae", "candidature"], "Tu peux télécharger le CV de Dimitry au format PDF en cliquant sur le bouton « Télécharger le CV » dans la navigation."],

      [["gateway", "sparkplug", "opc", "smart factory", "industrie", "moulage par injection", "edge"], "Le projet Industrial Edge Gateway regroupe des données provenant de capteurs ESP32 et de machines industrielles connectées via OPC UA, notamment une machine de moulage par injection de la Smart Factory Mittelhessen. Les données sont ensuite publiées sous forme de messages Sparkplug B via MQTT. Retrouve plus de détails sur la page du projet."],

      [["freertos", "stm32", "senselink", "firmware", "rtos", "temps réel"], "Dimitry a développé SenseLink avec FreeRTOS sur un STM32 (Cortex-M0, 8 Ko de RAM). Le projet utilise quatre tâches, une communication par files d'attente et un bus I²C protégé par mutex."],

      [["localisation", "habite", "vit", "basé", "où se trouve", "où est"], "Dimitry habite à Linden (35440), en Allemagne."],

      [["bonjour", "salut", "coucou", "bonsoir", "hello"], "Bonjour ! N'hésite pas à me poser des questions sur le profil de Dimitry, ses projets ou ses compétences techniques."],

      [["merci", "remercie"], "Avec plaisir !"],
    ],

    fallback: "Je n'ai malheureusement pas de réponses à cette question. Choisis l'une des suggestions ou contacte directement Dimitry via le formulaire de contact.",
  },
};
