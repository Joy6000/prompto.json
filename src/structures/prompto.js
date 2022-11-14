const run = require("../functions/run.js")
 class Prompto {
    constructor(options = {
        showPreview: Boolean | false,
        outputPath: String | "",
        fileName: String | "output",
        response: String | "Successfully created JSON file!",
        components: Array | []
    }) {
        this.showPreview = options.showPreview
        this.fileName = options.fileName
        this.outputPath = options.outputPath
        this.components = []
        this.response = options.response
    }

     /**
      *
      * @param arr: Array<{ name: string, type: number }>
      * You may use Enumerations for type
      */

    addComponents(arr) {
        for (const item of arr) {
            if (typeof item.name !== 'string') {
                throw new TypeError("Invalid 'name' provided. Must provide a string")
            }
            if (typeof item.type !== 'number') {
                throw new TypeError("Invalid 'type' provided. Must provide a number or Enumeration.")
            }
            this.components.push(item)
        }
    }

    async run() {
        if (!this.outputPath) {
            this.outputPath = ""
            console.warn("Invalid output path received. Default to root.")
        }
        if(!this.fileName) {
            this.fileName = "output"
        }
        await run(this)
    }
}

module.exports = Prompto;