exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.text('username').notNullable();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('email').notNullable();
    table.text('password').notNullable();
    table.text('userAge');
    table.text('biologicalSex');
    table.text('Height');
    table.text('Weight');
    table.text('StepCount');
    table.text('DateOfBirth');
    table.text('DistanceWalkingRunning');
    table.text('FlightsClimbed');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
