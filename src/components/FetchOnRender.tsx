import useSwr from 'swr';

import { fetcher } from '../util';
import { Loading } from './Loading';

function OnRender(): JSX.Element {
  const { data } = useSwr('/onRender', () => fetcher('onRender'));
  console.log(data);

  if (!data) {
    return <Loading />;
  }

  return <div>{data.url}</div>;
}

export default OnRender;
