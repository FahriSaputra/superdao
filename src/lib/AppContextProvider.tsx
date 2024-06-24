import combineComponents from '@/utils/combineComponents/combineComponents';

import { NotificationProvider } from '@/components/common/Notification/context/NotificationContext';

const providers = [
  NotificationProvider,
]
export const AppContextProvider = combineComponents(...providers);