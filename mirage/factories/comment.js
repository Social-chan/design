import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  content: faker.lorem.paragraph,

  author: association(),
});
