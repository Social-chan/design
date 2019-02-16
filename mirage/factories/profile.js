import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.name.firstName,
  surname: faker.name.lastName,
  bio: faker.lorem.sentence,
  avatar: faker.image.avatar,
  country: faker.address.country,
  // bg_image: faker.image.imageUrl(256, 96),
  birthday: faker.date.past,
  gender: faker.random.boolean
});
