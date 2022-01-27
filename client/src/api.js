let baseurl =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://localhost:3001/api"
    : "/api";

export const getIdeasById = `${baseurl}/ideas`;
export const getCreatorById = `${baseurl}/ideas/creator`;
export const getMarketers = `${baseurl}/marketers`;

