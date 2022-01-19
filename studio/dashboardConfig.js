export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61e87ca3b2f75c2402c212f2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-fu879s4w',
                  apiId: '9b2f87e0-aea3-4e8c-a6ff-853d26672ff3'
                },
                {
                  buildHookId: '61e87ca38060ff1d189e75c4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yskp32bw',
                  apiId: '82e89000-f731-4b5d-85b2-e4654a5b6927'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jammerref2015/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yskp32bw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
