export type eventsData = {
  events: {
    id: number;
    actor: {
      email: string | null | undefined;
    };
    action: {
      name: string | null | undefined;
    };
    occured_at: string | null | undefined;
  }[];
  loadMoreTries: number | null | undefined;
};

export type event = {
  id: number;
  actor: {
    email: string | null | undefined;
  };
  action: {
    name: string | null | undefined;
  };
  occured_at: string | Date | null | undefined;
};
