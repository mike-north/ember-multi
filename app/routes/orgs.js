import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.all([
			'emberjs',
			'jquery', 'angular', 'facebook', 'yahoo', 'netflix'].map(id => {
			return this.store.find('org', id);
		}));
	}
});
