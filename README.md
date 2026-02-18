# Kinetic Typography Generator

A web-based kinetic typography tool that displays animated text with various visual effects. Built with [p5.js](https://p5js.org/).

## Features

- Multiple animation styles (Arcer, Bend, Box, BugEyes, Halo, RiseSun, Shutters, SlotMachine, Snap, Split, Starburst, Twist, and more)
- Fully customizable text, colors, and animation speed
- Multiple font options included
- Responsive — works on desktop and mobile
- Easy to customize without touching the complex code

## How to Run

1. Open this folder in VS Code or Terminal.
2. Run a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## How to Customize

All settings are in one place — `js/config.js`:

```javascript
// The text to display (use \n for new lines)
var starterText = "YOUR\nTEXT\nHERE";

// Colors (Hex codes)
var backgroundColorHex = "#000000"; // Background Color
var foregroundColorHex = "#ffffff"; // Text Color

// Animation Speed (30 is default, higher = faster)
var animationSpeed = 30;
```

## Project Structure

```
├── index.html          → Main page
├── style.css           → Styling
├── js/
│   ├── config.js       → ⚙️ YOUR SETTINGS (Edit this)
│   ├── sketch_flash.js → Main animation engine
│   ├── animators.js    → Animation base classes
│   ├── update.js       → Update logic
│   ├── textures.js     → Texture helpers
│   ├── recording.js    → Video recording support
│   └── 0_*.js          → Individual animation styles
└── resources/          → Fonts
```

## License

Feel free to use, modify, and distribute this project.
