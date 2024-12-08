import {
  FaUser,
  FaUserCheck,
  FaUserTimes,
  FaEye,
  FaSortAmountDown,
  FaSortAmountUp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import React from 'react';

export function Users(props: React.SVGProps<SVGSVGElement>) {
    return <FaUser {...props} />;
}

export function ActiveUsers(props: React.SVGProps<SVGSVGElement>) {
    return <FaUserCheck {...props} />;
}

export function InactiveUsers(props: React.SVGProps<SVGSVGElement>) {
    return <FaUserTimes {...props} />;
}

export function Email(props: React.SVGProps<SVGSVGElement>) {
    return <MdEmail {...props} />;
}

export function View(props: React.SVGProps<SVGSVGElement>) {
    return <FaEye {...props} />;
}

export function Menu(props: React.SVGProps<SVGSVGElement>) {
    return <GiHamburgerMenu {...props} />;
}

export function SortUp(props: React.SVGProps<SVGSVGElement>) {
  return <FaSortAmountUp {...props} />;
}

export function SortDown(props: React.SVGProps<SVGSVGElement>) {
  return <FaSortAmountDown {...props} />;
}