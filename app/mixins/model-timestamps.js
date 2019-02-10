import DS from 'ember-data'
import Mixin from '@ember/object/mixin'

const ModelTimestamps = Mixin.create({
  created_at: DS.attr('date', {
    defaultValue: () => {
      return new Date
    }
  }),
  updated_at: DS.attr('date')
})

export default ModelTimestamps
