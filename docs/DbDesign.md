# Database Design

## UserInfo Collection (users)

```
{
  _id: string, // ID.
  username: string, // Length must greater than or equals 4, and less than or equal 16.
  password: string // Need encrypt.
}
```

## Code Project Collection (projects)

```
{
  _id: string, // ID.
  codeId: string, // ShordId.
  userId: string, // creator
  projectName: string, // name
  projectDescription：string,
  projectTags: string, // tags for project
  files: { // all file infos
    'index.js': string, // js content
    'index.html': string, // html content
    'index.css': string // css content
    ... // support more files(maybe)
  }
}
```