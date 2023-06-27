import { qwikify$ } from "@builder.io/qwik-react";

function Loading() {
  return <div>Loading</div>;
}

export const QLoading = qwikify$(Loading);
