export function formatResponseData(response) {
  return response.map(({ generatedId, ...event }) => ({
    ...event,
    id: generatedId,
  }));
}

export function formatEventResponseData(response) {
  return response.map(event => ({
    id: event.generatedId,
    object: event.object,
    actor_id: event.actor.generatedId,
    actor_name: event.actor.name,
    group: event.actor.group,
    action: {
      id: event.action.generatedId,
      object: event.action.object,
      name: event.action.name,
    },
    target_id: event.target.generatedId,
    target_name: event.target.name,
    location: event.target.location,
    occurred_at: event.occured_at,
    metadata: {
      redirect: event.redirect,
      description: event.description,
      x_request_id: event.x_request_id,
    },
  }));
}
