import { createStore } from 'vuex'
import { Todo } from '@/utils/types';
import apiHelper from "@/utils/apiHelper";

export type StateType = {
  todos: Todo[];
  isLoading: boolean;
};

export default createStore<StateType>({
  state: {
    todos: [],
    isLoading: true,
  },
  mutations: {
    SET_TODOS: (state: StateType, todos: Todo[]): void => {
      state.todos = todos;
      state.isLoading = false;
    }
  },
  actions: {
    getTodos: async (context): Promise<void> => {
      try {
        const { data } = await apiHelper.get('/todos');
        context.commit('SET_TODOS', data);
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {}
})
