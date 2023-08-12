import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PageBanner from '../components/Frontend/PageBanner';
import Layout from '../components/common/Layout';
import { loginApi } from '../shared/services/auth';
// import { registerUser } from '../redux/actions';
// import { connect } from 'react-redux';
// import { isEmail, isPassword } from '../shared/utilities'

const SignIn = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [state, setState] = useState({
    emailAddress: '',
    password: '',
    loading: false,
    required: false,
    invalidPassword: false,
  });
  const { loading, required, emailAddress, password } = state;

  const handleChange = (key, value) => {
    setState((pre) => ({ ...pre, [key]: value }));
  };
  const disabled = !emailAddress || !password;

  const handleSignIn = async () => {
    enqueueSnackbar('Login Successfully!', {
      variant: 'success',
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
    });

    history.push('/app/dashboards/default');
    try {
      if (disabled) {
        handleChange('required', true);
        return;
      }
      handleChange('required', false);
      handleChange('loading', true);
      const payload = {
        email: emailAddress,
        password,
      };
      console.log('payload', payload);
      const res = await loginApi(payload);
      if (res) {
        console.log(`response of sign in${JSON.stringify(res)}`);
        if (res.status === 200) {
          // debugger;
          handleChange('loading', false);
          enqueueSnackbar('Login Successfully!', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
            },
          });

          history.push('/app/dashboards/default');
        } else {
          handleChange('loading', false);
          enqueueSnackbar(`Error!${res.message}`, {
            variant: 'error',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
            },
          });
        }
      } else {
        handleChange('loading', false);
        enqueueSnackbar(`Error: ${res.data}`, {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        });
      }
    } catch (error) {
      handleChange('loading', false);
      enqueueSnackbar(`Error: ${error.message}`, {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
        },
      });
    }
  };

  return (
    <Layout>
      <PageBanner pageName="Acceder" />
      <section className="fintex-user-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="user-wrapper text-center">
                <div className="user-content">
                  <h3 className="mb-20">Acceder a tu cuenta</h3>
                  <div
                    // onSubmit={(e) => e.preventDefault()}
                    className="user-form"
                  >
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Nombre de usuario"
                        name="user"
                        value={emailAddress}
                        required=""
                        onChange={(value) =>
                          handleChange('emailAddress', value.target.value)
                        }
                      />
                      <i className="fas fa-user" />
                    </div>
                    <div className="form_group">
                      <input
                        type="password"
                        className="form_control"
                        placeholder="Contraseña"
                        name="password"
                        required=""
                        value={password}
                        onChange={(value) =>
                          handleChange('password', value.target.value)
                        }
                      />
                      <i className="fas fa-lock" />
                    </div>
                    {required && !password && (
                      <div
                        className="ps-3 pt-1 text-left"
                        style={{ color: 'red' }}
                      >
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Password is required !
                        </small>
                      </div>
                    )}
                    <div className="form_group">
                      <button
                        onClick={() => handleSignIn()}
                        className="main-btn btn-red"
                      >
                        Acceder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default SignIn;
