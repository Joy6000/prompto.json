# Prompto
The Solution to JSON Generation!<br>
Prompto allows you to create questions to ask a CLI or otherwise user. An Output path, and other config items for your CLI or Application.
# Installation
## NPM
```
npm install -g prompto.json
```

# Usage
It's super simple!
First, you declare a new instance of Prompto, and set some options.
```js
const { Prompto, PromptoComponentTypes } = require('prompto');

let prompto = new Prompto({
    showPreview: true, // Shows a preview of the JSON that was created. Default false.
    fileName: "Output", // The output file name will be "Output.json"
    outputPath: "/outputs/", // Starts at the root of your project, regardless of whichever directory this code get's executed in.
    response: "JSON File created!" // A Response that will be shown after the questions have been answered. Such as "JSON File created!"
})
```

Cool, now let's add some Questions. This can be done with `.addComponents`, which takes an array of Objects.

```js
const { Prompto, PromptoComponentTypes } = require('prompto');

let prompto = new Prompto({
    showPreview: Boolean, // Shows a preview of the JSON that was created
    fileName: "Output", // The output file name will be "Output.json"
    outputPath: "/outputs/", // Starts at the root of your project, regardless of whichever directory this code get's executed in.
    response: "JSON File created!" // A Response that will be shown after the questions have been answered. Such as "JSON File created!"
})

prompto.addComponents([
    {
        name: "Name: ", // Name of the question. Will be converted to snake_case in json. All Lowercase.
        type: PromptoComponentTypes.String // The type of input, string or array for now.
    },
    {
        name: "Likes: ", // "likes"
        type: PromptoComponentTypes.Array, // If you want to customize what splits the input string into the array, simply specify it.
        split: PromptoComponentTypes.ArraySplitTypes.Comma // Splits at commas. This is the default so if you want to split at commas you are free to leave this blank.
    },
    {
        name: "Valid Names: ", // "valid_names"
        type: PromptoComponentTypes.Array,
        split: PromptoComponentTypes.ArraySplitTypes.Space // Will split at spaces.
    }
])
```

Awesome. <br>
"But wait, I ran the file and nothing happened!"<br>
Simple, we haven't even *ran it yet.*<br>
Run it by calling the .run() function, which takes no params.
```js
prompto.run()
```
And there we go! <br>
Once the questions are answered, it will show you a preview of the JSON and the file will be created at /outputs/Output.json<br>
If you want to look at some other examples, you can find them [here.](https://github.com/Joy6000/prompto.json/tree/master/test)

# Dependencies 
#### fs
