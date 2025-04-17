import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { pipeline } from 'stream/promises';

const GITHUB_USERNAME = 'ares-17';
const LINKEDIN_IMG_URL = "https://media.licdn.com/dms/image/v2/D4E03AQHYwKV_jpP0qQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1673978997803?e=1750291200&v=beta&t=Cupgwe8IG7qD9z8Sioxveuga1lshNPMf4jMZKtvNM5I"
const MAX_RES = 150;
const OUTPUT_DIR = path.resolve('public');

async function toWebPFromUrl(imageUrl, outputPath) {
    try {
        const response = await fetch(imageUrl);

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }

        const readableStream = response.body;
        const transformer = sharp()
            .resize(MAX_RES, MAX_RES, {
                fit: 'inside',
                withoutEnlargement: true,
            })
            .webp();

        await pipeline(readableStream, transformer, fs.createWriteStream(outputPath));
        console.log(`Creato: ${outputPath}`);
    } catch (error) {
        console.error(`Errore durante la conversione da URL:`, error);
    }
}

const run = async () => {
    console.log('Inizio download immagini profilo...');

    // === GITHUB ===
    console.log('GitHub...');
    const githubApi = `https://api.github.com/users/${GITHUB_USERNAME}`;
    const githubResponse = await fetch(githubApi, {
        headers: { 'User-Agent': 'node-fetch' }
    });
    const githubData = await githubResponse.json();
    const avatarUrl = githubData.avatar_url;

    await toWebPFromUrl(avatarUrl, path.join(OUTPUT_DIR, 'github.webp'));

    // === LINKEDIN ===
    console.log('LinkedIn...');
    await toWebPFromUrl(LINKEDIN_IMG_URL, path.join(OUTPUT_DIR, 'linkedin.webp'));
};

run().catch(err => {
    console.error('Errore generale:', err);
    process.exit(1);
});