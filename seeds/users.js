exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      const users = [{
        username: 'kylegibson',
        first_name: 'Kyle',
        last_name: 'Gibson',
        email: 'kylegibson15@gmail.com',
        password: 'kyle',
        userAge : 0,
        biologicalSex: '-',
        Height: '',
        Weight: '-',
        StepCount: '-',
        DateOfBirth: '-',
        DistanceWalkingRunning: '-',
        FlightsClimbed: '-'
      },{
        username: 'guest',
        first_name: 'Guest',
        last_name: 'Guest',
        email: 'guest@gmail.com',
        password: '1234',
        userAge : 0,
        biologicalSex: '-',
        Height: '',
        Weight: '-',
        StepCount: '-',
        DateOfBirth: '-',
        DistanceWalkingRunning: '-',
        FlightsClimbed: '-'
      }];
      return knex('users').insert(users)
    });
};
