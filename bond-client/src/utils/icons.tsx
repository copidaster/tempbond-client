import * as React from 'react';

import PrevIcon from "src/assets/icons/buttons/prev.svg";
import NextIcon from "src/assets/icons/buttons/next.svg";
import ColoborationsGroup from "src/assets/icons/ProfilePopover/coloborationsGroup.svg";
import Case from "src/assets/icons/case.svg";
import Hamburger from "src/assets/icons/hamburger.svg";
import Organizations from "src/assets/icons/organisations.svg";
import Redirect from "src/assets/icons/redirect.svg";
import LogOut from "src/assets/icons/ProfilePopover/logOut.svg";
import ManagedGroups from "src/assets/icons/ProfilePopover/managedGroups.svg";
import Profile from "src/assets/icons/ProfilePopover/profile.svg";
import Settings from "src/assets/icons/ProfilePopover/settings.svg";

type IconProps = {
  alt: string;
  style?: React.CSSProperties;
};

export const Icons = {
  PrevIcon: ({ alt, style }: IconProps) => (
    <img src={PrevIcon} alt={alt} style={style} />
  ),
  NextIcon: ({ alt, style }: IconProps) => (
    <img src={NextIcon} alt={alt} style={style} />
  ),
  ColoborationsGroup: ({ alt, style }: IconProps) => (
    <img src={ColoborationsGroup} alt={alt} style={style} />
  ),
  Case: ({ alt, style }: IconProps) => (
    <img src={Case} alt={alt} style={style} />
  ),
  Hamburger: ({ alt, style }: IconProps) => (
    <img src={Hamburger} alt={alt} style={style} />
  ),
  Organizations: ({ alt, style }: IconProps) => (
    <img src={Organizations} alt={alt} style={style} />
  ),
  Redirect: ({ alt, style }: IconProps) => (
    <img src={Redirect} alt={alt} style={style} />
  ),
  LogOut: ({ alt, style }: IconProps) => (
    <img src={LogOut} alt={alt} style={style} />
  ),
  ManagedGroups: ({ alt, style }: IconProps) => (
    <img src={ManagedGroups} alt={alt} style={style} />
  ),
  Profile: ({ alt, style }: IconProps) => (
    <img src={Profile} alt={alt} style={style} />
  ),
  Settings: ({ alt, style }: IconProps) => (
    <img src={Settings} alt={alt} style={style} />
  ),
};
