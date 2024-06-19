import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UserOne from '../images/mainlogo.png'; // Import the default image
import { FaChevronDown, FaUser } from 'react-icons/fa6';
import { FcSettings } from 'react-icons/fc';
import { GrLogout } from 'react-icons/gr';
import { getAdmindataById } from './../API/AdminApi';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const trigger = useRef(null);
  const dropdown = useRef(null);
  const myNav = useNavigate();

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const myLogout = () => {
    sessionStorage.removeItem('teacherlogindata');
    myNav('/login');
  };

  // --------------------Data------------------

  const [adminData, setAdminData] = useState({});
  const { adminId } = useParams();
  // ================GetData==============
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdmindataById(adminId);
        setAdminData(response[0]);
      } catch (error) {
        console.log('Error fetching admin data');
      }
    };
    fetchData();
  }, [adminId]);
  const Role = adminData.Role;
  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {adminData.TeacherName}
          </span>
          <span className="block text-xs">
            {Role === 0 ? 'Class teacher' : 'Subject teacher'}
          </span>
        </span>

        <span className="h-14 w-14">
          <img src={adminData.Photo} alt="User" className="rounded border" />
        </span>

        <FaChevronDown
          className={`hidden fill-current sm:block ${
            dropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </Link>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              to="/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <FaUser />
              My Profile
            </Link>
          </li>
        </ul>
        <Link
          to="/login"
          onClick={myLogout}
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          <GrLogout />
          Log Out
        </Link>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
