export default defineAppConfig({
	modules: ['nuxt-icon'],

	ui: {
		colors: {
			primary: 'neutral',
			neutral: 'zinc',
		},
        card: {
            slots: {
              root: 'bg-white dark:bg-neutral-800 rounded-md shadow-lg border border-muted',
              header: 'p-4 sm:px-6',
              body: 'p-4 sm:p-6',
              footer: 'p-4 sm:px-6'
            }
          },
          input: {
            slots: {
                base: 'bg-stone-100 !dark:bg-neutral-900'
              }
          },
          button: {
            slots: {
            	
            },
            compoundVariants: [
                {
                    variant: 'solid',
                    color: 'primary',
                    class: 'bg-neutral-900 dark:bg-neutral-100 font-bold cursor-pointer'
                }
            ]
          }
	},
});
