// eslint-disable-next-line func-names
(function () {
  const responseHandler = {
    success(res, response, information) {
      const data = { statusCode: 200 };
      data.data = response;
      data.userInfo = information;
      data.message = 'Success';
      data.success = true;
      data.statusCode = 200;
      res.json(data);
    },
    error(res, message, statusCode) {
      const msg = message !== undefined && message.length > 0
        ? message
        : 'Something went wrong!';
      const data = { msg };
      data.statusCode = statusCode === undefined ? 500 : statusCode;
      data.success = false;
      res.status(data.statusCode).json(data);
    },
  };

  module.exports = responseHandler;
}());
