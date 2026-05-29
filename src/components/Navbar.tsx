'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import SolucionesMegaMenu from './SolucionesMegaMenu';
import SolucionesNichesMegaMenu from './SolucionesNichesMegaMenu';

const navLinks: { label: string; href: string }[] = [];

function Logo({ isWhite }: { isWhite: boolean }) {
  const mainColor = isWhite ? '#FFFFFF' : '#04418C';
  const contrastColor = isWhite ? '#FFFFFF' : '#062466';
  const lightBlueColor = isWhite ? '#FFFFFF' : '#216EB6';
  const bubbleInnerColor = isWhite ? '#0A1628' : 'white';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="160" 
      height="54" 
      viewBox="0 0 1600 535" 
      className="w-40 h-auto object-contain"
    >
      <path fill={mainColor} d="M546.733 142.507C564.532 142.233 583.541 142.594 601.028 142.533C679.812 142.257 736.827 139.995 736.686 238.461C736.555 330.345 735.863 363.747 633.181 365.819L572.523 365.743C479.283 365.771 440.391 363.438 441.448 257.825C442.338 168.838 454.112 145.388 546.733 142.507Z"/>
      <path fill={bubbleInnerColor} d="M551.455 187.836C563.812 187.243 581.385 187.84 594.304 187.89C615.005 188.533 635.695 186.576 656.175 190.495C678.418 195.142 679.418 211.996 680.398 231.147C680.794 239.619 680.605 248.542 680.704 256.946C681.368 313.224 680.5 317.634 625.777 319.772C608.266 320.762 586.8 319.313 569.122 319.611C552.595 319.889 519.658 320.789 507.223 309.657C494.74 298.481 499.19 259.743 498.257 244.154C497.897 230.373 498.058 208.447 507.401 197.672C515.565 188.313 540.005 188.182 551.455 187.836Z"/>
      <path fill={mainColor} d="M1084.24 364.249C1091.6 348.638 1099.21 338.319 1108.14 323.791L1143.82 264.687L1186.41 194.042C1194.79 180.165 1210.5 148.196 1225.41 145.403C1249.29 140.931 1284.51 136.626 1299.17 161.132C1308.44 176.611 1317.38 189.969 1326.11 204.173L1382.48 296.379L1408.93 338.094C1412.5 343.608 1424.35 358.249 1422.61 363.62C1417.46 364.92 1367.04 365.006 1361.58 363.395C1357.8 360.172 1353.39 352.358 1350.53 347.795C1346.36 341.668 1338.89 330.621 1335.84 324.227C1332.39 320.659 1332.66 319.924 1327.45 319.991C1293.46 320.426 1259.64 319.196 1225.64 319.942C1210.8 320.268 1195.44 319.185 1180.61 319.985C1178.07 320.122 1175.63 320.312 1174 322.157C1165.54 331.74 1155.08 355.42 1146.97 363.949C1132.88 364.801 1118.93 364.44 1104.81 364.182C1098.53 364.067 1090.06 364.709 1084.24 364.249Z"/>
      <path fill={contrastColor} d="M1335.84 324.227C1339.89 325.377 1351.21 342.661 1352.2 346.795C1351.27 347.738 1351.69 347.58 1350.53 347.795C1346.36 341.668 1338.89 330.621 1335.84 324.227Z"/>
      <path fill={bubbleInnerColor} d="M1197.62 280.244C1200.97 272.513 1216.75 246.608 1221.78 237.718C1227.01 228.458 1245.3 193.759 1250.25 187.908C1257.03 186.6 1258.23 191.39 1261.26 196.754C1261.83 196.671 1263.09 196.318 1263.33 196.692C1273.76 212.388 1284.84 232.601 1294.5 248.37C1300.98 258.955 1305.55 269.083 1311.98 278.095L1311.88 279.621L1309.91 280.739C1272.48 281.129 1235.05 280.964 1197.62 280.244Z"/>
      <path fill={contrastColor} d="M1261.26 196.754C1261.83 196.671 1263.09 196.318 1263.33 196.692C1273.76 212.388 1284.84 232.601 1294.5 248.37C1300.98 258.955 1305.55 269.083 1311.98 278.095L1311.88 279.621L1309.91 280.739C1298.79 260.104 1284.76 239.83 1273.48 219.158C1269.58 211.998 1264.45 204.166 1261.26 196.754Z"/>
      <path fill={mainColor} d="M913.241 221.844C927.231 209.277 988.89 147.879 999.273 144.359C1009 141.063 1040.91 142.598 1052.5 143.204C1055.62 143.367 1058.75 143.569 1061.84 144.038C1054.21 154.846 1041.35 166.16 1031.51 175.5L979.16 225.219C972.114 231.925 958.057 244.638 952.099 251.515C985.836 286.749 1022.66 319.37 1058.24 352.687C1060.36 354.67 1065.43 360.126 1065.82 362.988C1063.65 365.463 1003.74 364.85 997.428 364.398C992.783 360.776 989.163 356.941 985.052 352.763L971.304 339.972L931.912 303.482C925.685 297.62 916.68 288.275 910.174 283.336C898.079 294.275 831.49 361.778 824.992 363.682C816.092 366.291 772.241 364.365 760.289 363.914C764.681 353.592 772.978 347.635 781.018 339.943C793.122 328.343 805.312 316.832 817.587 305.412L854.531 270.152C860.288 264.599 866.527 257.843 872.425 252.755C856.848 236.338 768.743 158.009 765.576 145.956C767.264 142.418 825.163 141.711 830.724 145.401C844.168 154.32 857.174 168.599 868.944 179.863L913.241 221.844Z"/>
      <path fill={contrastColor} d="M971.304 339.972C977.163 337.802 984.145 345.829 986.929 350.488L986.807 351.924L985.052 352.763L971.304 339.972Z"/>
      <path fill={mainColor} d="M266.005 314.552C279.475 295.639 354.832 151.818 366.428 146.079C369.497 144.56 373.446 143.905 376.829 143.619C384.352 142.981 417.564 142.591 423.049 144.551C424.388 146.095 424.912 146.659 423.829 148.692C417.22 161.097 409.573 173.312 402.256 185.283C380.228 221.502 358.66 257.998 337.558 294.763C328.578 310.094 307.994 351.562 292.347 359.825C277.067 366.929 246.44 366.955 231.53 359.86C221.717 355.19 208.351 330.77 202.77 321.203C196.219 309.928 189.562 298.715 182.8 287.565L137.446 211.141C132.294 202.529 99.3311 149.694 99.7112 145.298C106.14 142.192 126.152 144.361 134.233 143.216C142.112 142.099 153.133 143.263 160.015 147.857C168.166 153.037 184.244 183.266 190.29 193.633L242.466 285.107C246.826 292.809 254.036 307.165 260.129 313.916C260.895 314.765 264.72 314.635 266.005 314.552Z"/>
      <path fill={lightBlueColor} d="M160.015 147.857C168.166 153.037 184.244 183.266 190.29 193.633L242.466 285.107C246.826 292.809 254.036 307.165 260.129 313.916C260.895 314.765 264.72 314.635 266.005 314.552C263.368 318.143 258.842 319.336 255.986 315.326C243.34 297.564 234.768 276.601 223.767 257.968C206.495 229.114 189.742 199.953 173.517 170.498C169.617 163.465 163.301 154.62 160.015 147.857Z"/>
      <path fill={mainColor} d="M1463.46 143.095C1470.82 142.453 1509.25 141.78 1514.62 144.756C1516.68 149.33 1515.66 267.181 1515.66 280.77L1515.71 333.309C1515.71 341.855 1516.09 353.443 1515.5 361.624C1513.92 364.038 1514.6 363.289 1511.62 364.556C1497.45 365.112 1481.71 366.157 1467.64 364.653C1465.88 364.465 1461.51 363.906 1460.46 362.44C1458.89 360.241 1457.71 165.474 1459.59 150.236C1460 146.876 1460.77 145.213 1463.46 143.095Z"/>
    </svg>
  );
}

