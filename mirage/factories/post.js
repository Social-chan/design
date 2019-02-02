import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  content: faker.lorem.paragraph,
  created_at: new Date(),
  updated_at: new Date(),

  author: association()
});
