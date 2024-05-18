export type eventsData = {
  id: number;
  actor: {
    email: string;
  };
  action: {
    name: string;
  };
  occured_at: string;
}[];

export type eventDataObject = {
  id: number;
  actor: {
    email: string;
  };
  action: {
    name: string;
  };
  occured_at: string;
};

export type formattedEventsData = {
  id: number;
  actor_email: string;
  action_name: string;
  occured_at: string;
}[];
