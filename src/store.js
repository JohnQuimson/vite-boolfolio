import { reactive } from 'vue';

export const store = reactive({
  api: {
    baseUrl: 'http://127.0.0.1:8000',
    apiUrls: {
      projects: '/api/projects',
    },
  },
  projects: {},
});

export default store;
