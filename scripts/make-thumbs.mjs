// Generate kartu/thumbnail WebP dari screenshot di public/projects.
// Tujuan: kartu project menampilkan gambar yang sudah di-resize (Lanczos) + unsharp
// supaya tetap tajam walau slot-nya cuma ~305px, dan jauh lebih ringan dari PNG asli.
// Jalankan: npm run thumbs
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SOURCE_DIR = "public/projects";
const OUT_DIR = path.join(SOURCE_DIR, "thumbs");
const WIDTH = 720;
const QUALITY = 82;

await mkdir(OUT_DIR, { recursive: true });

const files = (await readdir(SOURCE_DIR)).filter((file) => file.toLowerCase().endsWith(".png"));
const report = [];

for (const file of files) {
  const source = path.join(SOURCE_DIR, file);
  const meta = await sharp(source).metadata();
  if (!meta.width || !meta.height) continue;

  const width = Math.min(WIDTH, meta.width);
  const height = Math.round(meta.height * (width / meta.width));
  const target = path.join(OUT_DIR, file.replace(/\.png$/i, ".webp"));

  await sharp(source)
    .resize(width, height, { kernel: "lanczos3" })
    .sharpen({ sigma: 0.5, m1: 0.25, m2: 0.6 })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(target);

  const [before, after] = await Promise.all([stat(source), stat(target)]);
  report.push({ file, thumb: path.relative(SOURCE_DIR, target), kb: Math.round(after.size / 1024), fromKb: Math.round(before.size / 1024) });
}

for (const item of report) {
  console.log(`${item.thumb}  ${item.fromKb} KB -> ${item.kb} KB`);
}
console.log(`${report.length} thumbnail ditulis ke ${OUT_DIR}`);
