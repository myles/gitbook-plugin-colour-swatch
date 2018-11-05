'use strict';

module.exports = {
  website: {
    assets: "./book",
    css: [
      "c-swatch.css",
      "c-swatches.css"
    ]
  },
  blocks: {
    swatches: {
      process: function(block) {
        return `
          <div class="c-colour-swatches">
            ${block.body}
          </div>
        `
      }
    },
    swatch: {
      process: function(block) {
        let rgbColour = block.kwargs.rgbColour,
            hexColour = block.kwargs.hexColour,
            sassColour = block.kwargs.sassColour,
            name = block.kwargs.name;

        return `
          <div class="c-swatch" style="border-top-color: ${rgbColour || hexColour}; border-bottom-color: ${rgbColour || hexColour};">
            <div class="c-swatch__name">
              ${name}
            </div>
            <div class="c-swatch__codes">
              <code class="c-swatch__code">${sassColour}</code>
              <span class="c-swatch__sperator">&bull;</span>
              <code class="c-swatch__code">${rgbColour}</code>
              <span class="c-swatch__sperator">&bull;</span>
              <code class="c-swatch__code">${hexColour}</code>
            </div>
          </div>
        `
      }
    }
  }
}
