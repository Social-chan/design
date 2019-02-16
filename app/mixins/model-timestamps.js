import DS from 'ember-data'
import Mixin from '@ember/object/mixin'

const { attr } = DS

const ModelTimestamps = Mixin.create({
  created_at: attr('date', {
    defaultValue: () => {
      return new Date
    }
  }),
  updated_at: attr('date')
})

export default ModelTimestamps
