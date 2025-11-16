const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const releaseType = args[0] || 'patch'; // default: patch

const libPath = path.join(__dirname, 'projects', 'primeng-jalali-datepicker');
const distPath = path.join(__dirname, 'dist', 'primeng-jalali-datepicker');

console.log(`\n➡️  Bumping version (${releaseType})...`);
execSync(`npm version ${releaseType}`, {stdio: 'inherit'});

if (fs.existsSync(distPath)) {
  console.log(`\n🧹 Removing old dist folder...`);
  fs.rmSync(distPath, {recursive: true, force: true});
}

console.log(`\n🏗  Building library...`);
execSync(`ng build primeng-jalali-datepicker`, {stdio: 'inherit'});

const distPackageJsonPath = path.join(distPath, 'package.json');
if (fs.existsSync(distPackageJsonPath)) {
  const pkg = JSON.parse(fs.readFileSync(distPackageJsonPath, 'utf-8'));
  if (pkg.private) {
    console.log('📝 Removing private field from dist package.json...');
    delete pkg.private;
    fs.writeFileSync(distPackageJsonPath, JSON.stringify(pkg, null, 2));
  }
}

console.log(`\n🚀 Publishing to npm...`);
execSync(`npm publish ${distPath} --access public`, {stdio: 'inherit'});

const demoDist = path.join(__dirname, 'dist', 'demo');
if (fs.existsSync(demoDist)) {
  console.log(`\n🌐 Deploying demo via gh-pages...`);
  execSync(`gh-pages -d ${demoDist}`, {stdio: 'inherit'});
}

console.log(`\n✅ Release process completed successfully!`);
