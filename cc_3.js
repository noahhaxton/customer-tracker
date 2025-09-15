// cc_3.js
// Customer Records Tracker — Coding Challenge 03a

// Step 2: Create Customer Records
const customers = [
  {
    name: "Noah Haxton",
    email: "noah.haxton@example.com",
    purchases: ["Notebook", "Gel Pens", "Backpack"],
  },
  {
    name: "Ava Martinez",
    email: "ava.martinez@example.com",
    purchases: ["Laptop Sleeve", "USB-C Hub", "Wireless Mouse"],
  },
  {
    name: "Liam Chen",
    email: "liam.chen@example.com",
    purchases: ["4K Monitor", "HDMI Cable", "Desk Lamp"],
  },
];

console.log("=== Initial Customers ===");
console.log(customers);

// Step 3: Add and Remove Data
// Add a new customer with .push()
const newCustomer = {
  name: "Sofia Nguyen",
  email: "sofia.nguyen@example.com",
  purchases: ["Standing Desk", "Keyboard Tray"],
};
customers.push(newCustomer);
console.log("\nAdded new customer (push):", newCustomer);

// Remove the first customer with .shift()
const removedCustomer = customers.shift();
console.log("\nRemoved first customer (shift):", removedCustomer);

