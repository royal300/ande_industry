import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function findAndReplace(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await findAndReplace(fullPath);
    } else if (entry.isFile() && /\.(jsx?|tsx?)$/.test(entry.name)) {
      const content = await fs.readFile(fullPath, 'utf8');
      if (content.includes('.png')) {
        const newContent = content.replace(/\.png/g, '.webp');
        await fs.writeFile(fullPath, newContent, 'utf8');
        console.log(`Updated references in ${fullPath}`);
      }
    }
  }
}

findAndReplace(path.join(__dirname, 'src'))
  .then(() => console.log('Reference update complete!'))
  .catch(console.error);
