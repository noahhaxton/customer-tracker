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

// Step 4: Update Customer Info
// Update the email of one existing customer (update Ava’s email)
const customerToUpdate = customers.find(c => c.name === "Ava Martinez");
if (customerToUpdate) {
  customerToUpdate.email = "ava.martinez@newdomain.com";
  console.log("\nUpdated Ava's email:", customerToUpdate.email);
}

// Add a new purchase to a customer’s purchases array using .push()
const purchaser = customers.find(c => c.name === "Liam Chen");
if (purchaser) {
  purchaser.purchases.push("Ergonomic Chair");
  console.log("\nAdded purchase for Liam:", purchaser.purchases[purchaser.purchases.length - 1]);
}

// Step 5: Display Customer Information
console.log("\n=== Customer Summary ===");
customers.forEach((customer, index) => {
  const purchaseCount = customer.purchases.length;
  console.log(
    `${index + 1}. ${customer.name} — Email: ${customer.email} — Purchases: ${purchaseCount}`
  );
});

// console.log("\n=== Final Customer Objects ===");
// console.log(JSON.stringify(customers, null, 2));