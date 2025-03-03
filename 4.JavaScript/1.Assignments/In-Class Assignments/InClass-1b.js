<<<<<<< HEAD
// Code snippet to check user status
let LoggedIn = true, ProSubscription = false;

// This is the traditional and the most memory efficient way method.

if (LoggedIn) {
  if (ProSubscription) {
    console.log(`Thanks, you are a Pro subscriber`);
  } else {
    console.log(`Here is your data, consider subscribing to Pro to gain access to premium features`);
  }
} else {
  console.log(`Please login to see the data`);
}

// This is the ternary operator method, and it is less memory efficient than the if-else method.

LoggedIn?ProSubscription?console.log(`Thanks, you are a Pro subscriber`):console.log(`Here is your data, consider subscribing to Pro to gain access to premium features`):console.log(`Please login to see the data`);
