import React from 'react';

// Detailed, visually rich illustrations for each DIVITS pillar
// Each uses consistent line-weight, rounded caps, and pillar-specific accent color

const AssistIllustration = ({ color }) => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
    {/* Decorative border frame */}
    <rect x="6" y="6" width="268" height="268" rx="16" stroke={color} strokeWidth="1" opacity="0.2" fill="none" />
    <rect x="10" y="10" width="260" height="260" rx="12" stroke={color} strokeWidth="0.5" opacity="0.1" fill="none" />

    {/* Background glow with gradient */}
    <defs>
      <radialGradient id="assist-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.12" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="140" cy="140" r="120" fill={`url(#assist-glow)`} />
    <circle cx="140" cy="140" r="90" fill={`${color}05`} />

    {/* Central circuit board / diagnostic board */}
    <rect x="80" y="60" width="120" height="110" rx="8" stroke={color} strokeWidth="2" fill={`${color}08`} />
    {/* Chip label */}
    <text x="140" y="85" textAnchor="middle" fill={color} fontSize="7" fontWeight="bold" fontFamily="monospace">MCU</text>
    <text x="140" y="95" textAnchor="middle" fill={`${color}80`} fontSize="5" fontFamily="monospace">DIAG</text>
    {/* IC on board */}
    <rect x="105" y="100" width="30" height="14" rx="2" fill={`${color}0c`} stroke={color} strokeWidth="1" />
    <text x="120" y="111" textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">U1</text>
    {/* Pins left */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`al-${i}`} x1="75" y1={65 + i * 14} x2="68" y2={65 + i * 14} />
      ))}
    </g>
    {/* Pins right */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`ar-${i}`} x1="197" y1={65 + i * 14} x2="204" y2={65 + i * 14} />
      ))}
    </g>
    {/* Circuit traces */}
    <line x1="95" y1="90" x2="120" y2="90" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="120" y1="90" x2="120" y2="115" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="120" y1="115" x2="160" y2="115" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="95" y1="135" x2="120" y2="135" stroke={color} strokeWidth="0.8" opacity="0.4" />

    {/* Multimeter */}
    <g transform="translate(50, 175)">
      <rect x="0" y="0" width="30" height="18" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}0a`} />
      <circle cx="10" cy="9" r="4" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="10" cy="9" r="1.5" fill={color} opacity="0.4" />
      <line x1="22" y1="9" x2="26" y2="9" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="22" y1="6" x2="22" y2="12" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <text x="15" y="14" textAnchor="middle" fill={color} fontSize="4" fontFamily="monospace" opacity="0.6">V</text>
    </g>

    {/* Oscilloscope / screen */}
    <g transform="translate(185, 170)">
      <rect x="0" y="0" width="35" height="25" rx="4" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <rect x="5" y="5" width="25" height="15" rx="2" fill={`${color}04`} />
      {/* Waveform */}
      <polyline points="7,15 12,10 17,15 22,8 27,12" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
      <line x1="5" y1="20" x2="30" y2="20" stroke={color} strokeWidth="0.5" opacity="0.3" />
    </g>

    {/* Bug / issue icon (top-right) */}
    <circle cx="230" cy="45" r="12" stroke={color} strokeWidth="1.5" fill={`${color}10`} />
    <circle cx="230" cy="45" r="4" stroke={color} strokeWidth="1" />
    <line x1="235" y1="49" x2="240" y2="53" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

    {/* Checkmark / fixed indicator (bottom-right) */}
    <path d="M220 170 L228 178 L242 162" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />

    {/* Wrench (left-bottom) */}
    <g transform="translate(40, 215)">
      <path d="M0 0 L12 0 L12 7 L4 7 L4 16 L0 20 L-4 16 L-4 7 L-12 7 L-12 0 Z" stroke={color} strokeWidth="1" fill={`${color}08`} strokeLinejoin="round" />
      <circle cx="4" cy="-5" r="3" stroke={color} strokeWidth="1" fill="none" />
    </g>

    {/* Connection lines */}
    <line x1="140" y1="30" x2="140" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <line x1="40" y1="100" x2="30" y2="100" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <line x1="40" y1="60" x2="30" y2="60" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.2" />

    {/* Decorative dots */}
    <circle cx="55" cy="165" r="2" fill={color} opacity="0.3" />
    <circle cx="70" cy="170" r="1.5" fill={color} opacity="0.2" />
    <circle cx="235" cy="185" r="2.5" fill={color} opacity="0.3" />
    <circle cx="250" cy="195" r="1.5" fill={color} opacity="0.2" />
    <circle cx="50" cy="130" r="1.5" fill={color} opacity="0.15" />
    <circle cx="260" cy="140" r="1" fill={color} opacity="0.15" />
  </svg>
);

const BuildIllustration = ({ color }) => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
    {/* Decorative border frame */}
    <rect x="6" y="6" width="268" height="268" rx="16" stroke={color} strokeWidth="1" opacity="0.2" fill="none" />
    <rect x="10" y="10" width="260" height="260" rx="12" stroke={color} strokeWidth="0.5" opacity="0.1" fill="none" />

    {/* Background glow with gradient */}
    <defs>
      <radialGradient id="build-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.12" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="140" cy="140" r="120" fill={`url(#build-glow)`} />
    <circle cx="140" cy="140" r="90" fill={`${color}05`} />

    {/* Central ESP32 dev board */}
    <rect x="80" y="55" width="120" height="100" rx="8" stroke={color} strokeWidth="2" fill={`${color}08`} />
    {/* Chip label */}
    <text x="140" y="80" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="monospace">ESP32</text>
    <text x="140" y="92" textAnchor="middle" fill={`${color}80`} fontSize="5.5" fontFamily="monospace">DEV KIT</text>
    {/* IC */}
    <rect x="105" y="100" width="30" height="14" rx="2" fill={`${color}0c`} stroke={color} strokeWidth="1" />
    <text x="120" y="111" textAnchor="middle" fill={color} fontSize="4.5" fontFamily="monospace">U1</text>
    {/* Circuit traces */}
    <line x1="95" y1="75" x2="120" y2="75" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="120" y1="75" x2="120" y2="100" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="120" y1="100" x2="160" y2="100" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="95" y1="120" x2="120" y2="120" stroke={color} strokeWidth="0.8" opacity="0.4" />
    {/* Pins left */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`bl-${i}`} x1="75" y1={60 + i * 10} x2="68" y2={60 + i * 10} />
      ))}
    </g>
    {/* Pins right */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`br-${i}`} x1="197" y1={60 + i * 10} x2="204" y2={60 + i * 10} />
      ))}
    </g>

    {/* USB port */}
    <rect x="130" y="48" width="14" height="7" rx="2" stroke={color} strokeWidth="1.2" fill={`${color}0a`} />
    {/* LED indicator */}
    <circle cx="165" cy="65" r="2.5" fill={color} opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Breadboard */}
    <rect x="55" y="175" width="50" height="25" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
    {/* Breadboard rows */}
    <line x1="60" y1="185" x2="95" y2="185" stroke={color} strokeWidth="0.5" opacity="0.4" />
    <line x1="60" y1="190" x2="95" y2="190" stroke={color} strokeWidth="0.5" opacity="0.4" />
    <line x1="60" y1="195" x2="95" y2="195" stroke={color} strokeWidth="0.5" opacity="0.4" />
    <line x1="60" y1="187.5" x2="85" y2="187.5" stroke={color} strokeWidth="0.3" opacity="0.25" />

    {/* Soldering iron */}
    <g transform="translate(200, 210)">
      <rect x="-4" y="-12" width="8" height="20" rx="2" stroke={color} strokeWidth="1" fill={`${color}08`} />
      <circle cx="0" cy="-16" r="3.5" stroke={color} strokeWidth="1" fill="none" />
      <line x1="0" y1="-19" x2="0" y2="-24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="0" cy="-24" r="1.5" fill={color} opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="1.5s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Wrench */}
    <g transform="translate(215, 170)">
      <path d="M0 0 L12 0 L12 7 L4 7 L4 16 L0 20 L-4 16 L-4 7 L-12 7 L-12 0 Z" stroke={color} strokeWidth="1" fill={`${color}08`} strokeLinejoin="round" />
      <circle cx="4" cy="-5" r="3" stroke={color} strokeWidth="1" fill="none" />
    </g>

    {/* Spark */}
    <path d="M240 45 L244 40 L248 45 L244 50 Z" stroke={color} strokeWidth="0.8" fill={color} opacity="0.4" />
    <circle cx="248" cy="40" r="2" stroke={color} strokeWidth="0.8" opacity="0.3" />

    {/* Decorative dots */}
    <circle cx="80" cy="50" r="2" fill={color} opacity="0.3" />
    <circle cx="220" cy="50" r="2" fill={color} opacity="0.3" />
    <circle cx="50" cy="200" r="2" fill={color} opacity="0.3" />
    <circle cx="240" cy="210" r="1.5" fill={color} opacity="0.2" />
  </svg>
);

