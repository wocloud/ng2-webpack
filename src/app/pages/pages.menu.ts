export const PAGES_MENU = [
    {
        path: 'Navigation',
        children: [
            {
                path: 'dashboard',
                icon: 'fa-home',
                data: [
                    {
                        title: 'Dashboard',
                        icon: 'fa-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }, {
                        title: 'Dashboard2',
                        icon: 'fa-home',
                        selected: false,
                        expanded: false,
                        order: 0
                    }
                ]
            },
            {
                path: 'Apps',
                icon: 'fa-user',
                data: [
                    {
                        title: 'Contacts',
                        icon: 'fa-user',
                        selected: false,
                        expanded: false,
                        order: 0
                    }, {
                        title: 'Weather',
                        icon: 'fa-home',
                        selected: false,
                        expanded: false,
                        order: 1
                    }
                ]
            }
        ]
    },
    {
        path: 'Components',
        children: [
            {
                path: 'Layout',
                data: [
                    {
                        title: 'Layout',
                        icon: 'fa-th',
                        selected: false,
                        expanded: false,
                        order: 0
                    }, {
                        title: 'Full width',
                        icon: 'fa-home',
                        selected: false,
                        expanded: false,
                        order: 1
                    }
                ]
            }
        ]
    }
];
