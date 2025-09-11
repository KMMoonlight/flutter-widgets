import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "基础组件",
    href: "/basic-widgets",
    items: [
      {
        title: "基本组件",
        href: "/basic",
        items: [
          {
            title: "Scaffold",
            href: '/scaffold'
          },
          {
            title: "AppBar",
            href: "/app-bar"
          },
          {
            title: "Container",
            href: '/container'
          },
          {
            title: "ElevatedButton",
            href: '/elevated-button'
          },
          {
            title: "Text",
            href: '/text'
          },
          {
            title: "Column",
            href: '/column'
          }
        ]
      }
    ],
  },
  {
    title: "组件一览",
    href: "/widget-list",
    items: []
  }
]
