
exports.up = function(knex) {
  return (
      knex.schema
        .createTable("plants", tbl => {
            tbl.increments();
            tbl
                .string("common_name", 256)
                .notNullable();
        })
  );
};

exports.down = function(knex) {
  return (knex.schema.dropTableIfExists("plants"))
};
