const fs = require("fs");
const path = require("path");

const filesToCopy = ["LICENSE", "THIRD-PARTY-NOTICES.md"];
const distPath = path.join(__dirname, "dist", "primeng-jalali-datepicker");

filesToCopy.forEach((file) => {
    const src = path.join(__dirname, file);
    const dest = path.join(distPath, file);

    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file}`);
    } else {
        console.warn(`${file} not found, skipped.`);
    }
});
