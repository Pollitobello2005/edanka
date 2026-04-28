const axios = require('axios');
const fs = require('fs');
const path = require('path');

const logos = [
  { name: 'pelikan', url: 'https://cdn.worldvectorlogo.com/logos/pelikan.svg' },
  { name: 'manpowergroup', url: 'https://cdn.worldvectorlogo.com/logos/manpowergroup.svg' },
  { name: 'manpower', url: 'https://cdn.worldvectorlogo.com/logos/manpower-1.svg' },
  { name: 'pelikan-2', url: 'https://cdn.worldvectorlogo.com/logos/pelikan-2.svg' }
];

async function downloadExtra() {
  const dir = path.join(__dirname, 'public', 'logos');
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

downloadExtra();
