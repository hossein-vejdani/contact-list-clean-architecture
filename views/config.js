const fs = require('fs')

function changeLine(props) {
    const data = fs.readFileSync(props.path, 'utf-8')
    const array = data.split('\n')
    const value = array[props.lineToRemove.index - 1].trim()

    if (value === props.lineToRemove.value) {
        if (props.replace) array.splice(props.lineToRemove.index - 1, 1, props.replace)
        else array.splice(props.lineToRemove.index - 1, 1)
        const newData = array.join('\n')
        fs.writeFileSync(props.path, newData, 'utf-8')
    }
}

changeLine({
    path: 'node_modules/react-scripts/config/webpack.config.js',
    lineToRemove: { index: 418, value: 'include: paths.appSrc,' },
    replace: "include: path.join(paths.appPath, '..'),"
})
