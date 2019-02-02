import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.random.word,
  icon: faker.random.arrayElement(['fas fa-home', 'fas fa-paint-brush', 'fas fa-pepper-hot', 'fas fa-pen-nib']),
  color: faker.random.arrayElement(['indigo', 'purple', 'green', 'grey', 'blue']),
});
