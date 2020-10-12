/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  // {
  //   url: "/apps/email",
  //   name: "Email",
  //   slug: "email",
  //   icon: "MailIcon",
  //   i18n: "Email",
  // },
  {
    url: '/dashboard/analytics',
    name: 'Inicio',
    tagColor: 'warning',
    icon: 'HomeIcon',
  },
  {
    header: 'CURSOS',
    icon: 'PackageIcon',
    items: [
        {
            url: null,
            name: "Administrar Cursos",
            slug: "AdministarCursos",
            icon: "SettingsIcon"
        },
        {
            url: null,
            name: "Crear Curso",
            slug: "CrearCurso",
            icon: "EditIcon"
        },
        {
            url: null,
            name: "Ver Cursos",
            slug: "VerCursos",
            icon: "PlayCircleIcon"
        },
        {
            url: null,
            name: "Categorias",
            slug: "CategoriasCurso",
            icon: "GridIcon"
        },
        {
            url: null,
            name: "Restaurar",
            slug: "RestaurarCurso",
            icon: "SunriseIcon"
        },
        {
            uurl: null,
            name: "Subir Cursos",
            slug: "SubirCursos",
            icon: "UploadIcon"
        }
    ]
  },
  {
    header: 'HERRAMIENTAS',
    icon: 'PackageIcon',
    items: [
      {
        url: "/apps/test-page",
        name: "testPage",
        slug: "testPage",
        icon: "PlayCircleIcon",
        i18n: 'Test'
      },
      {
        url: '/apps/chat',
        name: 'Chat',
        slug: 'chat',
        icon: 'MessageSquareIcon',
        i18n: 'Chat'
      },
      {
        url: '/apps/todo',
        name: 'Tareas',
        slug: 'todo',
        icon: 'CheckSquareIcon',
        i18n: 'Tareas'
      },
      {
        url: '/apps/calendar/vue-simple-calendar',
        name: 'Calendario',
        slug: 'calendar-simple-calendar',
        icon: 'CalendarIcon',
        tagColor: 'success',
        i18n: 'Calendario'
      }
    ]
  },
  {
    header: 'USUARIOS',
    i18n: 'USUARIOS',
    items: [
        {
            url: null,
            name: 'Usuario',
            icon: 'UserIcon',
            submenu: [
              {
                url: '/apps/user/user-list',
                name: 'Crear Usuario',
                slug: 'app-user-list'
              },
              {
                url: '/apps/user/user-view/268',
                name: 'Ver Usuario',
                slug: 'app-user-view'
              },
              {
                url: '/apps/user/user-edit/268',
                name: 'Editar Usuario',
                slug: 'app-user-edit'
              }
            ]
          },
      {
        url: '/ui-elements/colors',
        name: 'Subir Usuarios',
        slug: 'colors',
        icon: 'UserPlusIcon',
      },
      {
        url: '/ui-elements/colors',
        name: 'Restaurar Usuarios',
        slug: 'colors',
        icon: 'ArchiveIcon',
      },
    ]
  },
  {
    header: 'Administracion del sitio',
    icon: 'Edit3Icon',
    items: [

      {
        url: '/forms/form-layouts',
        name: 'Configuraciones',
        icon: 'PackageIcon',
        slug: 'Configuraciones'
      },
      {
        url: '/forms/form-wizard',
        name: 'Personalizar',
        icon: 'PackageIcon',
        slug: 'Personalizar'
      },
    ]
  }
]

