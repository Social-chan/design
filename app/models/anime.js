import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    adult: DS.attr('boolean'),
    public: DS.attr('boolean'),
    image: DS.attr('string'),
    about: DS.attr('string'),
    content: DS.attr('json'),
    published: DS.attr('date'),
    finished: DS.attr('date'),
    created_at: DS.attr('date'),

    author: DS.belongsTo('user'),
});
