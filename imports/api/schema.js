const typeDefinitions = `
  type User{
    name: String,
    studentInClasses: [Class]
  }
  type Class{
    name: String,
    students: [User]
  }
  type Query {
    user: User,
    users: [User],
    classes: [Class]
  }

  schema {
    query: Query
  }
`;

export default [typeDefinitions];
