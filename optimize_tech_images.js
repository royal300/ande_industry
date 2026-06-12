import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const techDir = path.join(__dirname, 'public', 'Technology');

async function optimizeImages() {
  try {
    const files = await fs.readdir(techDir);
    const jpgFiles = files.filter(file => file.toLowerCase().endsWith('.jpg'));

    for (const file of jpgFiles) {
      const inputPath = path.join(techDir, file);
      const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
      const outputPath = path.join(techDir, outputName);

      console.log(`Converting ${file} to WebP...`);
      await sharp(inputPath)
        .resize({ width: 600 }) // Resize to a standard width of 600px (ideal for card display)
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Successfully created ${outputPath}`);
      
      // Delete the original JPG file
      await fs.unlink(inputPath);
      console.log(`Deleted original file ${file}`);
    }
    
    console.log('Technology image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
