import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "games",
    title: "Games",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/games"
  },
  {
    id: "player",
    title: "playerlist",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/player"
  },
  {
    id: "view",
    title: "view",
    type: "item",
    icon: <Icon.File size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/profile-view"
  }
]

export default navigationConfig
