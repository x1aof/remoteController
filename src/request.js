const carIp = "127.0.0.1";
const carPort = 8888;

const preIp = "127.0.0.1";
const prePort = 8080;

export function send(msg) {
  fetch(`http://${preIp}:${prePort}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ip: carIp,
      port: carPort,
      msg: msg,
    }),
  }).then((resp) => {
    if (resp.status === 200) {
      console.log("ok");
    } else {
      console.log("not ok");
    }
  });
}
