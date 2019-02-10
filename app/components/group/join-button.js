import Component from '@ember/component';
import { inject as service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import { task } from 'ember-concurrency-decorators';

export default class JoinButtonComponent extends Component {
  @service ajax

  @task({drop: true})
  *postJoin(id) {
    yield this.get('ajax').post(`group/${id}/join`);
  }

  @action
  join(id) {
    this.get('postJoin').perform(id);
    this.toggleProperty('isMember');
  }
}
