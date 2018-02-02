import Component from '@ember/component';
import { computed } from '@ember/object';
import { w } from '@ember/string';

export default Component.extend({
  isKokored: computed('post.kokored', 'comment.author.id', function () {
    return w(this.get('post.kokored')).indexOf(this.get('comment.author.id')) > -1
  })
});
