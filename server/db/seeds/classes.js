
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        { id: 1, title: 'Level 1 Silks', day: 'Monday', teacher: 'Stacey', description: 'Basic silk techniques for beginners' },
        { id: 2, title: 'Level 2 Pole', day: 'Monday', teacher: 'Rosie', description: 'This class will take you higher up the pole and will go through the basic concept of inverting' },
        { id: 3, title: 'Level 1 Hoop', day: 'Monday', teacher: 'Tash', description: 'Basic poses and transitions on the hoop' },
        { id: 4, title: 'Not training', day: 'Monday', teacher: '', description: 'For rest days' },
        { id: 5, title: 'Silks Combos', day: 'Tuesday', teacher: 'Ruby', description: 'Stitching moves and tricks together to form combos' },
        { id: 6, title: 'Level 3 Pole', day: 'Tuesday', teacher: 'Brittney', description: 'Fundamental aerial moves and intermediate tricks' },
        { id: 7, title: 'Level 5 Pole', day: 'Tuesday', teacher: 'Karry', description: 'The most advanced pole class. Advance tricks and transitions' },
        { id: 8, title: 'Not training', day: 'Tuesday', teacher: '', description: 'For rest days' },
        { id: 9, title: 'Stretch and Flex', day: 'Wednesday', teacher: 'Rosie', description: 'Focuses on activation and engagement of muscles to help with flexibility' },
        { id: 10, title: 'Spin Pole', day: 'Wednesday', teacher: 'Jess', description: 'Tricks, transitions and combos on spin pole' },
        { id: 11, title: 'Handstands', day: 'Wednesday', teacher: 'Violet', description: 'Work on your handstands skills and conditioning' },
        { id: 12, title: 'Not training', day: 'Wednesday', teacher: '', description: 'For rest days' },
        { id: 13, title: 'Heels Flow', day: 'Thursday', teacher: 'Anna', description: 'Build the the art of sensual movement and dance in heels' },
        { id: 14, title: 'Conditioning', day: 'Thursday', teacher: 'Kristyna', description: 'All about conditiong to build stronger muscles' },
        { id: 15, title: 'Hammock Zen', day: 'Thursday', teacher: 'Danielle', description: 'Time to zen out with a guided meditation on a hhammock' },
        { id: 16, title: 'Not training', day: 'Thursday', teacher: '', description: 'For rest days' },
        { id: 17, title: 'Twerk', day: 'Friday', teacher: 'Kristyna', description: 'Time to shake and work out your booty with twerk classes' },
        { id: 18, title: 'Floorplay', day: 'Friday', teacher: 'Nicole', description: 'Learn floorbased tricks and skills and sequences' },
        { id: 19, title: 'Training time', day: 'Friday', teacher: 'No instructor', description: 'Free time for students to practice on their own' },
        { id: 20, title: 'Not Training', day: 'Friday', teacher: '', description: 'For rest days' },
        { id: 21, title: 'Hula Hoop', day: 'Saturday', teacher: 'Olivia', description: 'Learn basic and fun tricks you can do with a Hula Hoop' },
        { id: 22, title: 'Training time', day: 'Saturday', teacher: 'No instructor', description: 'Free time for students to practice on their own' },
        { id: 23, title: 'Hoop Combos', day: 'Saturday', teacher: 'Ines', description: 'Stitch together tricks and moves on the hoop to beautiful combos' },
        { id: 24, title: 'Not training', day: 'Saturday', teacher: '', description: 'For rest days' },
        { id: 25, title: 'Level 1 Pole', day: 'Sunday', teacher: 'Noelle', description: 'Learn the very basic fundamentals of pole'},
        { id: 26, title: 'Training time', day: 'Sunday', teacher: 'No instructor', description: 'Free time for students to practice on their own' },
        { id: 27, title: 'Hoop Combos', day: 'Sunday', teacher: 'Ines', description: 'Stitch together tricks and moves on the hoop to beautiful combos' },
        { id: 28, title: 'Not training', day: 'Sunday', teacher: '', description: 'For rest days' }
      ]);
    });
};