const IoTIllustration = ({ color }) => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
    {/* Decorative border frame */}
    <rect x="6" y="6" width="268" height="268" rx="16" stroke={color} strokeWidth="1" opacity="0.2" fill="none" />
    <rect x="10" y="10" width="260" height="260" rx="12" stroke={color} strokeWidth="0.5" opacity="0.1" fill="none" />

    {/* Background glow with gradient */}
    <defs>
      <radialGradient id="iot-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.12" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="140" cy="140" r="120" fill={`url(#iot-glow)`} />
    <circle cx="140" cy="140" r="90" fill={`${color}05`} />

    {/* Central hub with glow */}
    <circle cx="140" cy="140" r="32" stroke={color} strokeWidth="2.5" fill={`${color}10`} />
    <circle cx="140" cy="140" r="14" fill={color} opacity="0.2" />
    {/* Hub signal waves - expanding rings */}
    <circle cx="140" cy="140" r="48" stroke={color} strokeWidth="0.8" opacity="0.25" />
    <circle cx="140" cy="140" r="62" stroke={color} strokeWidth="0.6" opacity="0.15" />
    <circle cx="140" cy="140" r="76" stroke={color} strokeWidth="0.4" opacity="0.08" />
    {/* Pulsing ring */}
    <circle cx="140" cy="140" r="37" stroke={color} strokeWidth="0.5" opacity="0.12">
      <animate attributeName="r" values="37;50;37" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.12;0.04;0.12" dur="3s" repeatCount="indefinite" />
    </circle>
    {/* Hub network icon */}
    <circle cx="140" cy="140" r="4" fill={color} />
    <circle cx="133" cy="147" r="2" fill={color} opacity="0.5" />
    <circle cx="147" cy="147" r="2" fill={color} opacity="0.5" />

    {/* Sensor node 1 - top left (temperature sensor) */}
    <g>
      <circle cx="50" cy="60" r="12" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <circle cx="50" cy="60" r="5" fill={color} opacity="0.15" />
      <line x1="50" y1="48" x2="50" y2="44" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="50" y1="72" x2="50" y2="76" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="38" y1="60" x2="34" y2="60" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="62" y1="60" x2="66" y2="60" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Glowing node */}
      <circle cx="50" cy="60" r="2" fill={color} opacity="0.7">
        <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* Data label */}
      <text x="50" y="63" textAnchor="middle" fill={color} fontSize="4" opacity="0.4">T</text>
    </g>

    {/* Sensor node 2 - top right (humidity/air) */}
    <g>
      <rect x="218" y="52" width="24" height="16" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <circle cx="230" cy="60" r="4" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="230" cy="60" r="1.5" fill={color} opacity="0.5" />
      {/* Glowing node */}
      <circle cx="230" cy="60" r="1.5" fill={color} opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <text x="230" y="78" textAnchor="middle" fill={color} fontSize="3.5" opacity="0.4">H</text>
    </g>

    {/* Sensor node 3 - mid left (motion) */}
    <g>
      <polygon points="35,110 43,114 43,122 35,126 27,122 27,114" stroke={color} strokeWidth="1.2" fill={`${color}08`} />
      <circle cx="35" cy="118" r="3" stroke={color} strokeWidth="1" fill={`${color}0a`} />
      <line x1="35" y1="115" x2="35" y2="111" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="35" y1="123" x2="35" y2="127" stroke={color} strokeWidth="1" strokeLinecap="round" />
      {/* Glowing node */}
      <circle cx="35" cy="118" r="1.5" fill={color} opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Device 4 - bottom left (smart plug/outlet) */}
    <g>
      <rect x="55" y="195" width="22" height="28" rx="4" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <rect x="62" y="202" width="8" height="6" rx="1" fill={color} opacity="0.2" />
      <circle cx="66" cy="199" r="1.5" fill={color} opacity="0.4" />
      {/* Glowing node */}
      <circle cx="66" cy="209" r="1.5" fill={color} opacity="0.5">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Device 5 - bottom right (smart bulb) */}
    <g>
      <path d="M225 195 L235 185 L245 195 L235 205 Z" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <circle cx="235" cy="195" r="8" stroke={color} strokeWidth="1" fill={`${color}0a`} />
      <circle cx="235" cy="195" r="3" fill={color} opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Device 6 - top center (cloud/server) */}
    <g>
      <path d="M122 28 L140 22 L158 28 L158 40 L122 40 Z" stroke={color} strokeWidth="1.2" fill={`${color}08`} />
      <rect x="125" y="40" width="20" height="10" rx="2" stroke={color} strokeWidth="1" fill={`${color}06`} />
      <circle cx="132" cy="48" r="1.5" fill={color} opacity="0.4" />
      <circle cx="140" cy="48" r="1.5" fill={color} opacity="0.4" />
      <circle cx="148" cy="48" r="1.5" fill={color} opacity="0.4" />
    </g>

    {/* Connection lines to center - dashed data flow paths */}
    <line x1="50" y1="60" x2="115" y2="125" stroke={color} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
    <line x1="230" y1="60" x2="165" y2="125" stroke={color} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
    <line x1="35" y1="118" x2="125" y2="155" stroke={color} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
    <line x1="66" y1="209" x2="140" y2="170" stroke={color} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
    <line x1="235" y1="195" x2="160" y2="155" stroke={color} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 3" />
    <line x1="140" y1="45" x2="140" y2="108" stroke={color} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 3" />

    {/* Data flow particles along connections */}
    <circle cx="82" cy="92" r="1.5" fill={color} opacity="0.4">
      <animate attributeName="cx" values="82;110;140" dur="3s" repeatCount="indefinite" />
      <animate attributeName="cy" values="92;110;140" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="92" r="1.5" fill={color} opacity="0.4">
      <animate attributeName="cx" values="150;165;140" dur="3.5s" repeatCount="indefinite" />
      <animate attributeName="cy" values="92;115;140" dur="3.5s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="140" cy="130" r="1.5" fill={color} opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="95" cy="170" r="1.5" fill={color} opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="190" cy="170" r="1.5" fill={color} opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" />
    </circle>

    {/* MQTT label */}
    <text x="140" y="185" textAnchor="middle" fill={color} fontSize="5" fontFamily="monospace" opacity="0.3">MQTT</text>
  </svg>
);

