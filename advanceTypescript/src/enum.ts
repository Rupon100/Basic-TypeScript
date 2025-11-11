// An enum (short for enumeration) is a TypeScript feature that lets you define a group of named constants — like labels for specific values.
// It makes your code more readable and less error-prone than using plain strings or numbers everywhere.


enum UserRole {
    Admin = "admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRole) => {
    if(role === UserRole.Admin || role === UserRole.Editor){
        return true;
    }else{
        return false;
    }
}
const isEditPermission = canEdit(UserRole.Admin)
console.log(isEditPermission);









