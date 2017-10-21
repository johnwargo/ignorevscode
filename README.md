# Ignore Visual Studio Code (ignorevscode)

A simple Node module that updates a folder's `.gitignore` file, adding the Visual Studio Code files (`.vscode/` and `.code-workspace`). I created this to make it easier to add those values to a project's `.gitignore` file.

To install the module, open a terminal window and execute the following command:

	npm install -g ignorevscode

to invoke the module, open a terminal window, navigate to a project folder and execute the following command:

	ignorevscode

The module will update the console as it works: 

	File: D:\dev\node\ignorevscode\.gitignore
	Status: File exists and is writable
	Adding: .code-workspace
	Adding: .vscode/
	Result:  File saved!

It will fail, and exit if there's no .gitignore file in the current folder. Yes, I know I could make one if its not there already, but I didn't. OK?

***

If you find this code useful, and feel like thanking me for providing it, please consider making a purchase from [my Amazon Wish List](https://amzn.com/w/1WI6AAUKPT5P9). You can find information on many different topics on my [personal blog](http://www.johnwargo.com). Learn about all of my publications at [John Wargo Books](http://www.johnwargobooks.com). 