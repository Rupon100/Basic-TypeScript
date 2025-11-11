// as const enum

// const UserRole = {
//     Admin: "Admin",
//     Editor: "Editor",
//     Viewer: "Viewer"
// } as const; // not changeable | all thing done by readOnly modifier
// // if we make a string fixed or constant then it will be literal type

// // keyof typeof userRole --> 'Admin' | 'Editor' | 'Viewer'

// const canEdit = (role: keyof typeof UserRole) => {
//     if(role === UserRole.Admin || role === UserRole.Editor){
//         return true;
//     }else{
//         return false;
//     }
// }
// const isEditPermission = canEdit(UserRole.Admin)
// console.log(isEditPermission);





const UserRole = {
    Admin: "ADMIN",
    Editor: "Editor",
    Viewer: "VIEWER"
} as const; // not changeable | all thing done by readOnly modifier
// if we make a string fixed or constant then it will be literal type

// keyof typeof userRole --> 'Admin' | 'Editor' | 'Viewer'

const canEdit = (role: (typeof UserRole)[keyof typeof UserRole]) => {
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }else{
        return false;
    }
}
const isEditPermission = canEdit(UserRole.Admin)
console.log(isEditPermission);












