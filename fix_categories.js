const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /category: "বড়দিন"/g, to: 'category: "বড়দিন"' },
  { from: /category: "শিশু সঙ্গীত"/g, to: 'category: "ছোটদের"' },
  { from: /category: "খ্রীষ্টিয় জীবন ও সাক্ষ্য"/g, to: 'category: "খ্রীষ্টীয় জীবন ও সাক্ষ্য"' },
  { from: /category: "কোরাস"/g, to: 'category: "কোরাস্"' }
];

const files = [
  'src/data/songs_1_100.ts',
  'src/data/songs_101_200.ts',
  'src/data/songs_201_300.ts',
  'src/data/songs_301_400.ts',
  'src/data/songs_401_448.ts',
  'src/data/chorus_db.ts'
];

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    replacements.forEach(r => {
      if (r.from.test(content)) {
        content = content.replace(r.from, r.to);
        changed = true;
      }
    });
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    } else {
      console.log(`No changes needed for ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});
