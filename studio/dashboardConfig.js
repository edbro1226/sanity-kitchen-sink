export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62470d04ac4eaa3f308b393c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mekrswcs',
                  apiId: '2b148670-757e-4c9c-9994-b537b44342a3'
                },
                {
                  buildHookId: '62470d0407e563347e08d298',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-prpkz7no',
                  apiId: 'a7f93aec-42f7-4056-8438-7715b597c4b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edbro1226/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-prpkz7no.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
