import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { translations } from "../src/lib/i18n.ts";
import { PROJECT_META } from "../src/lib/data.ts";

const projectRoot = new URL("../", import.meta.url);
const outputPath = fileURLToPath(new URL("../dist/index.html", import.meta.url));
const html = readFileSync(outputPath, "utf8");
const stylesheet = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");

// Resolve the same dotted translation paths used by the page's locale script.
function valueAtPath(value, path) {
  return path.split(".").reduce((current, part) => {
    if (Array.isArray(current)) return current[Number(part)];
    return current && typeof current === "object" ? current[part] : undefined;
  }, value);
}

test("the built home page contains the portfolio sections and contact links", () => {
  for (const section of ["about", "skills", "experience", "projects", "contact"]) {
    assert.ok(html.includes(`id="${section}"`), `missing section: ${section}`);
  }
  assert.match(html, /Agil Ahmad Maulana/);
  assert.match(html, /N-BR-01/);
  assert.match(html, /N-BR-06/);
  assert.match(html, /agilahmadmaulana3@gmail\.com/);
  assert.match(html, /data-language-toggle/);
  assert.match(html, /data-theme-toggle/);
  assert.ok(html.includes('href="/CV-Agilahmadmaulana.pdf"'));
});

test("the built About biography keeps the updated copy and sentence boundaries", () => {
  assert.ok(html.includes(translations.en.about.bio[0].replaceAll("'", "&#39;")));
  assert.ok(html.includes(translations.en.about.bio[1]));
  assert.doesNotMatch(translations.en.about.bio[1], /matter\.Experienced/);
});

test("the built MRTG project context matches the verified portfolio copy", () => {
  assert.ok(html.includes(translations.en.projects.items["N-BR-04"].context));
});

test("both locales provide the navigation, accessibility, metadata, and status copy", () => {
  const requiredKeys = [
    "meta.title", "meta.description",
    "nav.primaryLabel", "nav.backToTop", "nav.openMenu", "nav.closeMenu",
    "nav.switchToIndonesian", "nav.switchToEnglish", "nav.switchToLight", "nav.switchToDark",
    "nav.links.about", "nav.links.skills", "nav.links.experience", "nav.links.projects", "nav.links.contact",
    "skills.categories.backend", "skills.categories.database", "skills.categories.frontend",
    "skills.categories.architecture", "skills.categories.tools",
    "projects.status.deployed", "projects.status.completed", "projects.links.code", "projects.links.live",
    "projects.links.codeAria", "projects.links.liveAria", "hero.role", "hero.tagline",
  ];

  for (const lang of ["en", "id"]) {
    for (const key of requiredKeys) {
      const value = valueAtPath(translations[lang], key);
      assert.ok(typeof value === "string" && value.length > 0, `${lang} is missing ${key}`);
    }
  }
});

test("every rendered text and aria translation key resolves in both locales", () => {
  const keys = new Set([...html.matchAll(/data-i18n(?:-aria)?="([^"]+)"/g)].map((match) => match[1]));
  for (const lang of ["en", "id"]) {
    for (const key of keys) {
      const value = valueAtPath(translations[lang], key);
      assert.ok(
        (typeof value === "string" && value.trim().length > 0) || typeof value === "number",
        `${lang} is missing or has an unusable value for ${key}`,
      );
    }
  }
});

test("the MRTG description and bullets match across English and Indonesian", () => {
  const english = translations.en.projects.items["N-BR-04"];
  const indonesian = translations.id.projects.items["N-BR-04"];
  assert.equal(english.name, indonesian.name);
  assert.match(english.context, /bandwidth and connectivity/i);
  assert.match(indonesian.context, /bandwidth dan konektivitas/i);
  assert.equal(english.contributions.length, 2);
  assert.equal(indonesian.contributions.length, 2);
  assert.doesNotMatch(indonesian.context, /pipeline sinkronisasi data otomatis/i);
});

test("each project retains its complete contribution list in both locales and the rendered page", () => {
  const sourceCounts = {
    "N-BR-01": 3,
    "N-BR-02": 3,
    "N-BR-03": 3,
    "N-BR-04": 2,
    "N-BR-05": 3,
    "N-BR-06": 4,
    "N-BR-07": 3,
    "N-BR-08": 3,
  };

  for (const { id } of PROJECT_META) {
    for (const lang of ["en", "id"]) {
      const contributions = translations[lang].projects.items[id].contributions;
      assert.equal(contributions.length, sourceCounts[id], `${lang} ${id} contribution count`);
    }
    for (let index = 0; index < sourceCounts[id]; index += 1) {
      assert.ok(html.includes(`data-i18n="projects.items.${id}.contributions.${index}"`), `missing rendered contribution ${id}.${index}`);
    }
  }
});

test("the hero uses a complete role markup and avoids invented system status copy", () => {
  assert.ok(html.includes('data-i18n="hero.role"'));
  assert.ok(html.includes("Software Engineer"));
  assert.doesNotMatch(html, /UNIT DESIGNATION|SYNC SYSTEM|CLASS: SPECIALIST|PILOT DATA|STATUS: ONLINE|ALL SYSTEMS ONLINE|AVID PROGRAMMER/);
});

test("translated skill labels leave their decorative status dots intact", () => {
  assert.match(
    html,
    /<div[^>]*>\s*<span class="dot dot-xs" aria-hidden="true"><\/span>\s*<span data-i18n="skills\.categories\.backend">/,
  );
});

test("resume translations target the label without replacing the external-link icon", () => {
  const resumeLabels = [...html.matchAll(/<span data-i18n="nav\.resume">([^<]*)<\/span>/g)];
  assert.equal(resumeLabels.length, 2);
  assert.ok(resumeLabels.every((match) => match[1] === "RESUME"));
  assert.equal((html.match(/data-drawer-close/g) ?? []).length, 1);
});

test("the project grid can shrink to the available mobile width", () => {
  assert.match(stylesheet, /grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(min\(100%,\s*320px\),\s*1fr\)\)/);
});

