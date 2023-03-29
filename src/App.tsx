import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from './App.styled';
import './index.css';
import { Dashboard } from './pages/Dashboard';
import { store } from './store/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => (
  <AppContainer>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </I18nextProvider>
  </AppContainer>
);
ReactDOM.render(<App />, document.getElementById('app'));
