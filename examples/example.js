eval("var element = 1;\n" + "\n//@ sourceURL=/modules/element");
eval("var event = 1;\n" + "\n//@ sourceURL=/modules/event");
eval("var group = 1;\n" + "\n//@ sourceURL=/modules/group");
eval("var another = 1;\n" + "\n//@ sourceURL=/modules/models/another");
eval("window.program = function(){\n  alert('Long live the Programs!');\n\n  throw new Error('Here is a stack trace');\n};\n" + "\n//@ sourceURL=/modules/program");
eval("window.user = function(){\n  alert('Long live the Users');\n  window.program();\n};\n" + "\n//@ sourceURL=/modules/user");
eval("\nvar self = 'application.js';\n" + "\n//@ sourceURL=/application");
