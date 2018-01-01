/** TodoMVC model definitions **/

declare interface TodoItemData {
  id?: TodoItemId;
  text?: string;
  completed?: boolean;
}

type ActorType = {
  url: string;
  name?: string;
  title?: string;
  gender: string;
}

declare type TodoItemId = number;

declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type TodoStoreState = TodoItemData[];
