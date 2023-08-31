// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sleep(delay: number): Promise<any> {
  return new Promise(r => setTimeout(r, delay));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fetcher(url: string): Promise<any> {
  console.log('url', url);
  return sleep(1000).then(() => {
    return {
      url,
    };
  });
}

export { sleep, fetcher };
