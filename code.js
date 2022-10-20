class varsnum {
  getInfo() {
    return {
      id: 'varsnums', // change this if you make an actual extension!
      name: 'Extra Stuff',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'true'
            }
          }
        },
        {
          opcode: 'runjs',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Run Code:\n[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "return true"
            }
          }
        },
        {
          opcode: 'stackfornothing',
          blockType: Scratch.BlockType.COMMAND,
          text: '[ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Use this with Run Code: ()'
            }
          }
        },
        {
          opcode: 'setoop',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Make a object with contents [ONE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'test: "Hello, world",test2: "hhfhgh"'
            }
          }
        },
        {
          opcode: 'getoop',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get item [ONE] from [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'text'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"text": 5}'
            }
          }
        },
        {
          opcode: 'addoop',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Set value [ONE] on item [TWO] on object [THREE]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '5'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'test'
            },
            THREE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{}'
            },
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE;
  }
  runjs(args) {
    return Function(args.ONE)()
  }
  stackfornothing(args) {
    // Do nothing
  }
  setoop(args) {
    return JSON.stringify(Function("return {"+args.ONE+"}")())
  }
  getoop(args) {
    return JSON.parse(args.TWO)[args.ONE]
  }
  addoop(args) {
    var i = JSON.parse(args.THREE)
    i[args.TWO] = args.ONE
    return JSON.stringify(i)
  }
}
Scratch.extensions.register(new varsnum());