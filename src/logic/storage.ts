import { useStorageLocal } from '~/composables/useStorageLocal';

export const mainServerStorage = useStorageLocal(
  'lemmink-main-server',
  'feddit.eu',
);
