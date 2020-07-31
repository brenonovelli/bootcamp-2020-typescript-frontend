# Passos executados durante o projeto


## Eslint, Prettier e EditorConfig
  ```shell
  $ yarn eslint -D
  ```

  ```js
  /* Remover do package.json */

  "eslintConfig": {
    "extends": "react-app"
  },
  ```
  ```shell
  $ yarn eslint --init`
  ```
  _Instalar sugestões do --init_

  ---

  #### Criar um arquivo para o eslint ignorar certos arquivos
  ```shell
  $ touch .eslintignore
  ```
  _Inserir:_

    **/*.js
    node_modules
    build

  ---

  ### Para o React entender importações TS
  ```shell
  $ yarn add eslint-import-resolver-typescript -D
  ```
  _Inserir no .eslintrc.json_

  ```json
  {
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
  }
  ```

  ---

  ### Prettier

  ```shell
  $ yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
  ```

  ```shell
  $ touch prettier.config.js
  ```

  ```js
  module.exports ={
    singleQuote: true,
    trailing: 'all',
    arrowParens: "avoid",
  }
  ```
___

# Styled
  ```shell
  $ yarn add styled-components
  ```


# Icons
  ```shell
  $ yarn add react-icons
  ```
  ```shell
  $ yarn add polished
  ```


# Unform
  ```shell
  $ yarn add @unform/core @unform/web
  ```

# Yup
  ```shell
  $ yarn add yup
  $ yarn add @types/yup -D
  ```

# Axios
```shell
 yarn add axios
 ```



yarn add uuidv4



# React-Spring
yarn add react-spring

# React Router Dom
yarn add react-router-dom
yarn add @types/react-router-dom -D
