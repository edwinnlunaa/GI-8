This JavaScript code demonstrates the use of prototype chain and prototypal inheritance to create constructors and methods for a Person and Programmer. The Person constructor creates basic properties like name, job, and age, with methods for exercising and fetching job information. The Programmer constructor inherits from Person and extends it with additional properties and methods specific to programmers, such as managing tasks, learning languages, and offering new tasks.

How it works :

Person Constructor-
The Person constructor creates instances with properties name, job, and age.
The exercise method logs a message indicating that running is not fun.
The fetchJob method logs the person's name and job.

Programmer Constructor (Inherits from Person)-
The Programmer constructor inherits properties and methods from Person and extends it with languages and busy properties.
Methods completeTask, acceptNewTask, and offerNewTask manage the programmer's task status.
learnLanguage and listLanguages methods allow the programmer to learn and list programming languages they know.




Why It Works:

Prototype Chain: By using prototype chain, instances of Programmer have access to methods defined in the Person constructor, facilitating code reuse and maintaining a clean inheritance structure.
Prototypal Inheritance: The Programmer constructor inherits properties and methods from Person, allowing programmers to inherit basic functionalities while adding specialized behavior.
Encapsulation: The use of constructors and methods encapsulates data and behavior within objects, promoting code organization and reusability.


Side Note: Yall really made me Janitor hahaha.