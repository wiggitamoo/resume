[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

# Andre Henriques Resume

Andre Henriques' resume is an Angular 6 PWA powered by Firebase. It displays a profile about Andre, his experience and interests.

## Features

- Angular 6.x
- 100 PWA Lighthouse Score with NGSW
- Firebase Auth, Storage, and Cloud Firestore


## Usage

1. Run

- `npm install`

2. Create a project at https://firebase.google.com/ and grab your web config:

![](https://angularfirebase.com/wp-content/uploads/2017/04/firebase-dev-prod-credentials.png)

3. Add the config to your Angular environment

#### src/environments/environment.ts
```typescript
export const environment = {
    production: false,
    firebase: {
        apiKey: 'APIKEY',
        authDomain: 'DEV-APP.firebaseapp.com',
        databaseURL: 'https://DEV-APP.firebaseio.com',
        projectId: 'DEV-APP',
        storageBucket: 'DEV-APP.appspot.com',
        messagingSenderId: '123456789'
    }
};
```

4. Develop with `ng serve`

5. When ready to host run `firebase deploy`
