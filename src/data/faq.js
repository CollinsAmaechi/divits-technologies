export const faqItems = [
  {
    id: 'custom-esp32',
    question: 'Can you build a custom ESP32 project?',
    answer: 'Yes, ESP32 development is my core specialty. I work with all ESP32 variants (ESP32, ESP32-S2, ESP32-S3, ESP32-C3, ESP32-C6, ESP32-H2) using ESP-IDF, Arduino Core, or MicroPython. Whether you need a Wi-Fi/BLE sensor node, a mesh network, a motor controller, or a complex IoT gateway, I can design the hardware and write the firmware.',
  },
  {
    id: 'provide-hardware',
    question: 'Do you provide the hardware?',
    answer: 'It depends on the project. For prototyping and small batches, I can design the PCB, order fabrication (JLCPCB, PCBWay), source components (LCSC, DigiKey, Mouser), and handle assembly — either by me for small quantities or through assembly services. For larger production runs, I\'ll prepare manufacturing packages (Gerbers, BOM, pick-and-place, test specs) for your contract manufacturer. We\'ll discuss the best approach for your volume and budget.',
  },
  {
    id: 'esp32-wifi',
    question: 'Can you connect an ESP32 to Wi-Fi?',
    answer: 'Absolutely. I implement robust Wi-Fi connectivity including: station mode (connecting to your router), AP mode (device creates its own network), simultaneous AP+Station, Wi-Fi provisioning via BLE or SoftAP (using WiFiManager or custom captive portal), enterprise Wi-Fi (WPA2-Enterprise/EAP-TLS), Wi-Fi 6 (on supported chips), and power-saving modes for battery applications. I also handle reconnection logic, watchdog timers, and OTA updates over Wi-Fi.',
  },
  {
    id: 'iot-dashboards',
    question: 'Can you build IoT dashboards?',
    answer: 'Yes. I can create dashboards using Grafana (with InfluxDB/TimescaleDB), Node-RED, Home Assistant, custom React/Vue dashboards, or cloud platforms like AWS IoT SiteWise, Azure IoT Central, or ThingsBoard. For local-only setups, I often recommend Home Assistant + ESPHome or a self-hosted Grafana stack. The dashboard choice depends on your infrastructure, data volume, and whether you need cloud or local-only access.',
  },
  {
    id: 'modify-arduino',
    question: 'Can you modify existing Arduino code?',
    answer: 'Yes. I can refactor, optimize, debug, or extend existing Arduino/ESP32 sketches. Common requests include: migrating from Arduino framework to ESP-IDF for better performance, adding FreeRTOS tasks, implementing deep sleep for battery life, fixing memory leaks or watchdog resets, adding OTA updates, integrating new sensors or protocols, and restructuring spaghetti code into maintainable modules.',
  },
  {
    id: 'troubleshoot-electronics',
    question: 'Can you troubleshoot an existing electronics project?',
    answer: 'Yes, I offer debugging and troubleshooting services for hardware and firmware issues. This includes: logic analyzer / oscilloscope signal analysis, firmware debugging via JTAG/SWD, schematic review for design errors, PCB layout review for signal integrity/EMI issues, power consumption optimization, intermittent failure root cause analysis, and EMC pre-compliance testing guidance. I can work remotely if you have test equipment, or on-site for complex issues.',
  },
  {
    id: 'project-timeline',
    question: 'How long does a project take?',
    answer: 'Timelines vary significantly based on complexity. A simple sensor node with existing hardware: 1-2 weeks. Custom PCB + firmware for a new product: 6-12 weeks. Complex multi-node mesh networks or industrial controllers: 3-6 months. I provide a detailed timeline with milestones after the discovery phase. Factors that affect timeline: hardware complexity (layers, components), firmware complexity (RTOS, protocols), certification requirements, and component lead times.',
  },
  {
    id: 'what-do-you-need',
    question: 'What do you need from me to get started?',
    answer: 'At minimum: a clear description of what you want the system to do (inputs, outputs, behavior), your budget range, and your timeline. Helpful additions: sketches or block diagrams, existing hardware you want to integrate, preferred cloud/platform, enclosure constraints, regulatory requirements (FCC, CE, UL), and volume estimates (prototype vs. production). The more detail you provide upfront, the more accurate my estimate will be.',
  },
  {
    id: 'post-delivery-support',
    question: 'Do you offer support after delivery?',
    answer: 'Yes. Every project includes 30 days of post-delivery support for questions, minor adjustments, and bug fixes. Extended support retainers are available for ongoing maintenance, feature additions, or production scaling. I also provide complete documentation so your team (or another developer) can maintain the system independently.',
  },
  {
    id: 'remote-work',
    question: 'Can you work remotely?',
    answer: 'Yes, I work with clients worldwide. Communication via video calls, email, and project management tools (GitHub, Notion, Trello, etc.). For hardware projects, I can ship prototypes to you for testing, or you can source components locally from my BOM. Time zone differences are managed with async updates and scheduled sync calls.',
  },
];

export default faqItems;