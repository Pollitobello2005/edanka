const axios = require('axios');
const fs = require('fs');
const path = require('path');

const logos = [
  { name: 'danone', url: 'https://cdn.worldvectorlogo.com/logos/danone.svg' },
  { name: 'mapfre', url: 'https://cdn.worldvectorlogo.com/logos/mapfre.svg' },
  { name: 'jaguar', url: 'https://cdn.worldvectorlogo.com/logos/jaguar-1.svg' },
  { name: 'kraft', url: 'https://cdn.worldvectorlogo.com/logos/kraft-1.svg' },
  { name: 'softtek', url: 'https://cdn.worldvectorlogo.com/logos/softtek-1.svg' }
];

async function downloadWVL() {
  const dir = path.join(__dirname, 'public', 'logos');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const logo of logos) {
    try {
      console.log(`Downloading ${logo.name}...`);
      const res = await axios.get(logo.url, { 
          responseType: 'text',
          headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
      });
      fs.writeFileSync(path.join(dir, `${logo.name}.svg`), res.data);
      console.log(`Saved ${logo.name}.svg`);
    } catch (err) {
      console.error(`Failed to download ${logo.name}:`, err.message);
    }
  }
}

downloadWVL();
