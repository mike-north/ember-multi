import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractFindQuery (store, typeClass, rawPayload, id, requestType) {
		let normalizedPayload = {
			repos: rawPayload.map(p => Ember.$.extend(p, {id: p.name}))
		};
		return this._super(store, typeClass, normalizedPayload, id, requestType);
	}
});