test("the built portfolio includes all source assets and local fonts", () => {
  const assets = [
    "favicon.ico",
    "CV-Agilahmadmaulana.pdf",
    "logos/css3.png",
    "logos/git.png",
    "logos/github.png",
    "logos/gitlab.png",
    "logos/go.png",
    "logos/html5.png",
    "logos/javascript.png",
    "logos/laravel.png",
    "logos/mongodb.png",
    "logos/mysql.png",
    "logos/nestjs.png",
    "logos/astro.svg",
    "logos/php.png",
    "logos/postgresql.png",
    "logos/postman.png",
    "logos/python.png",
    "logos/tailwindcss.png",
  ];
  for (const asset of assets) {
    assert.ok(existsSync(new URL(`dist/${asset}`, projectRoot)), `missing built asset: ${asset}`);
  }

  const fontsDirectory = new URL("dist/fonts/", projectRoot);
  assert.ok(existsSync(fontsDirectory), "missing self-hosted fonts");
  assert.ok(readdirSync(fontsDirectory).some((font) => font.endsWith(".woff2")));

  const headersPath = fileURLToPath(new URL("dist/_headers", projectRoot));
  assert.ok(existsSync(headersPath), "missing static-host security headers");
  const headers = readFileSync(headersPath, "utf8");
  assert.ok(headers.includes("X-Frame-Options: DENY"));
  assert.ok(headers.includes("X-Content-Type-Options: nosniff"));
});

test("portrait photos are optimized to display-sized WebP assets", () => {
  for (const name of ["foto-hero", "foto-about"]) {
    const src = html.match(new RegExp(`src=\"([^\"]*${name}[^\"]*\\.webp)\"`))?.[1];
    assert.ok(src?.startsWith("/_astro/"), `${name} should use an Astro-processed asset`);
    const imageTag = html.match(new RegExp(`<img[^>]*src="[^"]*${name}[^"]*\\.webp"[^>]*>`))?.[0];
    assert.ok(imageTag?.includes("srcset="), `${name} should provide a high-density srcset`);
    assert.match(imageTag, /srcset="[^"]+1x[^"]+2x/, `${name} should include 1x and 2x candidates`);
    const outputPath = new URL(`dist/${src.slice(1)}`, projectRoot);
    assert.ok(existsSync(outputPath), `missing optimized image: ${src}`);
    assert.ok(statSync(outputPath).size < 1_000_000, `${name} output should be smaller than the original photo`);
  }
  assert.ok(!existsSync(new URL("dist/foto-hero.webp", projectRoot)), "raw hero photo should not be published");
  assert.ok(!existsSync(new URL("dist/foto-about.webp", projectRoot)), "raw about photo should not be published");
});

test("all project gallery items point to existing desktop and mobile files", () => {
  for (const meta of PROJECT_META) {
    if (!meta.gallery) continue;
    for (const item of meta.gallery) {
      const desktopFile = new URL(`public${item.src}`, projectRoot);
      assert.ok(existsSync(desktopFile), `Missing gallery desktop file: ${item.src} in ${meta.id}`);
      if (item.mobileSrc) {
        const mobileFile = new URL(`public${item.mobileSrc}`, projectRoot);
        assert.ok(existsSync(mobileFile), `Missing gallery mobile file: ${item.mobileSrc} in ${meta.id}`);
      }
      if (item.thumb) {
        const thumbFile = new URL(`public${item.thumb}`, projectRoot);
        assert.ok(existsSync(thumbFile), `Missing gallery thumb file: ${item.thumb} in ${meta.id}`);
      }
    }
  }
  assert.ok(html.includes("data-project-shot-mobile="));
});

