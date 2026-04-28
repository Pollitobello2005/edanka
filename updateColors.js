const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
};

const files = walk('c:/Users/roberto/Desktop/edanka/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Backgrounds
  content = content.replace(/#0A0F1E/gi, '#FFFFFF'); // Principal
  content = content.replace(/#0F1629/gi, '#F5F7FA'); // Secundario
  content = content.replace(/#050810/gi, '#F5F7FA'); // Footer

  // Text secondary / borders
  content = content.replace(/#94A3B8/gi, '#5A6A85');
  content = content.replace(/#64748B/gi, '#5A6A85');
  content = content.replace(/#475569/gi, '#5A6A85');
  content = content.replace(/#CBD5E1/gi, '#0D1526');
  content = content.replace(/#334155/gi, '#5A6A85');
  content = content.replace(/#1E293B/gi, '#5A6A85');
  
  // Accents
  content = content.replace(/#7C3AED/gi, '#1A3A8F'); // Violet -> Navy
  content = content.replace(/#EC4899/gi, '#00AAEC'); // Pink -> Cielo
  content = content.replace(/#C4B5FD/gi, '#00AAEC'); // Light Violet -> Cielo
  content = content.replace(/#10B981/gi, '#00AAEC'); // Emerald -> Cielo (metrics mostly)

  // Tailwind text colors
  content = content.replace(/text-white/g, 'text-[#0D1526]');
  content = content.replace(/text-emerald-400/g, 'text-[#00AAEC]');

  // Inline color styles
  content = content.replace(/color:\s*['"]#ffffff['"]/gi, "color: '#0D1526'");
  // Careful with 'white', some might be in icons, but in this light theme dark icons are better unless it's a button.
  // The buttons use classes btn-primary and btn-ghost, the svg icons inside them inherit or use standard props.
  // Let's replace fill="white" with fill="#0D1526"
  content = content.replace(/fill="white"/gi, 'fill="#0D1526"');
  
  // RGBA Opacities (Borders, bgs, cards)
  // White opacity (used for borders/cards on dark theme) -> Dark opacity (for borders/cards on light theme)
  content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.([0-9]+)\s*\)/g, 'rgba(13,21,38,0.$1)');
  
  // Dark opacity (used for floats/modals on dark theme) -> White opacity
  content = content.replace(/rgba\(\s*10\s*,\s*15\s*,\s*30\s*,\s*0\.([0-9]+)\s*\)/g, 'rgba(255,255,255,0.$1)');

  // Gradientes / Sombras
  content = content.replace(/rgba\(\s*124\s*,\s*58\s*,\s*237\s*,/g, 'rgba(26,58,143,'); // Violet rgb -> Navy rgb
  content = content.replace(/rgba\(\s*236\s*,\s*72\s*,\s*153\s*,/g, 'rgba(0,170,236,'); // Pink rgb -> Sky rgb

  // Navbars bg colors hardcoded on scroll
  content = content.replace(/rgba\(10,15,30,0\.85\)/g, 'rgba(255,255,255,0.95)');
  content = content.replace(/rgba\(10,15,30,0\.98\)/g, 'rgba(255,255,255,1)');

  fs.writeFileSync(file, content, 'utf8');
});

console.log('Colors updated in all components!');
