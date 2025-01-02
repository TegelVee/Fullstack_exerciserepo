Here is the sequence diagram (https://studies.cs.helsinki.fi/exampleapp/notes):

```mermaid
sequenceDiagram
  participant browser
  participant server
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  activate server
  server->>browser: Html-document
  deactivate server

```
