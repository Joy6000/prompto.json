const PromptoComponentTypes = require("../enums/enums");
module.exports = async function run(data) {
    const readline = require("readline")
    const fs = require("fs")

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });



    const askQuestion = (theQuestion) => {
        return new Promise((resolve, reject) => {
            try {
                rl.question(theQuestion, theAnswer => resolve(theAnswer));
            } catch {
                reject("No Answer");
            }
        })
    }

    async function start() {
        let answers = [];
        let toPush;
        for (const component of data.components) {
            let q = await askQuestion(component.name)
            if (component.type === PromptoComponentTypes.Array) {
                q = q.trim();
                if (!component.split) component.split = PromptoComponentTypes.ArraySplitTypes.Comma

                q = q.split(component.split)
                q = q.map(element => {
                    return element.trim();
                })
            }
            toPush = {
                name: component.name.slice(0, -2).replace(' ', '_').toLowerCase(),
                res: q
            }
            answers.push(toPush);
        }

        rl.close();
        console.clear()

        let json = {};
        for (const item of answers) {
            json[item.name] = item.res
        }
        let dt = JSON.stringify(json, null, 2)

        fs.writeFile(`${data.outputPath}${data.fileName.endsWith(".json") ? data.fileName : data.fileName + '.json'}`, dt, function(err) {
            if (err) throw err;
            if (data.response) {
                console.log(data.response)
            }
            if (data.showPreview) {
                console.log(`JSON Preview: \n`, dt)
            }
        });

    }

    await start();
}
