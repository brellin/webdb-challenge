
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'First', description: 'First Project', completed: false },
        { id: 2, name: 'Second', description: 'Second Project', completed: false },
        { id: 3, name: 'Third', description: 'Third Project', completed: false }
      ]);
    });
};
