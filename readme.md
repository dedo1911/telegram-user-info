# Telegram User Info 

Obtain Telegram user profile informations from https://t.me Open Graph

## Usage

```javascript
var tgui = require('telegram-user-info');
tgui('dedo1911').then(user => console.log(user))
```

## Example Output

```javascript
{ name: 'Durov\'s Channel',
  bio:
   'This is where I post thoughts about Telegram in a slightly less formal and more direct way than in the official Telegram blog (~70% of which is also written mostly by yours truly). Subscribe only if you\'re a hardcore Telegram fan.',
  image:
   'https://cdn1.telesco.pe/file/S2e6m1zOY732vzuZORh5uTxRTWg02fcB-31THHiucFv08i54tEwF4c4JZm3RzMJN29TbJMSdFxlxQaO-r3OHNs-CUbAEuYltfJMD1Lpm4oHTm6q3ZwP5O2T6dVg8mHBGUNsIJYd-fFxv2nFXQPCdsn6JhkRNku1qH_Wq8ep0eSt3j4gfJMShWCD9jQD4j6bfYHG9JXoTjlHSAf0Ht7gOYr6lArbMc8V-pWJkHeQN2ns4k5XKk1Zadxr8gx8nRqGt6ZalxWHfjsW2921zwFrdykaUD5qVaQ3imY9rmuJgHvxQs-SgF7ESYBtsI7EDv59fwRpPWZOjpxlC2X5Lce3wLQ.jpg' }
```
