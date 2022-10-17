import { atom } from "recoil";
// import { list } from 'lucide-react';

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/",
        title: "Home",
      },
      {
        icon: "Search",
        pathname: "/#",
        title: "Find a Facility",
      },
      {
        icon: "ListX",
        pathname: "/#",
        title: "Complaints",
      },
      {
        icon: "Files",
        pathname: "/#",
        title: "Licensing Record",
      },
      {
        icon: "MessageSquare",
        pathname: "/#",
        title: "Messages",
      },
      {
        icon: "Shield",
        pathname: "/#",
        title: "Administrator",
      },
      {
        icon: "Settings",
        pathname: "/#",
        title: "Settings",
      },
      {
        icon: "FileText",
        pathname: "/#",
        title: "Reports",
      },
    ],
  }
});

export { sideMenu };