/* ────────────────────────────────────────────
   HOME ILLUSTRATION – Smart Home Technology
   Enhanced: ESP32 board + IoT nodes + sensors
   ──────────────────────────────────────────── */
const HomeIllustration = ({ color }) => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
    {/* Decorative border frame */}
    <rect x="6" y="6" width="268" height="268" rx="16" stroke={color} strokeWidth="1" opacity="0.2" fill="none" />
    <rect x="10" y="10" width="260" height="260" rx="12" stroke={color} strokeWidth="0.5" opacity="0.1" fill="none" />

    {/* Background glow with gradient */}
    <defs>
      <radialGradient id="home-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.12" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="140" cy="140" r="120" fill={`url(#home-glow)`} />
    <circle cx="140" cy="140" r="90" fill={`${color}05`} />

    {/* Central ESP32 board */}
    <rect x="95" y="75" width="90" height="60" rx="8" stroke={color} strokeWidth="2" fill={`${color}0a`} />
    {/* Chip label */}
    <text x="140" y="98" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="monospace">ESP32</text>
    <text x="140" y="108" textAnchor="middle" fill={`${color}80`} fontSize="5.5" fontFamily="monospace">WROVER</text>
    {/* Circuit traces on board */}
    <line x1="110" y1="85" x2="130" y2="85" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="130" y1="85" x2="130" y2="105" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="130" y1="105" x2="160" y2="105" stroke={color} strokeWidth="0.8" opacity="0.4" />
    {/* USB port */}
    <rect x="148" y="75" width="8" height="5" rx="1" fill={color} opacity="0.3" />
    {/* LED indicator */}
    <circle cx="175" cy="90" r="2" fill={color} opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Pins left */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`hl-${i}`} x1="88" y1={78 + i * 8} x2="80" y2={78 + i * 8} />
      ))}
    </g>
    {/* Pins right */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`hr-${i}`} x1="192" y1={78 + i * 8} x2={200 + i * 0} y2={78 + i * 8} />
      ))}
    </g>

    {/* ── Smart Home Devices arranged around ESP32 ── */}

    {/* WiFi signal arcs (top) */}
    <path d="M125 35 Q140 22 155 35" stroke={color} strokeWidth="1.2" fill="none" opacity="0.5" />
    <path d="M120 30 Q140 12 160 30" stroke={color} strokeWidth="0.8" fill="none" opacity="0.3" />
    <circle cx="140" cy="32" r="1.5" fill={color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Thermostat (top-left) */}
    <g transform="translate(60, 65)">
      <circle cx="10" cy="10" r="10" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <circle cx="10" cy="10" r="4" fill={color} opacity="0.3" />
      <line x1="10" y1="6" x2="10" y2="3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="17" x2="10" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6" y1="10" x2="3" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="10" x2="20" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Smart lock (left) */}
    <g transform="translate(48, 145)">
      <rect x="0" y="0" width="18" height="22" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <circle cx="9" cy="14" r="4" stroke={color} strokeWidth="1.5" fill={`${color}10`} />
      <rect x="7" y="5" width="4" height="4" rx="1" fill={color} opacity="0.3" />
      <circle cx="9" cy="14" r="1.5" fill={color} opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.3s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Camera (left-bottom) */}
    <g transform="translate(60, 200)">
      <rect x="0" y="0" width="22" height="16" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <circle cx="18" cy="8" r="4" stroke={color} strokeWidth="1.5" fill={`${color}10`} />
      <circle cx="18" cy="8" r="1.5" fill={color} opacity="0.4" />
    </g>

    {/* Smart speaker (right) */}
    <g transform="translate(210, 65)">
      <circle cx="10" cy="10" r="10" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <circle cx="10" cy="10" r="5" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="10" cy="10" r="2" fill={color} opacity="0.3" />
      <line x1="10" y1="0" x2="10" y2="-2" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="10" y1="20" x2="10" y2="22" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="0" y1="10" x2="-2" y2="10" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="20" y1="10" x2="22" y2="10" stroke={color} strokeWidth="1" strokeLinecap="round" />
      {/* Sound waves */}
      <path d="M15 7 Q18 10 15 13" stroke={color} strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M17 5 Q21 10 17 15" stroke={color} strokeWidth="0.8" fill="none" opacity="0.2" />
    </g>

    {/* Lightbulb (top-right) */}
    <g transform="translate(185, 50)">
      <path d="M0 10 L5 0 L10 10 Z" stroke={color} strokeWidth="1.5" fill={`${color}15`} strokeLinejoin="round" />
      <circle cx="5" cy="15" r="8" stroke={color} strokeWidth="1.5" fill={`${color}10`} />
      <circle cx="5" cy="15" r="3" fill={color} opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Motion sensor (bottom-right) */}
    <g transform="translate(215, 170)">
      <polygon points="10,2 18,6 18,14 10,18 2,14 2,6" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <circle cx="10" cy="10" r="4" stroke={color} strokeWidth="1" fill={`${color}10`} />
      <line x1="10" y1="6" x2="10" y2="3" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="10" y1="17" x2="10" y2="20" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </g>

    {/* Solar panel (far right-top) */}
    <rect x="215" y="30" width="30" height="14" rx="2" stroke={color} strokeWidth="1.2" fill={`${color}0c`} />
    <line x1="223" y1="30" x2="223" y2="44" stroke={color} strokeWidth="0.6" opacity="0.5" />
    <line x1="231" y1="30" x2="231" y2="44" stroke={color} strokeWidth="0.6" opacity="0.5" />
    <line x1="241" y1="30" x2="241" y2="44" stroke={color} strokeWidth="0.6" opacity="0.5" />
    <line x1="215" y1="37" x2="245" y2="37" stroke={color} strokeWidth="0.6" opacity="0.5" />
    <line x1="215" y1="44" x2="245" y2="44" stroke={color} strokeWidth="0.6" opacity="0.5" />

    {/* WiFi network nodes (top area) */}
    <circle cx="200" cy="40" r="2" fill={color} opacity="0.4">
      <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="90" cy="40" r="2" fill={color} opacity="0.3">
      <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Connection lines from ESP32 to devices */}
    <line x1="140" y1="75" x2="65" y2="72" stroke={color} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 2" />
    <line x1="140" y1="95" x2="55" y2="152" stroke={color} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 2" />
    <line x1="140" y1="100" x2="220" y2="72" stroke={color} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 2" />
    <line x1="140" y1="100" x2="225" y2="178" stroke={color} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 2" />
    <line x1="140" y1="85" x2="190" y2="58" stroke={color} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 2" />

    {/* Shield (security) - bottom center */}
    <g transform="translate(130, 230)">
      <path d="M0 5 L0 0 L10 3 L20 0 L20 5 L18 20 L10 25 L2 20 Z" stroke={color} strokeWidth="1.5" fill={`${color}10`} strokeLinejoin="round" />
      <path d="M8 12 L9.5 14 L13 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* House silhouette (bottom) */}
    <path d="M80 220 L80 195 L140 175 L200 195 L200 220 Z" stroke={color} strokeWidth="1" opacity="0.2" fill={`${color}06`} strokeLinejoin="round" />
    <rect x="130" y="195" width="20" height="25" rx="1" stroke={color} strokeWidth="0.8" opacity="0.15" />
    <circle cx="175" cy="225" r="2" fill={color} opacity="0.3" />
    <circle cx="105" cy="225" r="2" fill={color} opacity="0.3" />

    {/* Decorative dots */}
    <circle cx="55" cy="30" r="2" fill={color} opacity="0.2" />
    <circle cx="230" cy="30" r="2" fill={color} opacity="0.2" />
    <circle cx="50" cy="250" r="2" fill={color} opacity="0.2" />
    <circle cx="240" cy="240" r="1.5" fill={color} opacity="0.15" />
    <circle cx="140" cy="145" r="1" fill={color} opacity="0.15" />
  </svg>
);

