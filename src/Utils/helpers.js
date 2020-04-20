export default {
  addTheK: (num) => {
    let str = num.toString();
    if (str.length >= 5) {
      return Math.abs(num) > 999
      ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k'
      : Math.sign(num) * Math.abs(num);
    }
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  },
  getInstagram: () => {
    return fetch('graph.facebook.com/769456320249941/insights');
  }
}