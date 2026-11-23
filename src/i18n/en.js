export const en = {
  roleSubtitle: "Embedded Engineer",
  locationVal: "35440 Linden, Germany",
  navHome: "Home",
  navProjects: "Projects",
  navContact: "Contact",
  btnCV: "Download CV",

  heroTitle: "Hi, I'm <span class='hero-name'>Dimitry</span>",
  heroSub: "Embedded Software | IoT | Industry 4.0",
  heroDesc: "I develop software for microcontrollers and connected systems. My focus is on low-level programming, communication between devices, and the integration of embedded systems into industrial applications. I am particularly interested in the interaction between hardware and software, as well as developing technical solutions that connect different components and systems.",
  btnContact: "Contact",
  mcuTitle: "Microcontrollers",
  stackHw: "Embedded Systems",
  stackIiot: "Industry 4.0",

  secProjects: "Featured Projects",
  btnDetails: "Details →",
  backToProjects: "← Projects",
  notFound: "Page not found.",

  proj1Title: "SenseLink",
  proj1Desc: "FreeRTOS-based firmware for the STM32F030R8, designed for parallel sensor data acquisition and processing. Four tasks, queue-based communication, and a mutex-protected I²C bus ensure structured task coordination, complemented by an MQTT live dashboard.",

  proj2Title: "CAN-Bus Weather Station",
  proj2Desc: "Distributed weather station with multiple STM32F429 nodes that measure temperature, humidity, and air pressure using BME280 sensors and exchange the data over the CAN bus. A joystick allows users to select a node and display its measurements.",

  proj3Title: "ESP32 Smart Weather Station",
  proj3Desc: "ESP32-based weather station for measuring temperature, humidity, and light levels. The fan switches on automatically when the temperature exceeds 25 °C. MQTT and Node-RED enable remote control, while measurements are stored on an SD card.",

  proj4Title: "STM32-Based Elevator Cabin Control Board",
  proj4Desc: "STM32F4-based control board for an elevator cabin, featuring overload detection, door control, and CAN bus communication. The design includes the electronic schematic and two-layer PCB layout developed in KiCad.",

  proj5Title: "AquaControl PLC",
  proj5Desc: "CODESYS-based irrigation controller that supplies a pump with rainwater and automatically switches to mains water when the tank is empty. The PLC logic, programmed in Structured Text and FBD, is complemented by an HMI and an OPC UA server.",

  proj6Title: "Checkers Game",
  proj6Desc: "Java-based checkers game featuring an MVC architecture and a Processing interface. Alongside the two-player mode, an AI opponent based on Minimax and Alpha-Beta pruning allows users to play against the computer.",

  proj7Title: "Industrial Edge Gateway",
  proj7Desc: "C++-based Industrial Edge Gateway that combines heterogeneous machine and sensor data in a common data model and publishes it as Sparkplug B messages over MQTT. A Spring Boot backend stores the data in TimescaleDB and makes it available to a React dashboard.",

  proj8Title: "AVR128DB48 Embedded Learning Labs",
  proj8Desc: "Learning project comprising eleven exercises for the AVR128DB48, focused on practical work with microcontroller peripherals. Topics range from GPIO, timers, and PWM to ADC, USART, I²C, and IR decoding, with commented code examples.",

  contactHeading: "Let's Talk",
  contactText: "Have a question, an embedded project, or interested in collaborating? Feel free to get in touch.",
  placeholderName: "Name",
  placeholderEmail: "Email",
  placeholderMessage: "Message",
  btnSend: "Send",
  formSending: "Sending …",
  formOk: "Thanks, your message has been received. I'll get back to you soon.",
  formErr: "Something went wrong. Please contact me directly by email.",

  chatStatus: "Portfolio Assistant",
  chatPlaceholder: "Your question ...",
  chatWelcome: "Hi! Do you have questions about Dimitry's projects or technical skills? Feel free to ask!",

  bot: {
    suggestions: [
      "Who is Dimitry?",
      "What projects has he worked on?",
      "What technologies does he know?",
      "Where does he study?",
      "How can I contact him?",
    ],

    rules: [
      [["who is", "about him", "about dimitry", "profile", "what does he do"], "Dimitry is an Embedded Engineer. He develops software for microcontrollers and connected systems, focusing on low-level programming, device communication, and the integration of embedded systems into industrial applications."],

      [["project", "portfolio", "experience", "sense"], "Featured projects include Industrial Edge Gateway (C++, Sparkplug B, OPC UA), SenseLink (FreeRTOS on STM32), CAN-Bus Weather Station, ESP32 Smart Weather Station, Elevator Cabin Control Board (KiCad), AquaControl (CODESYS), Checkers Game (Java), and AVR128DB48 Learning Labs. Find more details on the Projects page."],

      [["technology", "skill", "knowledge", "programming", "language", "tools", "stack"], "Embedded systems: C/C++, STM32, ESP32, AVR128DB48, FreeRTOS, and KiCad. Communication and industrial systems: CAN, I²C, UART, MQTT with Sparkplug B, OPC UA, CODESYS, and Node-RED. Also Java."],

      [["study", "thm", "university", "degree", "bachelor", "education"], "Dimitry is studying Computer Engineering (B.Sc.) at Technische Hochschule Mittelhessen (THM), focusing on Embedded Systems and IoT."],

      [["contact", "reach", "email", "mail", "message", "phone"], "You can reach Dimitry through the contact form or by email at ntofeunyatchadimitry@gmail.com."],

      [["cv", "resume", "résumé", "application"], "You can download Dimitry's CV as a PDF using the Download CV button in the navigation."],

      [["gateway", "sparkplug", "opc", "smart factory", "industry", "injection molding", "edge"], "The Industrial Edge Gateway brings together ESP32 sensors and OPC UA machines, including an injection molding machine at Smart Factory Mittelhessen, and publishes the data as Sparkplug B messages over MQTT. Find more details on the project page."],

      [["freertos", "stm32", "senselink", "firmware", "rtos", "real-time"], "Dimitry developed SenseLink using FreeRTOS on an STM32 (Cortex-M0, 8 KB RAM). The project uses four tasks, queue-based communication, and a mutex-protected I²C bus."],

      [["location", "live", "based", "where does he live", "where is he"], "Dimitry is based in Linden (35440), Germany."],

      [["hello", "hi", "hey", "good morning", "good afternoon"], "Hi! Feel free to ask me about Dimitry's profile, projects, or technical skills."],

      [["thanks", "thank you"], "You're welcome!"],
    ],

    fallback: "I don't have an answer to that question. Choose one of the suggested questions or contact Dimitry directly through the contact form.",
  },
};
