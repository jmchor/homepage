import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/activism')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/activism"!</div>
}
