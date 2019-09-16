#### React - Redux
1. npm i redux react-redux redux-thunk
2. import react-component <Provider /> from "react-redux"
3. Wrap everythink with inside of provider component
4. Proveder takes props store={store}. Add it
5. Need to create Store:
    5.1 import { createStore, applyMiddleware } from 'redux';


  ```javascript
    const store = createStore( () => [], {}, applyMiddleware )
    ```

    5.2 Create another separated file Store.js. Move import { createStore, applyMiddleware } and thunk, (rootReducer from reducers/index.js after 7 point).

6. Create :
```javascript
    const initialState = {};
    const middleware = [thunk];
    const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

    export store;
```
7. Make folder reducers, add new file index.js ()
<!-- 
Headers
# H1
## H2
### H3
#### H4
##### H5
###### H6

list
* Unordered list can use asterisks
- Or minuses
+ Or pluses

links
[I'm an inline-style link](https://www.google.com)

Code
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
``
 -->

