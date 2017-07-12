import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { Cookies } from 'react-cookie';

export const getNetworkInterface = (headers = {}) => {
  const apiServer = process.env.API_ENDPOINT || 'http://localhost:4000/api';
  const networkInterface = createNetworkInterface({
    uri: apiServer,
    opts: {
      headers,
    },
  });

  networkInterface.use([{
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // eslint-disable-line no-param-reassign
      }
      const cookies = new Cookies(req.options.headers.cookie);
      const token = cookies.get('token');
      req.options.headers.authorization = token ? `Bearer ${token}` : null; // eslint-disable-line no-param-reassign
      next();
    },
  }]);

  networkInterface.useAfter([{
    applyAfterware({ response }, next) {
      if ([400, 404, 403, 401].includes(response.status)) {
        throw new Error(response.status);
      }
      next();
    },
  }]);

  return networkInterface;
};

const createApolloClient = (options) => {
  return new ApolloClient(Object.assign({}, {
    networkInterface: getNetworkInterface(),
    addTypename: true,
    dataIdFromObject: (result) => {
      if (result.__typename) { // eslint-disable-line no-underscore-dangle
        const isCustomerAndHasAccountUuid =
          result.__typename === 'Customer' && result.account && result.account.uuid; // eslint-disable-line no-underscore-dangle
        if (isCustomerAndHasAccountUuid) {
          return result.__typename + result.account.uuid;// eslint-disable-line no-underscore-dangle
        }

        if (result.__typename === 'Account' && result.uuid) { // eslint-disable-line no-underscore-dangle
          return result.__typename + result.uuid; // eslint-disable-line no-underscore-dangle
        }

        if (result.id) {
          return result.__typename + result.id; // eslint-disable-line no-underscore-dangle
        }
      }
      return null;
    },
  }, options));
};

export default createApolloClient;
