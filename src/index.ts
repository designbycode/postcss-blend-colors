const chroma = require("chroma-js")
const mixColors = require("./mixColors")


export function getRegex(): RegExp {
    return /mix\((rgba?\([^)]*\)|hsla?\([^)]*\)|#[0-9a-fA-F]{3,8}|[a-z]+),\s*(rgba?\([^)]*\)|hsla?\([^)]*\)|#[0-9a-fA-F]{3,8}|[a-z]+)(?:,\s*([\d.]+)(?:%|\b))?\)/g
}

export function mixMatches(value: any): RegExpMatchArray | null {
    return getRegex().exec(value)
}

export function replaceMatches(value: any, matches: any) {
    const color1 = matches[1].trim()
    const color2 = matches[2].trim()
    const ratio = parseFloat(matches[3])
    const blendedColor = mixColors(color1, color2, ratio)
    return value.replace(matches[0], chroma(blendedColor).hex("rgb"))
}


/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = () => {
    return {
        postcssPlugin: "postcss-blend-colors",
        Root(root:  { walkDecls: (arg0: (decl: any) => void) => void; } ) {
            root.walkDecls(function (decl) {
                if (decl.value.includes("mix(")) {
                    const matches = mixMatches(decl.value)
                    if (matches) {
                        decl.value = replaceMatches(decl.value, matches)
                    }
                }
            })
        },
    }
}

module.exports.postcss = true