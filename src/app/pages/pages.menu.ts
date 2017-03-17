export const PAGES_MENU = [
    {
        path: 'dashboards',
        data: {
            title: 'Dashboard',
            icon: 'fa-home',
        }
    },
    {
        path: 'resources-management',
        data: {
            title: 'Resources',
            icon: 'fa-cubes',
        },
        children: [
            {
                path: 'vm',
                data: {
                    title: 'VM'
                }
            }
        ]
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
        },
        children: [
            {
                path: 'basic-table',
                data: {
                    title: 'Basic Table'
                }
            }, {
                path: 'smart-table',
                data: {
                    title: 'Smart Table'
                }
            }
        ]
    },
    {
        path: 'charts',
        data: {
            title: 'Charts',
            icon: 'fa-life-ring',
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