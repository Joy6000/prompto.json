# [Output JSON]()

# Code Used: 
```js
const { Prompto, PromptoComponentTypes } = require(prompto)

let prompt = new Prompto({
    showPreview: false,
    fileName: "secondTest.json",
    outputPath: "test/output/",
    response: "JSON File Created!"
});

    prompt.addComponents([
        {
            name: "Output Path: ",
            type: PromptoComponentTypes.String
        },
        {
            name: "Valid Names: ",
            type: PromptoComponentTypes.Array,
            split: PromptoComponentTypes.ArraySplitTypes.Space
        }
    ])

    prompt.run().then(r => r)
```

# Questions: 
```
    Output Path: C:\Users\Bob\Documents\Outputs\Prompto
    Valid Names: Some Different Names Separated By A Space
```