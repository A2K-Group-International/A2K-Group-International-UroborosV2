import DashboardIcon from "@/assets/icons/dashboard-icon.svg";
import AttendanceIcon from "@/assets/icons/attendance-icon.svg";
import GroupsIcon from "@/assets/icons/groups-icon.svg";
import ScheduleIcon from "@/assets/icons/schedule-icon.svg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import RequestIcon from "@/assets/icons/request-icon.svg";
import DashboardIconSelected from "@/assets/icons/dashboard-icon-selected.svg";
import AttendanceIconSelected from "@/assets/icons/attendance-icon-selected.svg";
import GroupsIconSelected from "@/assets/icons/groups-icon-selected.svg";
import ScheduleIconSelected from "@/assets/icons/schedule-icon-selected.svg";
import RequestIconSelected from "@/assets/icons/request-icon-selected.svg";
import CalendarIconSelected from "@/assets/icons/calendar-icon-selected.svg";
export const sidebarLinks = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
    selectedIcon: DashboardIconSelected,
  },
  {
    label: "Attendance",
    link: "/attendance",
    icon: AttendanceIcon,
    selectedIcon: AttendanceIconSelected,
  },
  {
    label: "Groups",
    link: "/groups",
    icon: GroupsIcon,
    selectedIcon: GroupsIconSelected,
  },
  {
    label: "Schedule",
    link: "/schedule",
    icon: ScheduleIcon,
    selectedIcon: ScheduleIconSelected,
  },
  {
    label: "Calendar",
    link: "/calendar",
    icon: CalendarIcon,
    selectedIcon: CalendarIconSelected,
  },
  {
    label: "Requests",
    link: "/requests",
    icon: RequestIcon,
    selectedIcon: RequestIconSelected,
  },
];