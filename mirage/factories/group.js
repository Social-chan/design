import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.lorem.words,
  slug: faker.lorem.slug,
  image: faker.random.image,
  // cover: faker.image.imageUrl(256, 96),
  about: faker.lorem.sentence,

  groupType: association(),
  author: association(),
});
