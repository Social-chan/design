import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  nickname: faker.internet.userName,
  email: faker.internet.exampleEmail,
  active: true,
  created_at: faker.date.past,
  updated_at: faker.date.past,

  profile: association()
});
