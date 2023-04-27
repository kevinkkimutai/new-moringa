import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ userRole }) {
  return (
    <div>
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
        <div className="position-sticky">
          
          <div className="list-group list-group-flush mx-0 mt-4">
            {userRole === "admin" && (
              <a
                href="/admindashboard"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachoeter-alt fa-fw me-3"></i>
                <span>ADMIN</span>
              </a>
            )}

            {userRole === "student" && (
              <a
                href="/studentdashboard"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-tachoeter-alt fa-fw me-3"></i>
                <span>STUDENT</span>
              </a>
            )}

            {userRole === "admin" && (
              <Link
                to="/admindashboard"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user-tie fa-fw me-3"></i>
                <span>Dashboard</span>
              </Link>
            )}
            {userRole === "student" && (
              <Link
                to="/studentdashboard"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-envelope fa-fw me-3"></i>
                <span>Dashboard</span>
              </Link>
            )}

            {/* students */}
            {userRole === "admin" && (
              <Link
                to="/students"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user-tie fa-fw me-3"></i>
                <span>Students</span>
              </Link>
            )}
            {userRole === "student" && (
              <Link
                to="/students"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-envelope fa-fw me-3"></i>
                <span>Students</span>
              </Link>
            )}

             {/* pairing */}
             {userRole === "admin" && (
              <Link
                to="/pairing"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>Pairing</span>
              </Link>
            )}
            {userRole === "student" && (
              <Link
                to="/pairList"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>PairList</span>
              </Link>
            )}

            {/* feedback */}
            {userRole === "admin" && (
              <Link
                to="/adminfeedback"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>Feedback</span>
              </Link>
            )}
            {userRole === "student" && (
              <Link
                to="/studentfeedback"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>Feedback</span>
              </Link>
            )}

            {/* messsages */}
            {/* {userRole === "admin" && (
              <Link
                to="/adminmessages"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>Messages</span>
              </Link>
            )}
            {userRole === "student" && (
              <Link
                to="/studentmessages"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>Messages</span>
              </Link>
            )} */}

            {/* profiles */}
            {userRole === "admin" && (
              <Link
                to="/adminprofile"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>Profile</span>
              </Link>
            )}
            {userRole === "student" && (
              <Link
                to="/studentprofile"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-user fa-fw me-3"></i>
                <span>Profile</span>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
