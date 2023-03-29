## 1. What is the difference between Component and PureComponent? give an example where it might break my app.

The main difference between a Component and a PureComponent in React is that PureComponent implements shouldComponentUpdate with a shallow prop and state comparison. This helps avoid unnecessary re-renders when the props or state haven't changed. It might break your app if you have nested objects in your state or props because a shallow comparison might not catch changes in nested properties.

For example:

    import React, { PureComponent } from 'react';

    class ListItem extends PureComponent {
      render() {
        return (
          <div>
            {this.props.data.name}: {this.props.data.value}
          </div>
        );
      }
    }

    class App extends React.Component {
      state = {
        item: { name: 'Item 1', value: 1 },
      };

      handleClick = () => {
        const newItem = { ...this.state.item };
        newItem.value += 1;
        this.setState({ item: newItem });
      };

      render() {
        return (
          <div>
            <ListItem data={this.state.item} />
            <button onClick={this.handleClick}>Update Value</button>
          </div>
        );
      }
    }

    export default App;

In this example, the `ListItem` component is a `PureComponent`, and the `App` component holds the state for an item. When the "Update Value" button is clicked, the `handleClick` method creates a new item object with the updated value, and updates the state. However, because the `ListItem` component is a `PureComponent`, it will not re-render because it performs a shallow comparison of its props. The `data` prop is still an object, so the comparison returns `true`, and the component doesn't re-render, even though the content of the object has changed.

To fix this issue, you could either switch from using a `PureComponent` to a regular `Component`, or you could ensure that the props passed to the `PureComponent` always have a different reference when they change. In this case, you could pass individual properties instead of the whole object as props:

    // Inside the App component's render method
    <ListItem name={this.state.item.name} value={this.state.item.value} />

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

Using Context with shouldComponentUpdate can be dangerous because, if the component skips the update due to the implementation of shouldComponentUpdate, it might not receive the updated context value. This can cause the component to render stale data.

## 3. Describe 3 ways to pass information from a component to its PARENT.

Three ways to pass information from a component to its parent are:

1.  **Callback functions:** Pass a function from the parent to the child
    as a prop, which the child can call with updated data.
2.  **Controlled components:** Make the parent manage the state and pass
    it down to the child component as a prop, along with a callback to
    update the state.
3.  **Custom events:** Emit custom events from the child component and
    listen to them in the parent component.

## 4. Give 2 ways to prevent components from re-rendering.

Two ways to prevent components from re-rendering are:

1.  Using shouldComponentUpdate or React.memo to control when the
    component should update based on changes in props or state.
2.  Using React.PureComponent for class components or React.memo for
    functional components, which implement shallow comparisons to
    prevent unnecessary re-renders.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a lightweight, wrapper-less element that can be used to group elements without adding extra nodes to the DOM. It is needed when you want to return multiple elements from a component without introducing an additional wrapper element. It might break your app if you are expecting a single root element for a component or if you need to apply styling to the wrapper element.

## 6. Give 3 examples of the HOC pattern.

Three examples of the Higher-Order Component (HOC) pattern are:

1.  Redux's connect function, which connects a React component to a
    Redux store.
2.  React Router's withRouter HOC, which provides routing-related props
    to a component.
3.  A custom HOC for handling authentication and authorization, which
    could wrap a component and redirect unauthenticated users.

## 7. what's the difference in handling exceptions in promises, callbacks and async...await.

The difference in handling exceptions in promises, callbacks, and async-await:

1.  **Promises:** Use catch method or pass a second function to then for
    error handling.
2.  **Callbacks:** Typically, the first argument in a callback is
    reserved for errors; check for errors and handle them accordingly.
3.  **Async-await:** Use try-catch blocks to handle exceptions in
    async-await functions.

## 8. How many arguments does setState take and why is it async.

setState takes two arguments: an updater function or an object with the new state and an optional callback function to be executed after the state is updated. It is async because React batches state updates for performance optimization and to avoid inconsistencies in the DOM.

## 9. List the steps needed to migrate a Class to Function Component.

Steps to migrate a Class to Function Component:

1.  Replace the constructor with the useState hook for managing
    state.
2.  Replace lifecycle methods with appropriate hooks: useEffect for
    side effects, useMemo for memoization, and useCallback for memoizing
    functions.
3.  Update the usage of this for props, state, and methods.

## 10. List a few ways styles can be used with components.

There are several ways to apply styles to components in React:

**a. Inline styles:** You can use the style prop to apply inline styles to a component. This method uses JavaScript objects to define the styles.

    const myStyle = {
        color: 'blue',
        fontSize: '14px',
    };

    <div style={myStyle}>Hello, World!</div>

**b. CSS classes:** You can create a separate CSS file and use the className prop to apply CSS classes to your components.

styles.css:

    .my-style {
        color: blue;
        font-size: 14px;
    }

MyComponent.js:

    import './styles.css';
    <div className="my-style">Hello, World!</div>

**c. CSS Modules:** You can create a CSS file that exports CSS classes as JavaScript objects. This method helps to avoid global namespace conflicts by generating unique class names.

styles.module.css:

    .myStyle {
        color: blue;
        font-size: 14px;
    }

MyComponent.js:

    import styles from './styles.module.css';
    <div className={styles.myStyle}>Hello, World!</div>

**d. Styled-components:** You can use the styled-components library to create components with styles attached to them.

    import styled from 'styled-components';

    const StyledDiv = styled.div`
        color: blue;
        font-size: 14px;
    `;

    <StyledDiv>Hello, World!</StyledDiv>

**e. Emotion:** Similar to styled-components, the @emotion/react library allows you to create styled components.

    import { css } from '@emotion/react';

    const myStyle = css`
        color: blue;
        font-size: 14px;
    `;

    <div css={myStyle}>Hello, World!</div>

## 11. How to render an HTML string coming from the server.

To render an HTML string coming from the server, you can use the dangerouslySetInnerHTML prop. This prop takes an object with the \_\_html key containing the HTML string. However, be cautious when using this approach, as it may expose your application to cross-site scripting (XSS) attacks if the HTML string contains malicious code.

    const htmlString = '<div><strong>Hello, World!</strong></div>';

    function MyComponent() {
        return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
    }

Make sure to sanitize the HTML string before rendering it to prevent security vulnerabilities. You can use libraries like DOMPurify or sanitize-html to sanitize the HTML content.
