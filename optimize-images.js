
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, 'src', 'image');

async function processDirectory(directory) {
  const entries = fs.readdirSync(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.match(/\.(png|jpg|jpeg)$/i)) {
      const outputPath = path.join(directory, path.parse(entry.name).name + '.webp');
      
      // Skip if webp already exists (optional, but good for speed if re-running)
      // But here we want to ensure everything is optimized, so we'll process anyway 
      // or check if source is newer. For now, just process.
      
      console.log(`Processing ${entry.name}...`);
      
      try {
        const metadata = await sharp(fullPath).metadata();
        const originalSize = fs.statSync(fullPath).size;
        
        // Skip small files if they are already efficient? 
        // No, let's just convert everything to WebP for consistency and size.
        
        let pipeline = sharp(fullPath);
        
        // Resize if width > 1920
        if (metadata.width > 1920) {
            pipeline = pipeline.resize({ width: 1920 });
        }

        await pipeline
          .webp({ quality: 80 })
          .toFile(outputPath);
          
        const newSize = fs.statSync(outputPath).size;
        console.log(`  Size: ${(originalSize / 1024 / 1024).toFixed(2)} MB -> ${(newSize / 1024 / 1024).toFixed(2)} MB`);
      } catch (err) {
        console.error(`Error processing ${entry.name}:`, err);
      }
    }
  }
}

console.log('Starting recursive image optimization...');
processDirectory(rootDir).then(() => console.log('All images optimized!'));
