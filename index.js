import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

console.log('Starting the application...');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed. To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'badges',
    message: 'If you used a badge, provide the link here.',
  },
  {
    type: 'input',
    name: 'features',
    message: 'If your project has a lot of features, list them here.',
  },
  {
    type: 'input',
    name: 'howToContribute',
    message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'If you have any questions, please feel free to reach out to me at GitHub',
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md created!')
  );
}

function init() {
  console.log('Initializing the application...');
  inquirer.prompt(questions).then((answers) => {
    console.log('Answers received:', answers);
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

init();
