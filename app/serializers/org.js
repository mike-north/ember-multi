import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	extractSingle (store, primaryTypeClass, rawPayload, recordId) {
		return this._super(store, primaryTypeClass, {org: Ember.$.extend(rawPayload, {id: rawPayload.login})}, recordId);
	}
});