/* ────────────────────────────────────────────
   ABOUT ILLUSTRATION – Microcontroller/Engineering
   ──────────────────────────────────────────── */
const AboutIllustration = ({ color }) => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
    {/* Decorative border frame */}
    <rect x="6" y="6" width="268" height="268" rx="16" stroke={color} strokeWidth="1" opacity="0.2" fill="none" />
    <rect x="10" y="10" width="260" height="260" rx="12" stroke={color} strokeWidth="0.5" opacity="0.1" fill="none" />

    {/* Background glow with gradient */}
    <defs>
      <radialGradient id="about-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.12" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="140" cy="140" r="120" fill={`url(#about-glow)`} />
    <circle cx="140" cy="140" r="90" fill={`${color}05`} />

    {/* Central microcontroller chip */}
    <rect x="95" y="70" width="90" height="70" rx="8" stroke={color} strokeWidth="2" fill={`${color}0a`} />
    {/* Chip label */}
    <text x="140" y="94" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="monospace">MCU</text>
    <text x="140" y="105" textAnchor="middle" fill={`${color}80`} fontSize="5.5" fontFamily="monospace">CORE</text>
    {/* Internal circuit */}
    <line x1="110" y1="85" x2="130" y2="85" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="130" y1="85" x2="130" y2="100" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="130" y1="100" x2="160" y2="100" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="110" y1="110" x2="130" y2="110" stroke={color} strokeWidth="0.8" opacity="0.4" />
    {/* Pins left */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`al-${i}`} x1="88" y1={74 + i * 7} x2="80" y2={74 + i * 7} />
      ))}
    </g>
    {/* Pins right */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`ar-${i}`} x1="192" y1={74 + i * 7} x2="200" y2={74 + i * 7} />
      ))}
    </g>
    {/* Pin dots left */}
    <g fill={color} opacity="0.5">
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={`adl-${i}`} cx="80" cy={74 + i * 7} r="1" />
      ))}
    </g>
    {/* Pin dots right */}
    <g fill={color} opacity="0.5">
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={`adr-${i}`} cx="200" cy={74 + i * 7} r="1" />
      ))}
    </g>

    {/* Circuit trace lines radiating out */}
    <g stroke={color} strokeWidth="0.6" opacity="0.25" strokeLinecap="round">
      <line x1="100" y1="90" x2="55" y2="90" />
      <line x1="180" y1="90" x2="225" y2="90" />
      <line x1="90" y1="120" x2="55" y2="150" />
      <line x1="190" y1="120" x2="225" y2="150" />
      <line x1="100" y1="140" x2="60" y2="185" />
      <line x1="180" y1="140" x2="220" y2="185" />
    </g>

    {/* Connected component circles */}
    <circle cx="40" cy="90" r="8" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <circle cx="40" cy="90" r="3" fill={color} opacity="0.2" />
    <circle cx="240" cy="90" r="8" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <circle cx="240" cy="90" r="3" fill={color} opacity="0.2" />
    <circle cx="40" cy="150" r="6" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <circle cx="40" cy="150" r="2.5" fill={color} opacity="0.2" />
    <circle cx="240" cy="150" r="6" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <circle cx="240" cy="150" r="2.5" fill={color} opacity="0.2" />
    <circle cx="55" cy="185" r="5" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <circle cx="55" cy="185" r="2" fill={color} opacity="0.2" />
    <circle cx="225" cy="185" r="5" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <circle cx="225" cy="185" r="2" fill={color} opacity="0.2" />

    {/* Glowing nodes on traces */}
    <circle cx="55" cy="90" r="1.5" fill={color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="225" cy="90" r="1.5" fill={color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
    </circle>
    <circle cx="55" cy="150" r="1.5" fill={color} opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="225" cy="150" r="1.5" fill={color} opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.2s" repeatCount="indefinite" />
    </circle>

    {/* Data flow dots along traces */}
    <circle cx="75" cy="90" r="1.5" fill={color} opacity="0.4">
      <animate attributeName="cx" values="75;100;125" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    <circle cx="155" cy="90" r="1.5" fill={color} opacity="0.4">
      <animate attributeName="cx" values="155;180;205" dur="3s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
    </circle>

    {/* Small tool wrench (bottom-right) */}
    <g transform="translate(220, 220)">
      <path d="M0 0 L12 0 L12 8 L4 8 L4 18 L0 22 L-4 18 L-4 8 L-12 8 L-12 0 Z" stroke={color} strokeWidth="1" fill={`${color}08`} strokeLinejoin="round" />
      <circle cx="4" cy="-5" r="3" stroke={color} strokeWidth="1" fill="none" />
    </g>

    {/* Shield icon (top-right) */}
    <g transform="translate(215, 50)">
      <path d="M0 4 L0 0 L8 2 L16 0 L16 4 L14 16 L8 20 L2 16 Z" stroke={color} strokeWidth="1" fill={`${color}0a`} strokeLinejoin="round" />
      <path d="M6 10 L7.5 12 L11 8" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Decorative dots */}
    <circle cx="50" cy="50" r="1.5" fill={color} opacity="0.2" />
    <circle cx="235" cy="50" r="1.5" fill={color} opacity="0.2" />
    <circle cx="50" cy="230" r="1.5" fill={color} opacity="0.2" />
    <circle cx="235" cy="230" r="1.5" fill={color} opacity="0.2" />
    <circle cx="140" cy="145" r="1" fill={color} opacity="0.15" />
  </svg>
);

