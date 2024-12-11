import {
  ChartBar,
  File,
  FileCheck,
  FileText,
  History,
  LayoutDashboard,
  LucideGitGraph,
  MessageSquare,
  Settings,
  SmileIcon,
  Stethoscope,
  Text,
  Upload,
  Users,
} from "lucide-react";

export const SidebarItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Upload",
    url: "/upload",
    icon: Upload,
  },
  {
    title: "Documents",
    url: "/documents",
    icon: FileText,
  },
  {
    title: "Chat",
    url: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: ChartBar,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export const DashboardCards = [
  {
    cardTitle: "Total Documents",
    cardDescription: "all the documents uploaded of citizens",
    icon: File,
  },
  {
    cardTitle: "Total Converted Documents",
    cardDescription: "all the converted documents of citizens",
    icon: FileCheck,
  },
  {
    cardTitle: "Recent Documents",
    cardDescription: "all the recently uploaded documents of citizens",
    icon: History,
  },
  {
    cardTitle: "Total Users",
    cardDescription: "all the registered officials of the ministry",
    icon: Users,
  },
];

export const AnalyticsButton = [
  {
    title: "Sentimental",
    icon: SmileIcon,
  },
  {
    title: "Predictive",
    icon: LucideGitGraph,
  },
  {
    title: "Chart",
    icon: ChartBar,
  },
  {
    title: "Descriptive",
    icon: Text,
  },
  {
    title: "Diagnostic",
    icon: Stethoscope,
  },
];
