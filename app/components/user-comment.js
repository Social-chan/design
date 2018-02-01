import Component from '@ember/component';
import { computed } from '@ember/object';
import Ember from 'ember';

export default Component.extend({
  isKokored: computed('post.kokored', 'comment.author.id', function () {
    return Ember.String.w(this.get('post.kokored')).indexOf(this.get('comment.author.id')) > -1
  })
});
