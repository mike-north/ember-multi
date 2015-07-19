import DS from 'ember-data';

const {
	attr
} = DS;

export default DS.Model.extend({
	name: attr('string'),
	avatar_url: attr('string'),
	html_url: attr('string'),
	created_at: attr('date'),
	updated_at: attr('date'),
	public_repos: attr('number'),
	public_gists: attr('number')
});