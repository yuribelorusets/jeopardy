# Conceptual Exercise

Answer the following questions below in Markdown. 
Check out the 
[Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

## CSS

### What are differences between ``display: inline`` and ``display: block``?

>### Display:block makes the element take up a whole line in the page, while display:inline will stack elements in the line unless otherwise specified. 

### What are some advantages to using a CSS framework like Twitter Bootstrap?

>### Frameworks like Bootsrap allow quick CSS manipulation directly in the HTML class. This allows for quicker UI setup.

---

## jQuery

### What is jQuery?

>### jQuery is a Javascript library that is used for manipulating the DOM, adding event listeners, animating elements, and for making HTTP requests.

### What are differences between finding things with 
`document.querySelector(".book")` and `$(".book")`?

>### In the first method of selecting elements, you are using Vanilla Javascript and therefore can only use the methods provided by JS to manipulate the element. However in the latter, you are selecting the element as a jQuery object, allowing for more methods that the jQuery library provides. 
---

## Advanced JavaScript

### What is event delegation? Why would you use it?

>### Event delegeation is a technique used to minimize the amount of event listeners. Instead of adding listeners to each element, event delegation groups elements based on a selector and listens for events on selected parent class of the element.

### What is the `event` object? What kinds of things are in it?

>### The event object is whatever object is returned by the event listener

### In the Hack or Snooze API project, what did we use async/await for?

>### We used async/await to fetch and post data to the server asynchronously (or in the background) instead of reloading the page. For example, to fetch the stories we had to await for the data to get communicated from the server to the user's computer. 

### What happens if you forget the `async` keyword on  the declaration of a function that uses `await` inside of it?

>### If you forget to include async in the declaration of the function then it will not function asynchronuosly, and you would need to reload the page to get the data from the server. 

### What happens if you forget the `await` keyword in front of an asynchronous expression?

>### If you forget to include await in front of the expression then your promise will not be fulfilled and instead you will have an undefined response. 

### What is the difference between a static method and an instance method?

>### Static methods can be called on a class when the instance does not matter when calling the method. Instance methods must be called on specific instances of a class. 

### In JS: `let a = [1, 2, 3]; b = a.slice(); a.push(4);`: does `b` contain 4? Why or why not? 

>### No, it does not contain 4 because b is a copy of a, as the slice method returns a copy of the array being sliced. And since both a and b is a reference type, b is not being modified when a is. 

### What are some strategies you've learned for being organized in larger projects, like Hack or Snooze?

>### Using OOP and encapsulation will keep the architecture of your project more organized. Destructuring your algorithms and separating functions/methods functionalities' will make for a more efficient project too. Event delegation is another strategy for cleaner code.

---

## How the Web Works and APIs

### What is a hostname?

>### A hostname is what we most commonly refer to websites as. We talk to servers commonly by their hostname, although servers can have multiple hostnames. For example www.google.com is a hostname, but mail.google.com is also a hostname of the same servers.  

### What is an IP address?

>### On networks, computers all have unique IP addresses to identify and find that computer on the network. IP stands for Internet protocol, so it's the procedure for communicating on the internet for each machine. 

### What is a port?

>### A port is an endpoint for server traffic. Ports can be reserved for specific things. The default port for HTTP is 80, HTTPS is 443, although most servers have 65535 ports.

### What is DNS?

>### DNS is domain name server, and it turns hostnames into IP addresses for communication between servers and devices. 

### What is an HTTP header?

>### Headers help you pass in additional information in the HTTP request. 

### What is an HTTP Response Code?

>### The response code is the status of whether or not the request to the API was successful.

### What is the difference between GET and POST?

>### GET is to request data from an API, while POST is a method to update the resource. 

### What is AJAX? Why would you use it?

>### AJAX is asynchronous javascript, which lets you update the DOM and fetch data asynchronously in the background withoud reloading the page. 

### What is JSON?

>### JSON is javascript object notation and looks like an object, but has quotes around the keys. It is the standard language for communication between a server and a client. 

### What is an API?

>### API is an application programming interface, which is the contract for interacting with a certain program. 

### What are some limitations of AJAX requests?

>### Some APIs won't allow you to use AJAX paradigm with them.

### What is the Same Origin Policy?

>### This means requests made to a server must have the same hostname, protocol, and port. 
