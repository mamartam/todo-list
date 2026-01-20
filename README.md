# 📔To-do list
This repository is created to practice and learn JavaScript through small mini-projects. Each mini-project is stored in a separate branch and represents a simple web-page where I practice different JavaScript concepts and topics.
## 📦 Technologies
A functional To-Do List application developed to practice DOM manipulation and Event Handling.
- Core Features: Users can add new tasks to a "To-Do" list.
- Task Management: Ability to mark tasks as completed (moving them to a "Done" section) or delete them entirely.
- Real-time Statistics: Automatic counters that track the number of active and completed tasks.
- Responsive Design: A modern, mobile-friendly UI styled with CSS Flexbox and custom transitions.
- Tech Stack: HTML5, CSS3, and JavaScript (ES6+).

## 💻 The Process

My journey with this project began after I built a solid foundation in `HTML5` and `CSS3`. Transitioning to `JavaScript` was the next natural step in my learning path.
Fundamental Practice: Before starting this app, I completed a series of JavaScript exercises to master core language concepts. You can view those exercises in my dedicated repository: https://github.com/mamartam/js.git.
Design & Planning: I believe that a good developer should also have an eye for UI/UX. Instead of building a plain interface, I sourced a professional design from the Figma community to guide my styling.
Credit: https://www.figma.com/community/file/1348652218299666548/todo-app.
Development Workflow:
- Structure: First, I drafted the semantic HTML layout.
- Styling: I then implemented the CSS, focusing on a modern dark-themed aesthetic and responsive design.
- Logic: Finally, I breathed life into the app using `Vanilla JavaScript`, focusing on `DOM manipulation`, `event listeners`, and state management (counters).
- Deployment: Once the core functionality was stable, I pushed the project to `GitHub` for version control and sharing.

## 📚 What I Learned
Here are the key technical concepts I mastered:
- DOM Manipulation: I learned how to dynamically create, modify, and remove HTML elements using `document.createElement`, `appendChild`, and `remove()`.
- The `DRY` (Don't Repeat Yourself) Principle: Initially, my code had repetitive logic for updating task counts. I successfully refactored this into a reusable `counter() function`, making the codebase more modular and easier to maintain.
- Event Handling for Dynamic Elements: I practiced attaching event listeners (`click events`) to buttons (Tick/Delete) at the exact moment they are created in the `DOM`, ensuring full interactivity for every new task.
- Data Sanitization: I implemented the `.trim()` method to handle user input, preventing the creation of empty tasks and ensuring a cleaner data flow.
- State Synchronization: I gained experience in managing the "state" of the UI — ensuring that when a task moves from the "To-Do" list to the "Done" list, the counters and the DOM update simultaneously and accurately.


## 🚀 How It Can Be Improved?
While the application is fully functional, there are several features I plan to implement to improve the user experience and expand its capabilities:

- Persistent Storage (localStorage): Currently, tasks are lost upon refreshing the page. Integrating localStorage will allow users to save their data locally in the browser so that their to-do list remains available across sessions.
- Keyboard Accessibility: Adding an event listener for the "Enter" key will allow users to add tasks more quickly without having to click the button every time.
- Task Editing: Implementing an "Edit" feature so users can correct typos or update task descriptions without deleting and recreating them.
- Drag-and-Drop Functionality: Allowing users to reorder tasks manually to prioritize their daily goals.
- Task Filtering: Adding buttons to filter tasks by status (e.g., "All," "Active," and "Completed") for better organization.
- Animations and Transitions: Using CSS animations or a JavaScript library to make adding and removing tasks feel smoother and more interactive.
- Dark/Light Mode Toggle: Adding a theme switcher to allow users to choose their preferred visual style.

## 🍿 Video
https://github.com/user-attachments/assets/a2763a70-9fb7-4b63-a196-846dce3b35bb
