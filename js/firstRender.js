const tutorials = [
  {
    title: 'Shallow or Deep Copy?',
    description:
      'I explain what happens when you shallow copy a reference and the potential bugs that may arise.',
    buttonId: 'shallowOrDeepCopyBtn',
  },
  {
    title: 'How to think when creating a deep copy function?',
    description:
      "<code>StructuredClone()</code> has been available since ECMAScript 2021, but here's a logical exercise to write a deep copy function that works regardless of nested references",
    buttonId: 'deepCopyBtn',
  },
  {
    title: 'Typescript Generic Explanation',
    description:
      'A simple way to understand generics and an example of usage with different syntaxes.',
    buttonId: 'genericsBtn',
  },
];

const tutorialsContainer = document.querySelector('#tutorials ul');

tutorials.forEach(
  e =>
    (tutorialsContainer.innerHTML += `
        <li>
          <div>
            <h3>${e.title}</h3>
            <h4>${e.description}</h4>
          </div>
          <button id="${e.buttonId}">check it!</button>
        </li>
      `)
);
