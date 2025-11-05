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
        title: "资源组件",
        href: '/assets',
        items: [
          {
            title: "AssetsBundle",
            href: '/assets_bundle'
          },
          {
            title: "Icon",
            href: '/icon'
          },
          {
            title: "Image",
            href: '/image'
          },
          {
            title: "RawImage",
            href: '/raw_image'
          }
        ]
      },
      {
        title: "样式组件",
        href: '/styling',
        items: [
          {
            title: "MediaQuery",
            href: '/media_query'
          },
          {
            title: "Padding",
            href: '/padding'
          },
          {
            title: "Theme",
            href: '/theme'
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
        title: "异步组件",
        href: '/async',
        items: [
          {
            title: "FutureBuilder",
            href: '/future_builder'
          },
          {
            title: "StreamBuilder",
            href: '/stream_builder'
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
      },
      {
        title: "绘制和效果组件",
        href: '/painting-effect',
        items: [
          {
            title: "BackdropFilter",
            href: '/backdrop-filter'
          },
          {
            title: "ClipOval",
            href: '/clip-oval'
          },
          {
            title: "ClipPath",
            href: '/clip-path'
          },
          {
            title: "ClipRect",
            href: '/clip-rect'
          },
          {
            title: "CustomPaint",
            href: '/custom-paint'
          },
          {
            title: "DecoratedBox",
            href: '/decorated-box'
          },
          {
            title: "FractionalTranslation",
            href: '/fractional-translation'
          },
          {
            title: "Opacity",
            href: '/opacity'
          },
          {
            title: "RotatedBox",
            href: '/rotated-box'
          },
          {
            title: "Transform",
            href: '/transform'
          }
        ]
      },
      {
        title: "布局组件",
        href: '/layout',
        items: [
          {
            title: "单子组件布局组件",
            href: '/single-child-layout',
            items: [
              {
                title: "Align",
                href: '/align',
              },
              {
                title: "AspectRatio",
                href: '/aspect-ratio'
              },
              {
                title: "Baseline",
                href: '/baseline'
              },
              {
                title: "Center",
                href: '/center'
              },
              {
                title: "ConstrainedBox",
                href: '/constrained-box'
              },
              {
                title: "Container",
                href: '/container'
              },
              {
                title: "CustomSingleChildLayout",
                href: '/custom-single-child-layout'
              },
              {
                title: "Expanded",
                href: '/expanded'
              },
              {
                title: "FittedBox",
                href: '/fitted-box'
              },
              {
                title: "FractionallySizedBox",
                href: '/fractionally-sized-box'
              },
              {
                title: "IntrinsicHeight",
                href: '/intrinsic-height'
              },
              {
                title: "IntrinsicWidth",
                href: '/intrinsic-width'
              },
              {
                title: "LimitedBox",
                href: '/limited-box'
              },
              {
                title: "Offstage",
                href: '/offstage'
              },
              {
                title: "OverflowBox",
                href: '/overflow-box'
              },
              {
                title: "Padding",
                href: '/padding'
              },
              {
                title: "SizedBox",
                href: '/sized-box'
              },
              {
                title: "SizedOverflowBox",
                href: '/sized-overflow-box'
              },
              {
                title: "Transform",
                href: '/transform'
              }
            ]
          },
          {
            title: "多子组件布局组件",
            href: '/multi-child-layout',
            items: [
              {
                title: "Column",
                href: '/column'
              },
              {
                title: "CustomMultiChildLayout",
                href: '/custom-multi-child-layout'
              },
              {
                title: "CarouselView",
                href: '/carousel-view'
              },
              {
                title: "Flow",
                href: '/flow'
              },
              {
                title: "GridView",
                href: '/grid-view'
              },
              {
                title: "IndexedStack",
                href: '/indexed-stack'
              },
              {
                title: "LayoutBuilder",
                href: '/layout-builder'
              },
              {
                title: "ListBody",
                href: '/list-body'
              },
              {
                title: "ListView",
                href: '/list-view'
              },
              {
                title: "Row",
                href: '/row'
              },
              {
                title: "Stack",
                href: '/stack'
              },
              {
                title: "Table",
                href: '/table'
              },
              {
                title: "Wrap",
                href: '/wrap'
              }
            ]
          },
          {
            title: "Sliver组件",
            href: '/sliver-layout',
            items: [
              {
                title: "CupertinoSliverNavigationBar",
                href: '/cupertino-sliver-navigation-bar'
              },
              {
                title: "CupertinoSliverRefreshControl",
                href: '/cupertino-sliver-refresh-control'
              },
              {
                title: "CustomScrollView",
                href: '/custom-scroll-view'
              },
              {
                title: "SliverAppBar",
                href: '/sliver-app-bar'
              },
              {
                title: "SliverChildBuilderDelegate",
                href: '/sliver-child-builder-delegate'
              },
              {
                title: "SliverChildListDelegate",
                href: '/sliver-child-list-delegate'
              },
              {
                title: "SliverFillRemaining",
                href: '/sliver-fill-remaining'
              },
              {
                title: "SliverFixedExtentList",
                href: '/sliver-fixed-extent-list'
              },
              {
                title: "SliverGrid",
                href: '/sliver-grid'
              },
              {
                title: "SliverList",
                href: '/sliver-list'
              },
              {
                title: "SliverPadding",
                href: '/sliver-padding'
              },
              {
                title: "SliverPersistentHeader",
                href: '/sliver-persistent-header'
              },
              {
                title: "SliverToBoxAdapter",
                href: '/sliver-to-box-adapter'
              }
            ]
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
