import Component from '@ember/component'
import { inject as service } from '@ember-decorators/service'
import { task } from 'ember-concurrency-decorators'
import EmberRouter from '@ember/routing/router'
import { action } from '@ember-decorators/object'

export default class PostCreate extends Component {
  @service auth
  @service store
  @service push

  content = ''
  isSpoiler = false

  @task
  *doPublish() {
    const { content } = this.getProperties('content');

    let post = this.get('store').createRecord('post', {
      author: this.get('auth.user'),
      content: content,
    })

    this.set('content', '');
    yield post.save();
  }

  @action
  wrap(text) {
    // console.log(this.toString());
    this.get('push').create('Test de notificación', {
      icon: '/img/user_default.jpg'
    });
    this.set('content', this.get('content') + ' ' + text);
  }

  @action
  spoiler() {
    this.toggleProperty('isSpoiler');
  }

  @action
  info() {
    let newwindow = window.open(
      `${EmberRouter.rootURL}about`,
      'gugul',
      'height=200,width=150'
    );
    if (window.focus) newwindow.focus();
    return false;
  }

  @action
  createPost() {
    this.get('doPublish').perform();
  }
}
