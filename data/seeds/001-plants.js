
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          common_name: 'swiss cheese plant'
        },
        {
          common_name: 'saguaro'
        },
        {
          common_name: 'chinese money plant'
        }
      ]);
    });
};
