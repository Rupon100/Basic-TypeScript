// object destructuring
const user = {
    id: 1234,
    name: {
        firstName: "MD",
        middleName: "Rupon",
        lastName: "mia"
    },
    gender: 'male',
    favColor: 'Black'
}
const { favColor, name: { middleName } } = user;
console.log(middleName)

// array destructuring
const friends = ['hello', 'there', 'rupon', 'here'];
const {...rest} = friends;
console.log();