export default function Navbar({ darkHero = false }: { darkHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showWhiteLogo = darkHero && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(13,21,38,0.06)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 h-40 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group -translate-y-8 transform">
            <Logo isWhite={showWhiteLogo} />
          </Link>

          {/* Desktop nav — pill container with mega menu + plain links */}
          <div className="hidden md:flex flex-1 justify-center -translate-y-8 transform">
            <ul
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem',
                borderRadius: '999px',
                border: '1px solid rgba(13,21,38,0.08)',
                background: 'rgba(255,255,255,0.82)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 12px 36px rgba(13,21,38,0.06)',
                listStyle: 'none',
                margin: 0,
              }}
            >
              {/* Mega-menu: Productos */}
              <SolucionesMegaMenu />

              {/* Mega-menu: Soluciones (nichos) */}
              <SolucionesNichesMegaMenu />

              {/* Other nav items */}
              {navLinks.map((link) => (
                <li key={link.label} className="gooey-nav-item" style={{ listStyle: 'none' }}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3 -translate-y-8 transform">
            <motion.div whileHover={{ scale: 1.03, y: -0.5 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 450, damping: 15 }}>
              <Link
                href="/agenda-reunion"
                className="btn-primary px-5 py-2.5 text-sm rounded-lg font-semibold"
              >
                Solicitar demo
              </Link>
            </motion.div>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-[#0F0F0F] p-2 -translate-y-6 transform"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} color="#6b7280" /> : <Menu size={20} strokeWidth={1.5} color="#6b7280" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 px-6 py-6 flex flex-col gap-4"
            style={{
              background: 'rgba(255,255,255,0.98)',
              borderBottom: '1px solid rgba(13,21,38,0.08)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {[
              { label: 'UCaaS', href: '/products/ucaas' },
              { label: 'Contact Center', href: '/products/ucontact' },
              { label: 'Agentes de IA', href: '/products/agentes-ia' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#0F0F0F] font-medium text-base py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agenda-reunion"
              className="btn-primary py-3 text-center text-sm font-semibold mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Solicitar demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
