(self.webpackChunktypescriptlang_org=self.webpackChunktypescriptlang_org||[]).push([[346],{65:function(e,t,a){"use strict";a.r(t);var n=a(2784),r=a(7480),o=a(2378),l=a(315),i=function(e){(0,l.i)(e.pageContext.lang);return n.createElement(r.A,{title:"Why does TypeScript exist?",description:"",lang:e.pageContext.lang},n.createElement("div",{className:"main-content-block",style:{textAlign:"center"}},n.createElement("p",null,"TypeScript is a language from Microsoft which builds on JavaScript.",n.createElement("br",null),"This post is a non-technical overview of what JavaScript is, how TypeScript extends JavaScript and what problems it solves.")),n.createElement("div",{className:"raised main-content-block"},n.createElement("article",null,n.createElement("h2",null,"What is JavaScript?"),n.createElement("p",null,"Because TypeScript extends JavaScript, this makes it a good starting point. JavaScript is commonly used to create websites. When building a website, you work with three languages: HTML, CSS and JavaScript (JS). Broadly speaking: HTML defines the content which will appear on the page, CSS defines the visual style of the page, and JS defines the interactive behaviors of the page."),n.createElement("p",null,'We describe having these sets of skills as being a "front-end" developer. You use three languages to create pages inside a web browser like Safari, Firefox, Edge or Chrome. Given how popular the web is for commerce and information sharing, there is a massive demand for people who are good at using these three languages.'),n.createElement("p",null,'Related to the role of being a "front-end" developer is the set of skills for the "back-end" developers, which are to create computer services that communicate either to a web browser (by passing it HTML/CSS/JS) or to another service (by sending data more directly.) You don\'t need to use HTML, CSS or JS to write this type of code, but it\'s usually an end-product of your work because it is likely to be presented in a web browser.'),n.createElement("h3",null,"What do Programming Languages do?"),n.createElement("p",null,"Programming languages are a way for humans and computers to communicate. People read code many, many multiples of times more than they write it - so developers create programming languages which are good at solving particular problems with a small amount of code. Here's an example using JavaScript:"),n.createElement("pre",null,n.createElement("code",null,'\nvar name = "Danger"\nconsole.log("Hello, " + name)\n          '.trim())),n.createElement("p",null,"The first line makes a variable (effectively a box you can store other things in) and then the second line outputs text to the console (for example DOS, or the terminal) ",n.createElement("code",null,'"Hello, Danger"'),"."),n.createElement("p",null,"JavaScript is designed to work as a scripting language, which means the code starts at the top of the file and then goes through line by line downwards running that code. To provide some contrast, here is the same behavior in Java, which is built with different language constraints:"),n.createElement("pre",null,n.createElement("code",null,'\nclass Main {\n  public static void main(String[] args) {\n    String name = "Danger";\n    System.out.println("Hello, " + name);\n  }\n}\n'.trim())),n.createElement("p",null,"These two code samples do the same thing, however the Java version comes with a lot of words that aren't necessarily about telling the computer exactly what to do, e.g. ",n.createElement("code",null,"class Main {"),", ",n.createElement("code",null,"public static void main(String[] args) {"),", and two extra ",n.createElement("code",null,"&rbrace;"),"s. It also has semi-colons at the end of some lines. Neither of these programming languages are wrong, Java however, is aimed at building different things from JavaScript, and these extra bits of code make sense within the constraints of building a Java app."),n.createElement("p",null,"To get to the key point though, there is one standout line I'd like us to compare:"),n.createElement("pre",null,n.createElement("code",null,'\n// JavaScript\nvar name = "Danger"\n\n// Java\nString name = "Danger";\n        '.trim())),n.createElement("p",null,"Both of these lines declare variables called ",n.createElement("code",null,"name")," which contain the value ",n.createElement("code",null,'"Danger"'),"."),n.createElement("p",null,"In JavaScript you use the abbreviation ",n.createElement("code",null,"var")," to declare a variable. Meanwhile, in Java you need to say ",n.createElement("em",null,"what kind of data")," the variable contains. In this case the variable contains a ",n.createElement("code",null,"String"),". (A string is a programming term for a collection of characters. They ",n.createElement("code",null,'"look like this"'),". This ",n.createElement("a",{href:"https://www.youtube.com/watch?v=czTWbdwbt7E"},"5m video")," is a good primer if you want to learn more.)"),n.createElement("p",null,"Both of these variables contain a string, but the difference is that in Java the variable can ",n.createElement("em",null,"only")," ever contain a ",n.createElement("em",null,"string"),", because that's what we said when we created the variable. In JS, the variable can change to be ",n.createElement("em",null,"anything"),", like a number, or a list of dates."),n.createElement("p",null,"To illustrate:"),n.createElement("pre",null,n.createElement("code",null,'\n// Before in JS\nvar name = "Danger"\n// Also OK\nvar name = 1\nvar name = false\nvar name = ["2018-02-03", "2019-01-12"]\n\n// Before in Java\nString name = "Danger";\n// Not OK, the code wouldn\'t be accepted by Java\nString name = 1;\nString name = false\nString name = new String[]{"2018-02-03", "2019-01-12"};\n        '.trim())),n.createElement("p",null,"These trade-offs make sense in the context for which these languages were built back in 1995. JavaScript was originally designed to be a small programming language which handled simple interactions on websites. Java on the other hand was built specifically to make complex apps which could run on any computer. They expected to be used to build codebases of different scales, so the language required programmers write different types of code."),n.createElement("p",null,"Java required programmers to be more explicit with the values of their variables because the programs they expected people to build were more complex. While JavaScript opted for ease of reading by omitting information about the specifics, and expected codebases to be significantly smaller."),n.createElement("h3",null,"What is TypeScript?"),n.createElement("p",null,'TypeScript is a programming language - it contains all of JavaScript, and then a bit more. Using our example above, let\'s compare the scripts for "Hello, Danger" in JavaScript vs TypeScript:'),n.createElement("pre",null,n.createElement("code",null,'\n// JavaScript\nvar name = "Danger"\nconsole.log("Hello, " + name)\n\n// TypeScript\nvar name = "Danger"\nconsole.log("Hello, " + name)\n\n// Yep, you\'re not missing something, there\'s no difference\n'.trim())),n.createElement("p",null,"Due to TypeScript's goal of only ",n.createElement("em",null,"extending")," JavaScript, the existing JavaScript code we saw works as TypeScript. The extensions which TypeScript adds to JavaScript are intended to help you be more explicit about what kinds of data are used in your code, a bit like Java."),n.createElement("p",null,"Here is the same sample, but using TypeScript to be more explicit about what the variable is:"),n.createElement("pre",null,n.createElement("code",null,'\nvar name: string = "Danger"\nconsole.log("Hello, " + name)\n'.trim())),n.createElement("p",null,"This extra ",n.createElement("code",null,": string")," allow the reader to be certain that ",n.createElement("code",null,"name")," will only be a string. Annotating your variables in this way also gives TypeScript the chance to verify that these match. This is ",n.createElement("em",null,"very")," useful, because keeping track of changes like the type of value in a variable seems easy when it's one or two, but once it starts hitting the hundreds, that's a lot to keep track of. Writing types help programmers be more confident about their code because types catch mistakes."),n.createElement("p",null,'Simply speaking, we call these annotations "Types". Hence the name ',n.createElement("i",null,"Type"),'Script. One of the tag-lines for TypeScript is "JavaScript which scales" which is a statement that these extra type annotations allows you to work on bigger projects. This is because you can verify up-front how correct your code is. This means you have less need to understand how every change affects the rest of the program.'),n.createElement("p",null,"In the 90s, and maybe until a 5-10 years ago the trade-off for not having types in your JavaScript application was fine because the size and complexities of the programs being built were constrained to just the front-end of websites. Today though, JavaScript is being used almost everywhere, to build almost anything which runs on a computer. A large amount of mobile and desktop apps use JavaScript and web technology under the hood."),n.createElement("p",null,"These are all considerably more complicated to build and understand, adding types drastically reduces the complexity of making improvements to those programs."),n.createElement("h3",null,"What Problems Can TypeScript Solve?"),n.createElement("p",null,"Typically, the need to ensure there are no bugs in your code can be handled by writing automated tests, then by manually verifying that the code works as you expect and finally having another person validate that it seems correct."),n.createElement("p",null,"Not many companies are the size of Microsoft, however a lot of all problems writing JavaScript in large codebases are the same. Many JavaScript apps are made up of hundreds of thousands of files. A single change to one individual file can affect the behaviour of any number of other files, like throwing a pebble into a pond and causing ripples to spread out to the bank."),n.createElement("p",null,"Validating the connections between every part of your project can get time consuming quickly, using a type-checked language like TypeScript can handle that automatically and provide instant feedback during development."),n.createElement("p",null,"These features allows TypeScript to help developers feel more confident in their code, and save considerable amounts time in validating that they have not accidentally broken the project."))))};t.default=function(e){return n.createElement(o.R,{locale:e.pageContext.lang},n.createElement(i,e))}}}]);
//# sourceMappingURL=component---src-templates-pages-why-create-typescript-tsx-b0bfbd0ab4f04f17e74d.js.map