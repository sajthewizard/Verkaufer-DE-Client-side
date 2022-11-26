import React from 'react';

const Blog = () => {
    return (
        <div className='mx-8'>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="text-2xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                        There are several other ways to manage state​s in React, including the use of:


                        1.Hooks
                        2.React Context API
                        3.Apollo Link State
                        4.setState()
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="text-2xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="text-2xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p> Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                        In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
                </div>
            </div><div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="text-2xl collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    React vs. Angular vs. Vue
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.

                        Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

                        One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.

                        With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solution for applications called React-Native.Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.

                        Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.

                        Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</p>
                </div>
            </div>


        </div>
    );
};


export default Blog;