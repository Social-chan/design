import Component from '@ember/component';
import { tagName } from '@ember-decorators/component';
import $ from 'jquery';
// import Ember from 'ember';

@tagName('select')
export default class ElementCountryList extends Component {
  selectedCode = 'ES';

  didInsertElement() {
    this._super(...arguments);

    $.getJSON('/static/countries.json').done(res => {
      // Ember.run.bind(this, this.set('countries', res));
      this.set('countries', res);
    });
  }
}
