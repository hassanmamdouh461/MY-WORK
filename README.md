# Kinetic Typography Project

## How to Run

1. Open this folder in VS Code or Terminal.
2. Run a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser.

## How to Customize

I have made it very easy for you to edit the text and colors without touching the complex code.

1. Go to `js/config.js`.
2. Edit the **Text** inside the quotes:
   ```javascript
   var starterText = "YOUR\nTEXT\nHERE";
   ```
   (Use `\n` for new lines).
3. Edit the **Colors** (Hex Codes):
   ```javascript
   var backgroundColorHex = "#000000"; // Black
   var foregroundColorHex = "#ffffff"; // White
   ```
4. Edit **Animation Speed**:
   ```javascript
   var animationSpeed = 30; // Higher is faster
   ```

## Project Structure

- `index.html`: The main page (Cleaned up).
- `js/config.js`: **YOUR SETTINGS** (Edit this).
- `js/sketch_flash.js`: Main animation logic.
- `js/animators.js`: Animation classes.
- `style.css`: Basic styling.
