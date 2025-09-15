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
            title: "Icon",
            href: '/icon'
          },
          {
            title: "Placeholder",
            href: '/placeholder'
          },
          {
            title: "Image",
            href: '/image'
          },
          {
            title: "Column",
            href: '/column'
          },
          {
            title: "Row",
            href: '/row'
          }
        ]
      },
      {
        title: "文本组件",
        href: '/text',
        items: [
          {
            title: "DefaultTextStyle",
            href: '/default_text_style'
          },
          {
            title: "RichText",
            href: '/rich_text'
          },
          {
            title: "Text",
            href: '/text'
          }
        ]
      },
      {
        title: "输入组件",
        href: '/input',
        items: [
          {
            title: "Autocomplete",
            href: '/autocomplete'
          },
          {
            title: "Form",
            href: '/form'
          },
          {
            title: "FormField",
            href: '/form-field'
          },
          {
            title: "KeyboardListener",
            href: '/keyboard-listener'
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
