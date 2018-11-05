var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

var pkg = require('../package.json');

describe('colour-swatch', function() {
  it('should create book and parse content', function(testDone) {
    tester
      .builder()
      .withContent('{% swatch name="Blue", hexColour="#0000ff", rgbColour="rgb(0, 0, 255)" %}{% endswatch %}')
      .withLocalPlugin(path.join(__dirname, '..'))
      .withBookJson({
        gitbook: pkg.engines.gitbook,
        plugins: ['colour-swatch']
      })
      .create()
      .then(function(result) {
        assert.equal(
          result[0].content.trim(),
          `<p><div class="c-swatch" style="border-top-color: rgb(0, 0, 255); border-bottom-color: rgb(0, 0, 255);">
  <div class="c-swatch__name">
    Blue
  </div>
  <div class="c-swatch__codes">
    <code class="c-swatch__code">undefined</code>
    <span class="c-swatch__sperator">&#x2022;</span>
    <code class="c-swatch__code">rgb(0, 0, 255)</code>
    <span class="c-swatch__sperator">&#x2022;</span>
    <code class="c-swatch__code">#0000ff</code>
  </div>
</div></p>`
        )
      })
      .fin(testDone)
      .done();
  });
});
