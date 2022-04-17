import { EventHandler } from "react";

export const withPreventDefault = <E extends React.SyntheticEvent<any, Event>>(
  callback: EventHandler<E>
) => {
  return (event: E) => {
    event.preventDefault();
    callback(event);
  };
};
