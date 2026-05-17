import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'q4a6otkc',
    dataset: 'production'
  },
  // Add this section here:
  deployment: {
    appId: 'nqi44ygjey10vozwzrgwyr7p',
  }
})