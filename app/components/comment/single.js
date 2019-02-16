import Component from '@ember/component'
import { inject as service } from '@ember-decorators/service'
// import { computed } from '@ember-decorators/object'
// import { w } from '@ember/string'

export default class CommentSingle extends Component {
  @service auth
  // @computed('post.kokored', 'comment.author.id')
  // get isKokored() {
  //   return w(this.get('post.isKokored')).indexOf(this.get('comment.author.id')) > -1
  // }
}
