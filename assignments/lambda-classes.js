

class Person{
    constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    };
    speak(){return `Hello my name is ${this.name}, I am from ${this.location}.`};
};
​
​
​

​


class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    };
    demo(subject){return `Today we are learning about ${subject}.`};
    grade(student, subject){return `${student.name} receives a perfect score on ${subject}!`};
};
​
​

class ProjectManagers extends Instructor{
    constructor(about){
        super(about);
        this.gradClassName = about.gradClassName;
        this.favInstructor = about.favInstructor;
            };
    standUp(slack){return `${this.name} announces to ${slack}, @channel stand up time!`};
    debugsCode(student, subject){return `${this.name} debugs ${student.name}'s code on ${subject}.`};
};
​
​
​

class Student extends Person{
    constructor(list){
        super(list);
        this.previousBackground = list.previousBackground;
        this.className = list.className;
        this.favSubjects = list.favSubjects;
    };
    listsSubjects(){return `${student.favSubjects}`};
    PRAssignment(subject){return `${student.name} has submitted a PR for ${subject}`};
    sprintChallenge(subject){return `${student.name} has begun sprint challenge on ${subject}.`};
};

const Billy = new Student({
    name: Billy,
    age:27,
    location:'Arkansas',
    previousBackground: "electrician",
    className: 'WEB45',
    favSubjects: ['Node', 'React', 'JS']

});

const Joey = new Student({
    name: 'Joey',
    age:32,
    location:'Indiana',
    previousBackground: "server",
    className: 'WEB32',
    favSubjects: ['CSS', 'React', 'HTML']

});

const Sue = new Instructor({
    name: 'Sue',
    age:40,
    location:'Texas',
    specialty: "React",
    favLanguage: 'JS',
    catchPhrase: 'Never give up.'

});

const Devin = new Instructor({
    name: 'Devin',
    age:32,
    location:'California',
    specialty: "JS",
    favLanguage: 'Node',
    catchPhrase: 'Just do it.'

});

const Donald = new ProjectManagers({
    name: 'Donald',
    age:45,
    location:'Canada',
    gradClassName: "WEB10",
    favInstructor: 'Sue'
    });

const Jimbo = new ProjectManagers({
    name: 'Donald',
    age:26,
    location:'Mexico',
    gradClassName: "WEB20",
    favInstructor: 'Devin',
               
});  

console.log(Jimbo.debugsCode(Joey, JS))



/*
Stretch Problem
* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
* Add a graduate method to a student.
    - This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
    - If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/