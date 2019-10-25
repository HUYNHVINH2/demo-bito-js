// // const person = {
// //     name: ['Bob', 'Smith'],
// //     age: 32,
// //     gender: 'male',
// //     interests: ['music', 'skiing'],
// //     bio: function() {
// //       alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
// //     },
// //     greeting: function() {
// //       alert('Hi! I\'m ' + this.name[0] + '.');
// //     }
// //   };


  var user = { name:'vinh' };

  let user2 = {...user};
  let user3 = JSON.parse(JSON.stringify(user))
  user3.name =' user3'
  user2.name = 'vinh 2';
  console.log(user2)

  console.log(user3)

  console.log(user)

  
