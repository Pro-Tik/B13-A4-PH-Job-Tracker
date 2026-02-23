DOM and JavaScript Fundamentals
Here are short, straightforward answers to your DOM and JavaScript questions:

1. Element Selectors Compared
   getElementById: Selects a single element by its unique id. Returns an Element object.
   getElementsByClassName: Selects all elements with a specific class. Returns a live HTMLCollection (updates automatically if the DOM changes).
   querySelector: Selects the first element that matches a given CSS selector (e.g., .my-class, #my-id, div > p). Returns an Element object.
   querySelectorAll: Selects all elements matching a given CSS selector. Returns a static NodeList (does not automatically update if the DOM changes).
2. Creating and Inserting a DOM Element
   You do this in three basic steps:
   Create: Use document.createElement('tagName') to make the element.
   Modify: Add content or attributes to it (e.g., newDiv.textContent = 'Hello World!').
   Insert: Append it to an existing DOM element using methods like appendChild(), prepend(), or insertBefore().
   Example:
   const newElement = document.createElement('p');
   newElement.textContent = 'I am new here!';  
   document.body.appendChild(newElement);

3. Event Bubbling
   What it is: Event bubbling is a phase in the DOM event flow where an event triggered on an inner element "bubbles up" through its ancestors.
   How it works: If you click a <button> nested inside a <div>, the browser fires the click event on the <button> first. Then, it moves up the DOM tree and fires the click event on the <div>, then the <body>, and so on, all the way to the document root.
4. Event Delegation
   What it is: A technique where you attach a single event listener to a parent element to listen for events triggered by its child elements. It relies entirely on Event Bubbling.
   Why it's useful: \* Performance: Attaching one listener to a list container uses less memory than attaching 100 individual listeners to 100 list items.
   Dynamic elements: If you add new child elements to the DOM later, the parent listener will automatically catch their events without needing new listeners attached.
5. preventDefault() vs. stopPropagation()
   preventDefault(): Stops the browser's default behavior for an action. For example, it stops a <form> from reloading the page upon submission, or stops an <a> link from navigating to a new URL.
   stopPropagation(): Stops the event from bubbling up the DOM tree. The event still happens on the target element, but parent elements won't be notified, meaning their event listeners won't trigger.
