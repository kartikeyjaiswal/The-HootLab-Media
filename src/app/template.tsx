// Route transitions are handled by the View Transition API (see
// <ViewTransitions/> + the ::view-transition rules in globals.css) on
// supporting browsers. This template stays a passthrough so the two don't
// double up.
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