/* ────────────────────────────────────────────
   PROJECTS ILLUSTRATION – Engineering/Prototype
   ──────────────────────────────────────────── */
const ProjectsIllustration = ({ color }) => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
    {/* Decorative border frame */}
    <rect x="6" y="6" width="268" height="268" rx="16" stroke={color} strokeWidth="1" opacity="0.2" fill="none" />
    <rect x="10" y="10" width="260" height="260" rx="12" stroke={color} strokeWidth="0.5" opacity="0.1" fill="none" />

    {/* Background glow with gradient */}
    <defs>
      <radialGradient id="projects-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.12" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="140" cy="140" r="120" fill={`url(#projects-glow)`} />
    <circle cx="140" cy="140" r="90" fill={`${color}05`} />

    {/* Central microcontroller / dev board */}
    <rect x="85" y="65" width="110" height="75" rx="8" stroke={color} strokeWidth="2" fill={`${color}0a`} />
    {/* Chip label */}
    <text x="140" y="90" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="monospace">DEV</text>
    <text x="140" y="102" textAnchor="middle" fill={`${color}80`} fontSize="5.5" fontFamily="monospace">BOARD</text>
    {/* Pins left */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`pl-${i}`} x1="80" y1={69 + i * 7} x2="72" y2={69 + i * 7} />
      ))}
    </g>
    {/* Pins right */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`pr-${i}`} x1="195" y1={69 + i * 7} x2="203" y2={69 + i * 7} />
      ))}
    </g>

    {/* Circuit traces from board */}
    <g stroke={color} strokeWidth="0.6" opacity="0.25" strokeLinecap="round">
      <line x1="100" y1="85" x2="55" y2="85" />
      <line x1="180" y1="85" x2="225" y2="85" />
      <line x1="90" y1="115" x2="50" y2="150" />
      <line x1="190" y1="115" x2="230" y2="150" />
      <line x1="100" y1="135" x2="55" y2="185" />
    </g>

    {/* Connected components – resistors */}
    <rect x="38" y="78" width="14" height="8" rx="1" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <rect x="228" y="78" width="14" height="8" rx="1" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <rect x="38" y="143" width="12" height="8" rx="1" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <rect x="228" y="143" width="12" height="8" rx="1" stroke={color} strokeWidth="1" fill={`${color}08`} />

    {/* Capacitor symbol */}
    <line x1="55" y1="85" x2="55" y2="100" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="53" y1="92" x2="57" y2="92" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="55" y1="110" x2="55" y2="125" stroke={color} strokeWidth="0.8" opacity="0.4" />
    <line x1="53" y1="117" x2="57" y2="117" stroke={color} strokeWidth="0.8" opacity="0.4" />

    {/* Connected component circles */}
    <circle cx="55" cy="150" r="6" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <circle cx="55" cy="150" r="2.5" fill={color} opacity="0.2" />
    <circle cx="225" cy="150" r="6" stroke={color} strokeWidth="1" fill={`${color}08`} />
    <circle cx="225" cy="150" r="2.5" fill={color} opacity="0.2" />

    {/* Glowing nodes */}
    <circle cx="55" cy="85" r="1.5" fill={color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="225" cy="85" r="1.5" fill={color} opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite" />
    </circle>

    {/* Sensor icon (top-left area) */}
    <g transform="translate(45, 45)">
      <polygon points="10,2 18,6 18,14 10,18 2,14 2,6" stroke={color} strokeWidth="1.2" fill={`${color}08`} />
      <circle cx="10" cy="10" r="3" stroke={color} strokeWidth="1" fill={`${color}0a`} />
      <line x1="10" y1="7" x2="10" y2="4" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="10" y1="17" x2="10" y2="20" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </g>

    {/* Antenna/wifi device (top-right) */}
    <g transform="translate(215, 50)">
      <rect x="0" y="8" width="20" height="12" rx="2" stroke={color} strokeWidth="1.2" fill={`${color}08`} />
      <line x1="10" y1="8" x2="10" y2="0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 0 Q10 -6 15 0" stroke={color} strokeWidth="1" fill="none" />
      <circle cx="10" cy="4" r="1.5" fill={color} opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
    </g>

    {/* Screen/monitor (bottom) */}
    <g transform="translate(80, 200)">
      <rect x="0" y="0" width="30" height="20" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}08`} />
      <rect x="4" y="4" width="22" height="10" rx="1" fill={`${color}04`} />
      {/* Screen content lines */}
      <line x1="6" y1="7" x2="18" y2="7" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <line x1="6" y1="9" x2="14" y2="9" stroke={color} strokeWidth="0.5" opacity="0.3" />
      <line x1="6" y1="11" x2="20" y2="11" stroke={color} strokeWidth="0.5" opacity="0.4" />
    </g>

    {/* Wrench (bottom-right) */}
    <g transform="translate(220, 220)">
      <path d="M0 0 L10 0 L10 7 L3 7 L3 15 L0 18 L-3 15 L-3 7 L-10 7 L-10 0 Z" stroke={color} strokeWidth="1" fill={`${color}08`} strokeLinejoin="round" />
      <circle cx="3" cy="-5" r="3" stroke={color} strokeWidth="1" fill="none" />
    </g>

    {/* Spark/decoration */}
    <path d="M240 40 L244 36 L248 40 L244 44 Z" stroke={color} strokeWidth="0.8" fill={color} opacity="0.3" />

    {/* Decorative dots */}
    <circle cx="50" cy="50" r="1.5" fill={color} opacity="0.2" />
    <circle cx="235" cy="50" r="1.5" fill={color} opacity="0.2" />
    <circle cx="50" cy="230" r="1.5" fill={color} opacity="0.2" />
    <circle cx="235" cy="230" r="1.5" fill={color} opacity="0.2" />
    <circle cx="140" cy="145" r="1" fill={color} opacity="0.15" />
  </svg>
);

/* ────────────────────────────────────────────
   BUILD HARDWARE ILLUSTRATION – Electronics/PCBs
   ──────────────────────────────────────────── */
const BuildHardwareIllustration = ({ color }) => (
  <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
    {/* Decorative border frame */}
    <rect x="6" y="6" width="268" height="268" rx="16" stroke={color} strokeWidth="1" opacity="0.2" fill="none" />
    <rect x="10" y="10" width="260" height="260" rx="12" stroke={color} strokeWidth="0.5" opacity="0.1" fill="none" />

    {/* Background glow with gradient */}
    <defs>
      <radialGradient id="buildHardware-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.12" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="140" cy="140" r="120" fill={`url(#buildHardware-glow)`} />
    <circle cx="140" cy="140" r="90" fill={`${color}05`} />

    {/* Central large PCB board */}
    <rect x="75" y="55" width="130" height="130" rx="10" stroke={color} strokeWidth="2" fill={`${color}08`} />
    {/* Board label */}
    <text x="140" y="85" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="monospace">PCB</text>
    <text x="140" y="97" textAnchor="middle" fill={`${color}80`} fontSize="5.5" fontFamily="monospace">V1.0</text>

    {/* PCB traces – main bus */}
    <line x1="95" y1="100" x2="130" y2="100" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="130" y1="100" x2="130" y2="140" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="130" y1="140" x2="185" y2="140" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="95" y1="130" x2="130" y2="130" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="130" y1="130" x2="130" y2="160" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="95" y1="160" x2="130" y2="160" stroke={color} strokeWidth="1.2" opacity="0.5" />
    {/* Cross traces */}
    <line x1="110" y1="85" x2="110" y2="115" stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
    <line x1="165" y1="85" x2="165" y2="115" stroke={color} strokeWidth="0.5" opacity="0.3" strokeDasharray="2 2" />
    {/* Additional detail traces */}
    <line x1="95" y1="75" x2="120" y2="75" stroke={color} strokeWidth="0.4" opacity="0.2" />
    <line x1="160" y1="75" x2="185" y2="75" stroke={color} strokeWidth="0.4" opacity="0.2" />
    <line x1="95" y1="170" x2="120" y2="170" stroke={color} strokeWidth="0.4" opacity="0.2" />
    <line x1="160" y1="170" x2="185" y2="170" stroke={color} strokeWidth="0.4" opacity="0.2" />

    {/* Pin headers top */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`pt-${i}`} x1={90 + i * 8} y1="50" x2={90 + i * 8} y2="58" />
      ))}
    </g>
    {/* Pin headers bottom */}
    <g stroke={color} strokeWidth="0.8" opacity="0.4">
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`pb-${i}`} x1={90 + i * 8} y1="185" x2={90 + i * 8} y2="193" />
      ))}
    </g>
    {/* Pin dots top */}
    <g fill={color} opacity="0.35">
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={`ptd-${i}`} cx={90 + i * 8} cy="50" r="0.8" />
      ))}
    </g>
    {/* Pin dots bottom */}
    <g fill={color} opacity="0.35">
      {Array.from({ length: 8 }, (_, i) => (
        <circle key={`pbd-${i}`} cx={90 + i * 8} cy="185" r="0.8" />
      ))}
    </g>

    {/* IC chips on board */}
    <rect x="95" y="115" width="20" height="12" rx="2" fill={`${color}0c`} stroke={color} strokeWidth="1" />
    <text x="105" y="124" textAnchor="middle" fill={color} fontSize="5" fontFamily="monospace">U1</text>
    <rect x="160" y="115" width="18" height="12" rx="2" fill={`${color}0c`} stroke={color} strokeWidth="1" />
    <text x="169" y="124" textAnchor="middle" fill={color} fontSize="5" fontFamily="monospace">U2</text>
    <rect x="95" y="165" width="16" height="10" rx="2" fill={`${color}0c`} stroke={color} strokeWidth="1" />
    <text x="103" y="173" textAnchor="middle" fill={color} fontSize="5" fontFamily="monospace">R1</text>

    {/* USB connector */}
    <rect x="125" y="42" width="15" height="8" rx="2" stroke={color} strokeWidth="1.2" fill={`${color}0a`} />

    {/* Crystal oscillator */}
    <rect x="175" y="75" width="12" height="10" rx="1" fill="none" stroke={color} strokeWidth="0.8" opacity="0.5" />
    <line x1="175" y1="80" x2="187" y2="80" stroke={color} strokeWidth="0.4" opacity="0.3" />
    <line x1="175" y1="75" x2="175" y2="85" stroke={color} strokeWidth="0.4" opacity="0.3" />
    <line x1="187" y1="75" x2="187" y2="85" stroke={color} strokeWidth="0.4" opacity="0.3" />

    {/* LED indicators */}
    <circle cx="100" cy="70" r="2" fill={color} opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="170" cy="70" r="2" fill={color} opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2.5s" repeatCount="indefinite" />
    </circle>

    {/* Tool – wrench (bottom-right) */}
    <g transform="translate(220, 225)">
      <path d="M0 0 L12 0 L12 8 L4 8 L4 18 L0 22 L-4 18 L-4 8 L-12 8 L-12 0 Z" stroke={color} strokeWidth="1" fill={`${color}08`} strokeLinejoin="round" />
      <circle cx="4" cy="-5" r="3" stroke={color} strokeWidth="1" fill="none" />
    </g>

    {/* Soldering iron tip (bottom-left) */}
    <g transform="translate(50, 225)">
      <rect x="-3" y="-10" width="6" height="18" rx="2" stroke={color} strokeWidth="1" fill={`${color}08`} />
      <circle cx="0" cy="-14" r="3" stroke={color} strokeWidth="1" fill="none" />
      <line x1="0" y1="-17" x2="0" y2="-22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Wire coil (right side) */}
    <g transform="translate(210, 120)">
      <path d="M0 0 Q5 5 0 10 Q-5 5 0 0" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M0 12 Q5 17 0 22 Q-5 17 0 12" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M0 24 Q5 29 0 34 Q-5 29 0 24" stroke={color} strokeWidth="1" fill="none" opacity="0.5" />
    </g>

    {/* Connector plug (top-right) */}
    <g transform="translate(200, 50)">
      <rect x="0" y="0" width="16" height="10" rx="2" stroke={color} strokeWidth="1" fill={`${color}0a`} />
      <line x1="4" y1="0" x2="4" y2="10" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <line x1="8" y1="0" x2="8" y2="10" stroke={color} strokeWidth="0.5" opacity="0.4" />
      <line x1="12" y1="0" x2="12" y2="10" stroke={color} strokeWidth="0.5" opacity="0.4" />
    </g>

    {/* Data flow dot */}
    <circle cx="110" cy="120" r="1.5" fill={color} opacity="0.5">
      <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
    </circle>

    {/* Decorative dots */}
    <circle cx="50" cy="50" r="1.5" fill={color} opacity="0.2" />
    <circle cx="235" cy="50" r="1.5" fill={color} opacity="0.2" />
    <circle cx="50" cy="230" r="1.5" fill={color} opacity="0.2" />
    <circle cx="235" cy="230" r="1.5" fill={color} opacity="0.2" />
    <circle cx="140" cy="145" r="1" fill={color} opacity="0.15" />
  </svg>
);

/* ────────────────────────────────────────────
   EXPORTS
   ──────────────────────────────────────────── */
const PILLAR_ILLUSTRATIONS = {
  assist: AssistIllustration,
  build: BuildIllustration,
  iot: IoTIllustration,
  home: HomeIllustration,
  about: AboutIllustration,
  projects: ProjectsIllustration,
  buildHardware: BuildHardwareIllustration,
};

const PillarIllustration = ({ pillarId, color, size = 280 }) => {
  const Illust = PILLAR_ILLUSTRATIONS[pillarId];
  if (!Illust) return null;
  return <Illust color={color} />;
};

export default PillarIllustration;
export { PillarIllustration, PILLAR_ILLUSTRATIONS };
