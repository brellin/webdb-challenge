
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { id: 1, pj_id: 1, description: 'First', notes: 'First action', completed: false },
        { id: 2, pj_id: 1, description: 'Second', notes: 'Second action', completed: false },
        { id: 3, pj_id: 2, description: 'Third', notes: 'Third action', completed: false },
        { id: 4, pj_id: 2, description: 'Fourth', notes: 'Fourth action', completed: false },
        { id: 5, pj_id: 3, description: 'Fifth', notes: 'Fifth action', completed: false },
        { id: 6, pj_id: 3, description: 'Sixth', notes: 'Sixth action', completed: false }
      ]);
    });
};
