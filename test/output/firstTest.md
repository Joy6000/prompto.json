# [Output JSON](https://github.com/Joy6000/prompto.json/blob/master/test/output/firstTest.json)

# Code Used:

```js
const { Prompto, PromptoComponentTypes } = require("prompto")

let prompt = new Prompto({
    showPreview: true,
    fileName: "firstTest.json",
    outputPath: "test/output/"
});

    prompt.addComponents([
        {
            name: "Name: ",
            type: PromptoComponentTypes.String
        },
        {
            name: "Likes: ",
            type: PromptoComponentTypes.Array,
            split: PromptoComponentTypes.ArraySplitTypes.Comma
        }
    ])

    prompt.run().then(r => r)
```

# Questions: 
```
    Name: Joy6000
    Likes: Coding, Cooking
```