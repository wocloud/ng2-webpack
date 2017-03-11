export const PAGES_MENU = [
    {
        path: 'dashboards',
        data: {
            title: 'Dashboard',
            icon: 'fa-home',
        }
    },
    {
        path: 'apps',
        data: {
            title: 'Apps',
            icon: 'fa-user',
        },
        children: [
            {
                path: 'contact',
                data: {
                    title: 'Contacts',
                    icon: 'fa-book'
                }
            }, {
                path: 'weather',
                data: {
                    title: 'Weather',
                    icon: 'fa-cog'
                }
            }
        ]
    },
    {
        path: 'editors',
        data: {
            title: 'Editors',
            icon: 'fa-edit'
        },
        children: [
            {
                path: 'ckeditor',
                data: {
                    title: 'CKEditor'
                }
            }
        ]
    },
    {
        path: 'ui',
        data: {
            title: 'UI Features',
            icon: 'fa-android-laptop'
        },
        children: [
            {
                path: 'typography',
                data: {
                    title: 'Typography'
                }
            },
            {
                path: 'buttons',
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'icons',
                data: {
                    title: 'Icons'
                }
            },
            {
                path: 'modals',
                data: {
                    title: 'Modals'
                }
            },
            {
                path: 'grid',
                data: {
                    title: 'Grid'
                }
            },
        ]
    },
    {
        path: 'forms',
        data: {
            title: 'Form Elements',
            icon: 'fa-compose'
        },
        children: [
            {
                path: 'inputs',
                data: {
                    title: 'Form Inputs'
                }
            },
            {
                path: 'layouts',
                data: {
                    title: 'Form Layouts'
                }
            }
        ]
    },
    {
        path: 'tables',
        data: {
            title: 'Tables',
            icon: 'fa-grid',
        }
    }
]