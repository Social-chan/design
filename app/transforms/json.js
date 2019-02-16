import DS from 'ember-data';

const { Transform } = DS

export default class JsonTransform extends Transform {
  deserialize(serialized) {
    return JSON.parse(serialized);
  }

  serialize(deserialized) {
    return JSON.stringify(deserialized);
  }
}
