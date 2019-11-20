// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [

//     {/
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     }/
//     ,
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];


var familyTree = {
   'firstName': 'Beth',
   'lastName': 'Johnson',
   'location': 'San Francisco',
   'children': [

    {
       'firstName': 'Beth Jr.',
       'lastName': 'Johnson',
       'location': 'Berkeley',
       'children': [
         {
           'firstName': 'Smitty',
           'lastName': 'Won',
           'location': 'Beijing',
          'children': []
         }
       ]
     }
    ,
     {
       'firstName': 'Joshie',
       'lastName': 'Wyattson',
       'location': 'Berkeley',
       'children': []
     }
   ]
};

//the logic is that this function well go recursively 
//checking each object recursively with the truth test, if it passes then it well push the firstName " " lastName to the array 
//and then recursively going through the object's children proprty which  is an array to it well pop the array and get the object and do the same thing recursively
//
//i understand the recursive Pattern of the answer to this Question, but i dont know how to implement it


//The Result Array That well be include the Names
var result = [];


var livesInBerkeley = function(familyMember){
   return familyMember.location === 'Berkeley';
 }

var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
   
   //if it passes the truth test it well be pushed to the array 
  if(truthTest(familyTree)){
  filterFamilyMembers(familyTree.children.pop(),truthTest);
  result.push(familyTree.firstName + " " +familyTree.lastName);
}

};

filterFamilyMembers(familyTree,livesInBerkeley);
console.log(result);

 //- [ Attempted ] filter-family-members