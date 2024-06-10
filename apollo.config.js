module.exports = {
  client: {
    includes: ['./apps/frontend/**/*.ts', './apps/frontend/**/*.tsx'],
    excludes: ['**/__generated__/**'],
    service: {
      name: 'codedang-graphql-app',
      url: 'https://stage.codedang.com/graphql'
    }
  }
}
