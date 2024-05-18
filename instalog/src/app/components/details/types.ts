export type eventDetails = {
  actor: {
    name: string;
    email: string;
    generatedId: string;
  };
  action: {
    name: string;
    object: string;
    generatedId: string;
  };
  target: {
    email: string;
  };
  occured_at: string;
  redirect: string;
};
