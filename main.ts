// Golden Koi Breaks Free — make.fun ai-excited-01 entry program.
//
// Copies the finished image (entry.png, JPEG bytes under the required name)
// from this repository into the output directory, byte for byte.
// Deterministic: the same input always produces the same output.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
