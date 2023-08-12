import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'Panel de control',
    to: `${adminRoot}/dashboards`,
    // roles: [UserRole.Admin, UserRole.Editor],
    subs: [
      {
        icon: 'simple-icon-briefcase',
        label: 'Referidos',
        to: `${adminRoot}/dashboards/default`,
        // roles: [UserRole.Admin],
      },
      {
        icon: 'simple-icon-doc',
        label: 'Editar Perfil',
        to: `${adminRoot}/dashboards/default`,
        // roles: [UserRole.Admin],
      },
      // {
      //   icon: 'simple-icon-basket-loaded',
      //   label: 'menu.ecommerce',
      //   to: `${adminRoot}/dashboards/ecommerce`,
      //   // roles: [UserRole.Editor],
      // },
      // {
      //   icon: 'simple-icon-pie-chart',
      //   label: 'menu.content',
      //   to: `${adminRoot}/dashboards/content`,
      //   // roles: [UserRole.Editor],
      // },
    ],
  },
  {
    id: 'pages',
    icon: 'iconsminds-digital-drawing',
    label: 'Servicios',
    to: `${adminRoot}/ui/components/modal`,
  },
  // {
  //   id: 'applications',
  //   icon: 'iconsminds-air-balloon-1',
  //   label: 'menu.applications',
  //   to: `${adminRoot}/applications`,
  //   subs: [
  //     {
  //       icon: 'simple-icon-check',
  //       label: 'menu.todo',
  //       to: `${adminRoot}/applications/todo`,
  //     },
  //     {
  //       icon: 'simple-icon-calculator',
  //       label: 'menu.survey',
  //       to: `${adminRoot}/applications/survey`,
  //     },
  //     {
  //       icon: 'simple-icon-bubbles',
  //       label: 'menu.chat',
  //       to: `${adminRoot}/applications/chat`,
  //     },
  //   ],
  // },
  // {
  //   id: 'ui',
  //   icon: 'iconsminds-pantone',
  //   label: 'menu.ui',
  //   to: `${adminRoot}/ui`,
  //   subs: [
  //     {
  //       id: 'ui-forms',
  //       label: 'menu.forms',
  //       to: `${adminRoot}/ui/forms`,
  //       subs: [
  //         {
  //           icon: 'simple-icon-notebook',
  //           label: 'menu.layouts',
  //           to: `${adminRoot}/ui/forms/layouts`,
  //         },
  //         {
  //           icon: 'simple-icon-puzzle',
  //           label: 'menu.components',
  //           to: `${adminRoot}/ui/forms/components`,
  //         },
  //         {
  //           icon: 'simple-icon-check',
  //           label: 'menu.validations',
  //           to: `${adminRoot}/ui/forms/validations`,
  //         },
  //         {
  //           icon: 'simple-icon-magic-wand',
  //           label: 'menu.wizard',
  //           to: `${adminRoot}/ui/forms/wizard`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'ui-components',
  //       label: 'menu.components',
  //       to: `${adminRoot}/ui/components`,
  //       subs: [
  //         {
  //           icon: 'simple-icon-bell',
  //           label: 'menu.alerts',
  //           to: `${adminRoot}/ui/components/alerts`,
  //         },
  //         {
  //           icon: 'simple-icon-badge',
  //           label: 'menu.badges',
  //           to: `${adminRoot}/ui/components/badges`,
  //         },
  //         {
  //           icon: 'simple-icon-control-play',
  //           label: 'menu.buttons',
  //           to: `${adminRoot}/ui/components/buttons`,
  //         },
  //         {
  //           icon: 'simple-icon-layers',
  //           label: 'menu.cards',
  //           to: `${adminRoot}/ui/components/cards`,
  //         },
  //         {
  //           icon: 'simple-icon-picture',
  //           label: 'menu.carousel',
  //           to: `${adminRoot}/ui/components/carousel`,
  //         },
  //         {
  //           icon: 'simple-icon-chart',
  //           label: 'menu.charts',
  //           to: `${adminRoot}/ui/components/charts`,
  //         },
  //         {
  //           icon: 'simple-icon-arrow-up',
  //           label: 'menu.collapse',
  //           to: `${adminRoot}/ui/components/collapse`,
  //         },
  //         {
  //           icon: 'simple-icon-arrow-down',
  //           label: 'menu.dropdowns',
  //           to: `${adminRoot}/ui/components/dropdowns`,
  //         },
  //         {
  //           icon: 'simple-icon-book-open',
  //           label: 'menu.editors',
  //           to: `${adminRoot}/ui/components/editors`,
  //         },

  //         {
  //           icon: 'simple-icon-star',
  //           label: 'menu.icons',
  //           to: `${adminRoot}/ui/components/icons`,
  //         },
  //         {
  //           icon: 'simple-icon-note',
  //           label: 'menu.input-groups',
  //           to: `${adminRoot}/ui/components/input-groups`,
  //         },
  //         {
  //           icon: 'simple-icon-screen-desktop',
  //           label: 'menu.jumbotron',
  //           to: `${adminRoot}/ui/components/jumbotron`,
  //         },
  //         {
  //           icon: 'simple-icon-map',
  //           label: 'menu.maps',
  //           to: `${adminRoot}/ui/components/maps`,
  //         },
  //         {
  //           icon: 'simple-icon-docs',
  //           label: 'menu.modal',
  //           to: `${adminRoot}/ui/components/modal`,
  //         },
  //         {
  //           icon: 'simple-icon-cursor',
  //           label: 'menu.navigation',
  //           to: `${adminRoot}/ui/components/navigation`,
  //         },
  //         {
  //           icon: 'simple-icon-pin',
  //           label: 'menu.popover-tooltip',
  //           to: `${adminRoot}/ui/components/popover-tooltip`,
  //         },
  //         {
  //           icon: 'simple-icon-shuffle',
  //           label: 'menu.sortable',
  //           to: `${adminRoot}/ui/components/sortable`,
  //         },
  //         {
  //           icon: 'simple-icon-grid',
  //           label: 'menu.tables',
  //           to: `${adminRoot}/ui/components/tables`,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 'menu',
  //   icon: 'iconsminds-three-arrow-fork',
  //   label: 'menu.menu',
  //   to: `${adminRoot}/menu`,
  //   subs: [
  //     {
  //       icon: 'simple-icon-logout',
  //       label: 'menu.types',
  //       to: `${adminRoot}/menu/types`,
  //     },
  //     {
  //       icon: 'simple-icon-layers',
  //       label: 'menu.levels',
  //       to: `${adminRoot}/menu/levels`,
  //       subs: [
  //         {
  //           icon: 'simple-icon-arrow-right',
  //           label: 'menu.third-level-1',
  //           to: `${adminRoot}/menu/levels/third-level-1`,
  //         },
  //         {
  //           icon: 'simple-icon-arrow-right',
  //           label: 'menu.third-level-2',
  //           to: `${adminRoot}/menu/levels/third-level-2`,
  //         },
  //         {
  //           icon: 'simple-icon-arrow-right',
  //           label: 'menu.third-level-3',
  //           to: `${adminRoot}/menu/levels/third-level-3`,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: 'blankpage',
  //   icon: 'iconsminds-bucket',
  //   label: 'menu.blank-page',
  //   to: `${adminRoot}/blank-page`,
  // },
  // {
  //   id: 'docs',
  //   icon: 'iconsminds-library',
  //   label: 'menu.docs',
  //   to: 'https://gogo-react-docs.coloredstrategies.com/',
  //   newWindow: true,
  // },
];
export default data;
