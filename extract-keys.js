import fs from 'fs';
import { glob } from 'glob';

const pattern = 'src/**/*.{vue,ts}';
const regex = /(?:\$t|i18n\.global\.t)\(\s*['"`]([^'"`]+)['"`]\s*\)/g;

(async () => {
    try {
        // Extract keys from all matching files in src
        const files = await glob(pattern);
        console.log('Found files:', files);

        const extractedKeys = {};
        files.forEach(file => {
            const content = fs.readFileSync(file, 'utf8');
            let match;
            while ((match = regex.exec(content)) !== null) {
                const key = match[1];
                extractedKeys[key] = key;
            }
        });

        // Define output directory and file paths
        const outputDir = 'src/translations';
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        const deFile = `${outputDir}/keys-de.json`;
        const enFile = `${outputDir}/keys-en.json`;

        // Function to update existing translations by adding any missing keys
        const updateTranslations = (existing) => {
            for (const key in extractedKeys) {
                if (!(key in existing)) {
                    existing[key] = key;
                }
            }
            return existing;
        };

        // Update German translations
        let deTranslations = {};
        if (fs.existsSync(deFile)) {
            try {
                deTranslations = JSON.parse(fs.readFileSync(deFile, 'utf8'));
            } catch (e) {
                console.error(`Error parsing ${deFile}:`, e);
            }
        }
        deTranslations = updateTranslations(deTranslations);
        fs.writeFileSync(deFile, JSON.stringify(deTranslations, null, 2), 'utf8');

        // Update English translations
        let enTranslations = {};
        if (fs.existsSync(enFile)) {
            try {
                enTranslations = JSON.parse(fs.readFileSync(enFile, 'utf8'));
            } catch (e) {
                console.error(`Error parsing ${enFile}:`, e);
            }
        }
        enTranslations = updateTranslations(enTranslations);
        fs.writeFileSync(enFile, JSON.stringify(enTranslations, null, 2), 'utf8');

        console.log('Saved keys to', deFile, 'and', enFile);
    } catch (err) {
        console.error('Error scanning files:', err);
    }
})();
