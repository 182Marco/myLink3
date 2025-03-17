const tutorials = [
  {
    title: 'Shallow or Deep Copy?',
    description:
      'I explain what happens when you shallow copy a reference and the potential bugs that may arise.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7172495074285469697/',
  },
  {
    title: 'How to think when creating a deep copy function?',
    description:
      "<code>StructuredClone()</code> has been available since ECMAScript 2021, but here's a logical exercise to write a deep copy function that works regardless of nested references.",
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7174874211486711808/',
  },
  {
    title: 'Typescript Generic Explanation',
    description:
      'A simple way to understand generics and an example of usage with different syntaxes.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7177355303410167810/',
  },
  {
    title: 'Spread props on a React Functional Component',
    description:
      'I show how to use the rest operator to isolate props (e.g., button props in a modal) and spread them onto components.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7169996639141670912/',
  },
  {
    title: 'Streamline Your Imports: The Power of Barrel Imports',
    description:
      'I show how barrel imports simplify module management by consolidating exports into a single file, improving code organization and readability.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7169996639141670912/',
  },
  {
    title: 'Decouple Logic from UI: Mastering Custom Hooks in React',
    description:
      'I show how custom hooks in React help separate logic from JSX/TSX templates, improving code reusability and maintainability.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7164705355015430147/',
  },
];

const tutorialsContainer = document.querySelector('#tutorials ul');

tutorials.forEach(e => {
  tutorialsContainer.innerHTML += `
    <li>
      <div>
        <h3>${e.title}</h3>
        <h4>${e.description}</h4>
      </div>
      <button onclick="window.open('${e.link}', '_blank')">Check it!</button>
    </li>
  `;
});
