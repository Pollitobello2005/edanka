const axios = require('axios');
const fs = require('fs');
const path = require('path');

const brands = [
  { name: 'danone', color: '1A2C64' },
  { name: 'jaguar', color: '000000' },
  { name: 'mapfre', color: 'D81E05' },
  { name: 'wework', color: '000000' },
  { name: 'subway', color: '008938' }, // Even though we have subway, we can get a colored one if the previous is bad
  { name: 'dominos', color: '0055A5' }
];

async function downloadSimpleIcons() {
  const dir = path.join(__dirname, 'public', 'logos');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const brand of brands) {
    try {
      console.log(`Downloading ${brand.name}...`);
      const url = `https://cdn.simpleicons.org/${brand.name}/${brand.color}`;
      const res = await axios.get(url, { responseType: 'text' });
      fs.writeFileSync(path.join(dir, `${brand.name}_simple.svg`), res.data);
      console.log(`Saved ${brand.name}_simple.svg`);
    } catch (err) {
      console.error(`Failed to download ${brand.name}:`, err.message);
    }
  }
}

downloadSimpleIcons();
