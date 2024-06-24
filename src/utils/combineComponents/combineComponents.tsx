import React, { ComponentType, PropsWithChildren } from 'react';

const combineComponents = (...components: ComponentType<PropsWithChildren<{}>>[]): ComponentType<PropsWithChildren<{}>> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      const Combined: ComponentType<PropsWithChildren<{}>> = ({ children }) => (
        <AccumulatedComponents>
          <CurrentComponent>{children}</CurrentComponent>
        </AccumulatedComponents>
      );
      return Combined;
    },
    ({ children }) => <>{children}</>,
  );
};

export default combineComponents;
