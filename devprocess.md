# My small to medium web development project process

## Boilerplate

1. Copy project boilerplate
2. Initialize npm in project

`npm init`

3. Initialize git if not already initialized

`git init`

4. Touch ".gitignore" and ignore these folders

```
printf '/node_modules\n/design' > .gitignore
```

5. Do these commands for packages

```
npm i -D eslint eslint-config-prettier webpack webpack-cli postcss postcss-cli postcss-scss postcss-sorting
```

## Post-CSS

6. Create postcss.config.js
7. Add this

```
module.exports = {
  plugins: [
    require('postcss-scss'),
    require('postcss-sorting')({
      order: [
        'custom-properties',
        'dollar-variables',
        'at-rules',
        'declarations',
        'rules',
      ],
      'properties-order': 'alphabetical',
    }),
  ],
};
```

## ESLINT

6. Do `npx eslint --init`
7. Add this .eslintrc.json extends array

```
["prettier"]
```

## WEBPACK

8. Create webpack.config.js
9. Add this to webpack.config.js

```
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
```

10. Add this script to package.json

```
"watch": "webpack --progress --watch",
"build": "webpack"
```
