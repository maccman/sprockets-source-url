eval("window.program = function(){\n  alert('Long live the Programs!');\n\n  throw new Error('Here is a stack trace');\n};\n" + "\n//@ sourceURL=modules/program");
eval("window.user = function(){\n  alert('Long live the Users');\n  window.program();\n};\n" + "\n//@ sourceURL=modules/user");
eval("\nvar self = 'application.js';\n" + "\n//@ sourceURL=application");
