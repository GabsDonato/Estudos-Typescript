import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <h1>Faça o login</h1>
      <label htmlFor='emailInput' >
        Email
      </label>
      <input id='emailInput' type='email' />

      <label htmlFor='passwordInput'>
        Senha
      </label>
      <input id='passwordInput' type='password'/>
      <button>
        EntrarS
      </button>
    </Layout>
  );
}

export default App;
