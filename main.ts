// Museum of the Year 3000 — the label a museum in the year 3000 places
// beside an ordinary object from today: a parking meter.
// The humour is the future curator confidently misreading the object:
// citizens fed it coins to protect their cars, but the only thing the
// box ever took was the coins.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Parking meter (c. 2025). Citizens fed coins to this box so their cars would not be taken away. The cars were never taken. The coins were.";

// Gate: 1-200 characters, single line, not only whitespace.
// Counted in Unicode code points so the gate matches how a reader sees it.
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry length ${charCount} is outside 1-200 characters`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${charCount} characters to /output/entry.txt`);
