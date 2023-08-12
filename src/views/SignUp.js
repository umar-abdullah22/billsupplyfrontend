import React, { useState } from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import PageBanner from '../components/Frontend/PageBanner';
import Layout from '../components/common/Layout';
import { signupApi } from '../shared/services/auth';
// import { registerUser } from '../redux/actions';
// import { connect } from 'react-redux';
import { isEmail, isPassword } from '../shared/utilities';

const SignUp = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [state, setState] = useState({
    emailAddress: '',
    password: '',
    confirmPassword: '',
    userId: '',
    firstName: '',
    lastName: '',
    referredBy: '',
    usertype: false,
    loading: false,
    required: false,
    invalidPassword: false,
  });
  const {
    loading,
    required,
    emailAddress,
    password,
    confirmPassword,
    userId,
    firstName,
    lastName,
    referredBy,
  } = state;

  const handleChange = (key, value) => {
    setState((pre) => ({ ...pre, [key]: value }));
  };
  const disabled =
    !emailAddress ||
    !password ||
    !confirmPassword ||
    !userId ||
    !firstName ||
    !lastName;

  const handleSignUp = async () => {
    // enqueueSnackbar('Registration Successfully!', {
    //   variant: 'success',
    //   anchorOrigin: {
    //     vertical: 'bottom',
    //     horizontal: 'right'
    //   }
    // });

    // history.push('/sign-in');
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
        firstName,
        lastName,
        // userId,
        // referredBy
      };
      console.log('payload', payload);
      const res = await signupApi(payload);
      if (res) {
        console.log(`response of sign in${JSON.stringify(res)}`);
        if (res.status === 200) {
          // debugger;
          handleChange('loading', false);
          enqueueSnackbar('Registration Successfully!', {
            variant: 'success',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
            },
          });

          history.push('/sign-in');
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
      <PageBanner pageName="Registrarse" />
      <section className="fintex-user-section pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="user-wrapper text-center">
                <div className="user-content">
                  <h3 className="mb-20">Crear tu cuenta</h3>
                  <div className="user-form">
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Nombres"
                        name="user"
                        required=""
                        value={firstName}
                        onChange={(value) =>
                          handleChange('firstName', value.target.value)
                        }
                      />
                      <i className="fas fa-user" />
                    </div>
                    {required && !firstName && (
                      <div className="ps-3 pt-1 text-left">
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Nombres required !
                        </small>
                      </div>
                    )}

                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Apellidos"
                        name="user"
                        required=""
                        onChange={(value) =>
                          handleChange('lastName', value.target.value)
                        }
                      />
                      <i className="fas fa-user" />
                    </div>
                    {required && !lastName && (
                      <div className="ps-3 pt-1 text-left">
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Apellidos required !
                        </small>
                      </div>
                    )}

                    <div className="form_group">
                      <input
                        type="number"
                        className="form_control"
                        placeholder="Cédula sin guiones"
                        name="user"
                        value={userId}
                        onChange={(value) =>
                          handleChange('userId', value.target.value)
                        }
                        required=""
                      />
                      <i className="fas fa-id-badge" />
                    </div>
                    {required && !userId && (
                      <div className="ps-3 pt-1 text-left">
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Cédula sin guiones required !
                        </small>
                      </div>
                    )}

                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Correo electrónico"
                        name={emailAddress}
                        required=""
                        onChange={(value) =>
                          handleChange('emailAddress', value.target.value)
                        }
                      />
                      <i className="fas fa-at" />
                    </div>
                    {emailAddress && isEmail(emailAddress) && (
                      <div className="ps-3 pt-1 text-left">
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Email must be a valid email address !
                        </small>
                      </div>
                    )}
                    {required && !emailAddress && (
                      <div className="ps-3 pt-1 text-left">
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Email Address is required !
                        </small>
                      </div>
                    )}
                    <div className="form_group">
                      <input
                        type="password"
                        className="form_control"
                        placeholder="Contraseña"
                        name="password"
                        onChange={(value) =>
                          handleChange('password', value.target.value)
                        }
                        required=""
                      />
                      <i className="fas fa-lock" />
                    </div>
                    {password && isPassword(password) && (
                      <div className="ps-3 pt-1 text-left">
                        <small className="ms-0  fm" style={{ color: 'red' }}>
                          Must be at least 8 characters long and include upper
                          and lowercase letters and at least one number !
                        </small>
                      </div>
                    )}
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
                      <input
                        type="password"
                        className="form_control"
                        placeholder="Confirmar Contraseña"
                        name="password"
                        onChange={(value) =>
                          handleChange('confirmPassword', value.target.value)
                        }
                        required=""
                      />
                      <i className="fas fa-lock" />
                    </div>

                    {confirmPassword && password !== confirmPassword && (
                      <div
                        className="ps-3 pt-1 text-left"
                        style={{ color: 'red' }}
                      >
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Passwords must match!
                        </small>
                      </div>
                    )}
                    {confirmPassword && isPassword(confirmPassword) && (
                      <div
                        className="ps-3 pt-1 text-left"
                        style={{ color: 'red' }}
                      >
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Must be at least 8 characters long and include upper
                          and lowercase letters and at least one number !
                        </small>
                      </div>
                    )}

                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Referido por"
                        name="referred by"
                        required=""
                        value={referredBy}
                        onChange={(value) =>
                          handleChange('referredBy', value.target.value)
                        }
                      />
                      <i className="fas fa-link" />
                    </div>
                    {required && !referredBy && (
                      <div className="ps-3 pt-1 text-left">
                        <small className="ms-0 fm" style={{ color: 'red' }}>
                          Referido por required !
                        </small>
                      </div>
                    )}
                    <div className="form_group">
                      <button
                        onClick={() => handleSignUp()}
                        className="main-btn btn-red"
                      >
                        Registrarme
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
export default SignUp;
