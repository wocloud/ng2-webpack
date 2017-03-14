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
                    title: 'Contacts'
                }
            }, {
                path: 'weather',
                data: {
                    title: 'Weather'
                }
            }
        ]
    },
    {
        path: 'tables',
        data: {
            title: 'Tables',
            icon: 'fa-table',
        }
    },
    {
        path: 'charts',
        data: {
            title: 'Charts',
            icon: 'fa-table',
        }
    },
    {
        path: 'ui',
        data: {
            title: 'UI Features',
            icon: 'fa-book'
        },
        children: [
            {
                path: 'buttons',
                data: {
                    title: 'Buttons'
                }
            },
            {
                path: 'modals',
                data: {
                    title: 'Modals'
                }
            }
        ]
    }
]