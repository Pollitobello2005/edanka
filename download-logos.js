const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function downloadSVGL() {
  const dir = path.join(__dirname, 'public', 'logos');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    const res = await axios.get('https://svgl.app/api/svgs');
    const svgs = res.data;
    
    // Some known brands from the image and similar brands
    const targetBrands = [
      'wework', 'subway', 'mattel', 'danone', 'kraft', 
      'jaguar', 'under-armour', 'underarmour', 'dominos', 'mapfre', 'softtek'
    ];
    
    // We can also just pick some big brands from svgl that represent companies if we can't find exact matches.
    // The user asked for "al menos 10 de ellas" (at least 10 of them from the image).
    
    for (const brand of targetBrands) {
      const found = svgs.find(s => s.title.toLowerCase().includes(brand.toLowerCase()));
      if (found) {
        console.log(`Found ${found.title} in svgl...`);
        const svgUrl = typeof found.route === 'object' ? found.route.light : found.route;
        const svgRes = await axios.get(svgUrl, { responseType: 'text' });
        fs.writeFileSync(path.join(dir, `${brand}.svg`), svgRes.data);
        console.log(`Saved ${brand}.svg`);
      }
    }
    
  } catch (err) {
    console.error(err);
  }
}

downloadSVGL();
