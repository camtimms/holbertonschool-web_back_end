export default function load_balancer(chinaDownload, USdownload) {
  return Promise.race([chinaDownload, USdownload])
  // .then((value) => {
  //   console.log(value)
  // });
}