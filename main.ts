// Golden Koi Breaks Free — make.fun ai-excited-01, round 3.
// Copies the entry image byte-for-byte into the output directory so the
// judge sees exactly the image the entrant made. Two runs must produce
// identical bytes, so this performs a plain file copy with no re-encoding.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
if (!existsSync(source)) {
  throw new Error(`entry image missing: ${source}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
