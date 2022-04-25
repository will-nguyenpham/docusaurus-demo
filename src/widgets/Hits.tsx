import React from 'react';
import { Hit as AlgoliaHit } from '@algolia/client-search';
import { useHits, UseHitsProps } from 'react-instantsearch-hooks';

export type HitsProps<THit> = React.ComponentProps<'div'> &
  UseHitsProps & {
    hitComponent: (props: { hit: THit }) => JSX.Element;
  };

export function Hits<THit extends AlgoliaHit<Record<string, unknown>>>({
  hitComponent: Hit,
  ...props
}: HitsProps<THit>) {
  var { hits } = useHits(props);
  // hits = hits.slice(0, 5);

  return (
    <div style={{ height: "300px", overflowY: "scroll" }}>
      {hits.map((hit) => (
        <div key={hit.objectID} className="ais-Hits-item">
          <Hit hit={hit as unknown as THit} />
        </div>
      ))}
    </div>
  );
}
