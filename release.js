const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

const libPackagePath = path.join(__dirname, 'projects', 'primeng-jalali-datepicker', 'package.json');

const libPackage = JSON.parse(fs.readFileSync(libPackagePath, 'utf-8'));

const versionParts = libPackage.version.split('.').map(Number);
versionParts[2] += 1; // patch
const newVersion = versionParts.join('.');
libPackage.version = newVersion;

fs.writeFileSync(libPackagePath, JSON.stringify(libPackage, null, 2));
console.log(`➡️  Bumping version (patch)...\nv${newVersion}`);

const distPath = path.join(__dirname, 'dist', 'primeng-jalali-datepicker');
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
  console.log('\n🧹 Removing old dist folder...');
}

console.log('\n🏗  Building library...');
execSync('ng build primeng-jalali-datepicker', {stdio: 'inherit'});

execSync('node copy-licenses.js', {stdio: 'inherit'});
console.log('\n🚀 Publishing to npm...');
execSync(`npm publish "${distPath}" --access public`, {stdio: 'inherit'});

console.log('\n📦 Deploying demo...');
execSync('npm run deploy-demo', {stdio: 'inherit'});

console.log('\n✅ Release complete!');
