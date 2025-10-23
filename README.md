### Cypress cy.prompt Demo

A demonstration project showing the usage of Cypress with the experimental cy.prompt command for natural language test automation.

### Setup
```
npm install cypress@latest
```

### Confirm Cypress version 15.4 or newer is installed
```
npx cypress version
```


### Configurations

The project uses cypress.config.js with:

1. Experimental prompt command enabled
   ```
   experimentalPromptCommand: true
   ```

3. Project ID configured for Cypress Cloud

### Features

1. Natural language test writing using cy.prompt
2. Demo tests for http://eaapp.somee.com/
   
    User registration flow
   
    Login and employee table verification
4. Auto-generated test credentials in support/e2e.js
5. Example tests showcasing Cypress best practices

### Running Tests
```
# Open Cypress Test Runner
npx cypress open
```

```
# Run tests headlessly
npx cypress run
```

### Key Files

cypromptDemo.cy.js - Main demo test file

support/e2e.js - Test configuration and utilities

### Run Result

<img width="1680" height="981" alt="Screenshot 2025-10-23 at 7 37 46 pm" src="https://github.com/user-attachments/assets/cab87c92-00ee-413f-9071-71dd9cca5ed2" />
 <br> 
<br/>
 
For more details about cy.prompt, visit 

https://docs.cypress.io/api/commands/prompt?utm_source=blog&utm_medium=cyconf&utm_campaign=cyprompt_launch
