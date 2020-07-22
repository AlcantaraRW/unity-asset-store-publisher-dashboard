# Unity Asset Store Publisher Dashboard

### What is the app about?

Unity Asset Store Publisher Dashboard aims to simplify the visualization of important data to Asset publishers, such as sales, packages and reviews.

### How does this app access my data?

When an Asset publisher logs into Unity Asset Store, it stores Cookies on the browser to identify the publisher in each and every API request.
Simulating this behavior the app has an embedded WebView, in which the user Cookies are stored. The cookies are captured and stored on your device local storage and used on requests from this moment on. **This app does not store or even have access to your personal password.**

### Roadmap

- Reports and charts about sales;
- Notification about a new sale/review;

### Run it!

- Clone/fork this repository;
- Run `yarn` to install dependencies;
- Run `yarn android` to run the app on an Android device or emulator.
