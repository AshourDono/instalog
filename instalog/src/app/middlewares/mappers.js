export function formatResponseData(response) {
  if (Array.isArray(response)) {
    return response.map(({ generatedId, ...event }) => ({
      ...event,
      id: generatedId,
    }));
  } else {
    const { generatedId, ...rest } = response;
    return {
      id: generatedId,
      ...rest,
    };
  }
}

export function formatEventResponseData(response) {
  if (Array.isArray(response))
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
      target_name: event.target.email,
      location: event.target.location,
      occurred_at: event.occured_at,
      metadata: {
        redirect: event.redirect,
        description: event.description,
        x_request_id: event.x_request_id,
      },
    }));

  return {
    id: response.generatedId,
    object: response.object,
    actor_id: response.actor.generatedId,
    actor_name: response.actor.name,
    group: response.actor.group,
    action: {
      id: response.action.generatedId,
      object: response.action.object,
      name: response.action.name,
    },
    target_id: response.target.generatedId,
    target_name: response.target.email,
    location: response.target.location,
    occurred_at: response.occured_at,
    metadata: {
      redirect: response.redirect,
      description: response.description,
      x_request_id: response.x_request_id,
    },
  };
}
