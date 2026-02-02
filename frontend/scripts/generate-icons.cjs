/**
 * Script para generar iconos PNG desde SVG
 *
 * Uso:
 * 1. npm install sharp
 * 2. node scripts/generate-icons.js
 *
 * O usa una herramienta online como:
 * - https://realfavicongenerator.net/
 * - https://maskable.app/editor
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is installed
try {
  const sharp = require('sharp');

  const svgPath = path.join(__dirname, '../public/icon.svg');
  const svg = fs.readFileSync(svgPath);

  const sizes = [192, 512];

  sizes.forEach(async (size) => {
    await sharp(svg)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, `../public/icon-${size}.png`));
    console.log(`Generated icon-${size}.png`);
  });

  // Apple touch icon (180x180)
  sharp(svg)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'))
    .then(() => console.log('Generated apple-touch-icon.png'));

} catch (error) {
  console.log('Sharp not installed. Install it with: npm install sharp');
  console.log('Or generate icons manually from public/icon.svg using:');
  console.log('- https://realfavicongenerator.net/');
  console.log('- https://maskable.app/editor');
}
