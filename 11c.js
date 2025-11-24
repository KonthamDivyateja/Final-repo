const obj1 = { id: 1, value: "Old" };
const obj2 = { value: "New", status: "Active" };
const mergedAndOverridden = { ...obj1, ...obj2 };

console.log(mergedAndOverridden); 