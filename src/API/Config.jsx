const Config = {
  API_BASE_URL: 'https://vft.seawindsolution.ae/api',
  getToken: () => {
    const token = sessionStorage.getItem('token');
    return token;
  },
  getId: () => {
    const sessiondata = sessionStorage.getItem('teacherlogindata');
    const parsedSessionData = sessiondata ? JSON.parse(sessiondata) : null;
    const Id = parsedSessionData ? parsedSessionData.Id : null;
    return Id;
  },
  getSchoolId: () => {
    const sessiondata = sessionStorage.getItem('teacherlogindata');
    const parsedSessionData = sessiondata ? JSON.parse(sessiondata) : null;
    const SchoolId = parsedSessionData ? parsedSessionData.SchoolId : null;
    return SchoolId;
  },
  getRole: () => {
    const sessiondata = sessionStorage.getItem('teacherlogindata');
    const parsedSessionData = sessiondata ? JSON.parse(sessiondata) : null;
    const Role = parsedSessionData ? parsedSessionData.Role : null;
    return Role;
  },
};

export default Config;
