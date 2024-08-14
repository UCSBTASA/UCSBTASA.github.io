const styleObj = {
    "table": () => ({
      className: `mx-0`,
    }),
    "node": () => ({
      className: `px-0 min-w-12`,
    }),
    "nodecell": () => ({
      className: 'px-0',
    }),
    'line-right': ({ context }: any) => ({
      className: `text-center align-top py-0 px-0 rounded-none
                  ${context.lineTop ? 'border-t border-black' : ''}
                  dark:border-blue-900/40
                  last:border-r-0`,
  }),
    'line-left': ({ context }: any) => ({
        className: `text-center align-top py-0 px-0 rounded-none
                    ${context.lineTop ? 'border-t border-black' : ''}
                    border-r border-black dark:border-blue-900/40`,
    }),
    'line-down': ({ context }: any) => ({
        className: `border-r border-black dark:border-blue-900/40 `
    }),
    linecell: () => ({
        className: 'text-center align-top py-0 px-0',
    }),
    nodetoggler: () => ({
        className: `absolute select-none`,
    }),
    nodetogglericon: () => ({
        className: 'relative inline-block w-4 h-4',
  }),
} 
export default styleObj;