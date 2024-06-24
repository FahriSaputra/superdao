'use client'

import { createContext, useContext } from 'react';
import { toast } from 'react-toastify';

export type ShowNotification = {
  message: string,
}

export const initialValue = {
  show: (spred: ShowNotification) => {},
}

const NotificationContext = createContext(initialValue);

const NotificationProvider = (props: React.PropsWithChildren) => {
  const show = ({ message } : ShowNotification) => {
    toast(message, {position: "bottom-center"});
  };

  const value = {
    show,
  }

  return (
    <NotificationContext.Provider value={value}>
      {props.children}
    </NotificationContext.Provider>
  );
}

const useNotification = () => {
	const context = useContext(NotificationContext)
	if (context === undefined) {
		throw new Error('useNotification must be used within a NotificationProvider')
	}
	return context
}

export {NotificationProvider, useNotification}