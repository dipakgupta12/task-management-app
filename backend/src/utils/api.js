export const apiResponse = {
  success: (res, data) => {
    return res.status(200).json({
      success: true,
      data,
    });
  },

  error: (res, data) => {
    return res.status(400).json({
      success: false,
      data,
    });
  },

  serverError: (res) => {
    return res.status(400).json({
      success: false,
      data: { message: "something went wrong" },
    });
  },
};
