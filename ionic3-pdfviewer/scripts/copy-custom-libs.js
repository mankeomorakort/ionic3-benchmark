// Added custom script

// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
  copyCustomScript: {
    src: ['{{ROOT}}/"node_modules/jspdf/dist/jspdf.min.js"'],
    dest: '{{WWW}}/assets'
  }
}
