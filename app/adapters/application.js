import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'https://api.github.com',
	

	urlForQuery (query, modelName) {
		switch(modelName) {
			case 'repo':
				return `https://api.github.com/orgs/${query.orgId}/repos`;
			default:
				return this._super(...arguments);
		}
	}
});
