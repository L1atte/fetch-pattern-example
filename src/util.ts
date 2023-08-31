function sleep(delay: number): Promise<unknown> {
  return new Promise(r => setTimeout(r, delay));
}

function fetcher(url: string) {
  return sleep(1000).then(() => {
    url;
  });
}

export { sleep, fetcher };
