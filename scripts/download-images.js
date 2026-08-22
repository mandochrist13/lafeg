const https = require('https');
const fs = require('fs');
const path = require('path');

// Images Unsplash à télécharger
const images = [
  {
    // African business team
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop',
    name: 'hero-business-gabon.jpg'
  },
  {
    // Conference hall
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&h=1080&fit=crop',
    name: 'hero-dialogue-institutions.jpg'
  },
  {
    // Training seminar
    url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop',
    name: 'hero-formation.jpg'
  },
  {
    // Business networking
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop',
    name: 'hero-networking.jpg'
  },
  {
    // Handshake
    url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop',
    name: 'hero-member.jpg'
  },
  {
    // Reading documents
    url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop',
    name: 'hero-publications.jpg'
  }
];

// Créer le dossier public/images s'il n'existe pas
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Fonction pour télécharger une image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(imagesDir, filename);

    console.log(`📥 Téléchargement: ${filename}...`);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const file = fs.createWriteStream(filepath);
        response.pipe(file);

        file.on('finish', () => {
          file.close();
          console.log(`✅ Téléchargé: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Échec téléchargement: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Télécharger toutes les images
async function downloadAll() {
  console.log('🚀 Début du téléchargement des images...\n');

  for (const img of images) {
    try {
      await downloadImage(img.url, img.name);
    } catch (error) {
      console.error(`❌ Erreur pour ${img.name}:`, error.message);
    }
  }

  console.log('\n✨ Téléchargement terminé!');
  console.log(`📁 Images sauvegardées dans: ${imagesDir}`);
}

downloadAll();
