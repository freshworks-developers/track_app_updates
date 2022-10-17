exports = {
  afterAppUpdateHandler: function(args) {
    console.log('args', args);
  },
  onAppInstallHandler: async function (args) {
    let url = 'http://localhost:8976/log'
    try {
      var res = await $request.post(url, { body: JSON.stringify({ message: "172"}) });
    } catch (error) {
      console.error('error', error);
    }
    console.log(res.response);
    renderData();
  }
};
