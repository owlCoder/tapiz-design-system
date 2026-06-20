import { X, Grid, UserMinus, UserCog, History, ExternalLink } from "./ActionIcons";
import { LockIcon, LogOut, User, UserCheck, EyeOff } from "./AuthIcons";
import { BarChart, Book, Calendar, CheckSquare, Clipboard, Faculty, Home, Layers, OfficeHours, QrCode, Receipt, Report, Scan, Table, University, Users } from "./NavigationIcons";
import { ActivityMenu, Compare, Info, Intersect, Megaphone, Repeat, FileText } from "./FeedbackIcons";
import { Gear } from "./SettingsIcons";
import { CalendarWeek, FormIcon } from "./FormsIcons";
import { Zap } from "./StatusIcons";

export const SectionIcons = {
  studenti:   <Users size={13} />,
  nastava:    <Book size={13} />,
  evidencija: <CheckSquare size={13} />,
  analitika:  <BarChart size={13} />,
  forme:      <FormIcon size={13} />,
  nastavaS:   <CalendarWeek size={13} />,
  evidencijaS:<CheckSquare size={13} />,
};

export const Icons = {
  clipboard:   <Faculty size={18} />,
  postClipboard: <Clipboard size={18} />,
  university:  <University size={18} />,
  users:       <Users size={18} />,
  book:        <Book size={18} />,
  layers:      <Layers size={18} />,
  officeHours: <OfficeHours size={18} />,
  calendar:    <Calendar size={18} />,
  calendarAlt: <CalendarWeek size={18} />,
  checkSquare: <CheckSquare size={18} />,
  barChart:    <BarChart size={18} />,
  qrCode:      <QrCode size={18} />,
  home:        <Home size={18} />,
  scan:        <Scan size={18} />,
  lock:        <LockIcon size={16} />,
  logOut:      <LogOut size={16} />,
  logOutAlt:   <LogOut size={16} />,
  user:        <User size={16} />,
  cancel:      <X size={16} />,
  report:      <Report size={18} />,
  table:       <Table size={18} />,
  gear:        <Gear size={16} />,
  formIcon:    <FormIcon size={18} />,
  grades:      <BarChart size={18} />,
  activity:    <ActivityMenu size={18} />,
  zap:         <Zap size={18} />,
  compare:     <Compare size={18} />,
  intersect:   <Intersect size={18} />,
  repeat:      <Repeat size={18} />,
  info:        <Info size={16} />,
  todos:       <CheckSquare size={18} />,
  eyeOff:      <EyeOff size={18} />,
  userMinus:   <UserMinus size={18} />,
  fileText:    <FileText size={18} />,
  megaphone:   <Megaphone size={18} />,
  grid:        <Grid size={18} />,
  userCheck:   <UserCheck size={18} />,
  fm:          <UserCog size={18} />,
  history:     <History size={18} />,
  receipt:     <Receipt size={18} />,
  externalLink: <ExternalLink size={18} />
};
