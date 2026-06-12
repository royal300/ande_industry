import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = path.join(__dirname, 'public', 'Performance');

async function optimizeFolder(subDir) {
  const targetDir = path.join(baseDir, subDir);
  try {
    const files = await fs.readdir(targetDir);
    const jpgFiles = files.filter(file => file.toLowerCase().endsWith('.jpg'));

    for (const file of jpgFiles) {
      const inputPath = path.join(targetDir, file);
      const outputName = file.substring(0, file.lastIndexOf('.')) + '.webp';
      const outputPath = path.join(targetDir, outputName);

      console.log(`Converting ${subDir}/${file} to WebP...`);
      await sharp(inputPath, { failOn: 'none' })
        .resize({ width: 600 }) // Standard width of 600px
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Successfully created ${outputPath}`);
      await fs.unlink(inputPath);
      console.log(`Deleted original file ${file}`);
    }
  } catch (err) {
    console.error(`Error in folder ${subDir}:`, err);
  }
}

async function start() {
  const folders = ['Beneficiation industry', 'Chemical', 'Metallugurical', 'Powergenration'];
  for (const f of folders) {
    await optimizeFolder(f);
  }
  console.log('All performance image optimizations complete!');
}

start();
