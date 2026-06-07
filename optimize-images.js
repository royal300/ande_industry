import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images');

async function optimizeImages() {
  try {
    const files = await fs.readdir(imagesDir);
    const pngFiles = files.filter(file => file.endsWith('.png'));

    for (const file of pngFiles) {
      const inputPath = path.join(imagesDir, file);
      const outputPath = path.join(imagesDir, file.replace('.png', '.webp'));

      console.log(`Converting ${file} to WebP...`);
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Successfully created ${outputPath}`);
      
      // Delete the original PNG file
      await fs.unlink(inputPath);
      console.log(`Deleted original file ${file}`);
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
