export const skillCategories = [
  {
    category: 'Microcontrollers & Platforms',
    skills: [
      { name: 'ESP32 (All Variants)', level: 95, icon: 'cpu' },
      { name: 'ESP8266', level: 90, icon: 'wifi' },
      { name: 'Arduino (AVR, SAMD, ESP)', level: 95, icon: 'hard-drive' },
      { name: 'STM32 (Cortex-M)', level: 80, icon: 'cpu' },
      { name: 'RP2040 / Pico', level: 85, icon: 'cpu' },
      { name: 'nRF52 / Nordic', level: 70, icon: 'bluetooth' },
    ],
  },
  {
    category: 'Programming & Frameworks',
    skills: [
      { name: 'C / C++ (Embedded)', level: 95, icon: 'code' },
      { name: 'ESP-IDF / FreeRTOS', level: 90, icon: 'git-branch' },
      { name: 'Arduino Framework', level: 95, icon: 'hard-drive' },
      { name: 'PlatformIO / CMake', level: 90, icon: 'settings' },
      { name: 'Python (MicroPython, Host)', level: 85, icon: 'terminal' },
      { name: 'Rust (Embedded)', level: 65, icon: 'shield' },
    ],
  },
  {
    category: 'Connectivity & Protocols',
    skills: [
      { name: 'Wi-Fi / Wi-Fi 6', level: 90, icon: 'wifi' },
      { name: 'Bluetooth / BLE 5.0+', level: 85, icon: 'bluetooth' },
      { name: 'ESP-NOW / ESP-MESH', level: 85, icon: 'radio' },
      { name: 'MQTT / HTTP / CoAP', level: 90, icon: 'globe' },
      { name: 'Modbus RTU / TCP', level: 80, icon: 'cpu' },
      { name: 'CAN Bus / CANopen', level: 75, icon: 'git-branch' },
      { name: 'LoRa / LoRaWAN', level: 70, icon: 'radio' },
      { name: 'Matter / Thread', level: 65, icon: 'home' },
    ],
  },
  {
    category: 'Hardware & Interfaces',
    skills: [
      { name: 'PCB Design (KiCad, EasyEDA)', level: 85, icon: 'layout' },
      { name: 'Schematic Capture', level: 90, icon: 'git-branch' },
      { name: 'I2C / SPI / UART / 1-Wire', level: 95, icon: 'git-branch' },
      { name: 'ADC / DAC / PWM', level: 95, icon: 'sliders' },
      { name: 'Sensor Integration (IMU, Env, Gas)', level: 90, icon: 'sensor' },
      { name: 'Motor Control (BLDC, Stepper, Servo)', level: 80, icon: 'rotate-cw' },
      { name: 'Display Interfaces (SPI, I2C, RGB, MIPI)', level: 75, icon: 'monitor' },
      { name: 'Power Electronics (SMPS, Battery Mgmt)', level: 70, icon: 'battery' },
    ],
  },
  {
    category: 'Tools & Practices',
    skills: [
      { name: 'Git / GitHub / GitLab', level: 95, icon: 'git-branch' },
      { name: 'CI/CD (GitHub Actions, GitLab CI)', level: 85, icon: 'refresh-cw' },
      { name: 'Unit Testing (Unity, CMock)', level: 80, icon: 'check-circle' },
      { name: 'Static Analysis (Cppcheck, Clang-Tidy)', level: 80, icon: 'search' },
      { name: 'Debugging (JTAG, SWO, Logic Analyzer)', level: 90, icon: 'bug' },
      { name: 'Version Control & Release Mgmt', level: 90, icon: 'package' },
      { name: 'Technical Documentation', level: 85, icon: 'file-text' },
    ],
  },
];

export const proficiencyLevels = [
  { level: 90, label: 'Expert', description: 'Deep expertise, can architect complex systems' },
  { level: 75, label: 'Advanced', description: 'Strong practical experience, solves difficult problems' },
  { level: 60, label: 'Proficient', description: 'Comfortable with standard tasks, learning advanced topics' },
  { level: 40, label: 'Familiar', description: 'Basic understanding, can contribute with guidance' },
];

export default skillCategories;