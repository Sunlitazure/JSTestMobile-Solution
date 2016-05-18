# Overstock Mobile Front End Dev. Candidate Assessment

## Instructions

This assessment consists of two parts. The first part is writing correct Javascript implementations for a few small functions. Unit test(s) for these implementations are provided. Once the implementations have been written correctly, all tests will pass.

The second part consists of writing proper unit tests for existing implementations. All aspects of the method need to be tested.

Feel free to poke around, but the files you'll be editing are:

* src/test-module.js
* test/spec/test-module-test.js
* src/implementation-module.js
* test/spec/implementation-module-test.js

You will be cloning a GitHub repository and running a Grunt task to test code as you write it. Having Node.js installed is required to run the tests. (Directions on how to install Node.js for various systems are available in the Resources section of this readme)

When you are finished, commit your changes and push them to your own GitHub account\*. Please reply to the email that sent you this link, with a short message letting us know that you've finished.

\*If you do not have a GitHub, Bitbucket or similar public source code repository, you may delete the node\_modules directory, and zip the entire project folder up and send it via email.

### Clone the repository
    git clone https://github.com/overstock/JSTestMobile

### Install the dependencies
In the root directory of the project you've just cloned, run:

    npm install

Depending on your node install, you may have to have administrative/root permissions to run this command. Sometimes running.

    sudo npm install

and then entering your password is all that is required.

### Install a system-wide Grunt command
    npm install grunt-cli -g

**Note:** Again, depending on your setup, `sudo` may be required to run `npm install`.

### Run the Grunt task
Grunt is a task running utility. We've set up a minimal task to watch the /src and /test/spec directories. It will re-run the tests whenever you save a file (either tests or implementations). You will need to keep a terminal open and the grunt task running to receive continuous feedback.

In the root directory of the project, run:

    grunt

#### Rules:
This excercise should not take longer than an hour. If you find an excercise difficult, skip it and come back to it after completing the others. You may use any resource you have available (Google, StackExchange, Phone a friend...) but you must complete the work yourself.

Do not hesitate to ask any questions if you need clarification on any of the problems.

#### Resources:
<http://chaijs.com/api/bdd/> - For help writing test assertions

<http://nodejs.org> - For help setting up node.js

<http://mochajs.org> - for help with Mocha.js

<http://gruntjs.com/> - for help with Grunt
