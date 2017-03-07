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
    }
]