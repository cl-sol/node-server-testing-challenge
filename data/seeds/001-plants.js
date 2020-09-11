
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          common_name: 'swiss cheese plant', 
          scientific_name: "monstera deliciosac",
        },
        {
          common_name: 'saguaro', 
          scientific_name: "carneggia gigantea",
        },
        {
          common_name: 'chinese money plant', 
          scientific_name: "pilea peperomioides",
        }
      ]);
    });
};
