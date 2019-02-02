import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task } from 'ember-concurrency';
import EmberRouter from '@ember/routing/router';

export default Component.extend({
  session: service(),
  store: service(),
  push: service(),

  content: '',
  isSpoiler: false,

  doPublish: task(function* () {
    const { content } = this.getProperties('content');

    let post = this.get('store').createRecord('post', {
      author: this.get('session.user'),
      content: content,
    })

    this.set('content', '');
    yield post.save();
  }),

  actions: {
    wrap(text) {
      // console.log(this.toString());
      this.get('push').create('Test de notificación', {
        icon: '/img/user_default.jpg'
      });
      this.set('content', this.get('content') + ' ' + text);
    },
    spoiler() {
      this.toggleProperty('isSpoiler');
    },
    info() {
      let newwindow = window.open(
        `${EmberRouter.rootURL}about`,
        'gugul',
        'height=200,width=150'
      );
      if (window.focus) newwindow.focus();
      return false;
    },
    createPost() {
      this.get('doPublish').perform();
    },
  }
});
