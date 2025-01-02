Here is the sequence diagram (https://studies.cs.helsinki.fi/exampleapp/notes):

```mermaid
sequenceDiagram
  participant browser
  participant server
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  activate server
  server-->>browser: Html document
  deactivate server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes/main.css
  activate server
  server-->browser: The CSS file

```
