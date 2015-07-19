import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
	html_url: attr('string'),
	description: attr('string'),
	stargazers_count: attr('number'),
	watchers_count: attr('number'),
	forks_count: attr('number'),
	open_issues: attr('number'),
	language: attr('string'),
	created_at: attr('date'),
	updated_at: attr('date')
});
