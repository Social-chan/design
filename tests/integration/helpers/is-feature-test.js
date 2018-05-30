import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-feature', 'helper:is-feature', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 'test');

  this.render(hbs`{{is-feature inputValue}}`);

  assert.equal(this.$().text().trim(), true);
});
