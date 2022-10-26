exports = {
  afterAppUpdateHandler: async function(args) {
  let url = 'http://localhost:8080/log'
    try {
      const res = await $request.post(url, {
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(args)
      });
      console.log('response from middleware', res.response);
    } catch (error) {
      console.error('error', error);
    }
    renderData();
  },
  onAppInstallHandler: async function (args) {
    console.log('onAppInstallHandler Invoked!', args)
  }
};
