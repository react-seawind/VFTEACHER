const Config = {
  API_BASE_URL: 'https://vf.seawindsolution.ae/api',
  getToken: () => {
    const sessiondata = sessionStorage.getItem('teacherlogindata');
    const parsedSessionData = sessiondata ? JSON.parse(sessiondata) : null;
    const token = parsedSessionData ? parsedSessionData.token : null;
    return token;
  },
  getId: () => {
    const sessiondata = sessionStorage.getItem('teacherlogindata');
    const parsedSessionData = sessiondata ? JSON.parse(sessiondata) : null;
    const Id = parsedSessionData ? parsedSessionData.Id : null;
    return Id;
  },
};

export default Config;
