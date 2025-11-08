// spread operator in array
const friends = ['rahim', 'karim', ['pintu', 'chintu']];
const schoolFriends = ['nuru', 'vuru', 'kalo', 'sele'];
const collegeFriends = ['no one', 'mahmudul', 'others']
friends.push(...schoolFriends, ...collegeFriends);
console.log(friends);

// spread operator in object
const user = {name: 'Rupon', mobile: '0199399394'}
const othersInfo = {hobby: 'Outing', favo: 'Cricket', color: 'Black'}
const userInfo = {...user, ...othersInfo};
console.log(userInfo);

// rest operator
const sendInvite = (...friends: string[]) => {
    friends.forEach((frnd: string) => console.log(`Sent invitation letter to: ${frnd}`));
}
sendInvite("haloda", "koloda");



