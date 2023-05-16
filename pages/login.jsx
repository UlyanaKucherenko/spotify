import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => {
  return (
    <div>
      <h2>Login Page</h2>
      { providers && Object.values(providers).map((provider) => (
        <div key={ provider.name }>
          <button onClick={ () => {
            signIn(provider.id, { callbackUrl: '/' });
          } }>Login with { provider.name }</button>
        </div>
      )) }
    </div>
  );
};
export default Login;

export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

