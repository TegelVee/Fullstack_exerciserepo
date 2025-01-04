Here is the sequence diagram (https://studies.cs.helsinki.fi/exampleapp/notes):

```mermaid
sequenceDiagram
  participant browser
  participant server
  Note over browser: I write a new note "matkalla" in the note field and press the save button.
  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
  activate server
  Note over server: Status code: 302 Found
  server-->>browser: server asks the browser to go again to the note webpage
  deactivate server
  
  activate browser
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
  deactivate browser
  activate server
  server-->>browser: The html document
  deactivate server

  activate browser
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
  deactivate browser
  activate server
  server-->>browser: The CSS file
  deactivate server

  activate browser
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
  deactivate browser
  activate server
  server-->>browser: The JavaScript file
  deactivate server

  activate browser
  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  deactivate browser
  activate server
  server-->>browser: [{"content": "8","date": "2025-01-02T00:04:15.729Z"},...
  deactivate server
  activate browser
  Note over browser: The browser renders the notes.

```
