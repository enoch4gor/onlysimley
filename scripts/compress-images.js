#!/usr/bin/env node
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(__dirname, '../public/Image');
const MAX_SIZE_MB = 1;
const TARGET_QUALITY = 80;

async function compressImage(filePath) {
    const stats = fs.statSync(filePath);
    const sizeMB = stats.size / (1024 * 1024);

    if (sizeMB <= MAX_SIZE_MB) {
        console.log(`✓ SKIP: ${path.basename(filePath)} (${sizeMB.toFixed(2)}MB - already small)`);
        return { skipped: true, originalSize: sizeMB, newSize: sizeMB };
    }

    console.log(`⚙ COMPRESSING: ${path.basename(filePath)} (${sizeMB.toFixed(2)}MB)...`);

    try {
        // Read image, compress, and overwrite
        await sharp(filePath)
            .jpeg({ quality: TARGET_QUALITY, progressive: true })
            .toFile(filePath + '.tmp');

        // Replace original with compressed version
        fs.renameSync(filePath + '.tmp', filePath);

        const newStats = fs.statSync(filePath);
        const newSizeMB = newStats.size / (1024 * 1024);
        const savedMB = sizeMB - newSizeMB;
        const savedPercent = ((savedMB / sizeMB) * 100).toFixed(1);

        console.log(`✓ DONE: ${path.basename(filePath)} → ${newSizeMB.toFixed(2)}MB (saved ${savedPercent}%)`);

        return {
            skipped: false,
            originalSize: sizeMB,
            newSize: newSizeMB,
            saved: savedMB
        };
    } catch (error) {
        console.error(`✗ ERROR: ${path.basename(filePath)} - ${error.message}`);
        // Clean up temp file if it exists
        if (fs.existsSync(filePath + '.tmp')) {
            fs.unlinkSync(filePath + '.tmp');
        }
        return { skipped: true, originalSize: sizeMB, newSize: sizeMB, error: true };
    }
}

async function findAndCompressImages(dir) {
    const results = {
        total: 0,
        compressed: 0,
        skipped: 0,
        errors: 0,
        originalTotalMB: 0,
        newTotalMB: 0
    };

    async function processDir(currentDir) {
        const entries = fs.readdirSync(currentDir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);

            if (entry.isDirectory()) {
                await processDir(fullPath);
            } else if (entry.isFile() && /\.(jpg|jpeg)$/i.test(entry.name)) {
                results.total++;
                const result = await compressImage(fullPath);

                results.originalTotalMB += result.originalSize;
                results.newTotalMB += result.newSize;

                if (result.error) {
                    results.errors++;
                } else if (result.skipped) {
                    results.skipped++;
                } else {
                    results.compressed++;
                }
            }
        }
    }

    await processDir(dir);
    return results;
}

(async () => {
    console.log('🖼️  Starting image compression...');
    console.log(`📁 Directory: ${IMAGE_DIR}`);
    console.log(`🎯 Target: <${MAX_SIZE_MB}MB per image`);
    console.log(`⚙️  Quality: ${TARGET_QUALITY}%\n`);

    const results = await findAndCompressImages(IMAGE_DIR);

    console.log('\n📊 COMPRESSION SUMMARY:');
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`Total images:      ${results.total}`);
    console.log(`Compressed:        ${results.compressed}`);
    console.log(`Skipped (small):   ${results.skipped}`);
    console.log(`Errors:            ${results.errors}`);
    console.log(`Original size:     ${results.originalTotalMB.toFixed(2)} MB`);
    console.log(`New size:          ${results.newTotalMB.toFixed(2)} MB`);
    console.log(`Total saved:       ${(results.originalTotalMB - results.newTotalMB).toFixed(2)} MB (${((1 - results.newTotalMB / results.originalTotalMB) * 100).toFixed(1)}%)`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

    console.log('✅ Compression complete!');
})();
