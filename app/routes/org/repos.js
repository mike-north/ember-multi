import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		let org = this.modelFor('org');
		return this.store.findQuery('repo', {orgId: org.get('id')});
	},

	setupController(controller) {
		this._super(...arguments);
		let org = this.modelFor('org');
		controller.set('org', org);
	}
});
