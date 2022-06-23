// enum type
enum Role { ADMIN, READ_ONLY_USER, AUTHOR }

// object type & array type
const person: {
    name: string;
    age: number;
    hobbies: string[],
    project: [number, string],
    role: Role
} = {
    name: 'Labiba',
    age: 27,
    hobbies: ['sports', 'cooking'],
    project: [1, 'Tribe'],
    role: Role.ADMIN

}

console.log(person);
person.project.push('snack')
console.log(person.project);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    
}