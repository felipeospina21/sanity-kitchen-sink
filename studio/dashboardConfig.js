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
                  buildHookId: '5f6f715f3bbe86fa41b6fe93',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mf249cim',
                  apiId: '7ea74ed8-00f9-4643-b3a8-5ab68d8536d4'
                },
                {
                  buildHookId: '5f6f715f278576cdffd084a1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gk7m6tfe',
                  apiId: '4ac5dbfd-aef0-463d-845d-a5982e65355c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felipeospina21/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gk7m6tfe.netlify.app', category: 'apps'}
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
