import Component from '@ember/component';
import { inject as service } from '@ember-decorators/service';
import { task } from 'ember-concurrency-decorators';
import { action } from '@ember-decorators/object';

export default class UserFollowButton extends Component {
  @service ajax

  @task({drop: true})
  *followUser(id) {
    yield this.get('ajax').post(`user/${id}/follow`);
  }

  @action
  toggleFollow(id) {
    this.get('followUser').perform(id);
    this.toggleProperty('isFollowed');
  }
}
