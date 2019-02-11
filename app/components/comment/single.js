import Component from '@ember/component'
import { computed } from '@ember-decorators/object'
import { w } from '@ember/string'

export default class CommentSingle extends Component {
  @computed('post.kokored', 'comment.author.id')
  get isKokored() {
    return w(this.get('post.kokored')).indexOf(this.get('comment.author.id')) > -1
  }
}
