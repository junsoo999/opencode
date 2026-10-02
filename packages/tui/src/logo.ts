// HYPERCODE wordmark. The left half (HyperAccel icon + HYPER) is drawn in the
// HyperAccel brand blue; the right half (CODE) uses the regular text color.
// The icon is traced from the HyperAccel logo SVG with quadrant blocks (2x2
// pixels per cell); the letters sit one pixel low to line up with its frame.
export const brand = { hex: "#009EE2", ansi: "\x1b[38;2;0;158;226m" }

export const logo = {
  left: [
    "  ▐▛▀▀▀▀▀▀▀█                                ",
    "█▀▀▀▀▀▀▀▀▜▌█   ▄   ▄ ▄   ▄ ▄▄▄▄  ▄▄▄▄▄ ▄▄▄▄ ",
    "█ ▐▌▗▄▄█▘▐▌█   █▄▄▄█ ▀▄ ▄▀ █▄▄▄▀ █▄▄▄  █▄▄▄▀",
    "█ ▐▌  ▐▛ ▐▌█   █   █   █   █     █     █ ▀▄ ",
    "█ ▐▙▄▄▄▄▄▄▄█   ▀   ▀   ▀   ▀     ▀▀▀▀▀ ▀   ▀",
    "█▄▄▄▄▄▄▄▄▟▌                                 ",
  ],
  right: [
    "                       ",
    " ▄▄▄▄  ▄▄▄  ▄▄▄▄  ▄▄▄▄▄",
    "█     █   █ █   █ █▄▄▄ ",
    "█     █   █ █   █ █    ",
    " ▀▀▀▀  ▀▀▀  ▀▀▀▀  ▀▀▀▀▀",
    "                       ",
  ],
}

export const go = {
  left: ["    ", "█▀▀▀", "█_^█", "▀▀▀▀"],
  right: ["    ", "█▀▀█", "█__█", "▀▀▀▀"],
}

export const marks = "_^~,"
