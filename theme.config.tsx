import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span><b>Ideas</b></span>,
  project: {
    link: 'https://github.com/firstelevenorg/ideas',
  },
  chat: {
    link: 'https://discord.gg/Dpvx8dzuPg',
  },
  docsRepositoryBase: 'https://github.com/firstelevenorg/ideas/tree/master',
  useNextSeoProps() {
     return {
      titleTemplate: '%s'
    }
  },
  footer: {
    text:(
      <div className="flex w-full flex-col items-center sm:items-start">
          <p>
            © {new Date().getFullYear()} All rights reserved <a href="https://www.firsteleven.co.za/"> by FirstEleven Inc</a>.
          </p>
      </div> 
    ),
  }
}


export default config
